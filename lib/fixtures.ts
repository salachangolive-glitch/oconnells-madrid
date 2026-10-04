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
 * Delta 2026-10-04 ~19:00 Madrid. Window Sun 4 evening through Sun 11.
 * Removed finished: Commanders–Colts (final), Saracens–Sale (final).
 * Liga F Clásico moved 17:00 → 19:00 (Liga F comunicado, rain).
 * UFC Allen–Duncan main card 02:00 Madrid (UFC.com Sat 20:00 EDT), not 01:00.
 * Added PL still inside doors (premierleague.com, BST+1) and Elche–Celta
 * 14:00 (LaLiga ISO 12:00Z). F1 Singapore Grand Prix only: Sunday 11 Oct
 * 20:00–22:00 SGT (formula1.com) = 14:00 Madrid. Practice, sprint and
 * qualifying start while the pub is closed, so they stay off the list.
 * Empty awayTeam means the card is the race name, not a fake opponent.
 */
export const FIXTURES: Fixture[] = [
  { id: "2026-10-04-bills-patriots", competition: "NFL", homeTeam: "Buffalo Bills", awayTeam: "New England Patriots", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-jets-bears", competition: "NFL", homeTeam: "Chicago Bears", awayTeam: "New York Jets", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-murcia-barca", competition: "Liga ACB", homeTeam: "UCAM Murcia", awayTeam: "Barcelona", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-texans-cowboys", competition: "NFL", homeTeam: "Houston Texans", awayTeam: "Dallas Cowboys", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-barca-madrid-ligaf", competition: "Liga F", homeTeam: "Barcelona", awayTeam: "Real Madrid", date: "2026-10-04", kickoffMadrid: "19:00" },
  { id: "2026-10-04-greece-germany", competition: "UEFA Nations League", homeTeam: "Greece", awayTeam: "Germany", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-ireland-israel", competition: "UEFA Nations League", homeTeam: "Republic of Ireland", awayTeam: "Israel", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-netherlands-serbia", competition: "UEFA Nations League", homeTeam: "Netherlands", awayTeam: "Serbia", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-portugal-norway", competition: "UEFA Nations League", homeTeam: "Portugal", awayTeam: "Norway", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-wales-denmark", competition: "UEFA Nations League", homeTeam: "Wales", awayTeam: "Denmark", date: "2026-10-04", kickoffMadrid: "20:45" },
  { id: "2026-10-04-raiders-chiefs", competition: "NFL", homeTeam: "Las Vegas Raiders", awayTeam: "Kansas City Chiefs", date: "2026-10-04", kickoffMadrid: "22:25" },
  { id: "2026-10-05-lions-panthers", competition: "NFL", homeTeam: "Carolina Panthers", awayTeam: "Detroit Lions", date: "2026-10-05", kickoffMadrid: "02:20" },
  { id: "2026-10-05-france-belgium", competition: "UEFA Nations League", homeTeam: "France", awayTeam: "Belgium", date: "2026-10-05", kickoffMadrid: "20:45" },
  { id: "2026-10-05-italy-turkey", competition: "UEFA Nations League", homeTeam: "Italy", awayTeam: "Turkey", date: "2026-10-05", kickoffMadrid: "20:45" },
  { id: "2026-10-06-falcons-saints", competition: "NFL", homeTeam: "New Orleans Saints", awayTeam: "Atlanta Falcons", date: "2026-10-06", kickoffMadrid: "02:15" },
  { id: "2026-10-06-croatia-spain", competition: "UEFA Nations League", homeTeam: "Croatia", awayTeam: "Spain", date: "2026-10-06", kickoffMadrid: "20:45" },
  { id: "2026-10-06-england-czechia", competition: "UEFA Nations League", homeTeam: "England", awayTeam: "Czechia", date: "2026-10-06", kickoffMadrid: "20:45" },
  { id: "2026-10-08-madrid-partizan", competition: "EuroLeague", homeTeam: "Real Madrid", awayTeam: "Partizan", date: "2026-10-08", kickoffMadrid: "20:45" },
  { id: "2026-10-09-barca-zalgiris", competition: "EuroLeague", homeTeam: "Barcelona", awayTeam: "Žalgiris", date: "2026-10-09", kickoffMadrid: "20:30" },
  { id: "2026-10-09-dortmund-werder", competition: "Bundesliga", homeTeam: "Dortmund", awayTeam: "Werder Bremen", date: "2026-10-09", kickoffMadrid: "20:30" },
  { id: "2026-10-09-glasgow-connacht", competition: "United Rugby Championship", homeTeam: "Glasgow", awayTeam: "Connacht", date: "2026-10-09", kickoffMadrid: "20:45" },
  { id: "2026-10-09-lens-lyon", competition: "Ligue 1", homeTeam: "Lens", awayTeam: "Lyon", date: "2026-10-09", kickoffMadrid: "20:45" },
  { id: "2026-10-09-malaga-espanyol", competition: "LaLiga", homeTeam: "Málaga", awayTeam: "Espanyol", date: "2026-10-09", kickoffMadrid: "21:00" },
  { id: "2026-10-09-westham-qpr", competition: "Championship", homeTeam: "West Ham", awayTeam: "QPR", date: "2026-10-09", kickoffMadrid: "21:00" },
  { id: "2026-10-10-chelsea-bournemouth", competition: "Premier League", homeTeam: "Chelsea", awayTeam: "Bournemouth", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-villa-brentford", competition: "Premier League", homeTeam: "Aston Villa", awayTeam: "Brentford", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-ipswich-fulham", competition: "Premier League", homeTeam: "Ipswich", awayTeam: "Fulham", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-sunderland-brighton", competition: "Premier League", homeTeam: "Sunderland", awayTeam: "Brighton", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-derby-wrexham", competition: "Championship", homeTeam: "Derby", awayTeam: "Wrexham", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-northampton-bath", competition: "Premiership", homeTeam: "Northampton", awayTeam: "Bath", date: "2026-10-10", kickoffMadrid: "16:05" },
  { id: "2026-10-10-alaves-atletico", competition: "LaLiga", homeTeam: "Alavés", awayTeam: "Atlético Madrid", date: "2026-10-10", kickoffMadrid: "16:15" },
  { id: "2026-10-10-inter-parma", competition: "Serie A", homeTeam: "Inter", awayTeam: "Parma", date: "2026-10-10", kickoffMadrid: "18:00" },
  { id: "2026-10-10-barcelona-getafe", competition: "LaLiga", homeTeam: "Barcelona", awayTeam: "Getafe", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-ulster-munster", competition: "United Rugby Championship", homeTeam: "Ulster", awayTeam: "Munster", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-united-tottenham", competition: "Premier League", homeTeam: "Manchester United", awayTeam: "Tottenham", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-leinster-cardiff", competition: "United Rugby Championship", homeTeam: "Leinster", awayTeam: "Cardiff", date: "2026-10-10", kickoffMadrid: "20:45" },
  { id: "2026-10-10-psg-lemans", competition: "Ligue 1", homeTeam: "PSG", awayTeam: "Le Mans", date: "2026-10-10", kickoffMadrid: "20:45" },
  { id: "2026-10-10-madrid-villarreal", competition: "LaLiga", homeTeam: "Real Madrid", awayTeam: "Villarreal", date: "2026-10-10", kickoffMadrid: "21:00" },
  { id: "2026-10-11-ufc-allen-duncan", competition: "UFC", homeTeam: "Allen", awayTeam: "Duncan", date: "2026-10-11", kickoffMadrid: "02:00" },
  { id: "2026-10-11-elche-celta", competition: "LaLiga", homeTeam: "Elche", awayTeam: "Celta", date: "2026-10-11", kickoffMadrid: "14:00" },
  { id: "2026-10-11-singapore-gp", competition: "Formula 1", homeTeam: "Singapore Grand Prix", awayTeam: "", date: "2026-10-11", kickoffMadrid: "14:00" },
  { id: "2026-10-11-palace-forest", competition: "Premier League", homeTeam: "Crystal Palace", awayTeam: "Nottingham Forest", date: "2026-10-11", kickoffMadrid: "15:00" },
  { id: "2026-10-11-hull-everton", competition: "Premier League", homeTeam: "Hull City", awayTeam: "Everton", date: "2026-10-11", kickoffMadrid: "15:00" },
  { id: "2026-10-11-sociedad-deportivo", competition: "LaLiga", homeTeam: "Real Sociedad", awayTeam: "RC Deportivo", date: "2026-10-11", kickoffMadrid: "16:15" },
  { id: "2026-10-11-liverpool-mancity", competition: "Premier League", homeTeam: "Liverpool", awayTeam: "Manchester City", date: "2026-10-11", kickoffMadrid: "17:30" },
  { id: "2026-10-11-betis-osasuna", competition: "LaLiga", homeTeam: "Real Betis", awayTeam: "Osasuna", date: "2026-10-11", kickoffMadrid: "18:30" },
  { id: "2026-10-11-troyes-marseille", competition: "Ligue 1", homeTeam: "Troyes", awayTeam: "Marseille", date: "2026-10-11", kickoffMadrid: "20:45" },
  { id: "2026-10-11-racing-valencia", competition: "LaLiga", homeTeam: "Racing Santander", awayTeam: "Valencia", date: "2026-10-11", kickoffMadrid: "21:00" },
];

export const RECURRING = {
  thursdayShots: {
    en: "€1 shots every Thursday. Ask at the bar for that night’s selection.",
    es: "Los jueves tenemos chupitos a 1 €. Consulta en barra la selección disponible esa noche.",
  },
  liveSports: {
    en: "O'Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7. We show confirmed live sport on the screens: football, NFL, NBA, rugby, Formula 1, tennis and more. See Today and the next 7 days on this page, or ask at the bar if you want a specific game.",
    es: "O'Connell St es un pub irlandés junto a Puerta del Sol — Espoz y Mina 7. Ponemos en las pantallas el deporte en directo que está confirmado: fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más. Mira Hoy y los próximos 7 días en esta página, o pregunta en la barra si buscas un partido concreto.",
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

/**
 * UTC instant for a Madrid wall-clock date + HH:mm.
 * Overnight cards keep the Madrid calendar day already stored on `date`.
 */
export function madridWallTimeMs(date: string, time: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) {
    return null;
  }
  const [y, mo, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const utcGuess = Date.UTC(y, mo - 1, d, hh, mm, 0);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(utcGuess));
  const n = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(
    n("year"),
    n("month") - 1,
    n("day"),
    n("hour"),
    n("minute"),
    n("second"),
  );
  return utcGuess - (asUtc - utcGuess);
}

export function fixtureStartMs(f: Fixture): number | null {
  if (!f.kickoffMadrid) return null;
  return madridWallTimeMs(f.date, f.kickoffMadrid);
}

/** Hide a screening once its Madrid start is no longer in the future. */
export function isStillToCome(f: Fixture, now = new Date()): boolean {
  const start = fixtureStartMs(f);
  return start != null && start > now.getTime();
}

/** Add calendar days in Europe/Madrid (noon anchor, safe across DST). */
export function addMadridDays(ymd: string, days: number): string {
  const noon = madridWallTimeMs(ymd, "12:00");
  if (noon == null) return ymd;
  return madridTodayYmd(new Date(noon + days * 24 * 60 * 60 * 1000));
}

/** Inclusive window: today through the seventh day ahead (8 Madrid dates).
 * Sunday refresh needs Mon→Sun of the coming week visible the same day. */
export function agendaWindowEnd(today: string): string {
  return addMadridDays(today, 7);
}

function byKickoff(a: Fixture, b: Fixture): number {
  return (
    a.date.localeCompare(b.date) ||
    (a.kickoffMadrid ?? "").localeCompare(b.kickoffMadrid ?? "")
  );
}

export function getTonightFixtures(today: string, now = new Date()): Fixture[] {
  return FIXTURES.filter(
    (f) =>
      isConfirmedFixture(f) &&
      f.date === today &&
      isStillToCome(f, now),
  ).sort(byKickoff);
}

export function getUpcomingFixtures(today: string, now = new Date()): Fixture[] {
  const end = agendaWindowEnd(today);
  return FIXTURES.filter(
    (f) =>
      isConfirmedFixture(f) &&
      f.date >= today &&
      f.date <= end &&
      isStillToCome(f, now),
  ).sort(byKickoff);
}

/** National teams only. Club, NFL and NBA names stay as stored. */
const NATIONS_ES: Record<string, string> = {
  England: "Inglaterra",
  Spain: "España",
  Germany: "Alemania",
  France: "Francia",
  Italy: "Italia",
  Netherlands: "Países Bajos",
  Croatia: "Croacia",
  Czechia: "Chequia",
  Portugal: "Portugal",
  Ireland: "Irlanda",
  "Republic of Ireland": "Irlanda",
  Israel: "Israel",
  Greece: "Grecia",
  Wales: "Gales",
  Denmark: "Dinamarca",
  Belgium: "Bélgica",
  Turkey: "Turquía",
  Norway: "Noruega",
  Serbia: "Serbia",
};

export function displayTeam(name: string, locale: "en" | "es"): string {
  if (locale !== "es") return name;
  return NATIONS_ES[name] ?? name;
}

/** Bare "Championship" / "Premiership" in this list are EFL and Premiership Rugby. */
export function displayCompetition(name: string): string {
  if (name === "Championship") return "EFL Championship";
  if (name === "Premiership") return "Premiership Rugby";
  return name;
}


/** Race rows store the event name in homeTeam and leave awayTeam empty. */
export function fixtureMatchLabel(f: Fixture, locale: "en" | "es"): string {
  const home = displayTeam(f.homeTeam, locale);
  const away = f.awayTeam.trim();
  if (!away) return home;
  return `${home} vs ${displayTeam(away, locale)}`;
}

/** Existing door policy. Shown on each Confirmed card. */
export function screenPolicyLine(locale: "en" | "es"): string {
  return locale === "es"
    ? "En las pantallas. Sin reserva, por orden de llegada."
    : "On the screens. No booking — first come.";
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
