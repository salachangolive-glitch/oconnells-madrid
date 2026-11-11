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
 * Mon–Thu 18:00–03:00; Fri 16:00–03:30; Sat 15:00–03:30; Sun 14:00–03:00 (Madrid local).
 * Sat 15:00 / Sun 14:00 opening confirmed by owner via DG, 2026-10-24 23:53.
 */
export const HOURS = {
  monThu: { open: "18:00", close: "03:00" },
  fri: { open: "16:00", close: "03:30" },
  sat: { open: "15:00", close: "03:30" },
  sun: { open: "14:00", close: "03:00" },
  linesEn: [
    "Mon–Thu: 18:00–03:00",
    "Fri: 16:00–03:30",
    "Sat: 15:00–03:30",
    "Sun: 14:00–03:00",
  ],
  linesEs: [
    "Lun–jue: 18:00–03:00",
    "Vie: 16:00–03:30",
    "Sáb: 15:00–03:30",
    "Dom: 14:00–03:00",
  ],
  summaryEn: "Mon–Thu 18:00–03:00 · Fri 16:00–03:30 · Sat 15:00–03:30 · Sun 14:00–03:00",
  summaryEs: "Lun–jue 18:00–03:00 · Vie 16:00–03:30 · Sáb 15:00–03:30 · Dom 14:00–03:00",
  summaryDe: "Mo–Do 18:00–03:00 · Fr 16:00–03:30 · Sa 15:00–03:30 · So 14:00–03:00",
} as const;

/**
 * Public-safe facts for copy & JSON-LD.
 * INTERNAL (never on page): no terrace; no habitual live music; not an official
 * club/league partner; Thursday is commercially prioritised for the international crowd.
 * GBP website field still localo.site — do not change GBP from this repo.
 */
export const FACTS = {
  type: "Irish pub and sports bar",
  football: ["Premier League", "UEFA Champions League", "LaLiga"] as const,
  otherSports: ["basketball", "rugby", "F1", "tennis"] as const,
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
  "/madrid-clocks-saturday-english-kickoffs-this-door",
  "/champions-league",
  "/tuesday-wednesday-european-nights-this-door",
  "/how-whats-on-marks-confirmed-this-door",
  "/two-saturday-football-clocks-one-sol-room-this-door",
  "/overlapping-kickoffs-shared-screens-this-door",
  "/last-metres-sol-clock-to-gold-lettering-this-door",
  "/english-football-talk-independent-pub-off-sol-this-door",
  "/listing-number-seven-oconnell-maps-pin-this-door",
  "/sports-bar-sol",
  "/nfl-madrid",
  "/news/duran-duran-madrid-gig-night-sol",
  "/news/bryan-adams-madrid-gig-night-sol",
  "/news/atletico-barcelona-sunday-night-sol",
  "/news/czechia-spain-thursday-night-sol",
  "/news/england-croatia-thursday-night-sol",
  "/news/germany-netherlands-monday-night-sol",
  "/news/real-madrid-celta-saturday-night-sol",
  "/news/tokio-hotel-madrid-gig-night-sol",
  "/news/real-madrid-psv-tuesday-night-sol",
  "/news/real-madrid-zalgiris-wednesday-night-sol",
  "/news/atletico-viking-wednesday-night-sol",
  "/news/inter-fans-madrid-womens-champions-league-sol",
  "/news/serbia-germany-friday-night-sol",
  "/news/spain-england-sunday-night-sol",
  "/news/real-madrid-inter-womens-champions-league-sol",
  "/news/getafe-brighton-thursday-night-sol",
  "/news/real-madrid-crvena-zvezda-thursday-sol",
  "/news/where-to-watch-nfl-madrid-sol",
  "/news/nfl-meeting-point-sol",
  "/news/before-after-bernabeu-nfl-sol",
  "/news/sunday-football-sol-8-nov",
  "/news/four-bars-fan-weekend-sol",
  "/4-bars-one-fan-weekend",
  "/nfl-fans-saturday-oconnells",
  "/nfl-sunday-8-nov-oconnells",
  "/this-door-stays-shut-until-1500",
  "/usual-sunday-is-1400",
  "/liverpool-1500-usual-lock-oconnells",
  "/chelsea-1500-same-english-hour",
  "/united-1730-after-the-pair-oconnells",
  "/after-bernabeu-this-door-espoz-mina-7",
  "/evening-nfl-then-atleti-barca-this-door",
  "/oktoberfest-madrid-sol",
  "/halloween-madrid-sol",
  "/menu",
  "/gallery",
  "/erasmus",
  "/thursday-1-euro-shots",
  "/about",
  "/location",
  "/whats-on",
  "/contact",
  "/privacy",
  "/news",
] as const;

