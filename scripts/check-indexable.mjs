#!/usr/bin/env node
/**
 * Indexability check.
 *
 * Preview mode (NEXT_PUBLIC_SITE_URL hostname includes vercel.app or
 * pages.dev, or SITE_PREVIEW=1): noindex + robots Disallow:/ are EXPECTED and OK.
 *
 * Production / custom domain: fails on noindex or Disallow of content paths.
 *
 * Usage: node scripts/check-indexable.mjs
 * Prefer running after `next build`.
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

function isPreviewHostname(hostnameOrUrl) {
  const s = String(hostnameOrUrl);
  return s.includes("vercel.app") || s.includes("pages.dev");
}

function resolvePreviewMode() {
  if (process.env.SITE_PREVIEW === "1") return true;
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://oconnells-madrid.pages.dev";
  try {
    return isPreviewHostname(new URL(url).hostname);
  } catch {
    return isPreviewHostname(url);
  }
}

const PREVIEW = resolvePreviewMode();

const MUST_NOT_DISALLOW = [
  "/",
  "/sports",
  "/watch-football-madrid",
  "/premier-league",
  "/champions-league",
  "/erasmus",
  "/thursday-1-euro-shots",
  "/about",
  "/location",
  "/whats-on",
  "/es",
  "/es/sports",
  "/es/watch-football-madrid",
  "/es/premier-league",
  "/es/champions-league",
  "/es/erasmus",
  "/es/thursday-1-euro-shots",
  "/es/about",
  "/es/location",
];

const errors = [];

function fail(msg) {
  errors.push(msg);
}

function checkRobotsTxt(text) {
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^\s*Disallow\s*:\s*(.*)$/i);
    if (!m) continue;
    const value = m[1].trim();
    if (!value) continue;
    if (PREVIEW) {
      // Disallow all is expected on vercel.app / pages.dev preview
      continue;
    }
    if (value === "/") {
      fail("robots.txt Disallow: / blocks the whole site");
      continue;
    }
    for (const path of MUST_NOT_DISALLOW) {
      if (
        value === path ||
        value === `${path}/` ||
        (path !== "/" && value.startsWith(path))
      ) {
        fail(`robots.txt Disallow: ${value} blocks content path ${path}`);
      }
    }
  }
}

function walkHtmlFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) walkHtmlFiles(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function checkHtmlNoindex(filePath) {
  if (PREVIEW) return; // noindex expected on preview
  const html = readFileSync(filePath, "utf8");
  const patterns = [
    /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/gi,
    /<meta[^>]+content=["']([^"']+)["'][^>]*name=["']robots["'][^>]*>/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html))) {
      if (/noindex/i.test(m[1])) {
        fail(`${filePath}: meta robots contains noindex (${m[1]})`);
      }
    }
  }
}

function walkFiles(dir, pred, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      if (name === "node_modules") continue;
      walkFiles(p, pred, out);
    } else if (pred(name)) out.push(p);
  }
  return out;
}

// 1) Source robots.ts
const robotsTs = join(ROOT, "app/robots.ts");
if (existsSync(robotsTs)) {
  const src = readFileSync(robotsTs, "utf8");
  if (!PREVIEW) {
    // Only fail hard-coded content-path Disallows when not in preview.
    // Preview mode intentionally Disallow: "/" when isPreviewHost().
    const hasPreviewGate =
      /isPreviewHost/.test(src) || /vercel\.app/.test(src);
    if (!hasPreviewGate) {
      const re = /disallow\s*:\s*(["'`])([^"'`]+)\1/gi;
      let m;
      while ((m = re.exec(src))) {
        const value = m[2];
        for (const path of MUST_NOT_DISALLOW) {
          if (value === path || (path !== "/" && value.startsWith(path))) {
            fail(`app/robots.ts Disallow literal "${value}" blocks ${path}`);
          }
        }
      }
    }
  }
} else {
  fail("Missing app/robots.ts");
}

// 2) Generated / public robots.txt
let foundRobotsBody = false;
const candidates = [
  join(ROOT, "public/robots.txt"),
  join(ROOT, ".next/server/app/robots.txt.body"),
  join(ROOT, ".next/server/app/robots.txt"),
];
for (const c of candidates) {
  if (existsSync(c) && statSync(c).isFile()) {
    foundRobotsBody = true;
    checkRobotsTxt(readFileSync(c, "utf8"));
  }
}

for (const f of walkFiles(join(ROOT, ".next"), (n) =>
  n.startsWith("robots.txt"),
)) {
  try {
    const st = statSync(f);
    if (!st.isFile()) continue;
  } catch {
    continue;
  }
  foundRobotsBody = true;
  checkRobotsTxt(readFileSync(f, "utf8"));
}

// 3) Built HTML noindex
for (const root of [join(ROOT, "out"), join(ROOT, ".next/server/app")]) {
  for (const file of walkHtmlFiles(root)) {
    if (file.includes("/_not-found")) continue;
    checkHtmlNoindex(file);
  }
}

// 4) Serialized metadata noindex in page.js
if (!PREVIEW) {
  const appServer = join(ROOT, ".next/server/app");
  if (existsSync(appServer)) {
    const pageFiles = walkFiles(
      appServer,
      (n) => n === "page.js" || n.endsWith(".html") || n.endsWith(".meta"),
    );
    for (const f of pageFiles) {
      if (
        f.includes("/_not-found") ||
        f.includes("/_global-error") ||
        f.includes("/_error")
      ) {
        continue;
      }
      const text = readFileSync(f, "utf8");
      if (
        /noindex/i.test(text) &&
        /robots/i.test(text) &&
        /robots[\s\S]{0,80}noindex|noindex[\s\S]{0,80}robots/i.test(text)
      ) {
        fail(`${f}: appears to set robots noindex`);
      }
    }
  }
}

if (!existsSync(join(ROOT, "app/sitemap.ts"))) {
  fail("Missing app/sitemap.ts");
}

if (errors.length) {
  console.error("check-indexable FAILED:\n");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}

console.log("check-indexable OK");
console.log(
  PREVIEW
    ? " - PREVIEW mode (vercel.app / pages.dev): noindex + Disallow:/ expected/OK"
    : " - PRODUCTION mode: indexing required",
);
console.log(" - robots source present");
console.log(
  PREVIEW
    ? " - noindex on preview is OK (skipped fail)"
    : " - no meta noindex detected on content builds",
);
console.log(" - sitemap module present");
if (!foundRobotsBody) {
  console.log(
    " - note: no generated robots.txt body found yet (run next build first for deeper check)",
  );
}
