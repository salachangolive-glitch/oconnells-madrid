/** Venue NAP from GBP audit 2026-09-15 — do not invent prices, menu, or official status. */
export const SITE_NAME = "O'Connell St";
export const SITE_TAGLINE = "Irish pub & sports bar near Sol";
export const SITE_TAGLINE_ES = "Pub irlandés y bar deportivo cerca de Sol";

/** Canonical address as on GBP editor: Calle de Espoz y Mina, 7, 28012 Madrid */
export const ADDRESS = {
  street: "Calle de Espoz y Mina, 7",
  postalCode: "28012",
  city: "Madrid",
  country: "ES",
  countryName: "Spain",
  full: "Calle de Espoz y Mina, 7, 28012 Madrid",
} as const;

/** GBP phone only — DO NOT show on the new website (web contact = form + public email). NOT 915 22 75 09 */
export const PHONE_DISPLAY = "+34 915 32 79 56";
export const PHONE_TEL = "tel:+34915327956";

/** Public inbox only. Internal Gmail must never appear on the site. */
export const PUBLIC_EMAIL = "comunicacion@oconnellsmadrid.es";
export const PUBLIC_EMAIL_MAILTO = "mailto:comunicacion@oconnellsmadrid.es";

/**
 * Google Maps link pinned to the O'Connell St GBP listing (Place ID from the
 * Ads location audit 2026-10-02; opens "O'Connell St · C. de Espoz y Mina, 7"
 * — checked live 2026-10-09). Query text stays as fallback. No coordinates.
 */
export const GBP_PLACE_ID = "ChIJLdKNhYAoQg0RSYjRwIO4dZQ";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=O%27Connell+St+Calle+de+Espoz+y+Mina+7+28012+Madrid&query_place_id=ChIJLdKNhYAoQg0RSYjRwIO4dZQ";

/**
 * O'Connell St Google Business Profile listing (CID 10697659365903665225 =
 * 0x9475b883c0d18849, same listing as GBP_PLACE_ID). Source: Localo REGISTRO
 * (local.google.com/place?id=10697659365903665225) and the GBP-generated
 * Localo site JSON-LD hasMap. Used as schema sameAs.
 */
export const GBP_CID = "10697659365903665225";
export const GBP_MAPS_CID_URL = `https://maps.google.com/maps?cid=${GBP_CID}`;

/**
 * Google pin of the O'Connell St listing (CID above / place_id GBP_PLACE_ID),
 * handed over by Localo 2026-10-19 (HANDOFF-DUB-OC-placeid.md; sources:
 * Apify dataset 15 Oct + Maps preview 12 Oct, matching). Dubliners shares the
 * building but has its own pin/CID — never use theirs here.
 */
export const GBP_GEO = { latitude: 40.4157515, longitude: -3.7022636 } as const;

export const NEIGHBOURHOOD = "near Puerta del Sol";

/**
 * Opening hours — aligned with GBP live card (re-verified 2026-10-02).
 * Mon–Thu 18:00–03:00; Fri–Sat 16:00–03:30; Sun 14:00–03:00 (Madrid local).
 */
export const HOURS = {
  monThu: { open: "18:00", close: "03:00" },
  friSat: { open: "16:00", close: "03:30" },
  sun: { open: "14:00", close: "03:00" },
  linesEn: [
    "Mon–Thu: 18:00–03:00",
    "Fri–Sat: 16:00–03:30",
    "Sun: 14:00–03:00",
  ],
  linesEs: [
    "Lun–jue: 18:00–03:00",
    "Vie–sáb: 16:00–03:30",
    "Dom: 14:00–03:00",
  ],
  summaryEn: "Mon–Thu 18:00–03:00 · Fri–Sat 16:00–03:30 · Sun 14:00–03:00",
  summaryEs: "Lun–jue 18:00–03:00 · Vie–sáb 16:00–03:30 · Dom 14:00–03:00",
  summaryDe: "Mo–Do 18:00–03:00 · Fr–Sa 16:00–03:30 · So 14:00–03:00",
} as const;

/**
 * Public-safe facts for copy & JSON-LD.
 * INTERNAL (never on page): no terrace; no habitual live music; not an official
 * club/league partner; Thursday is commercially prioritised for Erasmus.
 * GBP website field still localo.site — do not change GBP from this repo.
 */
export const FACTS = {
  type: "Irish pub and sports bar",
  football: ["Premier League", "UEFA Champions League", "LaLiga"] as const,
  otherSports: ["NFL", "NBA", "rugby", "F1", "tennis"] as const,
  thursdayShots: "Thursday €1 shots",
} as const;

/** True when NEXT_PUBLIC_SITE_URL is a preview host (Vercel or CF Pages) — keep noindex. */
export function isPreviewHost(url = getSiteUrl()): boolean {
  try {
    const host = new URL(url).hostname;
    return host.includes("vercel.app") || host.includes("pages.dev");
  } catch {
    return url.includes("vercel.app") || url.includes("pages.dev");
  }
}

