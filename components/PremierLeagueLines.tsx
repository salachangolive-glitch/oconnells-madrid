import Link from "next/link";
import {
  agendaBuildNow,
  displayTeam,
  fixtureDataAttrs,
  formatFixtureDay,
  getAgendaCandidates,
  getUpcomingFixtures,
  madridTodayYmd,
} from "@/lib/fixtures";

type Locale = "en" | "es";

/**
 * Confirmed Premier League rows already on What's On.
 * Times come from FIXTURES — do not hard-code kickoffs here. Same rules as
 * What's On (not finished, Today + next 7 days); AgendaClock updates it live.
 */
const COMPETITIONS = {
  pl: {
    name: "Premier League",
    en: "Confirmed Premier League in the next 7 days, Madrid time:",
    es: "Premier League confirmada en los próximos 7 días, hora de Madrid:",
  },
  ucl: {
    name: "UEFA Champions League",
    en: "Confirmed Champions League in the next 7 days, Madrid time:",
    es: "Champions League confirmada en los próximos 7 días, hora de Madrid:",
  },
} as const;

export function PremierLeagueLines({
  locale,
  competition = "pl",
}: {
  locale: Locale;
  competition?: keyof typeof COMPETITIONS;
}) {
  const isEs = locale === "es";
  const now = agendaBuildNow();
  const today = madridTodayYmd(now);
  const comp = COMPETITIONS[competition];
  const isPl = (f: { competition: string }) => f.competition === comp.name;
  const rows = getAgendaCandidates(now).filter(isPl);
  if (rows.length === 0) return null;
  const visibleIds = new Set(
    getUpcomingFixtures(today, now).filter(isPl).map((f) => f.id),
  );

  return (
    <div
      className="mt-4"
      data-fx-root={`${competition}-${locale}`}
      data-fx-wrap="any"
      data-fx-off={visibleIds.size === 0 ? "" : undefined}
    >
      <p>
        {isEs ? comp.es : comp.en}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {rows.map((f) => (
          <li
            key={f.id}
            data-fx-key={`${competition}:any:${f.id}`}
            data-fx-slot="any"
            {...fixtureDataAttrs(f)}
            data-fx-off={!visibleIds.has(f.id) ? "" : undefined}
          >
            {displayTeam(f.homeTeam, locale)} vs {displayTeam(f.awayTeam, locale)}
            {" · "}
            {formatFixtureDay(f.date, locale)}
            {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : ""}
          </li>
        ))}
      </ul>
      <p className="mt-3">
        <Link
          href={isEs ? "/es/whats-on" : "/whats-on"}
          data-event="whats_on"
          className="text-cream underline"
        >
          {isEs ? "Agenda" : "What's On"}
        </Link>
      </p>
    </div>
  );
}
