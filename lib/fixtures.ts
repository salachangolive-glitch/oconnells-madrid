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
 * Confirmed screenings only.
 * Reviewed 2026-10-03 (window 3–10 Oct, Europe/Madrid).
 * Kickoffs for Nations League, LaLiga J8 and Premier League 10 Oct are real,
 * and the pub is open for the evening ones. No public O'Connell source
 * confirms those matches are on the screens. A note that GBP posted them
 * on 2026-10-02 could not be checked against a live post. List stays empty.
 * Do not invent screenings.
 */
export const FIXTURES: Fixture[] = [];

export const RECURRING = {
  thursdayShots: {
    en: "Thursday is the night for €1 shots at the pub. Ask at the bar when you arrive — if anything is different that night, they'll tell you.",
    es: "El jueves es la noche de los chupitos a 1 €. Pregunta en la barra al llegar; si esa noche cambia algo, te lo dicen allí.",
  },
  liveSports: {
    en: "O'Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7. We put major live sport on our screens when it's confirmed: football, NFL, NBA, rugby, Formula 1, tennis and more. See Today and This week on this page, or ask at the bar if you're looking for a specific game.",
    es: "O'Connell St es un pub irlandés junto a Puerta del Sol — Espoz y Mina 7. Retransmitimos grandes eventos deportivos en nuestras pantallas cuando están confirmados: fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más. Consulta la agenda de hoy y de esta semana, o pregunta en la barra si buscas un evento concreto.",
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
