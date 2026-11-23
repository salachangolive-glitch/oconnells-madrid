/**
 * Match pages and the Madrid kickoff of their LAST match (ISO with offset).
 * Owner order 23 Nov 2026 (DG 10:52): once a match page's game has been
 * played, the page goes noindex, follow and leaves the sitemap on its own at
 * build time (daily rebuild 06:31). The page stays online (200).
 *
 * "Played" = build time >= last kickoff + MATCH_PLAYED_AFTER_MIN.
 * Build time = agendaBuildNow() (OCONNELL_BUILD_MS override, else real clock).
 *
 * ADD EVERY NEW MATCH PAGE HERE (EN and ES/other-language paths), using the
 * kickoff already in its data module / page comments. Do not list What's On,
 * the home, /nfl-madrid, gig nights or evergreen pages.
 */
import { agendaBuildNow } from "./fixtures";

export const MATCH_PLAYED_AFTER_MIN = 180;

const pair = (en: string, es: string | null, iso: string): [string, string][] =>
  es ? [[en, iso], [es, iso]] : [[en, iso]];

export const MATCH_PAGE_LAST_KICKOFF: Record<string, string> = Object.fromEntries([
  // Shared match template (components/MatchNewsArticle) — startDate from lib/articles/*.
  ...pair("/news/getafe-brighton-thursday-night-sol", "/es/noticias/getafe-brighton-jueves-sol", "2026-11-05T21:00:00+01:00"),
  ...pair("/news/before-after-bernabeu-nfl-sol", "/es/noticias/antes-despues-bernabeu-nfl-sol", "2026-11-08T15:30:00+01:00"),
  ...pair("/news/nfl-meeting-point-sol", "/es/noticias/punto-encuentro-nfl-sol", "2026-11-08T15:30:00+01:00"),
  ...pair("/news/where-to-watch-nfl-madrid-sol", "/es/noticias/donde-ver-nfl-madrid-sol", "2026-11-08T15:30:00+01:00"),
  ...pair("/news/four-bars-fan-weekend-sol", "/es/noticias/cuatro-bares-finde-sol", "2026-11-08T15:30:00+01:00"),
  // Sunday 8 Nov stack: last listed kickoff Atlético–Barcelona 21:00.
  ...pair("/news/sunday-football-sol-8-nov", "/es/noticias/futbol-domingo-sol-8-nov", "2026-11-08T21:00:00+01:00"),
  ...pair("/news/czechia-spain-thursday-night-sol", "/es/noticias/chequia-espana-jueves-sol", "2026-11-12T20:45:00+01:00"),
  ...pair("/news/real-madrid-crvena-zvezda-thursday-sol", "/es/noticias/real-madrid-crvena-zvezda-jueves-sol", "2026-11-12T21:00:00+01:00"),
  ...pair("/news/spain-chile-rugby-saturday-sol", "/es/noticias/espana-chile-rugby-sabado-sol", "2026-11-14T17:00:00+01:00"),
  ...pair("/news/spain-england-sunday-night-sol", "/es/noticias/espana-inglaterra-domingo-sol", "2026-11-15T20:45:00+01:00"),
  ...pair("/news/ireland-kosovo-tuesday-night-sol", "/es/noticias/irlanda-kosovo-martes-sol", "2026-11-17T20:45:00+01:00"),
  ...pair("/news/real-madrid-inter-womens-champions-league-sol", "/es/noticias/real-madrid-inter-champions-femenina-sol", "2026-11-18T18:45:00+01:00"),
  ...pair("/news/inter-fans-madrid-womens-champions-league-sol", "/es/noticias/aficionados-inter-madrid-champions-femenina-sol", "2026-11-18T18:45:00+01:00"),
  // Rugby Saturday 21 Nov: last kickoff 21:10.
  ...pair("/news/rugby-saturday-sol-21-nov", "/es/noticias/rugby-sabado-sol-21-nov", "2026-11-21T21:10:00+01:00"),
  ...pair("/news/newcastle-arsenal-saturday-night-sol", "/es/noticias/newcastle-arsenal-sabado-sol", "2026-11-21T18:30:00+01:00"),
  ...pair("/news/liverpool-manchester-united-sunday-sol", "/es/noticias/liverpool-manchester-united-domingo-sol", "2026-11-22T17:30:00+01:00"),
  ...pair("/news/real-madrid-psv-tuesday-night-sol", "/es/noticias/real-madrid-psv-martes-sol", "2026-11-24T21:00:00+01:00"),
  ...pair("/news/atletico-viking-wednesday-night-sol", "/es/noticias/atletico-viking-miercoles-sol", "2026-11-25T21:00:00+01:00"),
  ...pair("/news/arsenal-manchester-city-sunday-sol", "/es/noticias/arsenal-manchester-city-domingo-sol", "2026-11-29T17:30:00+01:00"),
  // Finals weekend: last match is the final, Sun 29 Nov 17:40.
  ...pair("/news/nations-championship-finals-twickenham-sol", "/es/noticias/nations-championship-finals-fin-de-semana-sol", "2026-11-29T17:40:00+01:00"),
  // Own-layout /news match pages (EN only) — kickoff from page metadata/comments.
  ...pair("/news/atletico-barcelona-sunday-night-sol", null, "2026-11-08T21:00:00+01:00"),
  ...pair("/news/england-croatia-thursday-night-sol", null, "2026-11-12T20:45:00+01:00"),
  ...pair("/news/serbia-germany-friday-night-sol", null, "2026-11-13T20:45:00+01:00"),
  ...pair("/news/germany-netherlands-monday-night-sol", null, "2026-11-16T20:45:00+01:00"),
  ...pair("/news/real-madrid-celta-saturday-night-sol", null, "2026-11-21T21:00:00+01:00"),
  ...pair("/news/real-madrid-zalgiris-wednesday-night-sol", null, "2026-11-25T20:45:00+01:00"),
  ...pair("/news/real-madrid-alaves-saturday-night-sol", null, "2026-11-28T21:00:00+01:00"),
  // Visiting-fans match guides (lib/fan-campaign-three-bars.ts eventDay + kickoff).
  ...pair("/news/psv-fans-three-bars-sol", "/news/psv-fans-drie-bars-sol", "2026-11-24T21:00:00+01:00"),
  ...pair("/news/viking-fans-three-bars-sol", "/news/viking-fans-tre-barer-sol", "2026-11-25T21:00:00+01:00"),
  ...pair("/news/zalgiris-fans-three-bars-sol", "/news/zalgiris-fans-trys-barai-sol", "2026-11-25T20:45:00+01:00"),
  // Sunday 8 Nov match pages at the site root.
  ...pair("/liverpool-1500-usual-lock-oconnells", "/es/liverpool-1500-cerrojo-habitual-oconnells", "2026-11-08T15:00:00+01:00"),
  ...pair("/chelsea-1500-same-english-hour", "/es/chelsea-1500-misma-hora-inglesa", "2026-11-08T15:00:00+01:00"),
  ...pair("/united-1730-after-the-pair-oconnells", "/es/united-1730-despues-del-par-oconnells", "2026-11-08T17:30:00+01:00"),
  ...pair("/evening-nfl-then-atleti-barca-this-door", "/es/nfl-noche-luego-atleti-barca-esta-puerta", "2026-11-08T21:00:00+01:00"),
  ...pair("/nfl-sunday-8-nov-oconnells", "/es/nfl-domingo-8-nov-oconnells", "2026-11-08T22:25:00+01:00"),
  ...pair("/nfl-fans-saturday-oconnells", "/es/fin-de-semana-nfl-oconnells", "2026-11-08T15:30:00+01:00"),
  ...pair("/4-bars-one-fan-weekend", "/es/cuatro-bares-fin-de-semana", "2026-11-08T15:30:00+01:00"),
]);

/** True when the page's last match has been played at build time. */
export function isPlayedMatchPage(path: string, now: Date = agendaBuildNow()): boolean {
  const iso = MATCH_PAGE_LAST_KICKOFF[path];
  if (!iso) return false;
  const start = Date.parse(iso);
  if (Number.isNaN(start)) return false;
  return now.getTime() >= start + MATCH_PLAYED_AFTER_MIN * 60_000;
}
