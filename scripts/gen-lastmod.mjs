// Writes lib/lastmod.json: last git commit date per page (page.tsx + imported lib/articles module).
// Skips on shallow clones (e.g. CI) so the committed JSON stays authoritative.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
const sh = (c) => execSync(c, { encoding: "utf8" }).trim();
let shallow = "true";
try { shallow = sh("git rev-parse --is-shallow-repository"); } catch {}
if (shallow !== "false") { console.log("gen-lastmod: shallow/no git, keeping lib/lastmod.json"); process.exit(0); }
const out = {};
function walk(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n === "page.tsx") {
      const route = "/" + dir.replace(/^app\/?/, "");
      const files = [p];
      for (const m of readFileSync(p, "utf8").matchAll(/@\/lib\/articles\/([\w-]+)/g)) {
        const f = `lib/articles/${m[1]}.ts`; if (existsSync(f)) files.push(f);
      }
      const d = files.map((f) => sh(`git log -1 --format=%cI -- ${f}`)).filter(Boolean).sort().pop();
      if (d) out[route === "/" ? "/" : route.replace(/\/$/, "")] = d;
    }
  }
}
walk("app");
writeFileSync("lib/lastmod.json", JSON.stringify(out, null, 2) + "\n");
console.log(`gen-lastmod: ${Object.keys(out).length} routes`);
