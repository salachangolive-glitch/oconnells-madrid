import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Agenda — Deportes en directo | O'Connell St Madrid",
  description:
    "Agenda de O'Connell St Madrid: deportes en directo confirmados con hora de Madrid. Fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más cuando aparecen como Confirmado.",
  path: "/es/whats-on",
  locale: "es",
});

export default function EsWhatsOnPage() {
  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="Agenda"
        title={`Esta semana en ${SITE_NAME}`}
        lead="Consulta el deporte en directo esta semana en O'Connell St: fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más. Horarios en hora de Madrid; solo las emisiones marcadas como Confirmado se emiten en nuestras pantallas."
      />

      <FixtureList locale="es" />

      <Section title="Deportes en directo en O'Connell St">
        <p>
          O&apos;Connell St es un pub irlandés junto a Puerta del Sol — Espoz y
          Mina 7. Ponemos grandes eventos deportivos en nuestras pantallas cuando
          están confirmados: fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más.
          Consulta la Agenda arriba para esta semana, o pregunta en la barra si
          buscas un partido concreto.
        </p>
      </Section>

      <Section title="Chupitos a 1 € los jueves">
        <p>
          Todos los jueves: chupitos a 1 € en el pub. Pregunta en la barra al llegar.{" "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-gold underline"
          >
            Chupitos a 1 € los jueves
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
