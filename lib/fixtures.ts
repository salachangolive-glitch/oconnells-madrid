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
 * Confirmed screenings.
 * Owner authorized publication of the reviewed 3–10 Oct 2026 agenda
 * on 2026-10-03 (via DG). Gate for this list: real event, verified
 * Madrid kickoff, pub open at kickoff. Marquee only (no NL C/D,
 * no closed-door kickoffs, no minor league games).
 * Times: UEFA / BBC / England Football / LaLiga / clubs / Premier League
 * / NFL, Europe/Madrid. Do not add rows without a verified clock.
 */
export const FIXTURES: Fixture[] = [
  { id: "2026-10-03-croatia-england", competition: "UEFA Nations League", homeTeam: "Croatia", awayTeam: "England", date: "2026-10-03", kickoffMadrid: "18:00" },
  { id: "2026-10-03-spain-czechia", competition: "UEFA Nations League", homeTeam: "Spain", awayTeam: "Czechia", date: "2026-10-03", kickoffMadrid: "20:45" },
  { id: "2026-10-04-colts-commanders", competition: "NFL", homeTeam: "Indianapolis Colts", awayTeam: "Washington Commanders", date: "2026-10-04", kickoffMadrid: "15:30" },
  { id: "2026-10-04-jets-bears", competition: "NFL", homeTeam: "New York Jets", awayTeam: "Chicago Bears", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-portugal-norway", competition: "UEFA Nations League", homeTeam: "Portugal", awayTeam: "Norway", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-ireland-israel", competition: "UEFA Nations League", homeTeam: "Republic of Ireland", awayTeam: "Israel", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-greece-germany", competition: "UEFA Nations League", homeTeam: "Greece", awayTeam: "Germany", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-netherlands-serbia", competition: "UEFA Nations League", homeTeam: "Netherlands", awayTeam: "Serbia", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-wales-denmark", competition: "UEFA Nations League", homeTeam: "Wales", awayTeam: "Denmark", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-05-france-belgium", competition: "UEFA Nations League", homeTeam: "France", awayTeam: "Belgium", date: "2026-10-05", kickoffMadrid: "20:45" },
  { id: "2026-10-05-italy-turkey", competition: "UEFA Nations League", homeTeam: "Italy", awayTeam: "Turkey", date: "2026-10-05", kickoffMadrid: "20:45" },
  { id: "2026-10-06-croatia-spain", competition: "UEFA Nations League", homeTeam: "Croatia", awayTeam: "Spain", date: "2026-10-06", kickoffMadrid: "20:45" },
  { id: "2026-10-06-england-czechia", competition: "UEFA Nations League", homeTeam: "England", awayTeam: "Czechia", date: "2026-10-06", kickoffMadrid: "20:45" },
  { id: "2026-10-10-chelsea-bournemouth", competition: "Premier League", homeTeam: "Chelsea", awayTeam: "Bournemouth", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-alaves-atletico", competition: "LaLiga", homeTeam: "Alavés", awayTeam: "Atlético Madrid", date: "2026-10-10", kickoffMadrid: "16:15" },
  { id: "2026-10-10-barcelona-getafe", competition: "LaLiga", homeTeam: "Barcelona", awayTeam: "Getafe", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-united-tottenham", competition: "Premier League", homeTeam: "Manchester United", awayTeam: "Tottenham", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-madrid-villarreal", competition: "LaLiga", homeTeam: "Real Madrid", awayTeam: "Villarreal", date: "2026-10-10", kickoffMadrid: "21:00" },
];

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
