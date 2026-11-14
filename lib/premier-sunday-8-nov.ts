/**
 * Unique O'Connell's Premier League Sunday 8 Nov 2026 facts.
 * Times are Europe/Madrid (UK GMT +1). Do not claim a bar shows a named match.
 */
export const PL_SUNDAY = {
  day: "2026-11-08",
  lastDay: "2026-11-08",
} as const;

export const PL_PATHS = {
  liverpoolEn: "/liverpool-1500-usual-lock-oconnells",
  liverpoolEs: "/es/liverpool-1500-cerrojo-habitual-oconnells",
  chelseaEn: "/chelsea-1500-same-english-hour",
  chelseaEs: "/es/chelsea-1500-misma-hora-inglesa",
  unitedEn: "/united-1730-after-the-pair-oconnells",
  unitedEs: "/es/united-1730-despues-del-par-oconnells",
} as const;

export const PL_KICKOFFS = {
  palaceLiverpool: {
    home: "Crystal Palace",
    away: "Liverpool",
    madrid: "15:00",
  },
  sunderlandChelsea: {
    home: "Sunderland",
    away: "Chelsea",
    madrid: "15:00",
  },
  brightonBrentford: {
    home: "Brighton",
    away: "Brentford",
    madrid: "15:00",
  },
  ipswichBournemouth: {
    home: "Ipswich",
    away: "Bournemouth",
    madrid: "15:00",
  },
  unitedVilla: {
    home: "Manchester United",
    away: "Aston Villa",
    madrid: "17:30",
  },
} as const;

export const HUB = {
  en: "https://dublinersmadrid.es/4-bars-one-fan-weekend/",
  es: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/",
  ctaEn: "MEET US NEAR SOL",
  ctaEs: "VER LOS CUATRO BARES",
} as const;

export const BAR_MAPS = {
  oreillys: "https://maps.google.com/maps?cid=9285869778750479445",
  dubliners: "https://www.google.com/maps?cid=4384002297188950803",
  oconnells: "https://www.google.com/maps?cid=10697659365903665225",
  fourCorner:
    "https://www.google.com/maps/search/?api=1&query=Four+Corner+Calle+de+la+Victoria+6+28012+Madrid",
} as const;
