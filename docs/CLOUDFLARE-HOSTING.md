# O’Connell’s — hosting plan (0 €)

## Policy (15 Sep 2026)
- **STOP** new **Vercel production** deploys.
- Keep `https://oconnells-madrid.vercel.app` as **temporary preview only** (noindex stays).
- Source of truth: GitHub `salachangolive-glitch/oconnells-madrid`.
- Target: free Cloudflare → future custom domain (buy only with user auth).

## Compatibility check (current Next.js 16 App Router)

### What the app uses
- Static pages (Home, Sports, Fixtures, Thursday, Contact UI, ES mirrors) — fine everywhere.
- `next/image` for facade WebP — OK; for free CF, prefer local static assets (already in `/public`) and/or `images.unoptimized` if CF Images not used.
- Route Handler `POST /api/contact` with `runtime = "nodejs"` + `process.env.CONTACT_WEB3FORMS_ACCESS_KEY` — **needs a Worker-capable host**, not a pure static Pages site.
- No DB, no Sharp pipeline, no middleware Node APIs beyond defaults.

### Cloudflare options (all free-tier capable)

| Path | Fits this app? | Notes |
|------|----------------|-------|
| **A. Cloudflare Workers + `@opennextjs/cloudflare` (recommended)** | **YES** | Official path for Next 16 App Router + Route Handlers + Node compat flag. Free Workers limits apply. Auto deploy from GitHub. |
| **B. vinext → Workers** | YES (newer CF-recommended) | Alternative adapter; evaluate when we migrate. |
| **C. Cloudflare Pages + `@cloudflare/next-on-pages` (Edge only)** | **Risky / limited** | Edge runtime only; our contact route is `nodejs`. Would need rewrite to `edge` + API audit. |
| **D. Pages static `output: "export"`** | Only if we drop server API | Contact would call Web3Forms from the browser (their access key is designed for client forms) or a tiny Worker. Loses server-only env pattern unless using CF Pages Functions. |

**Conclusion:** Do **not** force classic “Pages SSR next-on-pages” without changes.  
**Simplest free fit:** **GitHub → Cloudflare Workers (OpenNext)** — user-facing still “Cloudflare”, CDN + HTTPS + custom domain on free plan.  
If the product requirement is literally the **Pages** product UI only, use **Pages + static export + client Web3Forms** (or Pages Function) after a small contact refactor.

## Incompatibilities to resolve before first CF deploy
1. Contact API: keep Worker/OpenNext **or** move form to client→Web3Forms / Pages Function; drop hard `runtime = "nodejs"` if using Edge-only path.
2. Env: set `CONTACT_WEB3FORMS_ACCESS_KEY` (and `NEXT_PUBLIC_SITE_URL`) in Cloudflare dashboard — never in git.
3. `next/image`: confirm OpenNext image behaviour; fallback `images: { unoptimized: true }` (0 €, our WebPs already optimized).
4. Build command: `npx @opennextjs/cloudflare build` (or vinext) + Wrangler deploy — document in CI when user authorizes.

## Migration steps (NOT executed yet — waiting for user OK)
1. Add `@opennextjs/cloudflare` + `wrangler` (devDeps).
2. Add `wrangler.toml` / `wrangler.jsonc` with `nodejs_compat`.
3. Connect GitHub repo in Cloudflare dashboard (free).
4. First preview URL on `*.workers.dev` or CF Pages/Workers preview.
5. Keep Vercel preview until CF preview passes QA + noindex still on.
6. Custom domain only after user buys + DNS on Cloudflare.
7. Then switch GBP website URL (separate auth).

## Email (unchanged)
- Public `info@[domain]` only after domain + routing + Send-as verified.
- Forward → internal Gmail; never publish Gmail on site.
