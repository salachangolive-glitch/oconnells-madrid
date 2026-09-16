/**
 * Ops-editable fixture list for What's On.
 * Update this file when confirmed matches change.
 * Times: only include kickoffMadrid when verified (Europe/Madrid). Omit if unknown.
 *
 * IMPORTANT: Do not call madridTodayYmd() / getTonightFixtures() / getUpcomingFixtures()
 * at static build time for UI labels — use the client FixtureList / FixtureStrip so
 * "Tonight"/"Hoy" track the visitor's Europe/Madrid calendar day.
 */

export type Fixture = {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  /** ISO date YYYY-MM-DD in Madrid calendar day */
  date: string;
  /** Optional Madrid local time HH:mm — omit if unknown */
  kickoffMadrid?: string;
  note?: string;
};

/** Confirmed fixtures (newest/relevant first). Historical rows stay; client hides past days. */
export const FIXTURES: Fixture[] = [
  {
    id: "2026-09-15-elche-real-madrid",
    competition: "LaLiga",
    homeTeam: "Elche",
    awayTeam: "Real Madrid",
    date: "2026-09-15",
    kickoffMadrid: "21:30",
  },
];

/** Recurring weekly highlights (not dated fixtures). */
export const RECURRING = {
  thursdayShots: {
    en: "Thursday €1 shots — Erasmus, internationals and friends near Sol",
    es: "Jueves chupitos a 1 € — Erasmus, internacionales y amigos cerca de Sol",
  },
  wednesdayShots: {
    en: "Wednesday €1 shots also on",
    es: "También hay chupitos a 1 € los miércoles",
  },
  football: {
    en: "Premier League, Champions League & LaLiga on the screens",
    es: "Premier League, Champions League y LaLiga en pantallas",
  },
} as const;

/** Europe/Madrid calendar YYYY-MM-DD for a given instant (defaults to now). */
export function madridTodayYmd(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function getTonightFixtures(today: string): Fixture[] {
  return FIXTURES.filter((f) => f.date === today);
}

export function getUpcomingFixtures(today: string): Fixture[] {
  return FIXTURES.filter((f) => f.date >= today).sort((a, b) =>
    a.date.localeCompare(b.date),
  );
}

export function formatFixtureDay(date: string, locale: "en" | "es" = "en"): string {
  const d = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Madrid",
  }).format(d);
}
