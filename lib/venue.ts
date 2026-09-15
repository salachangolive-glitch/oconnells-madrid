/** Venue NAP from GBP audit 2026-09-15 — do not invent prices, menu, or official status. */
export const SITE_NAME = "O'Connell St";
export const SITE_TAGLINE = "Irish pub & sports bar near Puerta del Sol";

/** Canonical address as on GBP editor: Calle de Espoz y Mina, 7, 28012 Madrid */
export const ADDRESS = {
  street: "Calle de Espoz y Mina, 7",
  postalCode: "28012",
  city: "Madrid",
  country: "ES",
  countryName: "Spain",
  full: "Calle de Espoz y Mina, 7, 28012 Madrid",
} as const;

/** GBP phone only — DO NOT show on the new website (web contact = form / future info@). NOT 915 22 75 09 */
export const PHONE_DISPLAY = "+34 915 32 79 56";
export const PHONE_TEL = "tel:+34915327956";

/** Search-based Maps link (no invented coordinates). */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=O%27Connell+St+Calle+de+Espoz+y+Mina+7+28012+Madrid";

export const NEIGHBOURHOOD = "near Puerta del Sol";

/**
 * Opening hours from GBP editor/public card (audit 2026-09-15).
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
  otherSports: ["NFL", "NBA"] as const,
  thursdayShots: "Thursday €1 shots",
  wednesdayShots: "Wednesday €1 shots",
} as const;

/** True when NEXT_PUBLIC_SITE_URL is a Vercel preview host — keep noindex. */
export function isPreviewHost(url = getSiteUrl()): boolean {
  try {
    return new URL(url).hostname.includes("vercel.app");
  } catch {
    return url.includes("vercel.app");
  }
}

/** Domain TBD — override with NEXT_PUBLIC_SITE_URL after custom domain. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return fromEnv || "https://oconnells-madrid.vercel.app";
}

export const EN_PATHS = [
  "/",
  "/sports",
  "/watch-football-madrid",
  "/premier-league",
  "/champions-league",
  "/erasmus",
  "/thursday-1-euro-shots",
  "/about",
  "/location",
  "/whats-on",
  "/contact",
] as const;

export const ES_PATHS = [
  "/es",
  "/es/sports",
  "/es/watch-football-madrid",
  "/es/premier-league",
  "/es/champions-league",
  "/es/erasmus",
  "/es/thursday-1-euro-shots",
  "/es/about",
  "/es/location",
  "/es/whats-on",
  "/es/contact",
] as const;

export const ALL_CONTENT_PATHS = [...EN_PATHS, ...ES_PATHS] as const;

/** EN path → ES mirror (undefined = no ES page). */
export const HREFLANG_PAIRS: Record<string, string | undefined> = {
  "/": "/es",
  "/sports": "/es/sports",
  "/watch-football-madrid": "/es/watch-football-madrid",
  "/premier-league": "/es/premier-league",
  "/champions-league": "/es/champions-league",
  "/erasmus": "/es/erasmus",
  "/thursday-1-euro-shots": "/es/thursday-1-euro-shots",
  "/about": "/es/about",
  "/location": "/es/location",
  "/whats-on": "/es/whats-on",
  "/contact": "/es/contact",
};
