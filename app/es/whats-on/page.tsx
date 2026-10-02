import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RECURRING } from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Partidos — deportes en vivo y jueves chupitos a 1 €",
  description:
    "Qué hay en O'Connell St Madrid: deportes en vivo confirmados con hora Madrid, y jueves chupitos a 1 € cerca de Sol.",
  path: "/es/whats-on",
  locale: "es",
});

export default function EsWhatsOnPage() {
  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="Partidos"
        title={`Esta semana en ${SITE_NAME}`}
        lead="Eventos confirmados con hora Madrid cuando los tenemos — fútbol y otras noches deportivas, más el jueves fijo del pub."
      />

      <FixtureList locale="es" />

      <Section title="Cada semana">
        <ul className="list-disc space-y-2 pl-5">
          <li>{RECURRING.liveSports.es}</li>
          <li>
            {RECURRING.thursdayShots.es} —{" "}
            <Link
              href="/es/thursday-1-euro-shots"
              className="text-gold underline"
            >
              Jueves chupitos a 1 €
            </Link>
          </li>
        </ul>
      </Section>
    </PageShell>
  );
}
