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
 * Single source of truth for EN + ES, Today/Hoy, Next 7 days/Próximos 7 días and
 * the Home/Sports strip. The static HTML is computed at build time (Europe/Madrid)
 * and every row carries data-start / data-end (ISO with Madrid offset); the
 * inline clock in components/AgendaClock.tsx recomputes the same rules in the
 * browser on load and every minute, so finished rows disappear and Today/Hoy
 * rolls over without waiting for the daily rebuild.
 * Finished = kickoff + SPORT_DURATION_MIN for the sport (see table below).
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
  /** Optional short public line under the row, per locale (omit a locale to show nothing there). */
  line?: { en?: string; es?: string };
};

/**
 * Confirmed screenings.
 * Delta 2026-10-06 ~12:15 Madrid. Radar ligera + verificación emisión ES.
 * Radar Tentative already removed. Non-Radar rows kept ONLY with published
 * Spanish broadcaster (Movistar Plus+ / DAZN / HBO Max Deportes) + source URL;
 * see /workspace/oconnell-agenda-radar-2026-10-06/VERIFICACION-EMISION.md.
 * Removed: URC (no ES channel 26/27), EFL Championship (no ES rights found),
 * NFL Saints–Falcons (past kickoff). Empty awayTeam = race name.
 * Delta 2026-10-07 ~10:20 Madrid: removed past Tue 6 rows; removed Rayo–Athletic
 * (Sat 14:00, doors open 16:00 on Saturdays); added UCL MD2 Wed 14 Oct (Radar
 * Confirmed + UEFA/club times, Movistar Liga de Campeones). LaLiga J8 Fri/Sat
 * reconfirmed on laliga.com. See /workspace/oconnell-agenda-delta-2026-10-07/.
 * Delta 2026-10-08 ~12:10 Madrid (DG order, Radar ligera 8 Oct, all venues have
 * DAZN + Movistar): added Radar-Confirmed Elche–Celta, R. Sociedad–Deportivo,
 * Betis–Osasuna, Racing–Valencia (Sun 11), Levante–Sevilla (Mon 12 holiday),
 * Craiova–Getafe (UECL Thu 15), Getafe–Rayo (Mon 19), Real Madrid–Leipzig
 * (UCL Wed 21), Getafe–Lugano (UECL Thu 22). Channel kept in `note` (not shown).
 * NOT added, venue closed at kickoff (Sat doors 16:00): Rayo–Athletic Sat 10
 * 14:00, Espanyol–Atlético Sat 17 14:00. Rows past the 7-day window stay here
 * and appear when the window reaches them. Radar Tentative not published.
 * See /workspace/oconnell-agenda-radar-2026-10-08/.
 * Delta 2026-10-08 ~12:10 Madrid (DG green light 12:09): owner confirms Premier
 * Sports (UK/IE subscription) in all venues; O'Reilly's checked Planet Rugby.
 * Added URC round 3: Glasgow Warriors–Connacht (Fri 9 20:45), Ulster–Munster
 * (Sat 10 18:30), Leinster–Cardiff (Sat 10 20:45). Venue open (Fri–Sat 16:00).
 */