export const ES_PATHS = [
  "/es",
  "/es/sports",
  "/es/watch-football-madrid",
  "/es/premier-league",
  "/es/relojes-madrid-saques-ingleses-sabado-esta-puerta",
  "/es/champions-league",
  "/es/noches-europeas-martes-miercoles-esta-puerta",
  "/es/como-marca-confirmado-la-agenda-esta-puerta",
  "/es/dos-relojes-futbol-sabado-una-sala-esta-puerta",
  "/es/saques-solapados-pantallas-compartidas-esta-puerta",
  "/es/ultimos-metros-reloj-sol-rotulo-dorado-esta-puerta",
  "/es/conversacion-futbol-ingles-pub-independiente-sol-esta-puerta",
  "/es/ficha-numero-siete-pin-maps-oconnell-esta-puerta",
  "/es/sports-bar-sol",
  "/es/nfl-madrid",
  "/es/oktoberfest-madrid-sol",
  "/es/halloween-madrid-sol",
  "/es/menu",
  "/es/galeria",
  "/es/erasmus",
  "/es/thursday-1-euro-shots",
  "/es/about",
  "/es/location",
  "/es/whats-on",
  "/es/contact",
  "/es/privacy",
  "/es/noticias",
  "/es/noticias/atletico-viking-miercoles-sol",
  "/es/noticias/chequia-espana-jueves-sol",
  "/es/noticias/espana-inglaterra-domingo-sol",
  "/es/noticias/real-madrid-inter-champions-femenina-sol",
  "/es/noticias/getafe-brighton-jueves-sol",
  "/es/noticias/real-madrid-crvena-zvezda-jueves-sol",
  "/es/noticias/donde-ver-nfl-madrid-sol",
  "/es/noticias/punto-encuentro-nfl-sol",
  "/es/noticias/antes-despues-bernabeu-nfl-sol",
  "/es/noticias/futbol-domingo-sol-8-nov",
  "/es/noticias/cuatro-bares-finde-sol",
  "/es/cuatro-bares-fin-de-semana",
  "/es/fin-de-semana-nfl-oconnells",
  "/es/nfl-domingo-8-nov-oconnells",
  "/es/esta-puerta-abre-a-las-1500",
  "/es/el-domingo-habitual-es-1400",
  "/es/liverpool-1500-cerrojo-habitual-oconnells",
  "/es/chelsea-1500-misma-hora-inglesa",
  "/es/united-1730-despues-del-par-oconnells",
  "/es/despues-bernabeu-esta-puerta-espoz-mina-7",
  "/es/nfl-noche-luego-atleti-barca-esta-puerta",
] as const;

export const DE_PATHS = [
  "/de",
  "/de/oktoberfest-madrid-sol",
] as const;

export const ALL_CONTENT_PATHS = [...EN_PATHS, ...ES_PATHS, ...DE_PATHS] as const;

