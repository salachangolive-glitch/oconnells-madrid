import Link from "next/link";
import {
  FIXTURES,
  displayTeam,
  formatFixtureDay,
  isConfirmedFixture,
} from "@/lib/fixtures";

type Locale = "en" | "es";

/**
 * Confirmed Premier League rows already on What's On.
 * Times come from FIXTURES — do not hard-code kickoffs here.
 */
export function PremierLeagueLines({ locale }: { locale: Locale }) {
  const isEs = locale === "es";
  const rows = FIXTURES.filter(
    (f) => f.competition === "Premier League" && isConfirmedFixture(f),
  );
  if (rows.length === 0) return null;

  return (
    <div className="mt-4">
      <p>
        {isEs
          ? "Premier League confirmada esta jornada, hora de Madrid:"
          : "Confirmed Premier League this round, Madrid time:"}
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((f) => (
          <li key={f.id}>
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
