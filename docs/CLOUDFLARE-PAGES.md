# Cloudflare Pages — static export (chosen path, €0)

## Why this path
- **GitHub → Cloudflare Pages (FREE)** static hosting.
- **No Workers, no OpenNext, no Pages Functions** — keeps the stack simple and free-tier safe.
- Contact form posts from the browser to [Web3Forms](https://web3forms.com) (free). Their access key is designed for client-side forms.

Workers / OpenNext (documented earlier in `CLOUDFLARE-HOSTING.md`) is **abandoned** for this project in favour of static Pages.

## Build settings (Cloudflare Pages dashboard)

| Setting | Value |
|---------|--------|
| Framework preset | Next.js (Static HTML Export) — or None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Node version | 20+ (set `NODE_VERSION=20` if needed) |

### Environment variables (Pages → Settings → Environment variables)
| Name | Scope | Notes |
|------|--------|--------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Production + Preview | Free Web3Forms access key. Bound to internal inbox **only** in the Web3Forms dashboard — never publish Gmail on the site. |
| `NEXT_PUBLIC_SITE_URL` | Production | Full canonical URL once custom domain is live (e.g. `https://www.example.com`). Until then, leave unset or set to the `*.pages.dev` preview URL (stays **noindex**). |

Do **not** set server-only `CONTACT_*` vars — the Node `/api/contact` route was removed.

## Local / CI build
```bash
npm ci
npm run build   # next build (output: export) → out/ + check-indexable
```
Confirm `out/` exists and contains `index.html`, `robots.txt`, `sitemap.xml`.

## Preview hosts = noindex
`isPreviewHost()` treats both `*.vercel.app` and `*.pages.dev` as preview:
- HTML meta `robots: noindex,nofollow`
- `robots.txt` Disallow `/`

Custom domain (not those suffixes) → indexable.

## Connect GitHub
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Select `salachangolive-glitch/oconnells-madrid`.
3. Use build settings above; deploy branch `main` (or merge PR first).
4. First URL will be `https://<project>.pages.dev` — expected noindex until custom domain + `NEXT_PUBLIC_SITE_URL`.

## Custom domain (later, €0 CF DNS once domain owned)
- Add domain in Pages → Custom domains.
- Point DNS at Cloudflare (user buys domain separately — do not purchase from this repo).
- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin and redeploy.
- Only then consider publishing `info@domain` (see `CONTACT-EMAIL-SETUP.md`).
- Do **not** change GBP / Localo from this repo until explicitly authorised.

## Contact form checklist
- [ ] Free Web3Forms key created; destination = internal inbox (dashboard only).
- [ ] `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` set in CF Pages.
- [ ] Test EN `/contact` and ES `/es/contact`.
- [ ] Confirm honeypot field `company` is not visible; bots filling it should not deliver mail.
- [ ] Subject lines look like `[OCONNELLS] {reason} — {name}`.

## What we intentionally do not do
- No Vercel production deploys.
- No paid Cloudflare plans, Workers paid features, or CF Images.
- No public phone on the site; no public Gmail.
- No GBP / Localo edits from this codebase.
