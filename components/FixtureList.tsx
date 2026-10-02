"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FIXTURES,
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";
import { Section } from "@/components/Prose";

type Locale = "en" | "es";

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
 * Client-only Today / This week. SSR shell is neutral (no Today, no past rows).
 * Madrid calendar day is computed in the browser so static export cannot freeze labels.
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

  const emptyUpcoming = isEs
    ? "De momento no hay eventos confirmados. Pregunta en barra, vuelve aquí pronto o escríbenos."
    : "Nothing confirmed for the diary right now. Ask at the bar, check back soon, or drop us a line.";

  // Pre-hydrate / SSR: week-neutral only — never hardcode Today with build-time data.
  if (today === null) {
    return (
      <Section title={isEs ? "Esta semana" : "This week"}>
        <p className="text-cream-muted" aria-hidden="true">
          …
        </p>
        {/* Keep FIXTURES in the client bundle; do not render rows until Madrid today is known. */}
        <span className="hidden" data-fixtures={FIXTURES.length} />
      </Section>
    );
  }

  return (
    <>
      {tonight.length > 0 ? (
        <Section title={isEs ? "Hoy" : "Today"}>
          <ul className="space-y-6">
            {tonight.map((f) => (
              <FixtureDetail key={f.id} f={f} locale={locale} />
            ))}
          </ul>
        </Section>
      ) : null}

      <Section title={isEs ? "Esta semana" : "This week"}>
        {comingUp.length > 0 ? (
          <ul className="space-y-4">
            {comingUp.map((f) => (
              <ComingUpRow key={f.id} f={f} locale={locale} />
            ))}
          </ul>
        ) : (
          <p>
            {emptyUpcoming}{" "}
            <Link
              href={isEs ? "/es/contact" : "/contact"}
              className="text-gold underline"
            >
              {isEs ? "Escríbenos" : "Contact us"}
            </Link>{" "}
            {isEs
              ? "si necesitas confirmar un partido o evento concreto."
              : "if you need a specific match or event confirmed."}
          </p>
        )}
      </Section>
    </>
  );
}
