/**
 * Unique O'Connell's Sunday 8 Nov 2026 after-Bernabéu / evening-NFL facts.
 * Named broadcasts only where this site already confirms them.
 * Do not invent stadium-to-Sol distances or extra kickoff clocks.
 */
export const AFTER_GAME_SUNDAY = {
  day: "2026-11-08",
  lastDay: "2026-11-08",
} as const;

export const AFTER_GAME_PATHS = {
  bernabeuEn: "/after-bernabeu-this-door-espoz-mina-7",
  bernabeuEs: "/es/despues-bernabeu-esta-puerta-espoz-mina-7",
  eveningEn: "/evening-nfl-then-atleti-barca-this-door",
  eveningEs: "/es/nfl-noche-luego-atleti-barca-esta-puerta",
} as const;

export const HUB = {
  en: "https://dublinersmadrid.es/4-bars-one-fan-weekend/",
  es: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/",
  ctaEn: "MEET US NEAR SOL",
  ctaEs: "VER LOS CUATRO BARES",
} as const;

/** CID Maps already published on this site. Four Corner stays search-only. */
export const BAR_MAPS = {
  oreillys: "https://maps.google.com/maps?cid=9285869778750479445",
  dubliners: "https://www.google.com/maps?cid=4384002297188950803",
  oconnells: "https://www.google.com/maps?cid=10697659365903665225",
  fourCorner:
    "https://www.google.com/maps/search/?api=1&query=Four+Corner+Calle+de+la+Victoria+6+28012+Madrid",
} as const;
