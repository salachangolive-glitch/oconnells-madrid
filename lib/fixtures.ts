/**
 * Ops-editable fixture list for What's On.
 * Update this file when confirmed matches change.
 *
 * Gate (FASE2): only list IMPORTANT, confirmed events with BOTH
 *   - date (YYYY-MM-DD, Madrid calendar day)
 *   - kickoffMadrid (HH:mm Europe/Madrid, verified)
 * Empty array is OK when nothing is confirmed for the next days.
 * Competitions: PL / CL / LaLiga, Irish rugby, major NFL — when confirmed.
 * Do not invent kickoff times; do not leave stale past fixtures in the list.
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
  /**
   * Madrid local time HH:mm — REQUIRED for public display.
   * Rows without kickoffMadrid are treated as unconfirmed and filtered out.
   */
  kickoffMadrid?: string;
  note?: string;
};

/**
 * Confirmed fixtures only (newest/relevant first).
 * Cleared 2026-10-02: removed Elche–Real Madrid 2026-09-15 (past).
 * Add rows again when EVENTO + hora Madrid are verified.
 */
export const FIXTURES: Fixture[] = [];

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
    en: "Premier League, Champions League & LaLiga on the screens when they’re on",
    es: "Premier League, Champions League y LaLiga en pantallas cuando tocan",
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

/** True when a fixture has a verified Madrid kickoff time. */
export function isConfirmedFixture(f: Fixture): boolean {
  return Boolean(f.kickoffMadrid && /^\d{2}:\d{2}$/.test(f.kickoffMadrid));
}

export function getTonightFixtures(today: string): Fixture[] {
  return FIXTURES.filter(
    (f) => isConfirmedFixture(f) && f.date === today,
  );
}

export function getUpcomingFixtures(today: string): Fixture[] {
  return FIXTURES.filter(
    (f) => isConfirmedFixture(f) && f.date >= today,
  ).sort((a, b) => a.date.localeCompare(b.date));
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
