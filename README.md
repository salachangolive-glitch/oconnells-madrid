# O'Connell St Madrid — website

Production-ready **Next.js (App Router) + TypeScript + Tailwind** site for **O'Connell St**, Irish pub & sports bar near Puerta del Sol.

**Address:** Calle de Espoz y Mina 7, 28012 Madrid  
**Phone:** +34 915 32 79 56

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass)
npm run start    # serve production build
npm run check:indexable  # fails on noindex / Disallow of content paths
```

## Deploy (later)

- Deploy free on **Vercel** when ready (connect the repo; no purchase required for the hobby tier).
- **Domain TBD** — set after user auth / DNS. Until then, override the canonical base URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Default fallback in code: `https://www.oconnellstmadrid.com` (placeholder only).

## Venue facts (do not invent)

- Irish pub + sports bar near Puerta del Sol
- Screens: football (Premier League / UCL / LaLiga); NFL/NBA when shown
- Thursday €1 shots (commercial priority for Erasmus); Wednesday €1 shots also exist
- **No** terrace · **No** habitual live music
- **No** invented prices, menu, reservations, or official team/league status

Photo slots use the marker **`NEED_REAL_PHOTO`**.

## SEO indexability checklist

- [ ] `npm run build` succeeds
- [ ] `npm run check:indexable` passes
- [ ] `/robots.txt` **Allow**s content (no `Disallow` of `/sports`, `/es`, etc.)
- [ ] `/sitemap.xml` lists all EN + ES content URLs
- [ ] Content pages have **canonical** URLs and **no** `noindex`
- [ ] EN/ES pairs expose **hreflang** (`en`, `es`, `x-default`) where mirrored
- [ ] Open Graph tags present; JSON-LD `BarOrPub` / `LocalBusiness` in root layout
- [ ] After deploy: submit sitemap in Google Search Console (domain TBD)
- [ ] Replace `NEED_REAL_PHOTO` placeholders; set `NEXT_PUBLIC_SITE_URL` to the real domain

## Routes

**EN:** `/` `/sports` `/watch-football-madrid` `/premier-league` `/champions-league` `/erasmus` `/thursday-1-euro-shots` `/about` `/location` `/whats-on`

**ES mirrors:** `/es` `/es/sports` `/es/watch-football-madrid` `/es/premier-league` `/es/champions-league` `/es/erasmus` `/es/thursday-1-euro-shots` `/es/about` `/es/location`
