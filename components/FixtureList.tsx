"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FIXTURES,
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  isConfirmedFixture,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";
import { Section } from "@/components/Prose";

type Locale = "en" | "es";

const EMPTY = {
  today: {
    en: "No confirmed screenings are listed for today. Looking for a specific game? Ask us at the bar.",
    es: "Hoy no hay emisiones confirmadas en la agenda. Si buscas un evento concreto, pregúntanos en la barra.",
  },
  week: {
    en: "No other confirmed screenings listed for the rest of the week. Ask at the bar if you're looking for a specific game.",
    es: "No hay más emisiones confirmadas listadas para el resto de la semana. Pregunta en la barra si buscas un partido concreto.",
  },
} as const;

function FixtureDetail({ f, locale }: { f: Fixture; locale: Locale }) {
  const isEs = locale === "es";
  return (
    <li>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {f.competition}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
      </p>
      <p className="mt-1 font-serif text-2xl font-bold text-cream">
        {f.homeTeam} vs {f.awayTeam}
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
      <strong className="text-cream">{f.competition}</strong>
      {f.kickoffMadrid ? (
        <span className="ml-2 text-xs uppercase tracking-[0.14em] text-gold">
          {isEs ? "Confirmado" : "Confirmed"}
        </span>
      ) : null}
      {" — "}
      {f.homeTeam} vs {f.awayTeam}
      {" · "}
      {formatFixtureDay(f.date, locale)}
      {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : null}
    </li>
  );
}

/**
 * Today / This week. The static HTML includes the confirmed slate so the page
 * is not empty before JavaScript. After mount, Madrid's calendar day splits
 * Today from the rest of the week.
 */
export function FixtureList({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(madridTodayYmd());
  }, []);

  const tonight = useMemo(
    () => (today ? getTonightFixtures(today) : []),
    [today],
  );
  const upcoming = useMemo(
    () => (today ? getUpcomingFixtures(today) : []),
    [today],
  );
  const comingUp = useMemo(
    () => upcoming.filter((f) => !tonight.some((t) => t.id === f.id)),
    [upcoming, tonight],
  );

  const emptyToday = EMPTY.today[locale];
  const emptyWeek = EMPTY.week[locale];
  // Static HTML must include the slate. The Madrid "today" split runs after
  // mount; until then show the earliest day as Today and the rest as This week
  // so a no-JS or pre-hydrate view is never the empty sentence while rows exist.
  if (today === null) {
    const all = FIXTURES.filter(isConfirmedFixture).sort(
      (a, b) =>
        a.date.localeCompare(b.date) ||
        (a.kickoffMadrid ?? "").localeCompare(b.kickoffMadrid ?? ""),
    );
    const firstDay = all[0]?.date;
    const first = all.filter((f) => f.date === firstDay);
    const later = all.filter((f) => f.date !== firstDay);
    return (
      <>
        <Section title={isEs ? "Hoy" : "Today"}>
          {first.length > 0 ? (
            <ul className="space-y-6">
              {first.map((f) => (
                <FixtureDetail key={f.id} f={f} locale={locale} />
              ))}
            </ul>
          ) : (
            <p className="text-cream-muted">{emptyToday}</p>
          )}
          <span className="hidden" data-fixtures={FIXTURES.length} />
        </Section>
        <Section title={isEs ? "Esta semana" : "This week"}>
          {later.length > 0 ? (
            <ul className="space-y-4">
              {later.map((f) => (
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

      <Section title={isEs ? "Esta semana" : "This week"}>
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
