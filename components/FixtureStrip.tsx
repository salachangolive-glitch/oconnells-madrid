"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  displayCompetition,
  displayTeam,
  formatFixtureDay,
  getUpcomingFixtures,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";
import { useMadridNow } from "@/components/useMadridNow";

type Locale = "en" | "es";

function FixtureRow({ f, locale }: { f: Fixture; locale: Locale }) {
  const isEs = locale === "es";
  return (
    <article className="pl-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {displayCompetition(f.competition)}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
      </p>
      <h3 className="mt-1 font-serif text-xl font-bold text-cream sm:text-2xl">
        {displayTeam(f.homeTeam, locale)}{" "}
        <span className="font-sans text-sm font-normal text-cream-muted">
          vs
        </span>{" "}
        {displayTeam(f.awayTeam, locale)}
      </h3>
      <p className="mt-1 text-sm text-cream-muted">
        {formatFixtureDay(f.date, locale)}
        {f.kickoffMadrid
          ? ` · ${f.kickoffMadrid} ${isEs ? "hora Madrid" : "Madrid"}`
          : null}
      </p>
    </article>
  );
}

/**
 * Home / Sports strip. Static HTML uses the deploy clock. After mount,
 * Europe/Madrid now hides kickoffs that have already started.
 */
export function FixtureStrip({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const now = useMadridNow();
  const today = now ? madridTodayYmd(now) : null;

  const upcoming = useMemo(
    () => (today && now ? getUpcomingFixtures(today, now).slice(0, 3) : []),
    [today, now],
  );

  const title = isEs ? "Deportes en directo" : "Live sports";
  const empty = isEs
    ? "Retransmitimos grandes eventos deportivos durante la semana — fútbol, NFL, NBA, rugby, Fórmula 1 y tenis cuando su emisión está confirmada. Consulta la Agenda para los próximos 7 días."
    : "We show major live sport throughout the week — football, NFL, NBA, rugby, Formula 1 and tennis when confirmed. Check What’s On for the next 7 days.";
  const moreHref = isEs ? "/es/whats-on" : "/whats-on";
  const more = isEs ? "Agenda" : "What's On";
  const cta = isEs ? "Cómo llegar" : "Get directions";

  return (
    <section className="mb-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="font-serif text-2xl font-bold text-cream sm:text-3xl">
          {title}
        </h2>
        <Link
          href={moreHref}
          className="shrink-0 text-xs uppercase tracking-[0.18em] text-gold hover:text-cream"
        >
          {more}
        </Link>
      </div>
      <div className="pub-rule mb-6" />
      {today === null ? (
        <p className="text-cream-muted">{empty}</p>
      ) : upcoming.length > 0 ? (
        <ul className="space-y-7">
          {upcoming.map((f) => (
            <li key={f.id}>
              <FixtureRow f={f} locale={locale} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-cream-muted">{empty}</p>
      )}
      <p className="mt-7">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold hover:text-cream"
        >
          {cta} →
        </a>
      </p>
    </section>
  );
}
