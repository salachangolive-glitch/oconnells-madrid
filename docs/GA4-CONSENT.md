# GA4 + Consent Mode v2 (ready, OFF until an ID is set)

Switch: `lib/analytics.ts` → `export const GA4_MEASUREMENT_ID = "";`

- Empty (today): no gtag, no dataLayer, no banner, no "Cookie settings", Privacy keeps the no-GA text. Site identical.
- `"G-XXXXXXXXXX"` → commit + push to `cloudflare-pages-static` (Cloudflare Pages builds) and:
  - `components/Analytics.tsx`: inline script in `<body>`; `gtag('consent','default')` with
    `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization` = denied.
    gtag.js is requested from Google **only** after "Accept" (or a stored "granted").
    On accept: `consent update {analytics_storage: granted}` (ads signals stay denied), `config`.
  - `components/CookieBanner.tsx`: Accept / Reject, same size and style, EN/ES, fixed above the
    sticky CTA bar. Choice in localStorage `oconnell_cookie_consent_v1`. Reject deletes `_ga`/`_ga_*`
    and reloads if GA was running.
  - Footer "Cookie settings / Configurar cookies" and the button in Privacy reopen the banner.
  - `components/PrivacyCookies.tsx`: GA4 section of Privacy (EN/ES, `#cookies`).
  - Events (`components/TrackClicks.tsx`): `click_directions`, `generate_lead` (+ `whats_on`,
    `contact`, `email_click`) are sent only when consent is granted.
- Model: dublinersmadrid.es (`/workspace/dubliners-madrid/src/components/Analytics.astro`, `CookieBanner.astro`).
- After activating: GA4 DebugView/Realtime with `?debug_mode=true` is not wired; use Tag Assistant or Realtime.
  Mark `generate_lead` (and `click_directions` if wanted) as key events in GA4, then link GA4 ↔ Google Ads 724-880-7309.
