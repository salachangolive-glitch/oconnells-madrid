import Link from "next/link";
import {
  agendaBuildNow,
  displayCompetition,
  fixtureMatchLabel,
  formatFixtureDay,
  getAgendaCandidates,
  getAgendaCandidatesWindow,
  pruneNeverVisible,
  fixtureDataAttrs,
  getUpcomingFixtures,
  isOnNow,
  madridTodayYmd,
  screenPolicyLine,
  type Fixture,
} from "@/lib/fixtures";
import { OnNowBadge } from "@/components/FixtureList";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { MAPS_URL } from "@/lib/venue";

const STRIP_LIMIT = 3;

type Locale = "en" | "es";

function FixtureRow({
  f,
  locale,
  onNow,
}: {
  f: Fixture;
  locale: Locale;
  onNow: boolean;
}) {
  const isEs = locale === "es";
  return (
    <article className="pl-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {displayCompetition(f.competition)}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {f.tbc ? (isEs ? "Por confirmar" : "To be confirmed") : isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
        <OnNowBadge locale={locale} onNow={onNow} />
      </p>
      <h3 className="mt-1 font-serif text-xl font-bold text-cream sm:text-2xl">
        {fixtureMatchLabel(f, locale)}
      </h3>
      <p className="mt-1 text-sm text-cream-muted">
        {formatFixtureDay(f.date, locale)}
        {f.kickoffMadrid
          ? ` · ${f.kickoffMadrid} ${isEs ? "hora Madrid" : "Madrid"}`
          : null}
      </p>
      {f.kickoffMadrid && !f.tbc && !f.pubEvent ? (
        <p className="mt-1 text-sm text-cream-muted">{screenPolicyLine(locale)}</p>
      ) : null}
    </article>
  );
}

/**
 * Home / Sports strip: next STRIP_LIMIT rows of Today + Next 7 days, same
 * source and rules as What's On. AgendaClock keeps it current in the browser.
 */
export function FixtureStrip({
  locale = "en",
  showHeading = true,
  showDirections = true,
  maxRows,
  windowOnly = false,
}: {
  locale?: Locale;
  /** false: no own H2 (the page already has a heading above the strip). */
  showHeading?: boolean;
  /** false: no "Get directions →" link under the strip. */
  showDirections?: boolean;
  /**
   * Lighter HTML: ship only the first maxRows of Today + Next 7 days instead
   * of every future confirmed row. Omit (home / sports) to keep all rows.
   */
  maxRows?: number;
  /**
   * Home: ship only rows inside the 7-day window (+2 days buffer for the
   * daily rebuild), minus rows that can never reach the first STRIP_LIMIT
   * visible slots (pruneNeverVisible). Full list = What's On.
   */
  windowOnly?: boolean;
}) {
  const isEs = locale === "es";
  const now = agendaBuildNow();
  const today = madridTodayYmd(now);
  const rows =
    maxRows && maxRows > 0
      ? getUpcomingFixtures(today, now).slice(0, maxRows)
      : windowOnly
        ? pruneNeverVisible(getAgendaCandidatesWindow(now), STRIP_LIMIT, now)
        : getAgendaCandidates(now);
  const visibleIds = new Set(
    getUpcomingFixtures(today, now)
      .slice(0, STRIP_LIMIT)
      .map((f) => f.id),
  );

  const title = isEs ? "Deportes en directo" : "Live sports";
  const empty = isEs
    ? "Retransmitimos grandes eventos deportivos durante la semana — fútbol, NBA, rugby, Fórmula 1 y tenis cuando su emisión está confirmada. Consulta la Agenda para los próximos 7 días."
    : "We show major live sport throughout the week — football, NBA, rugby, Formula 1 and tennis when confirmed. Check What’s On for the next 7 days.";
  const moreHref = isEs ? "/es/whats-on" : "/whats-on";
  const more = isEs ? "Agenda" : "What's On";
  const cta = isEs ? "Cómo llegar" : "Get directions";

  return (
    <section className="mb-12">
      <div
        className={
          showHeading
            ? "mb-4 flex items-end justify-between gap-4"
            : "mb-4 flex items-end justify-end gap-4"
        }
      >
        {showHeading ? (
          <h2 className="font-serif text-2xl font-bold text-cream sm:text-3xl">
            {title}
          </h2>
        ) : null}
        <Link
          href={moreHref}
          className="shrink-0 text-xs uppercase tracking-[0.18em] text-gold hover:text-cream"
        >
          {more}
        </Link>
      </div>
      <div className="pub-rule mb-6" />
      <div data-fx-root="strip" data-fx-limit={STRIP_LIMIT}>
        <ul className="flex flex-col gap-7">
          {rows.map((f) => (
            <li
              key={f.id}
              data-fx-key={`strip:strip:${f.id}`}
              data-fx-slot="strip"
              {...fixtureDataAttrs(f)}
              data-fx-off={!visibleIds.has(f.id) ? "" : undefined}
            >
              <FixtureRow f={f} locale={locale} onNow={isOnNow(f, now)} />
            </li>
          ))}
        </ul>
        <p
          className="text-cream-muted"
          data-fx-empty="strip"
          data-fx-empty-id="strip:strip"
          data-fx-off={visibleIds.size > 0 ? "" : undefined}
        >
          {empty}
        </p>
      </div>
      <PremierLeagueLines locale={locale} windowOnly={windowOnly} />
      {showDirections ? (
        <p className="mt-7">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-sm text-gold hover:text-cream"
          >
            {cta} →
          </a>
        </p>
      ) : null}
    </section>
  );
}
