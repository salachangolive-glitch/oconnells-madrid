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
export function PremierLeagueLines({ locale }: { locale: Locale }) {
  const isEs = locale === "es";
  const now = agendaBuildNow();
  const today = madridTodayYmd(now);
  const isPl = (f: { competition: string }) => f.competition === "Premier League";
  const rows = getAgendaCandidates(now).filter(isPl);
  if (rows.length === 0) return null;
  const visibleIds = new Set(
    getUpcomingFixtures(today, now).filter(isPl).map((f) => f.id),
  );

  return (
    <div
      className="mt-4"
      data-fx-root={`pl-${locale}`}
      data-fx-wrap="any"
      data-fx-off={visibleIds.size === 0 ? "" : undefined}
    >
      <p>
        {isEs
          ? "Premier League confirmada esta jornada, hora de Madrid:"
          : "Confirmed Premier League this round, Madrid time:"}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {rows.map((f) => (
          <li
            key={f.id}
            data-fx-key={`pl:any:${f.id}`}
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
