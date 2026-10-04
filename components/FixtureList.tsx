"use client";

import { useMemo } from "react";
import {
  FIXTURES,
  displayCompetition,
  displayTeam,
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  isConfirmedFixture,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";
import { Section } from "@/components/Prose";
import { useMadridNow } from "@/components/useMadridNow";

type Locale = "en" | "es";

const EMPTY = {
  today: {
    en: "Nothing confirmed is still to come today. If you want a specific game, ask at the bar.",
    es: "Hoy no queda nada confirmado por empezar. Si buscas un partido concreto, pregunta en la barra.",
  },
  week: {
    en: "No other confirmed screenings in the next 7 days. Ask at the bar if you want a specific game.",
    es: "No hay más emisiones confirmadas en los próximos 7 días. Pregunta en la barra si buscas un partido concreto.",
  },
} as const;

function FixtureDetail({ f, locale }: { f: Fixture; locale: Locale }) {
  const isEs = locale === "es";
  const competition = displayCompetition(f.competition);
  const home = displayTeam(f.homeTeam, locale);
  const away = displayTeam(f.awayTeam, locale);
  return (
    <li>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {competition}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
      </p>
      <p className="mt-1 font-serif text-2xl font-bold text-cream">
        {home} vs {away}
      </p>
      <p className="mt-2 text-cream-muted">
        {formatFixtureDay(f.date, locale)}
        {f.kickoffMadrid
          ? ` · ${f.kickoffMadrid} ${isEs ? "hora Madrid" : "Madrid"}`
          : null}
      </p>
      <p className="mt-4">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          className="text-sm text-gold hover:text-cream"
        >
          {isEs ? "Cómo llegar →" : "Directions →"}
        </a>
      </p>
    </li>
  );
}

function ComingUpRow({ f, locale }: { f: Fixture; locale: Locale }) {
  const isEs = locale === "es";
  return (
    <li>
      <strong className="text-cream">{displayCompetition(f.competition)}</strong>
      {f.kickoffMadrid ? (
        <span className="ml-2 text-xs uppercase tracking-[0.14em] text-gold">
          {isEs ? "Confirmado" : "Confirmed"}
        </span>
      ) : null}
      {" — "}
      {displayTeam(f.homeTeam, locale)} vs {displayTeam(f.awayTeam, locale)}
      {" · "}
      {formatFixtureDay(f.date, locale)}
      {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : null}
    </li>
  );
}

/**
 * Today / Next 7 days. The static HTML uses the deploy clock so confirmed
 * rows are visible without waiting for JavaScript. After mount, Europe/Madrid
 * now hides kickoffs that have already started.
 */
export function FixtureList({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const now = useMadridNow();
  const today = now ? madridTodayYmd(now) : null;
  const tonight = useMemo(
    () => (today && now ? getTonightFixtures(today, now) : []),
    [today, now],
  );
  const upcoming = useMemo(
    () => (today && now ? getUpcomingFixtures(today, now) : []),
    [today, now],
  );
  const comingUp = useMemo(
    () => upcoming.filter((f) => !tonight.some((t) => t.id === f.id)),
    [upcoming, tonight],
  );

  const emptyToday = EMPTY.today[locale];
  const emptyWeek = EMPTY.week[locale];
  const weekTitle = isEs ? "Próximos 7 días" : "Next 7 days";

  if (today === null) {
    const all = FIXTURES.filter(isConfirmedFixture).sort(
      (a, b) =>
        a.date.localeCompare(b.date) ||
        (a.kickoffMadrid ?? "").localeCompare(b.kickoffMadrid ?? ""),
    );
    return (
      <>
        <Section title={isEs ? "Hoy" : "Today"}>
          <p className="text-cream-muted">{emptyToday}</p>
          <span className="hidden" data-fixtures={all.length} />
        </Section>
        <Section title={weekTitle}>
          <p className="text-cream-muted">{emptyWeek}</p>
        </Section>
      </>
    );
  }

  return (
    <>
      <Section title={isEs ? "Hoy" : "Today"}>
        {tonight.length > 0 ? (
          <ul className="space-y-6">
            {tonight.map((f) => (
              <FixtureDetail key={f.id} f={f} locale={locale} />
            ))}
          </ul>
        ) : (
          <p className="text-cream-muted">{emptyToday}</p>
        )}
      </Section>

      <Section title={weekTitle}>
        {comingUp.length > 0 ? (
          <ul className="space-y-4">
            {comingUp.map((f) => (
              <ComingUpRow key={f.id} f={f} locale={locale} />
            ))}
          </ul>
        ) : (
          <p className="text-cream-muted">{emptyWeek}</p>
        )}
      </Section>
    </>
  );
}
