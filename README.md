# O'Connell St Madrid — website

Production-ready **Next.js (App Router) + TypeScript + Tailwind** static site for **O'Connell St**, Irish pub & sports bar near Puerta del Sol.

**Address:** Calle de Espoz y Mina 7, 28012 Madrid  
**Hours:** Mon–Thu 18:00–03:00 · Fri–Sat 16:00–03:30 · Sun 14:00–03:00 (GBP audit 2026-09-15)

Phone is **not** shown on the public site (web contact = form). Internal GBP phone constants remain in `lib/venue.ts` for ops only.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/ + check:indexable
npx serve out    # optional local preview of the static export
npm run check:indexable
```

## Deploy (chosen path)

**Cloudflare Pages FREE** static export — see [`docs/CLOUDFLARE-PAGES.md`](docs/CLOUDFLARE-PAGES.md).

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `out` |
| Env | `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (+ `NEXT_PUBLIC_SITE_URL` when custom domain live) |

Do **not** use Vercel for production. Workers / OpenNext abandoned.

Hobby / €0. Repo: `salachangolive-glitch/oconnells-madrid`.

### SEO preview protection (important)

When `NEXT_PUBLIC_SITE_URL` hostname **includes `vercel.app` or `pages.dev`** (preview / interim URL):

- HTML meta robots → **`noindex, nofollow`**
- `/robots.txt` → **`Disallow: /`**
- `npm run check:indexable` treats that as **expected / OK**

When you point a **custom domain** and set `NEXT_PUBLIC_SITE_URL` to it (no preview suffix):

- canonical / hreflang / sitemap / `og:url` use that origin (not `pages.dev`)
- indexing stays **off** until go-live: `NEXT_PUBLIC_FORCE_NOINDEX` unset or `true` → meta `noindex,nofollow` and `robots.txt` `Disallow: /`
- `404.html` may always be `noindex`
- go-live after QA PASS: set `NEXT_PUBLIC_FORCE_NOINDEX=false` and redeploy (deleting the variable does **not** enable indexing)

Override for local checks:

```bash
NEXT_PUBLIC_SITE_URL=https://oconnellsmadrid.es npm run build
# still noindex (hold). To require indexability:
NEXT_PUBLIC_FORCE_NOINDEX=false NEXT_PUBLIC_SITE_URL=https://oconnellsmadrid.es npm run check:indexable
```

## Ops: fixtures

Edit `lib/fixtures.ts` to update What's On confirmed matches (competition, teams, date, optional Madrid kickoff). No invented times.

## Venue facts (do not invent on the page)

- Irish pub + sports bar near Puerta del Sol / Madrid Centro
- Screens: Premier League / Champions League / LaLiga; NFL/NBA when shown
- Thursday €1 shots (hero night for Erasmus / internationals); Wednesday €1 also exists
- NAP + hours only from `lib/venue.ts` (GBP audit) — do not invent menu, prices, reservations, or official team/league status. GBP website field is still localo.site — do not change GBP from this repo.
- Hero photo: `public/images/oconnell-fachada.jpg` (real facade). Other slots use green gradient heroes — never Dubliners / O'Reilly / Chango stock.

## Routes

**EN:** `/` `/sports` `/watch-football-madrid` `/premier-league` `/champions-league` `/erasmus` `/thursday-1-euro-shots` `/about` `/location` `/whats-on` `/contact`

**ES mirrors:** `/es` `/es/sports` `/es/watch-football-madrid` `/es/premier-league` `/es/champions-league` `/es/erasmus` `/es/thursday-1-euro-shots` `/es/about` `/es/location` `/es/whats-on` `/es/contact`

## Ops: Google Analytics 4 (off until configured)

Set the measurement ID in `lib/analytics.ts` (`GA4_MEASUREMENT_ID`). Empty = no GA, no banner. See [`docs/GA4-CONSENT.md`](docs/GA4-CONSENT.md).
