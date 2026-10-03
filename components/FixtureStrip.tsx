"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  formatFixtureDay,
  getUpcomingFixtures,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

function FixtureRow({ f, locale }: { f: Fixture; locale: Locale }) {
  const isEs = locale === "es";
  return (
    <article className="pl-0">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {f.competition}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
      </p>
      <h3 className="mt-1 font-serif text-xl font-bold text-cream sm:text-2xl">
        {f.homeTeam}{" "}
        <span className="font-sans text-sm font-normal text-cream-muted">
          vs
        </span>{" "}
        {f.awayTeam}
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
 * Home / Sports strip — client Madrid date so past rows never stick as "upcoming".
 * SSR shows neutral empty copy until hydrate (no build-time fixture rows).
 */
export function FixtureStrip({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(madridTodayYmd());
  }, []);

  const upcoming = useMemo(
    () => (today ? getUpcomingFixtures(today).slice(0, 3) : []),
    [today],
  );

  const title = isEs ? "Deportes en directo" : "Live sports";
  const empty = isEs
    ? "Retransmitimos grandes eventos deportivos durante la semana — fútbol, NFL, NBA, rugby, Fórmula 1 y tenis cuando su emisión está confirmada. Consulta la Agenda para ver la programación."
    : "We show major live sport throughout the week — football, NFL, NBA, rugby, Formula 1 and tennis when confirmed. Check What’s On for this week’s schedule.";
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
