import Link from "next/link";
import {
  formatFixtureDay,
  getUpcomingFixtures,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

function FixtureRow({ f, locale }: { f: Fixture; locale: Locale }) {
  return (
    <article className="border-l-2 border-gold pl-4 sm:pl-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {f.competition}
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
          ? ` · ${f.kickoffMadrid} ${locale === "es" ? "hora Madrid" : "Madrid"}`
          : null}
      </p>
    </article>
  );
}

/** Editorial sports block for Home / Sports — not generic cards. */
export function FixtureStrip({ locale = "en" }: { locale?: Locale }) {
  const upcoming = getUpcomingFixtures().slice(0, 3);
  const title = locale === "es" ? "En las pantallas" : "On the screens";
  const empty =
    locale === "es"
      ? "Premier League, Champions League y LaLiga cuando tocan. Mira What’s on o pregunta en barra."
      : "Premier League, Champions League and LaLiga when they’re on. Check What’s on or ask at the bar.";
  const cta = locale === "es" ? "Cómo llegar" : "Get directions";
  const more = "What's on";

  return (
    <section className="mb-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="font-serif text-2xl font-bold text-cream sm:text-3xl">
          {title}
        </h2>
        <Link
          href="/whats-on"
          className="shrink-0 text-xs uppercase tracking-[0.18em] text-gold hover:text-cream"
        >
          {more}
        </Link>
      </div>
      <div className="pub-rule mb-6" />
      {upcoming.length > 0 ? (
        <ul className="space-y-6">
          {upcoming.map((f) => (
            <li key={f.id}>
              <FixtureRow f={f} locale={locale} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-cream-muted">{empty}</p>
      )}
      <p className="mt-6">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10 hover:text-cream"
        >
          {cta}
        </a>
      </p>
    </section>
  );
}
