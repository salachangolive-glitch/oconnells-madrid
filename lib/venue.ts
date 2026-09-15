/** Venue facts only — do not invent prices, menu, reservations, or official team status. */
export const SITE_NAME = "O'Connell St";
export const SITE_TAGLINE = "Irish pub & sports bar near Puerta del Sol";

export const ADDRESS = {
  street: "Calle de Espoz y Mina 7",
  postalCode: "28012",
  city: "Madrid",
  country: "ES",
  countryName: "Spain",
  full: "Calle de Espoz y Mina 7, 28012 Madrid",
} as const;

export const PHONE_DISPLAY = "+34 915 32 79 56";
export const PHONE_TEL = "tel:+34915327956";

/** Search-based Maps link (no invented coordinates). */
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=O%27Connell+St+Calle+de+Espoz+y+Mina+7+28012+Madrid";

export const NEIGHBOURHOOD = "near Puerta del Sol";

export const FACTS = {
  type: "Irish pub and sports bar",
  football: ["Premier League", "UEFA Champions League", "LaLiga"] as const,
  otherSports: ["NFL", "NBA"] as const,
  thursdayShots: "Thursday €1 shots",
  wednesdayShots:
    "Wednesday €1 shots also run; Thursday is the commercial priority for Erasmus nights",
  noTerrace: true,
  noHabitualLiveMusic: true,
} as const;

/** Domain TBD — override with NEXT_PUBLIC_SITE_URL after deploy/auth. */
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
] as const;

export const ES_PATHS = [
  "/es",
  "/es/sports",
  "/es/watch-football-madrid",
  "/es/erasmus",
  "/es/thursday-1-euro-shots",
  "/es/about",
  "/es/location",
] as const;

export const ALL_CONTENT_PATHS = [...EN_PATHS, ...ES_PATHS] as const;

/** EN path → ES mirror (undefined = no ES page). */
export const HREFLANG_PAIRS: Record<string, string | undefined> = {
  "/": "/es",
  "/sports": "/es/sports",
  "/watch-football-madrid": "/es/watch-football-madrid",
  "/erasmus": "/es/erasmus",
  "/thursday-1-euro-shots": "/es/thursday-1-euro-shots",
  "/about": "/es/about",
  "/location": "/es/location",
};
