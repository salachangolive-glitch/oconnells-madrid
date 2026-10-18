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

import { HOURS } from "./venue";

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
  /**
   * Optional public channel name (DAZN / Movistar LALIGA / ...), never a dial
   * number. Omit while the broadcaster is pending: nothing is shown.
   */
  channel?: string;
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
 * Weekly agenda 2026-10-11 (DG Sunday order, week Mon 12–Sun 18 Oct): channels
 * limited to DAZN / Movistar (M+) / Premier Sports. Added: LaLiga J9 (movistar.es
 * operator calendar dials 54/57 M+ LALIGA, 55/58 DAZN LALIGA + laliga.com), PL MW6
 * Mon + MW7 (premierleague.com times; DAZN all PL matches in Spain), UEL MD2
 * Real Sociedad + Celta (Movistar Plus+ fichas), EuroLeague Real Madrid x2 +
 * Barça (Movistar Plus+ fichas), NFL wk5 MNF + wk6 TNF/London/Sun/SNF (nfl.com /
 * ESPN times, DAZN NFL Game Pass = every game). Overnight NFL rows keep the
 * Madrid calendar day (venue open until 03:00/03:30 the night before).
 * NOT added: Espanyol–Atlético Sat 17 14:00 and Everton–Chelsea Sat 17 13:30
 * (doors 16:00 on Saturdays); no URC (next round 23–24 Oct); no F1 (next 25 Oct);
 * Premiership rugby (no Movistar ficha for 16–18 Oct); UFC (HBO Max, not one of
 * our channels). See /workspace/oconnell-agenda-semana-2026-10-12/.
 * Delta 2026-10-11 ~09:40 Madrid (DG order 09:26, venue-hours rule): a row is
 * published only if it kicks off with the bar open and at least 60 min before
 * closing (lib/venue.ts HOURS; kickoffs before 06:00 belong to the previous
 * night). Removed overnight NFL: Falcons–Ravens Mon 12 02:20, Rams–Bills Tue 13
 * 02:15, Broncos–Seahawks Fri 16 02:15, Packers–Cowboys Mon 19 02:20 (last
 * kickoff 02:00 Sun–Thu nights, 02:30 Fri–Sat nights). isWithinVenueHours()
 * now enforces the same rule at build time for every row.
 * See /workspace/oconnell-agenda-semana-2026-10-12/nfl-cierre/.
 * Delta 2026-10-13 ~10:40 Madrid (routine): window now reaches Tue 20. Reconfirmed
 * UCL MD2 Tue 13/Wed 14 (uefa.com), UEL/UECL Thu 15 (uefa.com), EuroLeague Thu 15
 * / Fri 16 (movistararena.es, movistarplus.es), LaLiga J9 (laliga.com), PL MW7
 * (premierleague.com): no time changes. Added (owner rule 2026-10-13, all sport
 * live): Lyon–Crystal Palace 18:45, Benfica–Celtic and Brighton–Kauno Žalgiris
 * 21:00 (Thu 15); Spurs–Coventry Mon 19 21:00; UCL MD3 Tue 20 21:00 PSG–Barcelona,
 * Stuttgart–Atlético, Liverpool–Villarreal, Man City–AEK. Overnight NFL still
 * excluded by venue-hours rule. See /workspace/oconnell-agenda-delta-2026-10-13/.
 * Delta 2026-10-17 ~08:45 Madrid (Localo request, owner rule: all matches except
 * outside opening hours): window now reaches Sat 24. Added PL MW8 Fri 23 / Sat 24
 * (premierleague.com amendments) and LaLiga J10 Fri 23 / Sat 24 (laliga.com).
 * NOT added, venue closed at kickoff (Sat doors 16:00): Aston Villa–Man City
 * 13:30, Rayo–Elche 14:00. See /workspace/oconnell-localo-req-2026-10-17/.
 * Delta 2026-10-17 ~09:00 Madrid (DG order, Radar /workspace/radar/2026-10-17-j10-copa.md,
 * owner rule: all matches except outside opening hours): added LaLiga J10 Sun 25 /
 * Mon 26 (Clásico Barcelona–Real Madrid Sun 25 21:00 CET, highlighted) and all 56
 * Copa del Rey 1st-round ties Tue 27 – Thu 29 (RFEF times). New `channel` field
 * shown publicly (DAZN / Movistar LALIGA, no dial); Thu 29 20:00/21:00 Copa ties
 * have channel PENDING → none shown. Offsets from Intl (CET +01:00 from 25 Oct).
 * NOT added: Rayo–Elche Sat 24 14:00 (doors 16:00). See
 * /workspace/oconnell-agenda-j10-copa-2026-10-17/.
 * Delta 2026-10-17 ~10:45 Madrid (DG order, owner rule: all broadcasts except
 * venue closed): NFL completed for Sun 18 (Week 6, ET+6) and Sun 25 (Week 7,
 * ET+5: Madrid CET from 03:00 on 25 Oct, US EDT until 1 Nov) from nfl.com +
 * ESPN. Added Sun 18: Bears–Falcons, Titans–Colts, Saints–Giants,
 * Steelers–Buccaneers 19:00; Cardinals–Rams 22:05; Bills–Raiders 22:25. Added
 * Sun 25: Steelers–Saints (Paris) 14:30; seven 18:00 games; Broncos–Cardinals
 * 21:05; Packers–Lions, Rams–Raiders 21:25; Chiefs–Seahawks Mon 26 01:20 (Sun
 * night). NOT added: Cowboys–Packers Mon 19 02:20 (after last kickoff 02:00).
 * No channel (NFL rows never used one), no RedZone row.
 * See /workspace/oconnell-nfl-agenda-2026-10-17/.
 * Delta 2026-10-17 ~10:40 Madrid (DG approval): keep Chiefs–Seahawks Mon 26
 * 01:20. Weekday NFL rule (TNF/MNF): include if kickoff >= 60 min before that
 * night's close. Added MNF Cowboys–Eagles Tue 27 01:15 (Mon night). Excluded:
 * MNF Commanders–49ers Tue 20 02:15 and TNF Patriots–Bears Fri 23 02:15 (45 min
 * before 03:00 close).
 * Delta 2026-10-18 ~09:00 Madrid (DG P1, Radar 2026-10-18-escocia-aficiones.md):
 * Celtic–Celta Thu 22 highlight line (row existed); added Leinster–Munster Sat 24
 * 19:00, Motherwell–Hearts Sun 25 15:00, Rangers–Aberdeen + Munster–Sharks Sat 31
 * 18:30, Hearts–Hibernian Sun 1 16:00, Liverpool–Arsenal Sun 1 17:30, NFL Week 8
 * Sun 1 Nov 19:00/22:05/22:25 (ESPN, ET+6). Not added: Sky-only / no-TV Scottish
 * games; SNF Mon 2 Nov 02:20. See /workspace/oconnell-agenda-escocia-2026-10-18/.
 * Delta 2026-10-18 b: gap fill through Sun 1 Nov from primary sources
 * (match.uefa.com, premierleague.com API, laliga.com J11 graphic, ESPN): +4 UCL,
 * +12 UEL, +12 PL, +8 LaLiga J11 (with channel), TNF Packers–Panthers Fri 30
 * 01:15. Not added (doors closed): Chelsea–Man Utd Sat 31 13:30, Levante–Atlético
 * Sat 31 14:00.
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
  { id: "2026-10-12-levante-sevilla", competition: "LaLiga", homeTeam: "Levante", awayTeam: "Sevilla", date: "2026-10-12", kickoffMadrid: "21:00", note: "Movistar LALIGA" },
  { id: "2026-10-12-coventry-newcastle", competition: "Premier League", homeTeam: "Coventry City", awayTeam: "Newcastle", date: "2026-10-12", kickoffMadrid: "21:00", note: "MW6, DAZN" },
  { id: "2026-10-13-milan-madrid", competition: "EuroLeague", homeTeam: "Olimpia Milano", awayTeam: "Real Madrid", date: "2026-10-13", kickoffMadrid: "20:30", note: "Round 5, Movistar Plus+" },
  { id: "2026-10-13-atletico-manutd", competition: "UEFA Champions League", homeTeam: "Atlético Madrid", awayTeam: "Manchester United", date: "2026-10-13", kickoffMadrid: "21:00", note: "League phase MD2, Riyadh Air Metropolitano", line: { en: "Atlético de Madrid v Manchester United – live on our screens.", es: "Atlético de Madrid–Manchester United, en directo en nuestras pantallas." } },
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
  { id: "2026-10-15-usg-sociedad", competition: "UEFA Europa League", homeTeam: "Union Saint-Gilloise", awayTeam: "Real Sociedad", date: "2026-10-15", kickoffMadrid: "18:45", note: "League phase MD2, Movistar Plus+" },
  { id: "2026-10-15-lyon-palace", competition: "UEFA Europa League", homeTeam: "Lyon", awayTeam: "Crystal Palace", date: "2026-10-15", kickoffMadrid: "18:45", note: "League phase MD2; UEFA time (CET); owner rule 2026-10-13: all UEL live" },
  { id: "2026-10-15-celta-juventus", competition: "UEFA Europa League", homeTeam: "Celta", awayTeam: "Juventus", date: "2026-10-15", kickoffMadrid: "21:00", note: "League phase MD2, Balaídos, Movistar Plus+" },
  { id: "2026-10-15-madrid-asvel", competition: "EuroLeague", homeTeam: "Real Madrid", awayTeam: "ASVEL", date: "2026-10-15", kickoffMadrid: "21:00", note: "Round 6, Movistar Plus+" },
  { id: "2026-10-15-benfica-celtic", competition: "UEFA Europa League", homeTeam: "Benfica", awayTeam: "Celtic", date: "2026-10-15", kickoffMadrid: "21:00", note: "League phase MD2; UEFA time (CET); owner rule 2026-10-13: all UEL live" },
  { id: "2026-10-15-brighton-zalgiris", competition: "UEFA Conference League", homeTeam: "Brighton", awayTeam: "Kauno Žalgiris", date: "2026-10-15", kickoffMadrid: "21:00", note: "League phase MD1; UEFA time (CET); owner rule 2026-10-13: all UECL live" },
  { id: "2026-10-16-barcelona-olympiacos", competition: "EuroLeague", homeTeam: "Barcelona", awayTeam: "Olympiacos", date: "2026-10-16", kickoffMadrid: "20:30", note: "Round 6, Movistar Plus+" },
  { id: "2026-10-16-deportivo-levante", competition: "LaLiga", homeTeam: "RC Deportivo", awayTeam: "Levante", date: "2026-10-16", kickoffMadrid: "21:00", note: "J9, M+ LALIGA" },
  { id: "2026-10-17-brentford-liverpool", competition: "Premier League", homeTeam: "Brentford", awayTeam: "Liverpool", date: "2026-10-17", kickoffMadrid: "16:00", note: "MW7, DAZN" },
  { id: "2026-10-17-fulham-hull", competition: "Premier League", homeTeam: "Fulham", awayTeam: "Hull City", date: "2026-10-17", kickoffMadrid: "16:00", note: "MW7, DAZN" },
  { id: "2026-10-17-mancity-ipswich", competition: "Premier League", homeTeam: "Manchester City", awayTeam: "Ipswich", date: "2026-10-17", kickoffMadrid: "16:00", note: "MW7, DAZN" },
  { id: "2026-10-17-villarreal-elche", competition: "LaLiga", homeTeam: "Villarreal", awayTeam: "Elche", date: "2026-10-17", kickoffMadrid: "16:15", note: "J9, DAZN LALIGA" },
  { id: "2026-10-17-betis-barcelona", competition: "LaLiga", homeTeam: "Real Betis", awayTeam: "Barcelona", date: "2026-10-17", kickoffMadrid: "18:30", note: "J9, La Cartuja, DAZN LALIGA" },
  { id: "2026-10-17-newcastle-villa", competition: "Premier League", homeTeam: "Newcastle", awayTeam: "Aston Villa", date: "2026-10-17", kickoffMadrid: "18:30", note: "MW7, DAZN" },
  { id: "2026-10-17-valencia-athletic", competition: "LaLiga", homeTeam: "Valencia", awayTeam: "Athletic Club", date: "2026-10-17", kickoffMadrid: "21:00", note: "J9, Movistar Plus+ / M+ LALIGA" },
  { id: "2026-10-18-osasuna-racing", competition: "LaLiga", homeTeam: "Osasuna", awayTeam: "Racing Santander", date: "2026-10-18", kickoffMadrid: "14:00", note: "J9, M+ LALIGA (Sun doors 14:00)" },
  { id: "2026-10-18-bournemouth-sunderland", competition: "Premier League", homeTeam: "Bournemouth", awayTeam: "Sunderland", date: "2026-10-18", kickoffMadrid: "15:00", note: "MW7, DAZN" },
  { id: "2026-10-18-brighton-palace", competition: "Premier League", homeTeam: "Brighton", awayTeam: "Crystal Palace", date: "2026-10-18", kickoffMadrid: "15:00", note: "MW7, DAZN" },
  { id: "2026-10-18-leeds-manutd", competition: "Premier League", homeTeam: "Leeds", awayTeam: "Manchester United", date: "2026-10-18", kickoffMadrid: "15:00", note: "MW7, DAZN" },
  { id: "2026-10-18-texans-jaguars", competition: "NFL", homeTeam: "Jacksonville Jaguars", awayTeam: "Houston Texans", date: "2026-10-18", kickoffMadrid: "15:30", note: "Week 6, London (Wembley), DAZN NFL Game Pass", line: { en: "NFL in London: Wembley, early Sunday afternoon in Madrid.", es: "NFL en Londres: desde Wembley, a primera hora de la tarde del domingo." } },
  { id: "2026-10-18-celta-alaves", competition: "LaLiga", homeTeam: "Celta", awayTeam: "Alavés", date: "2026-10-18", kickoffMadrid: "16:15", note: "J9, DAZN LALIGA" },
  { id: "2026-10-18-forest-arsenal", competition: "Premier League", homeTeam: "Nottingham Forest", awayTeam: "Arsenal", date: "2026-10-18", kickoffMadrid: "17:30", note: "MW7, DAZN" },
  { id: "2026-10-18-malaga-sociedad", competition: "LaLiga", homeTeam: "Málaga", awayTeam: "Real Sociedad", date: "2026-10-18", kickoffMadrid: "18:30", note: "J9, M+ LALIGA" },
  { id: "2026-10-18-eagles-panthers", competition: "NFL", homeTeam: "Philadelphia Eagles", awayTeam: "Carolina Panthers", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, DAZN NFL Game Pass" },
  { id: "2026-10-18-patriots-jets", competition: "NFL", homeTeam: "New England Patriots", awayTeam: "New York Jets", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, DAZN NFL Game Pass" },
  { id: "2026-10-18-browns-ravens", competition: "NFL", homeTeam: "Cleveland Browns", awayTeam: "Baltimore Ravens", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, DAZN NFL Game Pass" },
  { id: "2026-10-18-falcons-bears", competition: "NFL", homeTeam: "Atlanta Falcons", awayTeam: "Chicago Bears", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-18-colts-titans", competition: "NFL", homeTeam: "Indianapolis Colts", awayTeam: "Tennessee Titans", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-18-giants-saints", competition: "NFL", homeTeam: "New York Giants", awayTeam: "New Orleans Saints", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-18-buccaneers-steelers", competition: "NFL", homeTeam: "Tampa Bay Buccaneers", awayTeam: "Pittsburgh Steelers", date: "2026-10-18", kickoffMadrid: "19:00", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-18-madrid-sevilla", competition: "LaLiga", homeTeam: "Real Madrid", awayTeam: "Sevilla", date: "2026-10-18", kickoffMadrid: "21:00", note: "J9, Bernabéu, Movistar Plus+ / M+ LALIGA" },
  { id: "2026-10-18-rams-cardinals", competition: "NFL", homeTeam: "Los Angeles Rams", awayTeam: "Arizona Cardinals", date: "2026-10-18", kickoffMadrid: "22:05", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-18-chiefs-chargers", competition: "NFL", homeTeam: "Kansas City Chiefs", awayTeam: "Los Angeles Chargers", date: "2026-10-18", kickoffMadrid: "22:25", note: "Week 6, DAZN NFL Game Pass" },
  { id: "2026-10-18-raiders-bills", competition: "NFL", homeTeam: "Las Vegas Raiders", awayTeam: "Buffalo Bills", date: "2026-10-18", kickoffMadrid: "22:25", note: "Week 6, nfl.com + ESPN (ET+6 CEST), DAZN NFL Game Pass" },
  { id: "2026-10-19-getafe-rayo", competition: "LaLiga", homeTeam: "Getafe", awayTeam: "Rayo Vallecano", date: "2026-10-19", kickoffMadrid: "21:00", note: "J9; laliga.com API reconfirmed 2026-10-18; DAZN LALIGA", channel: "DAZN" },
  { id: "2026-10-19-spurs-coventry", competition: "Premier League", homeTeam: "Tottenham Hotspur", awayTeam: "Coventry City", date: "2026-10-19", kickoffMadrid: "21:00", note: "MW7 Mon; premierleague.com 20:00 UK = 21:00 Madrid; DAZN" },
  { id: "2026-10-20-psg-barcelona", competition: "UEFA Champions League", homeTeam: "Paris Saint-Germain", awayTeam: "Barcelona", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; UEFA time (CET); owner rule 2026-10-13: all UCL live" },
  { id: "2026-10-20-stuttgart-atletico", competition: "UEFA Champions League", homeTeam: "Stuttgart", awayTeam: "Atlético Madrid", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; UEFA time (CET); owner rule 2026-10-13: all UCL live" },
  { id: "2026-10-20-liverpool-villarreal", competition: "UEFA Champions League", homeTeam: "Liverpool", awayTeam: "Villarreal", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; UEFA time (CET); owner rule 2026-10-13: all UCL live" },
  { id: "2026-10-20-mancity-aek", competition: "UEFA Champions League", homeTeam: "Manchester City", awayTeam: "AEK Athens", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; UEFA time (CET); owner rule 2026-10-13: all UCL live" },
  { id: "2026-10-21-madrid-leipzig", competition: "UEFA Champions League", homeTeam: "Real Madrid", awayTeam: "RB Leipzig", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Plus+" },
  { id: "2026-10-22-getafe-lugano", competition: "UEFA Conference League", homeTeam: "Getafe", awayTeam: "Lugano", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2, M+ Liga de Campeones" },
  { id: "2026-10-23-alaves-malaga", competition: "LaLiga", homeTeam: "Alavés", awayTeam: "Málaga", date: "2026-10-23", kickoffMadrid: "21:00", note: "J10; laliga.com + mundodeportivo.com 21/09 horarios J10", channel: "DAZN" },
  { id: "2026-10-23-ipswich-forest", competition: "Premier League", homeTeam: "Ipswich", awayTeam: "Nottingham Forest", date: "2026-10-23", kickoffMadrid: "21:00", note: "MW8 Fri; premierleague.com amendments 20:00 BST = 21:00 Madrid; DAZN" },
  { id: "2026-10-24-arsenal-everton", competition: "Premier League", homeTeam: "Arsenal", awayTeam: "Everton", date: "2026-10-24", kickoffMadrid: "16:00", note: "MW8; premierleague.com 15:00 BST; DAZN" },
  { id: "2026-10-24-coventry-fulham", competition: "Premier League", homeTeam: "Coventry City", awayTeam: "Fulham", date: "2026-10-24", kickoffMadrid: "16:00", note: "MW8; premierleague.com 15:00 BST; DAZN" },
  { id: "2026-10-24-racing-espanyol", competition: "LaLiga", homeTeam: "Racing Santander", awayTeam: "Espanyol", date: "2026-10-24", kickoffMadrid: "16:15", note: "J10; laliga.com horarios J10", channel: "DAZN" },
  { id: "2026-10-24-valencia-villarreal", competition: "LaLiga", homeTeam: "Valencia", awayTeam: "Villarreal", date: "2026-10-24", kickoffMadrid: "18:30", note: "J10; laliga.com horarios J10", channel: "Movistar LALIGA" },
  { id: "2026-10-24-chelsea-spurs", competition: "Premier League", homeTeam: "Chelsea", awayTeam: "Tottenham Hotspur", date: "2026-10-24", kickoffMadrid: "18:30", note: "MW8; premierleague.com 17:30 BST; DAZN" },
  { id: "2026-10-24-atletico-deportivo", competition: "LaLiga", homeTeam: "Atlético Madrid", awayTeam: "RC Deportivo", date: "2026-10-24", kickoffMadrid: "21:00", note: "J10, Riyadh Air Metropolitano; laliga.com horarios J10", channel: "Movistar LALIGA", line: { en: "Atlético v Deportivo: fans meeting point near Sol for Saturday night football. No booking, come early.", es: "Atlético–Deportivo: punto de encuentro de aficionados junto a Sol para el fútbol del sábado noche. Sin reserva, ven con tiempo." } },
  { id: "2026-10-25-athleticclub-getafe", competition: "LaLiga", homeTeam: "Athletic Club", awayTeam: "Getafe", date: "2026-10-25", kickoffMadrid: "14:00", note: "J10; laliga.com horarios J10 (Radar 2026-10-17); Sun doors 14:00; CET", channel: "DAZN" },
  { id: "2026-10-25-saints-steelers", competition: "NFL", homeTeam: "New Orleans Saints", awayTeam: "Pittsburgh Steelers", date: "2026-10-25", kickoffMadrid: "14:30", note: "Week 7, Paris (Stade de France), nfl.com + ESPN 9:30 ET = 14:30 CET, DAZN NFL Game Pass", line: { en: "NFL in Paris: Stade de France, early Sunday afternoon in Madrid.", es: "NFL en París: desde el Stade de France, a primera hora de la tarde del domingo." } },
  { id: "2026-10-25-celta-realbetis", competition: "LaLiga", homeTeam: "Celta", awayTeam: "Real Betis", date: "2026-10-25", kickoffMadrid: "16:15", note: "J10; laliga.com horarios J10 (Radar 2026-10-17); CET", channel: "DAZN" },
  { id: "2026-10-25-falcons-49ers", competition: "NFL", homeTeam: "Atlanta Falcons", awayTeam: "San Francisco 49ers", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-ravens-bengals", competition: "NFL", homeTeam: "Baltimore Ravens", awayTeam: "Cincinnati Bengals", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-panthers-buccaneers", competition: "NFL", homeTeam: "Carolina Panthers", awayTeam: "Tampa Bay Buccaneers", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-texans-giants", competition: "NFL", homeTeam: "Houston Texans", awayTeam: "New York Giants", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-vikings-colts", competition: "NFL", homeTeam: "Minnesota Vikings", awayTeam: "Indianapolis Colts", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-jets-dolphins", competition: "NFL", homeTeam: "New York Jets", awayTeam: "Miami Dolphins", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-titans-browns", competition: "NFL", homeTeam: "Tennessee Titans", awayTeam: "Cleveland Browns", date: "2026-10-25", kickoffMadrid: "18:00", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-realsociedad-levante", competition: "LaLiga", homeTeam: "Real Sociedad", awayTeam: "Levante", date: "2026-10-25", kickoffMadrid: "18:30", note: "J10; laliga.com horarios J10 (Radar 2026-10-17); CET", channel: "Movistar LALIGA" },
  { id: "2026-10-25-barcelona-realmadrid", competition: "LaLiga", homeTeam: "Barcelona", awayTeam: "Real Madrid", date: "2026-10-25", kickoffMadrid: "21:00", note: "J10; laliga.com horarios J10 (Radar 2026-10-17); El Clásico; CET (clocks go back 25 Oct 03:00)", channel: "DAZN", line: { en: "El Clásico: fans meeting point near Sol, on the big screens. It fills up: no booking, come early.", es: "El Clásico: punto de encuentro de aficionados junto a Sol, en las pantallas grandes. Se llena: sin reserva, ven con tiempo." } },
  { id: "2026-10-25-cardinals-broncos", competition: "NFL", homeTeam: "Arizona Cardinals", awayTeam: "Denver Broncos", date: "2026-10-25", kickoffMadrid: "21:05", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-lions-packers", competition: "NFL", homeTeam: "Detroit Lions", awayTeam: "Green Bay Packers", date: "2026-10-25", kickoffMadrid: "21:25", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-25-raiders-rams", competition: "NFL", homeTeam: "Las Vegas Raiders", awayTeam: "Los Angeles Rams", date: "2026-10-25", kickoffMadrid: "21:25", note: "Week 7, nfl.com + ESPN (ET+5: Madrid on CET from 25 Oct, US on EDT), DAZN NFL Game Pass" },
  { id: "2026-10-26-seahawks-chiefs", competition: "NFL", homeTeam: "Seattle Seahawks", awayTeam: "Kansas City Chiefs", date: "2026-10-26", kickoffMadrid: "01:20", note: "Week 7 SNF, Sun 25 night (8:20 PM ET = 01:20 CET Mon); within venue hours (Sun close 03:00, last kickoff 02:00); nfl.com + ESPN, DAZN NFL Game Pass" },
  { id: "2026-10-26-sevilla-osasuna", competition: "LaLiga", homeTeam: "Sevilla", awayTeam: "Osasuna", date: "2026-10-26", kickoffMadrid: "21:00", note: "J10; laliga.com horarios J10 (Radar 2026-10-17); CET", channel: "Movistar LALIGA" },
  { id: "2026-10-27-eagles-cowboys", competition: "NFL", homeTeam: "Philadelphia Eagles", awayTeam: "Dallas Cowboys", date: "2026-10-27", kickoffMadrid: "01:15", note: "Week 7 MNF, Mon 26 night (8:15 PM ET = 01:15 CET Tue); weekday NFL rule: kickoff >= 60 min before close (Mon close 03:00); nfl.com + ESPN, DAZN NFL Game Pass" },
  { id: "2026-10-27-cuarte-girona", competition: "Copa del Rey", homeTeam: "Cuarte", awayTeam: "Girona", date: "2026-10-27", kickoffMadrid: "18:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-sestao-espanyol", competition: "Copa del Rey", homeTeam: "Sestao", awayTeam: "Espanyol", date: "2026-10-27", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-calamocha-europa", competition: "Copa del Rey", homeTeam: "Calamocha", awayTeam: "Europa", date: "2026-10-27", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-pinatar-elche", competition: "Copa del Rey", homeTeam: "Pinatar", awayTeam: "Elche", date: "2026-10-27", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-manresa-santandreu", competition: "Copa del Rey", homeTeam: "Manresa", awayTeam: "Sant Andreu", date: "2026-10-27", kickoffMadrid: "19:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-castellonense-almeria", competition: "Copa del Rey", homeTeam: "Castellonense", awayTeam: "Almería", date: "2026-10-27", kickoffMadrid: "19:45", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-alcala-laspalmas", competition: "Copa del Rey", homeTeam: "Alcalá", awayTeam: "Las Palmas", date: "2026-10-27", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-tordesillas-mirandes", competition: "Copa del Rey", homeTeam: "Tordesillas", awayTeam: "Mirandés", date: "2026-10-27", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-gimnasticasegoviana-culturalleonesa", competition: "Copa del Rey", homeTeam: "Gimnástica Segoviana", awayTeam: "Cultural Leonesa", date: "2026-10-27", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-llanera-ponferradina", competition: "Copa del Rey", homeTeam: "Llanera", awayTeam: "Ponferradina", date: "2026-10-27", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-ciudaddelucena-rayomajadahonda", competition: "Copa del Rey", homeTeam: "Ciudad de Lucena", awayTeam: "Rayo Majadahonda", date: "2026-10-27", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-donbenito-extremadura", competition: "Copa del Rey", homeTeam: "Don Benito", awayTeam: "Extremadura", date: "2026-10-27", kickoffMadrid: "20:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-atleticopaso-cordoba", competition: "Copa del Rey", homeTeam: "Atlético Paso", awayTeam: "Córdoba", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-manacor-villarreal", competition: "Copa del Rey", homeTeam: "Manacor", awayTeam: "Villarreal", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-recreativo-rayovallecano", competition: "Copa del Rey", homeTeam: "Recreativo", awayTeam: "Rayo Vallecano", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-tudelano-zaragoza", competition: "Copa del Rey", homeTeam: "Tudelano", awayTeam: "Zaragoza", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-sportingdealcazar-malaga", competition: "Copa del Rey", homeTeam: "Sporting de Alcázar", awayTeam: "Málaga", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-27-arosa-pontevedra", competition: "Copa del Rey", homeTeam: "Arosa", awayTeam: "Pontevedra", date: "2026-10-27", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-utebo-sabadell", competition: "Copa del Rey", homeTeam: "Utebo", awayTeam: "Sabadell", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-pamplona-eibar", competition: "Copa del Rey", homeTeam: "Pamplona", awayTeam: "Eibar", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-poblense-ceuta", competition: "Copa del Rey", homeTeam: "Poblense", awayTeam: "Ceuta", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-coruxo-zamora", competition: "Copa del Rey", homeTeam: "Coruxo", awayTeam: "Zamora", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-portugalete-realunion", competition: "Copa del Rey", homeTeam: "Portugalete", awayTeam: "Real Unión", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-anaitasuna-alaves", competition: "Copa del Rey", homeTeam: "Anaitasuna", awayTeam: "Alavés", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-tarancon-levante", competition: "Copa del Rey", homeTeam: "Tarancón", awayTeam: "Levante", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-penasport-huesca", competition: "Copa del Rey", homeTeam: "Peña Sport", awayTeam: "Huesca", date: "2026-10-28", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-amorebieta-logrones", competition: "Copa del Rey", homeTeam: "Amorebieta", awayTeam: "Logroñés", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-mijaslaslagunas-realjaen", competition: "Copa del Rey", homeTeam: "Mijas Las Lagunas", awayTeam: "Real Jaén", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-alcoyano-mallorca", competition: "Copa del Rey", homeTeam: "Alcoyano", awayTeam: "Mallorca", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-trivalvalderasalcorcon-leganes", competition: "Copa del Rey", homeTeam: "Trival Valderas Alcorcón", awayTeam: "Leganés", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-covadonga-valladolid", competition: "Copa del Rey", homeTeam: "Covadonga", awayTeam: "Valladolid", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-numancia-oviedo", competition: "Copa del Rey", homeTeam: "Numancia", awayTeam: "Oviedo", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-badajoz-tenerife", competition: "Copa del Rey", homeTeam: "Badajoz", awayTeam: "Tenerife", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-puertollano-albacete", competition: "Copa del Rey", homeTeam: "Puertollano", awayTeam: "Albacete", date: "2026-10-28", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-cieza-granada", competition: "Copa del Rey", homeTeam: "Cieza", awayTeam: "Granada", date: "2026-10-28", kickoffMadrid: "20:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-reus-barakaldo", competition: "Copa del Rey", homeTeam: "Reus", awayTeam: "Barakaldo", date: "2026-10-28", kickoffMadrid: "20:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-minera-cartagena", competition: "Copa del Rey", homeTeam: "Minera", awayTeam: "Cartagena", date: "2026-10-28", kickoffMadrid: "20:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-gimnasticatorrelavega-ourense", competition: "Copa del Rey", homeTeam: "Gimnástica Torrelavega", awayTeam: "Ourense", date: "2026-10-28", kickoffMadrid: "20:30", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-navalcarnero-realbetis", competition: "Copa del Rey", homeTeam: "Navalcarnero", awayTeam: "Real Betis", date: "2026-10-28", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-salamancauds-celta", competition: "Copa del Rey", homeTeam: "Salamanca UDS", awayTeam: "Celta", date: "2026-10-28", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-xerez-cadiz", competition: "Copa del Rey", homeTeam: "Xerez", awayTeam: "Cádiz", date: "2026-10-28", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-28-tavernes-valencia", competition: "Copa del Rey", homeTeam: "Tavernes", awayTeam: "Valencia", date: "2026-10-28", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-29-lebrijana-getafe", competition: "Copa del Rey", homeTeam: "Lebrijana", awayTeam: "Getafe", date: "2026-10-29", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-29-calatayud-osasuna", competition: "Copa del Rey", homeTeam: "Calatayud", awayTeam: "Osasuna", date: "2026-10-29", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-29-atleticobaleares-eldense", competition: "Copa del Rey", homeTeam: "Atlético Baleares", awayTeam: "Eldense", date: "2026-10-29", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-29-sanse-coria", competition: "Copa del Rey", homeTeam: "Sanse", awayTeam: "Coria", date: "2026-10-29", kickoffMadrid: "19:00", note: "1st round; RFEF hora peninsular + Movistar guide LALIGA TV M+ (Radar 2026-10-17)", channel: "Movistar LALIGA" },
  { id: "2026-10-29-guijuelo-sportinggijon", competition: "Copa del Rey", homeTeam: "Guijuelo", awayTeam: "Sporting Gijón", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-conquense-castellon", competition: "Copa del Rey", homeTeam: "Conquense", awayTeam: "Castellón", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-laredo-burgos", competition: "Copa del Rey", homeTeam: "Laredo", awayTeam: "Burgos", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-varea-andorra", competition: "Copa del Rey", homeTeam: "Varea", awayTeam: "Andorra", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-antequera-aguilas", competition: "Copa del Rey", homeTeam: "Antequera", awayTeam: "Águilas", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-realavila-unionistas", competition: "Copa del Rey", homeTeam: "Real Ávila", awayTeam: "Unionistas", date: "2026-10-29", kickoffMadrid: "20:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-prat-athleticclub", competition: "Copa del Rey", homeTeam: "Prat", awayTeam: "Athletic Club", date: "2026-10-29", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-sportinghortaleza-sevilla", competition: "Copa del Rey", homeTeam: "Sporting Hortaleza", awayTeam: "Sevilla", date: "2026-10-29", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-ribadesella-racingsantander", competition: "Copa del Rey", homeTeam: "Ribadesella", awayTeam: "Racing Santander", date: "2026-10-29", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-10-29-auriense-rcdeportivo", competition: "Copa del Rey", homeTeam: "Auriense", awayTeam: "RC Deportivo", date: "2026-10-29", kickoffMadrid: "21:00", note: "1st round; RFEF hora peninsular (Radar 2026-10-17); channel PENDING, not shown" },
  { id: "2026-11-08-falcons-bengals", competition: "NFL", homeTeam: "Atlanta Falcons", awayTeam: "Cincinnati Bengals", date: "2026-11-08", kickoffMadrid: "15:30", note: "NFL Madrid Game, Bernabéu (Week 9). Live at O'Connell confirmed by owner 2026-10-13 07:12; home team/time per nfl.com", line: { en: "The NFL Madrid Game, live near Sol.", es: "El partido de la NFL en Madrid, en directo junto a Sol." } },
  { id: "2026-11-08-panthers-broncos", competition: "NFL", homeTeam: "Carolina Panthers", awayTeam: "Denver Broncos", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-colts-cowboys", competition: "NFL", homeTeam: "Indianapolis Colts", awayTeam: "Dallas Cowboys", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-chiefs-jets", competition: "NFL", homeTeam: "Kansas City Chiefs", awayTeam: "New York Jets", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-dolphins-lions", competition: "NFL", homeTeam: "Miami Dolphins", awayTeam: "Detroit Lions", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-saints-browns", competition: "NFL", homeTeam: "New Orleans Saints", awayTeam: "Cleveland Browns", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-eagles-giants", competition: "NFL", homeTeam: "Philadelphia Eagles", awayTeam: "New York Giants", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-commanders-rams", competition: "NFL", homeTeam: "Washington Commanders", awayTeam: "Los Angeles Rams", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-chargers-texans", competition: "NFL", homeTeam: "Los Angeles Chargers", awayTeam: "Houston Texans", date: "2026-11-08", kickoffMadrid: "22:05", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-49ers-raiders", competition: "NFL", homeTeam: "San Francisco 49ers", awayTeam: "Las Vegas Raiders", date: "2026-11-08", kickoffMadrid: "22:05", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-patriots-packers", competition: "NFL", homeTeam: "New England Patriots", awayTeam: "Green Bay Packers", date: "2026-11-08", kickoffMadrid: "22:25", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-08-seahawks-cardinals", competition: "NFL", homeTeam: "Seattle Seahawks", awayTeam: "Arizona Cardinals", date: "2026-11-08", kickoffMadrid: "22:25", note: "Week 9; all Sunday games live, owner confirmed 2026-10-13; times nfl.com (ET+6)" },
  { id: "2026-11-03-atletico-bayern", competition: "UEFA Champions League", homeTeam: "Atlético Madrid", awayTeam: "Bayern Munich", date: "2026-11-03", kickoffMadrid: "21:00", note: "League phase MD4, Riyadh Air Metropolitano; time per atleticodemadrid.com; owner rule 2026-10-13: all UCL live" },
  { id: "2026-11-05-getafe-brighton", competition: "UEFA Conference League", homeTeam: "Getafe", awayTeam: "Brighton", date: "2026-11-05", kickoffMadrid: "21:00", note: "League phase MD3, Coliseum; time per getafecf.com; owner rule 2026-10-13: all sport live", line: { en: "Brighton in Madrid: Conference League night, live near Sol.", es: "El Brighton visita al Getafe: noche de Conference, en directo junto a Sol." } },
  { id: "2026-10-14-feyenoord-como", competition: "UEFA Champions League", homeTeam: "Feyenoord", awayTeam: "Como", date: "2026-10-14", kickoffMadrid: "18:45", note: "League phase MD2, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-15-torreense-sunderland", competition: "UEFA Europa League", homeTeam: "Torreense", awayTeam: "Sunderland", date: "2026-10-15", kickoffMadrid: "18:45", note: "League phase MD2, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-15-bournemouth-sturm", competition: "UEFA Europa League", homeTeam: "Bournemouth", awayTeam: "Sturm Graz", date: "2026-10-15", kickoffMadrid: "21:00", note: "League phase MD2, Movistar Liga de Campeones; time corrected 2026-10-15 per sksturm.at (21:00 CEST) + BBC (20:00 UK)" },
  { id: "2026-10-15-marseille-olympiacos", competition: "UEFA Europa League", homeTeam: "Marseille", awayTeam: "Olympiacos", date: "2026-10-15", kickoffMadrid: "21:00", note: "League phase MD2, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-20-fenerbahce-slavia", competition: "UEFA Champions League", homeTeam: "Fenerbahçe", awayTeam: "Slavia Prague", date: "2026-10-20", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-20-sabah-dortmund", competition: "UEFA Champions League", homeTeam: "Sabah", awayTeam: "Borussia Dortmund", date: "2026-10-20", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-20-napoli-bodo", competition: "UEFA Champions League", homeTeam: "Napoli", awayTeam: "Bodø/Glimt", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-como-manutd", competition: "UEFA Champions League", homeTeam: "Como", awayTeam: "Manchester United", date: "2026-10-21", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-lille-galatasaray", competition: "UEFA Champions League", homeTeam: "Lille", awayTeam: "Galatasaray", date: "2026-10-21", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-bayern-arsenal", competition: "UEFA Champions League", homeTeam: "Bayern Munich", awayTeam: "Arsenal", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-villa-viking", competition: "UEFA Champions League", homeTeam: "Aston Villa", awayTeam: "Viking", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-betis-feyenoord", competition: "UEFA Champions League", homeTeam: "Real Betis", awayTeam: "Feyenoord", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-21-inter-shakhtar", competition: "UEFA Champions League", homeTeam: "Inter", awayTeam: "Shakhtar Donetsk", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-22-lech-sunderland", competition: "UEFA Europa League", homeTeam: "Lech Poznań", awayTeam: "Sunderland", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-22-juventus-rennes", competition: "UEFA Europa League", homeTeam: "Juventus", awayTeam: "Rennes", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-22-celtic-celta", competition: "UEFA Europa League", homeTeam: "Celtic", awayTeam: "Celta", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3, Celtic Park; match.uefa.com 19:00Z = 21:00 CEST (reverified 2026-10-18); Movistar Liga de Campeones; DG P1 highlight (Radar 2026-10-18 Escocia)", line: { en: "Celtic v Celta: a meeting point for Celtic and Celta fans near Sol. No booking, come early.", es: "Celtic–Celta: punto de encuentro de aficionados del Celtic y del Celta junto a Sol. Sin reserva, ven con tiempo." } },
  { id: "2026-10-22-lillestrom-sociedad", competition: "UEFA Europa League", homeTeam: "Lillestrøm", awayTeam: "Real Sociedad", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-22-bournemouth-milan", competition: "UEFA Europa League", homeTeam: "Bournemouth", awayTeam: "Milan", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  { id: "2026-10-22-besiktas-palace", competition: "UEFA Europa League", homeTeam: "Beşiktaş", awayTeam: "Crystal Palace", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3, Movistar Liga de Campeones (Radar 2026-10-13, movistar.es guide)" },
  // Delta 2026-10-18 (DG P1, Radar /workspace/radar/2026-10-18-escocia-aficiones.md): Scottish football with UK broadcaster
  // Premier Sports, URC, PL MW9 Sun, NFL Week 8 Sun 1 Nov (US back on EST: ET+6). No channel shown.
  { id: "2026-10-24-leinster-munster", competition: "United Rugby Championship", homeTeam: "Leinster", awayTeam: "Munster", date: "2026-10-24", kickoffMadrid: "19:00", note: "Round 4, Aviva Stadium; avivastadium.ie + RTÉ 18:00 IST = 19:00 CEST; Premier Sports" },
  { id: "2026-10-25-motherwell-hearts", competition: "Scottish Premiership", homeTeam: "Motherwell", awayTeam: "Hearts", date: "2026-10-25", kickoffMadrid: "15:00", note: "Fir Park; spfl.co.uk fixtures + SPFL TV selections + heartsfc.co.uk: 14:00 GMT = 15:00 CET; UK TV Premier Sports" },
  { id: "2026-10-31-rangers-aberdeen", competition: "Scottish League Cup", homeTeam: "Rangers", awayTeam: "Aberdeen", date: "2026-10-31", kickoffMadrid: "18:30", note: "Premier Sports Cup semi-final; spfl.co.uk league-cup fixtures 17:30 GMT = 18:30 CET; UK TV Premier Sports", line: { en: "Scottish League Cup semi-final: a meeting point for Rangers and Aberdeen fans near Sol. No booking, come early.", es: "Semifinal de la Copa de la Liga escocesa: punto de encuentro de aficionados del Rangers y del Aberdeen junto a Sol. Sin reserva, ven con tiempo." } },
  { id: "2026-10-31-munster-sharks", competition: "United Rugby Championship", homeTeam: "Munster", awayTeam: "Sharks", date: "2026-10-31", kickoffMadrid: "18:30", note: "Round 5, Thomond Park; munsterrugby.ie + BBC 17:30 GMT = 18:30 CET; Premier Sports" },
  { id: "2026-11-01-hearts-hibernian", competition: "Scottish League Cup", homeTeam: "Hearts", awayTeam: "Hibernian", date: "2026-11-01", kickoffMadrid: "16:00", note: "Premier Sports Cup semi-final (venue not verified); spfl.co.uk league-cup fixtures 15:00 GMT = 16:00 CET; UK TV Premier Sports", line: { en: "Edinburgh derby, Scottish League Cup semi-final: a meeting point for Hearts and Hibs fans near Sol. No booking, come early.", es: "Derbi de Edimburgo, semifinal de la Copa de la Liga escocesa: punto de encuentro de aficionados del Hearts y del Hibs junto a Sol. Sin reserva, ven con tiempo." } },
  { id: "2026-11-01-liverpool-arsenal", competition: "Premier League", homeTeam: "Liverpool", awayTeam: "Arsenal", date: "2026-11-01", kickoffMadrid: "17:30", note: "MW9; premierleague.com API 16:30 GMT = 17:30 CET; DAZN" },
  { id: "2026-11-01-bills-ravens", competition: "NFL", homeTeam: "Buffalo Bills", awayTeam: "Baltimore Ravens", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-bengals-titans", competition: "NFL", homeTeam: "Cincinnati Bengals", awayTeam: "Tennessee Titans", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-cowboys-cardinals", competition: "NFL", homeTeam: "Dallas Cowboys", awayTeam: "Arizona Cardinals", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-lions-vikings", competition: "NFL", homeTeam: "Detroit Lions", awayTeam: "Minnesota Vikings", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-jets-raiders", competition: "NFL", homeTeam: "New York Jets", awayTeam: "Las Vegas Raiders", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-steelers-browns", competition: "NFL", homeTeam: "Pittsburgh Steelers", awayTeam: "Cleveland Browns", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-buccaneers-falcons", competition: "NFL", homeTeam: "Tampa Bay Buccaneers", awayTeam: "Atlanta Falcons", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-jaguars-colts", competition: "NFL", homeTeam: "Jacksonville Jaguars", awayTeam: "Indianapolis Colts", date: "2026-11-01", kickoffMadrid: "19:00", note: "Week 8; ESPN schedule API 1:00 PM EST = 19:00 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-rams-chargers", competition: "NFL", homeTeam: "Los Angeles Rams", awayTeam: "Los Angeles Chargers", date: "2026-11-01", kickoffMadrid: "22:05", note: "Week 8; ESPN schedule API 4:05 PM EST = 22:05 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-broncos-chiefs", competition: "NFL", homeTeam: "Denver Broncos", awayTeam: "Kansas City Chiefs", date: "2026-11-01", kickoffMadrid: "22:25", note: "Week 8; ESPN schedule API 4:25 PM EST = 22:25 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  { id: "2026-11-01-dolphins-patriots", competition: "NFL", homeTeam: "Miami Dolphins", awayTeam: "New England Patriots", date: "2026-11-01", kickoffMadrid: "22:25", note: "Week 8; ESPN schedule API 4:25 PM EST = 22:25 CET (ET+6, US on EST from 1 Nov); DAZN NFL Game Pass" },
  // NOT added: SNF Commanders–Eagles Mon 2 Nov 02:20 (after last kickoff 02:00, Sun close 03:00).
  // Delta 2026-10-18 b (gap fill): missing UCL/UEL MD3, PL MW8 Sun 25 + MW9 Sat 31, LaLiga J11, TNF Week 8.
  // NOT added (doors closed): PL Chelsea–Man Utd Sat 31 13:30; LaLiga Levante–Atlético Sat 31 14:00.
  { id: "2026-10-20-roma-slovan", competition: "UEFA Champions League", homeTeam: "Roma", awayTeam: "Slovan Bratislava", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Liga de Campeones; owner rule: all UCL live" },
  { id: "2026-10-20-porto-psv", competition: "UEFA Champions League", homeTeam: "Porto", awayTeam: "PSV", date: "2026-10-20", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Liga de Campeones; owner rule: all UCL live" },
  { id: "2026-10-21-sporting-lask", competition: "UEFA Champions League", homeTeam: "Sporting CP", awayTeam: "LASK", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Liga de Campeones; owner rule: all UCL live" },
  { id: "2026-10-21-brugge-lens", competition: "UEFA Champions League", homeTeam: "Club Brugge", awayTeam: "Lens", date: "2026-10-21", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Liga de Campeones; owner rule: all UCL live" },
  { id: "2026-10-22-ferencvaros-torreense", competition: "UEFA Europa League", homeTeam: "Ferencváros", awayTeam: "Torreense", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-usg-beersheva", competition: "UEFA Europa League", homeTeam: "Union Saint-Gilloise", awayTeam: "Hapoel Beer-Sheva", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-dinamo-nec", competition: "UEFA Europa League", homeTeam: "Dinamo Zagreb", awayTeam: "NEC Nijmegen", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-sturm-marseille", competition: "UEFA Europa League", homeTeam: "Sturm Graz", awayTeam: "Marseille", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-ofi-leverkusen", competition: "UEFA Europa League", homeTeam: "OFI Crete", awayTeam: "Bayer Leverkusen", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-ararat-az", competition: "UEFA Europa League", homeTeam: "Ararat-Armenia", awayTeam: "AZ Alkmaar", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-olympiacos-sparta", competition: "UEFA Europa League", homeTeam: "Olympiacos", awayTeam: "Sparta Prague", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-plzen-levski", competition: "UEFA Europa League", homeTeam: "Viktoria Plzeň", awayTeam: "Levski Sofia", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-celje-salzburg", competition: "UEFA Europa League", homeTeam: "Celje", awayTeam: "Salzburg", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-jagiellonia-anderlecht", competition: "UEFA Europa League", homeTeam: "Jagiellonia", awayTeam: "Anderlecht", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-omonia-benfica", competition: "UEFA Europa League", homeTeam: "Omonia", awayTeam: "Benfica", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-22-hoffenheim-lyon", competition: "UEFA Europa League", homeTeam: "Hoffenheim", awayTeam: "Lyon", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD3; match.uefa.com (CEST); Movistar Plus+; owner rule: all UEL live" },
  { id: "2026-10-25-palace-newcastle", competition: "Premier League", homeTeam: "Crystal Palace", awayTeam: "Newcastle", date: "2026-10-25", kickoffMadrid: "15:00", note: "MW8; premierleague.com API 14:00 GMT = 15:00 CET; DAZN" },
  { id: "2026-10-25-hull-brentford", competition: "Premier League", homeTeam: "Hull City", awayTeam: "Brentford", date: "2026-10-25", kickoffMadrid: "15:00", note: "MW8; premierleague.com API 14:00 GMT = 15:00 CET; DAZN" },
  { id: "2026-10-25-liverpool-brighton", competition: "Premier League", homeTeam: "Liverpool", awayTeam: "Brighton", date: "2026-10-25", kickoffMadrid: "15:00", note: "MW8; premierleague.com API 14:00 GMT = 15:00 CET; DAZN" },
  { id: "2026-10-25-manutd-bournemouth", competition: "Premier League", homeTeam: "Manchester United", awayTeam: "Bournemouth", date: "2026-10-25", kickoffMadrid: "15:00", note: "MW8; premierleague.com API 14:00 GMT = 15:00 CET; DAZN" },
  { id: "2026-10-25-sunderland-leeds", competition: "Premier League", homeTeam: "Sunderland", awayTeam: "Leeds", date: "2026-10-25", kickoffMadrid: "17:30", note: "MW8; premierleague.com API 16:30 GMT = 17:30 CET; DAZN" },
  { id: "2026-10-31-bournemouth-leeds", competition: "Premier League", homeTeam: "Bournemouth", awayTeam: "Leeds", date: "2026-10-31", kickoffMadrid: "16:00", note: "MW9; premierleague.com API 15:00 GMT = 16:00 CET; DAZN" },
  { id: "2026-10-31-brentford-forest", competition: "Premier League", homeTeam: "Brentford", awayTeam: "Nottingham Forest", date: "2026-10-31", kickoffMadrid: "16:00", note: "MW9; premierleague.com API 15:00 GMT = 16:00 CET; DAZN" },
  { id: "2026-10-31-coventry-sunderland", competition: "Premier League", homeTeam: "Coventry City", awayTeam: "Sunderland", date: "2026-10-31", kickoffMadrid: "16:00", note: "MW9; premierleague.com API 15:00 GMT = 16:00 CET; DAZN" },
  { id: "2026-10-31-hull-ipswich", competition: "Premier League", homeTeam: "Hull City", awayTeam: "Ipswich", date: "2026-10-31", kickoffMadrid: "16:00", note: "MW9; premierleague.com API 15:00 GMT = 16:00 CET; DAZN" },
  { id: "2026-10-31-mancity-brighton", competition: "Premier League", homeTeam: "Manchester City", awayTeam: "Brighton", date: "2026-10-31", kickoffMadrid: "16:00", note: "MW9; premierleague.com API 15:00 GMT = 16:00 CET; DAZN" },
  { id: "2026-10-31-spurs-palace", competition: "Premier League", homeTeam: "Tottenham Hotspur", awayTeam: "Crystal Palace", date: "2026-10-31", kickoffMadrid: "18:30", note: "MW9; premierleague.com API 17:30 GMT = 18:30 CET; DAZN" },
  { id: "2026-10-31-villa-fulham", competition: "Premier League", homeTeam: "Aston Villa", awayTeam: "Fulham", date: "2026-10-31", kickoffMadrid: "21:00", note: "MW9; premierleague.com API 20:00 GMT = 21:00 CET; DAZN" },
  { id: "2026-10-30-villarreal-espanyol", competition: "LaLiga", homeTeam: "Villarreal", awayTeam: "Espanyol", date: "2026-10-30", kickoffMadrid: "21:00", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "Movistar LALIGA" },
  { id: "2026-10-31-rayo-celta", competition: "LaLiga", homeTeam: "Rayo Vallecano", awayTeam: "Celta", date: "2026-10-31", kickoffMadrid: "16:15", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "DAZN" },
  { id: "2026-10-31-betis-malaga", competition: "LaLiga", homeTeam: "Real Betis", awayTeam: "Málaga", date: "2026-10-31", kickoffMadrid: "18:30", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "DAZN" },
  { id: "2026-10-31-barcelona-alaves", competition: "LaLiga", homeTeam: "Barcelona", awayTeam: "Alavés", date: "2026-10-31", kickoffMadrid: "21:00", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "Movistar LALIGA" },
  { id: "2026-11-01-getafe-sevilla", competition: "LaLiga", homeTeam: "Getafe", awayTeam: "Sevilla", date: "2026-11-01", kickoffMadrid: "14:00", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET; Sun doors 14:00", channel: "DAZN" },
  { id: "2026-11-01-racing-realmadrid", competition: "LaLiga", homeTeam: "Racing Santander", awayTeam: "Real Madrid", date: "2026-11-01", kickoffMadrid: "16:15", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "DAZN" },
  { id: "2026-11-01-elche-valencia", competition: "LaLiga", homeTeam: "Elche", awayTeam: "Valencia", date: "2026-11-01", kickoffMadrid: "18:30", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "Movistar LALIGA" },
  { id: "2026-11-01-athletic-realsociedad", competition: "LaLiga", homeTeam: "Athletic Club", awayTeam: "Real Sociedad", date: "2026-11-01", kickoffMadrid: "21:00", note: "J11; laliga.com horarios J11 (official graphic 03.10.2026); CET", channel: "DAZN" },
  { id: "2026-10-30-packers-panthers", competition: "NFL", homeTeam: "Green Bay Packers", awayTeam: "Carolina Panthers", date: "2026-10-30", kickoffMadrid: "01:15", note: "Week 8 TNF, Thu 29 night (8:15 PM EDT = 01:15 CET Fri); weekday NFL rule: kickoff >= 60 min before close (Thu close 03:00); ESPN schedule API, DAZN NFL Game Pass" },
  { id: "2026-11-08-nfl-redzone", competition: "NFL", homeTeam: "NFL RedZone LIVE", awayTeam: "", date: "2026-11-08", kickoffMadrid: "19:00", note: "Week 9 Sunday afternoon/late windows (19:00, 22:05/22:25 Madrid); owner confirmed RedZone at O'Connell 2026-10-13", line: { en: "NFL RedZone LIVE: every touchdown from the Sunday games.", es: "NFL RedZone en directo: todos los touchdowns de los partidos del domingo." } },
  // Weekly audit 2026-10-18 ~09:40 Madrid (DG order: week Mon 19 – Sun 25 Oct, owner rule: every
  // broadcast match with the bar open, kickoff >= 60 min before close). Sources re-read today:
  // match.uefa.com (UCL/UEL/UECL), premierleague.com API, laliga.com API (J9/J10), ESPN NFL/NBA,
  // BBC Sport + planetrugby (URC R4, UK times +1 h), dragonsrfc.wales (Ospreys–Dragons moved to
  // 19:00 UK), formula1.com (US GP 15:00 CDT = 21:00 CET), api-live.euroleague.net (R7).
  // NOT added (bar closed / too late): UECL Kairat–Panathinaikos Thu 22 16:30; URC Bulls–Ulster
  // Sat 24 13:45; NBA Spurs–Thunder Wed 21 03:30, Thunder–Nuggets Fri 23 03:30 (after last kickoff).
  // DG 2026-10-18 09:23: NBA rows carry no channel; UECL/URC/Motherwell–Hearts no channel. Rayo–Elche
  // re-verified (apim.laliga.com + laliga.com club page): Sat 24 14:00 -> NOT added (Sat doors 16:00).
  // See /workspace/oconnell-agenda-semana-19-25/.
  { id: "2026-10-22-crvenazvezda-copenhagen", competition: "UEFA Conference League", homeTeam: "Crvena Zvezda", awayTeam: "Copenhagen", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-pafos-riga", competition: "UEFA Conference League", homeTeam: "Pafos", awayTeam: "Riga", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-trabzonspor-hearts", competition: "UEFA Conference League", homeTeam: "Trabzonspor", awayTeam: "Hearts", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-jablonec-brighton", competition: "UEFA Conference League", homeTeam: "Jablonec", awayTeam: "Brighton", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-nordsjaelland-cska", competition: "UEFA Conference League", homeTeam: "Nordsjælland", awayTeam: "CSKA Sofia", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-intescaldes-craiova", competition: "UEFA Conference League", homeTeam: "Inter Club d'Escaldes", awayTeam: "Universitatea Craiova", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-kaunozalgiris-brann", competition: "UEFA Conference League", homeTeam: "Kauno Žalgiris", awayTeam: "Brann", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-iberia-mjallby", competition: "UEFA Conference League", homeTeam: "Iberia 1999 Tbilisi", awayTeam: "Mjällby", date: "2026-10-22", kickoffMadrid: "18:45", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T16:45Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-braga-gent", competition: "UEFA Conference League", homeTeam: "Braga", awayTeam: "Gent", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-ajax-atalanta", competition: "UEFA Conference League", homeTeam: "Ajax", awayTeam: "Atalanta", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-monaco-freiburg", competition: "UEFA Conference League", homeTeam: "Monaco", awayTeam: "Freiburg", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-midtjylland-sinttruiden", competition: "UEFA Conference League", homeTeam: "Midtjylland", awayTeam: "Sint-Truiden", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-lincoln-twente", competition: "UEFA Conference League", homeTeam: "Lincoln Red Imps", awayTeam: "Twente", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-borac-kups", competition: "UEFA Conference League", homeTeam: "Borac Banja Luka", awayTeam: "KuPS Kuopio", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-aarhus-egnatia", competition: "UEFA Conference League", homeTeam: "AGF Aarhus", awayTeam: "Egnatia", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-22-thun-hajduk", competition: "UEFA Conference League", homeTeam: "Thun", awayTeam: "Hajduk Split", date: "2026-10-22", kickoffMadrid: "21:00", note: "League phase MD2; match.uefa.com 2026-10-18 (2026-10-22T19:00Z); Movistar Plus+ (UEFA club competitions)" },
  { id: "2026-10-23-cardiff-sharks", competition: "United Rugby Championship", homeTeam: "Cardiff", awayTeam: "Sharks", date: "2026-10-23", kickoffMadrid: "20:45", note: "Round 4, Cardiff Arms Park; BBC Sport + planetrugby 19:45 UK = 20:45 CEST; S4C + Premier Sports" },
  { id: "2026-10-23-connacht-zebre", competition: "United Rugby Championship", homeTeam: "Connacht", awayTeam: "Zebre Parma", date: "2026-10-23", kickoffMadrid: "20:45", note: "Round 4, Galway; BBC Sport + connachtrugby.ie 19:45 IST = 20:45 CEST; Premier Sports" },
  { id: "2026-10-23-edinburgh-lions", competition: "United Rugby Championship", homeTeam: "Edinburgh", awayTeam: "Lions", date: "2026-10-23", kickoffMadrid: "20:45", note: "Round 4, Hive Stadium; BBC Sport + planetrugby 19:45 UK = 20:45 CEST; Premier Sports" },
  { id: "2026-10-24-benetton-glasgow", competition: "United Rugby Championship", homeTeam: "Benetton", awayTeam: "Glasgow Warriors", date: "2026-10-24", kickoffMadrid: "16:00", note: "Round 4, Treviso; BBC Sport + planetrugby 15:00 UK = 16:00 CEST; Premier Sports" },
  { id: "2026-10-24-stormers-scarlets", competition: "United Rugby Championship", homeTeam: "Stormers", awayTeam: "Scarlets", date: "2026-10-24", kickoffMadrid: "16:00", note: "Round 4, Cape Town; BBC Sport + planetrugby + news24 15:00 UK = 16:00 CEST; Premier Sports" },
  { id: "2026-10-24-ospreys-dragons", competition: "United Rugby Championship", homeTeam: "Ospreys", awayTeam: "Dragons", date: "2026-10-24", kickoffMadrid: "20:00", note: "Round 4, St Helen's; dragonsrfc.wales: moved to 19:00 UK (was 19:45) = 20:00 CEST; S4C host + Premier Sports" },
  { id: "2026-10-25-united-states-gp", competition: "Formula 1", homeTeam: "United States Grand Prix", awayTeam: "", date: "2026-10-25", kickoffMadrid: "21:00", note: "Austin COTA; formula1.com 15:00 CDT = 20:00 UTC = 21:00 CET (Madrid clocks back 25 Oct 03:00); DAZN F1. Qualifying Sat 24 23:00 CEST not listed (races only)" },
  { id: "2026-10-22-maccabi-realmadrid", competition: "EuroLeague", homeTeam: "Maccabi Tel Aviv", awayTeam: "Real Madrid", date: "2026-10-22", kickoffMadrid: "20:05", note: "R7, played in Belgrade; api-live.euroleague.net + realmadrid.com 20:05; Movistar Plus+ ficha" },
  { id: "2026-10-22-panathinaikos-baskonia", competition: "EuroLeague", homeTeam: "Panathinaikos", awayTeam: "Baskonia", date: "2026-10-22", kickoffMadrid: "20:15", note: "R7; api-live.euroleague.net 18:15Z = 20:15 CEST; Movistar Plus+ (EuroLeague)" },
  { id: "2026-10-22-olimpia-barcelona", competition: "EuroLeague", homeTeam: "Olimpia Milano", awayTeam: "Barcelona", date: "2026-10-22", kickoffMadrid: "20:30", note: "R7; api-live.euroleague.net 18:30Z = 20:30 CEST; Movistar Plus+ (EuroLeague)" },
  { id: "2026-10-23-paris-valencia", competition: "EuroLeague", homeTeam: "Paris Basketball", awayTeam: "Valencia Basket", date: "2026-10-23", kickoffMadrid: "20:45", note: "R7; api-live.euroleague.net 18:45Z = 20:45 CEST; Movistar Plus+ (EuroLeague)" },
  { id: "2026-10-20-pistons-celtics", competition: "NBA", homeTeam: "Detroit Pistons", awayTeam: "Boston Celtics", date: "2026-10-20", kickoffMadrid: "21:00", note: "Opening night, 3 p.m. ET (nba.com + ESPN) = 21:00 CEST; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
  { id: "2026-10-21-knicks-76ers", competition: "NBA", homeTeam: "New York Knicks", awayTeam: "Philadelphia 76ers", date: "2026-10-21", kickoffMadrid: "01:00", note: "Tue 20 night, 7 p.m. ET (nba.com + ESPN) = 01:00 CEST; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
  { id: "2026-10-22-heat-timberwolves", competition: "NBA", homeTeam: "Miami Heat", awayTeam: "Minnesota Timberwolves", date: "2026-10-22", kickoffMadrid: "01:30", note: "Wed 21 night, 7:30 p.m. ET (nba.com + ESPN) = 01:30 CEST; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
  { id: "2026-10-23-76ers-cavaliers", competition: "NBA", homeTeam: "Philadelphia 76ers", awayTeam: "Cleveland Cavaliers", date: "2026-10-23", kickoffMadrid: "01:00", note: "Thu 22 night, 7 p.m. ET (nba.com + ESPN) = 01:00 CEST; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
  { id: "2026-10-25-hornets-heat", competition: "NBA", homeTeam: "Charlotte Hornets", awayTeam: "Miami Heat", date: "2026-10-25", kickoffMadrid: "00:00", note: "Sat 24 night, 6 p.m. ET (ESPN) = 00:00 CEST; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
  { id: "2026-10-26-76ers-pistons", competition: "NBA", homeTeam: "Philadelphia 76ers", awayTeam: "Detroit Pistons", date: "2026-10-26", kickoffMadrid: "00:30", note: "Sun 25 night, 7:30 p.m. EDT (ESPN) = 00:30 CET; time verified nba.com/ESPN; venue open, kickoff >= 60 min before close" },
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
  return Boolean(
    f.kickoffMadrid &&
      /^\d{2}:\d{2}$/.test(f.kickoffMadrid) &&
      isWithinVenueHours(f),
  );
}

/** Last kickoff allowed before closing time (minutes). */
export const LAST_KICKOFF_BEFORE_CLOSE_MIN = 60;
/** Kickoffs before this Madrid time belong to the previous night (e.g. 02:20 Mon = Sun night). */
const NIGHT_ROLLOVER_MIN = 6 * 60;

function hhmmToMin(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

/** Opening hours (lib/venue.ts HOURS) for the night that starts on `nightYmd`. */
export function venueHoursForNight(nightYmd: string): { open: string; close: string } {
  const dow = new Date(`${nightYmd}T12:00:00Z`).getUTCDay(); // 0 = Sunday
  if (dow === 0) return HOURS.sun;
  if (dow >= 1 && dow <= 4) return HOURS.monThu;
  return HOURS.friSat;
}

/**
 * Venue-hours gate (permanent, DG 2026-10-11): a row is published only if it
 * kicks off with the bar open and at least LAST_KICKOFF_BEFORE_CLOSE_MIN before
 * closing, i.e. kickoff in [open, close − 60 min] of that night. Rows outside
 * the window are excluded automatically from every list, strip and page.
 */
export function isWithinVenueHours(f: Fixture): boolean {
  if (!f.kickoffMadrid || !/^\d{2}:\d{2}$/.test(f.kickoffMadrid)) return false;
  let kickoff = hhmmToMin(f.kickoffMadrid);
  let night = f.date;
  if (kickoff < NIGHT_ROLLOVER_MIN) {
    kickoff += 24 * 60;
    night = addMadridDays(f.date, -1);
  }
  const hours = venueHoursForNight(night);
  const open = hhmmToMin(hours.open);
  let close = hhmmToMin(hours.close);
  if (close < NIGHT_ROLLOVER_MIN) close += 24 * 60;
  return kickoff >= open && kickoff <= close - LAST_KICKOFF_BEFORE_CLOSE_MIN;
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
  "Copa del Rey": "football",
  "Scottish Premiership": "football",
  "Scottish League Cup": "football",
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
  return start != null && end != null && start <= now.getTime() && Math.min(end, start + 135 * 60 * 1000) > now.getTime();
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
