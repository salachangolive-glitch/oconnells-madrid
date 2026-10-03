# FASE2 — refresh free preview (no prod final, €0)

**Primary preview (live):** https://oconnells-madrid.pages.dev  
**Branch for CF Pages:** `cloudflare-pages-static` (not `main`).  
**Repo:** `salachangolive-glitch/oconnells-madrid`  
**Cost:** €0 — no paid domain, no Vercel production, no Workers paid tier.

The older Vercel URL (`*.vercel.app`) is **stale**. Do not treat it as the review host. Prefer **Cloudflare Pages** (`*.pages.dev`).

## What stays noindex
`isPreviewHost()` treats `*.pages.dev` (and leftover `*.vercel.app`) as preview:
- HTML meta `robots: noindex,nofollow`
- `robots.txt` Disallow `/`

Custom domain + `NEXT_PUBLIC_SITE_URL` pointing at a non-preview host is required before indexing. **Do not** ship prod final or buy a domain from this doc.

## Redeploy Pages.dev (primary path)

### A. Automatic (preferred)
1. Merge (or push) to the Cloudflare Pages production branch — currently **`cloudflare-pages-static`**.
2. Cloudflare dashboard → Workers & Pages → `oconnells-madrid` → Deployments.
3. Wait for the green deploy; hard-refresh https://oconnells-madrid.pages.dev.

Build settings (already documented in `CLOUDFLARE-PAGES.md`):

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node | 20+ |

### B. Manual retry
Pages → Deployments → **Retry deployment** on the latest commit (no code change needed).

### C. Local sanity check before push
```bash
npm ci
npm run build   # next static export → out/ + check-indexable
```
Confirm `out/index.html`, `out/robots.txt`, `out/sitemap.xml` exist.

## Do not touch from this preview flow
- `oconnell-st.localo.site` / Localo
- Ads Final URL
- GBP website field
- Domain purchase / DNS
- Visual redesign waiting for new photos (keep existing hero/interior assets)

## Contact form / Web3Forms (blocked until key)
The static contact form posts from the browser to Web3Forms using `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

- **Without the key:** `/contact` and `/es/contact` show the “being activated” / unavailable state — **delivery is blocked**.
- **Do not ask the user for a Web3Forms key in routine FASE2.** Report the block to DIRECTOR GENERAL; activate only when DG/user authorises setting the env var in Cloudflare Pages (Production + Preview).
- Never commit the key; never publish the internal Gmail inbox on the site.

See also: `CONTACT-EMAIL-SETUP.md`, `CLOUDFLARE-PAGES.md`.

## After preview QA
1. Bot → DG with preview URL + what changed.
2. DG → user review.
3. Prod final / custom domain / GBP website switch = **separate explicit order only**.
