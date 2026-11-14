#!/usr/bin/env node
/**
 * Static export shares one root <html lang="en">. For /es/* and /de/* pages,
 * rewrite the baked HTML so crawlers see the right lang without waiting for client JS.
 */
import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function localeFor(file) {
  const rel = file.slice(OUT.length).replace(/\\/g, "/");
  if (rel === "/es.html" || rel.startsWith("/es/")) return "es";
  if (rel === "/de.html" || rel.startsWith("/de/")) return "de";
  return null;
}

const files = walk(OUT);
let esN = 0, esChanged = 0, deN = 0, deChanged = 0;
for (const file of files) {
  const lang = localeFor(file);
  if (!lang) continue;
  if (lang === "es") esN++;
  if (lang === "de") deN++;
  const before = readFileSync(file, "utf8");
  const after = before.replace(/<html\s+lang="en"/, `<html lang="${lang}"`);
  if (after !== before) {
    writeFileSync(file, after);
    if (lang === "es") esChanged++;
    if (lang === "de") deChanged++;
  }
}
console.log(`[fix-es-lang] updated lang=es on ${esChanged}/${esN} ES HTML files`);
console.log(`[fix-es-lang] updated lang=de on ${deChanged}/${deN} DE HTML files`);
if (esN === 0) {
  console.error("[fix-es-lang] no ES HTML under out/ — run after next build");
  process.exit(1);
}
