import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Deportes en directo Madrid — pub irlandés cerca de Sol",
  description:
    "O'Connell St cerca de Sol retransmite grandes eventos deportivos cuando su emisión está confirmada. Consulta la Agenda.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Pantallas · pintas · Sol"
        title={`Deportes en directo en ${SITE_NAME}`}
        lead="Retransmitimos grandes eventos deportivos cuando su emisión está confirmada. Consulta la Agenda para ver la programación de esta semana."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="es" />
      <Section title="Qué ponemos">
        <p>
          Retransmitimos grandes eventos deportivos cuando su emisión está
          confirmada: fútbol, NFL, NBA, rugby, Fórmula 1 y tenis. Un partido
          solo aparece aquí cuando el pub ha confirmado la emisión.
        </p>
        <p>
          Para la agenda, mira{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          . Si buscas fútbol en concreto:{" "}
          <Link href="/es/watch-football-madrid" className="text-gold underline">
            Ver fútbol en Madrid
          </Link>
          , con detalle de{" "}
          <Link href="/es/premier-league" className="text-gold underline">
            Premier League
          </Link>{" "}
          y{" "}
          <Link href="/es/champions-league" className="text-gold underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Interior con F1 y deportes en las televisiones de O'Connell St"
        position="object-[center_25%]"
      />
      <Section title="Más allá del fútbol">
        <p>
          Consulta la Agenda para ver la programación de esta semana, o
          pregunta en la barra.{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
