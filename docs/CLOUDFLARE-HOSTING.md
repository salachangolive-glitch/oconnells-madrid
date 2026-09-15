# O’Connell’s — hosting plan (0 €)

## Policy (15 Sep 2026)
- **STOP** new **Vercel production** deploys.
- Keep `https://oconnells-madrid.vercel.app` as **temporary preview only** (noindex stays) until CF Pages preview is verified.
- Source of truth: GitHub `salachangolive-glitch/oconnells-madrid`.
- Target: free **Cloudflare Pages** → future custom domain (buy only with user auth).

## Chosen path: Cloudflare Pages static export
**Decision:** use **Pages + `output: "export"` + client Web3Forms**.  
**Abandoned for simplicity:** Workers / OpenNext / vinext / next-on-pages / Pages Functions.

Full setup: **[`docs/CLOUDFLARE-PAGES.md`](./CLOUDFLARE-PAGES.md)**.

| Item | Status |
|------|--------|
| Build | `npm run build` → `out/` |
| Contact | Browser → `https://api.web3forms.com/submit` (`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`) |
| Images | `images.unoptimized: true` (local WebPs in `/public`) |
| Preview noindex | `*.pages.dev` and `*.vercel.app` via `isPreviewHost()` |
| Cost | €0 (CF Pages free + Web3Forms free) |

## Historical options (not used)
| Path | Status |
|------|--------|
| A. Workers + `@opennextjs/cloudflare` | Abandoned — unnecessary complexity for a static marketing site |
| B. vinext → Workers | Abandoned |
| C. Pages + `@cloudflare/next-on-pages` (Edge) | Abandoned |
| D. Pages static `output: "export"` | **Chosen** |

## Email
- Public `info@[domain]` only after domain + routing + Send-as verified.
- Forward → internal Gmail; never publish Gmail on site.
- See `CONTACT-EMAIL-SETUP.md`.

## Out of scope from this repo
- Do not change GBP / Localo website fields until explicitly authorised.
- Do not purchase domains or paid plans from automation.