export const FIXTURES: Fixture[] = [
  { id: "2026-10-08-madrid-partizan", competition: "EuroLeague", homeTeam: "Real Madrid", awayTeam: "Partizan", date: "2026-10-08", kickoffMadrid: "20:45" },
  { id: "2026-10-09-cowboys-buccaneers", competition: "NFL", homeTeam: "Dallas Cowboys", awayTeam: "Tampa Bay Buccaneers", date: "2026-10-09", kickoffMadrid: "02:15" },
  { id: "2026-10-09-barca-zalgiris", competition: "EuroLeague", homeTeam: "Barcelona", awayTeam: "Žalgiris", date: "2026-10-09", kickoffMadrid: "20:30" },
  { id: "2026-10-09-dortmund-werder", competition: "Bundesliga", homeTeam: "Dortmund", awayTeam: "Werder Bremen", date: "2026-10-09", kickoffMadrid: "20:30" },
  { id: "2026-10-09-lens-lyon", competition: "Ligue 1", homeTeam: "Lens", awayTeam: "Lyon", date: "2026-10-09", kickoffMadrid: "20:45" },
  { id: "2026-10-09-glasgow-connacht", competition: "United Rugby Championship", homeTeam: "Glasgow Warriors", awayTeam: "Connacht", date: "2026-10-09", kickoffMadrid: "20:45", note: "Round 3, Premier Sports" },
  { id: "2026-10-09-malaga-espanyol", competition: "LaLiga", homeTeam: "Málaga", awayTeam: "Espanyol", date: "2026-10-09", kickoffMadrid: "21:00" },
  { id: "2026-10-10-chelsea-bournemouth", competition: "Premier League", homeTeam: "Chelsea", awayTeam: "Bournemouth", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-villa-brentford", competition: "Premier League", homeTeam: "Aston Villa", awayTeam: "Brentford", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-ipswich-fulham", competition: "Premier League", homeTeam: "Ipswich", awayTeam: "Fulham", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-sunderland-brighton", competition: "Premier League", homeTeam: "Sunderland", awayTeam: "Brighton", date: "2026-10-10", kickoffMadrid: "16:00" },
  { id: "2026-10-10-northampton-bath", competition: "Premiership", homeTeam: "Northampton", awayTeam: "Bath", date: "2026-10-10", kickoffMadrid: "16:05" },
  { id: "2026-10-10-alaves-atletico", competition: "LaLiga", homeTeam: "Alavés", awayTeam: "Atlético Madrid", date: "2026-10-10", kickoffMadrid: "16:15" },
  { id: "2026-10-10-inter-parma", competition: "Serie A", homeTeam: "Inter", awayTeam: "Parma", date: "2026-10-10", kickoffMadrid: "18:00" },
  { id: "2026-10-10-barcelona-getafe", competition: "LaLiga", homeTeam: "Barcelona", awayTeam: "Getafe", date: "2026-10-10", kickoffMadrid: "18:30" },
  { id: "2026-10-10-ulster-munster", competition: "United Rugby Championship", homeTeam: "Ulster", awayTeam: "Munster", date: "2026-10-10", kickoffMadrid: "18:30", note: "Round 3, Belfast, Premier Sports" },
  { id: "2026-10-10-psg-lemans", competition: "Ligue 1", homeTeam: "PSG", awayTeam: "Le Mans", date: "2026-10-10", kickoffMadrid: "20:45" },
  { id: "2026-10-10-leinster-cardiff", competition: "United Rugby Championship", homeTeam: "Leinster", awayTeam: "Cardiff", date: "2026-10-10", kickoffMadrid: "20:45", note: "Round 3, Dublin, Premier Sports" },
  { id: "2026-10-10-madrid-villarreal", competition: "LaLiga", homeTeam: "Real Madrid", awayTeam: "Villarreal", date: "2026-10-10", kickoffMadrid: "21:00" },
  { id: "2026-10-11-ufc-allen-duncan", competition: "UFC", homeTeam: "Allen", awayTeam: "Duncan", date: "2026-10-11", kickoffMadrid: "02:00" },
  { id: "2026-10-11-singapore-gp", competition: "Formula 1", homeTeam: "Singapore Grand Prix", awayTeam: "", date: "2026-10-11", kickoffMadrid: "14:00" },
  { id: "2026-10-11-elche-celta", competition: "LaLiga", homeTeam: "Elche", awayTeam: "Celta", date: "2026-10-11", kickoffMadrid: "14:00", note: "Movistar LALIGA" },
  { id: "2026-10-11-sociedad-deportivo", competition: "LaLiga", homeTeam: "Real Sociedad", awayTeam: "RC Deportivo", date: "2026-10-11", kickoffMadrid: "16:15", note: "DAZN" },
  { id: "2026-10-11-liverpool-mancity", competition: "Premier League", homeTeam: "Liverpool", awayTeam: "Manchester City", date: "2026-10-11", kickoffMadrid: "17:30" },
  { id: "2026-10-11-betis-osasuna", competition: "LaLiga", homeTeam: "Real Betis", awayTeam: "Osasuna", date: "2026-10-11", kickoffMadrid: "18:30", note: "Movistar LALIGA" },
  { id: "2026-10-11-packers-bears", competition: "NFL", homeTeam: "Green Bay Packers", awayTeam: "Chicago Bears", date: "2026-10-11", kickoffMadrid: "19:00" },
  { id: "2026-10-11-patriots-raiders", competition: "NFL", homeTeam: "New England Patriots", awayTeam: "Las Vegas Raiders", date: "2026-10-11", kickoffMadrid: "19:00" },
  { id: "2026-10-11-commanders-giants", competition: "NFL", homeTeam: "Washington Commanders", awayTeam: "New York Giants", date: "2026-10-11", kickoffMadrid: "19:00" },
  { id: "2026-10-11-troyes-marseille", competition: "Ligue 1", homeTeam: "Troyes", awayTeam: "Marseille", date: "2026-10-11", kickoffMadrid: "20:45" },
  { id: "2026-10-11-racing-valencia", competition: "LaLiga", homeTeam: "Racing Santander", awayTeam: "Valencia", date: "2026-10-11", kickoffMadrid: "21:00", note: "DAZN" },
  { id: "2026-10-11-seahawks-49ers", competition: "NFL", homeTeam: "Seattle Seahawks", awayTeam: "San Francisco 49ers", date: "2026-10-11", kickoffMadrid: "22:25" },
  { id: "2026-10-12-falcons-ravens", competition: "NFL", homeTeam: "Atlanta Falcons", awayTeam: "Baltimore Ravens", date: "2026-10-12", kickoffMadrid: "02:20" },
  { id: "2026-10-12-levante-sevilla", competition: "LaLiga", homeTeam: "Levante", awayTeam: "Sevilla", date: "2026-10-12", kickoffMadrid: "21:00", note: "Movistar LALIGA" },
  { id: "2026-10-13-atletico-manutd", competition: "UEFA Champions League", homeTeam: "Atlético Madrid", awayTeam: "Manchester United", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2, Riyadh Air Metropolitano", line: { en: "Travelling United fans: watch it with us at O'Connell St, a few minutes from Sol." } },
  { id: "2026-10-13-galatasaray-barcelona", competition: "UEFA Champions League", homeTeam: "Galatasaray", awayTeam: "Barcelona", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-13-villarreal-napoli", competition: "UEFA Champions League", homeTeam: "Villarreal", awayTeam: "Napoli", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-13-arsenal-lille", competition: "UEFA Champions League", homeTeam: "Arsenal", awayTeam: "Lille", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-13-inter-brugge", competition: "UEFA Champions League", homeTeam: "Inter", awayTeam: "Club Brugge", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-14-lask-liverpool", competition: "UEFA Champions League", homeTeam: "LASK", awayTeam: "Liverpool", date: "2026-10-14", kickoffMadrid: "18:45", note: "League phase MD2" },
  { id: "2026-10-14-roma-madrid", competition: "UEFA Champions League", homeTeam: "Roma", awayTeam: "Real Madrid", date: "2026-10-14", kickoffMadrid: "21:00", note: "League phase MD2, Stadio Olimpico" },
  { id: "2026-10-14-mancity-psg", competition: "UEFA Champions League", homeTeam: "Manchester City", awayTeam: "Paris Saint-Germain", date: "2026-10-14", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-14-betis-porto", competition: "UEFA Champions League", homeTeam: "Real Betis", awayTeam: "Porto", date: "2026-10-14", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-14-villa-fenerbahce", competition: "UEFA Champions League", homeTeam: "Aston Villa", awayTeam: "Fenerbahçe", date: "2026-10-14", kickoffMadrid: "21:00", note: "League phase MD2" },
  { id: "2026-10-15-craiova-getafe", competition: "UEFA Conference League", homeTeam: "Universitatea Craiova", awayTeam: "Getafe", date: "2026-10-15", kickoffMadrid: "18:45", note: "League phase MD1, M+ Liga de Campeones" },
  { id: "2026-10-19-getafe-rayo", competition: "LaLiga", homeTeam: "Getafe", awayTeam: "Rayo Vallecano", date: "2026-10-19", kickoffMadrid: "21:00", note: "DAZN LALIGA" },
  { id: "2026-10-21-madrid-leipzig", competition: "UEFA Champions League", homeTeam: "Real Madrid", awayTeam: "RB Leipzig", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Plus+" },
  { id: "2026-10-22-getafe-lugano", competition: "UEFA Conference League", homeTeam: "Getafe", awayTeam: "Lugano", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2, M+ Liga de Campeones" },
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

/**
 * Standard screening length per sport (minutes), used to decide when an event
 * has finished. One table for EN, ES, Today/Hoy, Next 7 days and the client
 * clock (the numbers are serialised into data-end on every row).
 */
export const SPORT_DURATION_MIN = {
  football: 120,
  rugby: 120,
  nfl: 210,
  nba: 150,
  basketball: 120,
  f1: 120,
  combat: 240,
  tennis: 180,
  default: 120,
} as const;

export type Sport = keyof typeof SPORT_DURATION_MIN;

const COMPETITION_SPORT: Record<string, Sport> = {
  "Premier League": "football",
  LaLiga: "football",
  "Serie A": "football",
  Bundesliga: "football",
  "Ligue 1": "football",
  Championship: "football",
  "UEFA Champions League": "football",
  "UEFA Europa League": "football",
  "UEFA Conference League": "football",
  "United Rugby Championship": "rugby",
  Premiership: "rugby",
  "Six Nations": "rugby",
  NFL: "nfl",
  NBA: "nba",
  EuroLeague: "basketball",
  "Formula 1": "f1",
  UFC: "combat",
  Boxing: "combat",
};

export function fixtureSport(f: Fixture): Sport {
  return COMPETITION_SPORT[f.competition] ?? "default";
}

export function fixtureEndMs(f: Fixture): number | null {
  const start = fixtureStartMs(f);
  if (start == null) return null;
  return start + SPORT_DURATION_MIN[fixtureSport(f)] * 60 * 1000;
}

/** ISO 8601 with the Europe/Madrid offset, e.g. 2026-10-09T20:45:00+02:00. */
export function madridIso(ms: number): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Madrid",
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(new Date(ms));
  const v = (t: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === t)?.value ?? "00";
  const wall = Date.UTC(
    Number(v("year")),
    Number(v("month")) - 1,
    Number(v("day")),
    Number(v("hour")),
    Number(v("minute")),
    Number(v("second")),
  );
  const off = Math.round((wall - ms) / 60000);
  const sign = off >= 0 ? "+" : "-";
  const abs = Math.abs(off);
  const oh = String(Math.floor(abs / 60)).padStart(2, "0");
  const om = String(abs % 60).padStart(2, "0");
  return `${v("year")}-${v("month")}-${v("day")}T${v("hour")}:${v("minute")}:${v("second")}${sign}${oh}:${om}`;
}

/** A screening stays listed until start + standard duration for its sport. */
export function isNotFinished(f: Fixture, now = new Date()): boolean {
  const end = fixtureEndMs(f);
  return end != null && end > now.getTime();
}

/** Started and not finished yet. */
export function isOnNow(f: Fixture, now = new Date()): boolean {
  const start = fixtureStartMs(f);
  const end = fixtureEndMs(f);
  return start != null && end != null && start <= now.getTime() && end > now.getTime();
}

/** Add calendar days to a YYYY-MM-DD date (pure calendar maths, no timezone). */
export function addMadridDays(ymd: string, days: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days, 12)).toISOString().slice(0, 10);
}

/** Inclusive window: today through the seventh day ahead (8 Madrid dates).
 * Sunday refresh needs Mon→Sun of the coming week visible the same day. */
export function agendaWindowEnd(today: string): string {
  return addMadridDays(today, 7);
}

function byKickoff(a: Fixture, b: Fixture): number {
  return (
    (fixtureStartMs(a) ?? 0) - (fixtureStartMs(b) ?? 0) ||
    a.id.localeCompare(b.id)
  );
}

/** Every confirmed row that has not finished at `now`, in kickoff order. */
export function getAgendaCandidates(now = new Date()): Fixture[] {
  return FIXTURES.filter((f) => isConfirmedFixture(f) && isNotFinished(f, now)).sort(byKickoff);
}

/**
 * Today/Hoy: not finished and either kicks off on today's Madrid date or is
 * already on (e.g. a late game that started yesterday and runs past midnight).
 */
export function isTodaySlot(f: Fixture, today: string, now = new Date()): boolean {
  if (!isConfirmedFixture(f) || !isNotFinished(f, now)) return false;
  return f.date === today || isOnNow(f, now);
}

/** Next 7 days: not finished, later Madrid date, within the window. */
export function isWeekSlot(f: Fixture, today: string, now = new Date()): boolean {
  if (!isConfirmedFixture(f) || !isNotFinished(f, now)) return false;
  if (isTodaySlot(f, today, now)) return false;
  return f.date > today && f.date <= agendaWindowEnd(today);
}

export function getTonightFixtures(today: string, now = new Date()): Fixture[] {
  return FIXTURES.filter((f) => isTodaySlot(f, today, now)).sort(byKickoff);
}

/** Today + next 7 days (not finished), kickoff order. */
export function getUpcomingFixtures(today: string, now = new Date()): Fixture[] {
  return FIXTURES.filter(
    (f) => isTodaySlot(f, today, now) || isWeekSlot(f, today, now),
  ).sort(byKickoff);
}

/**
 * Build clock shared by every page of one build (next.config.ts sets it once),
 * so EN and ES static HTML are cut at the same instant.
 */
export function agendaBuildNow(): Date {
  const ms = Number(process.env.OCONNELL_BUILD_MS);
  return new Date(Number.isFinite(ms) && ms > 0 ? ms : Date.now());
}

/** Attributes the client clock reads (components/AgendaClock.tsx). */
export function fixtureDataAttrs(f: Fixture): Record<string, string> {
  return {
    "data-start": madridIso(fixtureStartMs(f) ?? 0),
    "data-end": madridIso(fixtureEndMs(f) ?? 0),
    "data-day": f.date,
  };
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
  const d = new Date(`${date}T12:00:00Z`);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Madrid",
  }).format(d);
}
