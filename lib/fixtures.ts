/**
 * Ops-editable event list for What's On (user-facing name — never "Fixtures" in UI).
 * Update this file when confirmed matches / events change.
 *
 * Gate (permanent): only list IMPORTANT, confirmed events with BOTH
 *   - date (YYYY-MM-DD, Madrid calendar day)
 *   - kickoffMadrid (HH:mm Europe/Madrid, verified)
 * Plus: emission confirmed for the pub + pub expected open. Empty FIXTURES[] is OK.
 *
 * Competitions when confirmed: football (PL / CL / LaLiga / others), NFL, NBA,
 * rugby, Formula 1, tennis, and other big events with a real Madrid time.
 *
 * Ops cadence (permanent):
 *   - Sunday: publish / refresh the week agenda
 *   - 2–3 days out: reconfirm kickoff + emission
 *   - Matchday: reminder check before doors
 * Do not invent kickoff times; do not leave stale past rows in the list.
 *
 * IMPORTANT: Do not call madridTodayYmd() / getTonightFixtures() / getUpcomingFixtures()
 * at static build time for UI labels — use the client FixtureList / FixtureStrip so
 * "Today"/"Hoy" track the visitor's Europe/Madrid calendar day.
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
 * Confirmed events only (newest/relevant first).
 * Cleared 2026-10-02: removed Elche–Real Madrid 2026-09-15 (past).
 * Add rows again when EVENTO + hora Madrid + emisión are verified.
 */
export const FIXTURES: Fixture[] = [];

/**
 * Recurring weekly highlights (reference copy — What's On pages may inline).
 * Thursday €1 only — no Wednesday promo. No Erasmus stuffing in the Thursday line.
 */
export const RECURRING = {
  thursdayShots: {
    en: "Every Thursday: €1 shots at the pub. Ask at the bar when you arrive.",
    es: "Todos los jueves: chupitos a 1 € en el pub. Pregunta en barra al llegar.",
  },
  liveSports: {
    en: "O'Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7. We put major live sport on our screens when it's confirmed: football, NFL, NBA, rugby, Formula 1, tennis and more. Check What's On above for this week's schedule, or ask at the bar if you're looking for a specific game.",
    es: "O'Connell St es un pub irlandés junto a Puerta del Sol — Espoz y Mina 7. Ponemos grandes eventos deportivos en nuestras pantallas cuando están confirmados: fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más. Consulta la Agenda arriba para esta semana, o pregunta en barra si buscas un partido concreto.",
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
