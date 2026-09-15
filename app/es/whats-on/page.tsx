import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import {
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  RECURRING,
} from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Partidos — fútbol y jueves chupitos a 1 €",
  description:
    "Partidos en O'Connell St Madrid cerca de Sol: fútbol confirmado, Premier League / Champions League / LaLiga en pantallas, jueves chupitos a 1 €.",
  path: "/es/whats-on",
  locale: "es",
});

export default function EsWhatsOnPage() {
  const tonight = getTonightFixtures();
  const upcoming = getUpcomingFixtures();

  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="Partidos"
        title={`Esta semana en ${SITE_NAME}`}
        lead="Partidos confirmados cuando los tenemos, y las noches fijas del pub."
      />

      <Section title="Hoy">
        {tonight.length > 0 ? (
          <ul className="space-y-6">
            {tonight.map((f) => (
              <li key={f.id}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {f.competition}
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-cream">
                  {f.homeTeam} vs {f.awayTeam}
                </p>
                <p className="mt-2 text-cream-muted">
                  {formatFixtureDay(f.date, "es")}
                  {f.kickoffMadrid ? ` · ${f.kickoffMadrid} hora Madrid` : null}
                </p>
                <p className="mt-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-cream"
                  >
                    Cómo llegar →
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Aún no hay partido fechado para hoy. Llama al{" "}
            <a href={PHONE_TEL} className="text-gold underline">
              {PHONE_DISPLAY}
            </a>{" "}
            si necesitas confirmar un partido concreto.
          </p>
        )}
      </Section>

      {upcoming.length > tonight.length ? (
        <Section title="Próximamente">
          <ul className="space-y-4">
            {upcoming
              .filter((f) => !tonight.some((t) => t.id === f.id))
              .map((f) => (
                <li key={f.id}>
                  <strong className="text-cream">{f.competition}</strong>
                  {" — "}
                  {f.homeTeam} vs {f.awayTeam}
                  {" · "}
                  {formatFixtureDay(f.date, "es")}
                  {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : null}
                </li>
              ))}
          </ul>
        </Section>
      ) : null}

      <Section title="Cada semana">
        <ul className="list-disc space-y-2 pl-5">
          <li>{RECURRING.football.es}</li>
          <li>
            {RECURRING.thursdayShots.es} —{" "}
            <Link
              href="/es/thursday-1-euro-shots"
              className="text-gold underline"
            >
              Jueves chupitos a 1 €
            </Link>
          </li>
          <li>{RECURRING.wednesdayShots.es}</li>
        </ul>
      </Section>
    </PageShell>
  );
}