/**
 * Hold indexing on the custom domain until explicit go-live QA.
 *
 * NEXT_PUBLIC_SITE_URL only sets canonical/hreflang/sitemap/OG hosts.
 * It does not by itself allow indexing.
 *
 * - unset, "true", "1", "yes" → noindex (safe while QA is still open)
 * - "false" / "0" / "no" → allow index,follow on a non-preview host
 *
 * Go-live after QA: set NEXT_PUBLIC_FORCE_NOINDEX=false and redeploy.
 * Deleting the variable does not go live; unset stays held.
 */
export function forceNoindex(): boolean {
  const raw = process.env.NEXT_PUBLIC_FORCE_NOINDEX;
  if (raw == null || raw.trim() === "") return true;
  const v = raw.trim().toLowerCase();
  if (v === "0" || v === "false" || v === "no") return false;
  return true;
}

/** Preview hosts always noindex. Custom domain noindex until FORCE_NOINDEX is explicitly false. */
export function shouldNoindex(url = getSiteUrl()): boolean {
  return isPreviewHost(url) || forceNoindex();
}

/** Domain TBD — override with NEXT_PUBLIC_SITE_URL after custom domain. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  // Live interim host is Cloudflare Pages until custom domain is set.
  return fromEnv || "https://oconnells-madrid.pages.dev";
}

export const EN_PATHS = [
  "/",
  "/sports",
  "/watch-football-madrid",
  "/premier-league",
  "/champions-league",
  "/sports-bar-sol",
  "/nfl-madrid",
  "/fontaines-dc-madrid",
  "/news/champions-league-tuesday-20-october",
  "/news/champions-league-wednesday-21-october",
  "/oktoberfest-madrid-sol",
  "/menu",
  "/erasmus",
  "/thursday-1-euro-shots",
  "/about",
  "/location",
  "/whats-on",
  "/contact",
  "/privacy",
] as const;

export const ES_PATHS = [
  "/es",
  "/es/sports",
  "/es/watch-football-madrid",
  "/es/premier-league",
  "/es/champions-league",
  "/es/sports-bar-sol",
  "/es/nfl-madrid",
  "/es/fontaines-dc-madrid",
  "/es/noticias/champions-league-martes-20-octubre",
  "/es/noticias/champions-league-miercoles-21-octubre",
  "/es/oktoberfest-madrid-sol",
  "/es/menu",
  "/es/erasmus",
  "/es/thursday-1-euro-shots",
  "/es/about",
  "/es/location",
  "/es/whats-on",
  "/es/contact",
  "/es/privacy",
] as const;

export const DE_PATHS = [
  "/de/sports-bar-sol",
  "/de/oktoberfest-madrid-sol",
] as const;

export const ALL_CONTENT_PATHS = [...EN_PATHS, ...ES_PATHS, ...DE_PATHS] as const;

/** EN path → ES mirror (undefined = no ES page). */
export const HREFLANG_PAIRS: Record<string, string | undefined> = {
  "/": "/es",
  "/sports": "/es/sports",
  "/watch-football-madrid": "/es/watch-football-madrid",
  "/premier-league": "/es/premier-league",
  "/champions-league": "/es/champions-league",
  "/sports-bar-sol": "/es/sports-bar-sol",
  "/nfl-madrid": "/es/nfl-madrid",
  "/fontaines-dc-madrid": "/es/fontaines-dc-madrid",
  "/news/champions-league-tuesday-20-october": "/es/noticias/champions-league-martes-20-octubre",
  "/news/champions-league-wednesday-21-october": "/es/noticias/champions-league-miercoles-21-octubre",
  "/oktoberfest-madrid-sol": "/es/oktoberfest-madrid-sol",
  "/menu": "/es/menu",
  "/erasmus": "/es/erasmus",
  "/thursday-1-euro-shots": "/es/thursday-1-euro-shots",
  "/about": "/es/about",
  "/location": "/es/location",
  "/whats-on": "/es/whats-on",
  "/contact": "/es/contact",
  "/privacy": "/es/privacy",
};

/**
 * Multi-locale pages (en/es/de). When a path appears here, buildMetadata
 * emits all listed languages + x-default (EN). Overrides the ES-only pair.
 */
export const HREFLANG_GROUPS: Record<
  string,
  { en: string; es?: string; de?: string }
> = {
  "/sports-bar-sol": {
    en: "/sports-bar-sol",
    es: "/es/sports-bar-sol",
    de: "/de/sports-bar-sol",
  },
  "/oktoberfest-madrid-sol": {
    en: "/oktoberfest-madrid-sol",
    es: "/es/oktoberfest-madrid-sol",
    de: "/de/oktoberfest-madrid-sol",
  },
};

