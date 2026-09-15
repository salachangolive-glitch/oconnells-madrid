#!/usr/bin/env node
/**
 * Static export shares one root <html lang="en">. For /es/* pages, rewrite
 * the baked HTML so crawlers see lang="es" without waiting for client JS.
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

function isEsHtml(file) {
  const rel = file.slice(OUT.length).replace(/\\/g, "/");
  return rel === "/es.html" || rel.startsWith("/es/");
}

const files = walk(OUT).filter(isEsHtml);
let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  const after = before.replace(/<html\s+lang="en"/, '<html lang="es"');
  if (after !== before) {
    writeFileSync(file, after);
    changed++;
  }
}
console.log(`[fix-es-lang] updated lang=es on ${changed}/${files.length} ES HTML files`);
if (files.length === 0) {
  console.error("[fix-es-lang] no ES HTML under out/ — run after next build");
  process.exit(1);
}