/** EN path → ES mirror (undefined = no ES page). */
export const HREFLANG_PAIRS: Record<string, string | undefined> = {
  "/": "/es",
  "/sports": "/es/sports",
  "/watch-football-madrid": "/es/watch-football-madrid",
  "/premier-league": "/es/premier-league",
  "/madrid-clocks-saturday-english-kickoffs-this-door":
    "/es/relojes-madrid-saques-ingleses-sabado-esta-puerta",
  "/champions-league": "/es/champions-league",
  "/tuesday-wednesday-european-nights-this-door":
    "/es/noches-europeas-martes-miercoles-esta-puerta",
  "/how-whats-on-marks-confirmed-this-door":
    "/es/como-marca-confirmado-la-agenda-esta-puerta",
  "/two-saturday-football-clocks-one-sol-room-this-door":
    "/es/dos-relojes-futbol-sabado-una-sala-esta-puerta",
  "/overlapping-kickoffs-shared-screens-this-door":
    "/es/saques-solapados-pantallas-compartidas-esta-puerta",
  "/last-metres-sol-clock-to-gold-lettering-this-door":
    "/es/ultimos-metros-reloj-sol-rotulo-dorado-esta-puerta",
  "/english-football-talk-independent-pub-off-sol-this-door":
    "/es/conversacion-futbol-ingles-pub-independiente-sol-esta-puerta",
  "/listing-number-seven-oconnell-maps-pin-this-door":
    "/es/ficha-numero-siete-pin-maps-oconnell-esta-puerta",
  "/sports-bar-sol": "/es/sports-bar-sol",
  "/nfl-madrid": "/es/nfl-madrid",
  "/oktoberfest-madrid-sol": "/es/oktoberfest-madrid-sol",
  "/halloween-madrid-sol": "/es/halloween-madrid-sol",
  "/menu": "/es/menu",
  "/gallery": "/es/galeria",
  "/erasmus": "/es/erasmus",
  "/thursday-1-euro-shots": "/es/thursday-1-euro-shots",
  "/about": "/es/about",
  "/location": "/es/location",
  "/whats-on": "/es/whats-on",
  "/contact": "/es/contact",
  "/privacy": "/es/privacy",
  "/news": "/es/noticias",
  "/news/czechia-spain-thursday-night-sol": "/es/noticias/chequia-espana-jueves-sol",
  "/news/spain-england-sunday-night-sol": "/es/noticias/espana-inglaterra-domingo-sol",
  "/news/real-madrid-inter-womens-champions-league-sol": "/es/noticias/real-madrid-inter-champions-femenina-sol",
  "/news/getafe-brighton-thursday-night-sol": "/es/noticias/getafe-brighton-jueves-sol",
  "/news/atletico-viking-wednesday-night-sol":
    "/es/noticias/atletico-viking-miercoles-sol",
  "/news/real-madrid-crvena-zvezda-thursday-sol": "/es/noticias/real-madrid-crvena-zvezda-jueves-sol",
  "/news/where-to-watch-nfl-madrid-sol": "/es/noticias/donde-ver-nfl-madrid-sol",
  "/news/nfl-meeting-point-sol": "/es/noticias/punto-encuentro-nfl-sol",
  "/news/before-after-bernabeu-nfl-sol": "/es/noticias/antes-despues-bernabeu-nfl-sol",
  "/news/sunday-football-sol-8-nov": "/es/noticias/futbol-domingo-sol-8-nov",
  "/news/four-bars-fan-weekend-sol": "/es/noticias/cuatro-bares-finde-sol",
  "/4-bars-one-fan-weekend": "/es/cuatro-bares-fin-de-semana",
  "/nfl-fans-saturday-oconnells": "/es/fin-de-semana-nfl-oconnells",
  "/nfl-sunday-8-nov-oconnells": "/es/nfl-domingo-8-nov-oconnells",
  "/this-door-stays-shut-until-1500": "/es/esta-puerta-abre-a-las-1500",
  "/usual-sunday-is-1400": "/es/el-domingo-habitual-es-1400",
  "/liverpool-1500-usual-lock-oconnells": "/es/liverpool-1500-cerrojo-habitual-oconnells",
  "/chelsea-1500-same-english-hour": "/es/chelsea-1500-misma-hora-inglesa",
  "/united-1730-after-the-pair-oconnells": "/es/united-1730-despues-del-par-oconnells",
  "/after-bernabeu-this-door-espoz-mina-7": "/es/despues-bernabeu-esta-puerta-espoz-mina-7",
  "/evening-nfl-then-atleti-barca-this-door": "/es/nfl-noche-luego-atleti-barca-esta-puerta",
};

/**
 * Multi-locale pages (en/es/de). When a path appears here, buildMetadata
 * emits all listed languages + x-default (EN). Overrides the ES-only pair.
 */
export const HREFLANG_GROUPS: Record<
  string,
  { en: string; es?: string; de?: string }
> = {
  /** Home EN/ES + German index /de (27 Oct 2026). */
  "/": {
    en: "/",
    es: "/es",
    de: "/de",
  },
  "/sports-bar-sol": {
    en: "/sports-bar-sol",
    es: "/es/sports-bar-sol",
  },
  "/oktoberfest-madrid-sol": {
    en: "/oktoberfest-madrid-sol",
    es: "/es/oktoberfest-madrid-sol",
    de: "/de/oktoberfest-madrid-sol",
  },
};

