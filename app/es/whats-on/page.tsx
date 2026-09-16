import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RECURRING } from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Partidos — fútbol y jueves chupitos a 1 €",
  description:
    "Partidos en O'Connell St Madrid: fútbol confirmado, Premier League / Champions League / LaLiga en pantallas, jueves chupitos a 1 €.",
  path: "/es/whats-on",
  locale: "es",
});

export default function EsWhatsOnPage() {
  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="Partidos"
        title={`Esta semana en ${SITE_NAME}`}
        lead="Partidos confirmados cuando los tenemos, y las noches fijas del pub."
      />

      <FixtureList locale="es" />

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
