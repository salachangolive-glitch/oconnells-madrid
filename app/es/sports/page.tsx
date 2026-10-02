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
    "O'Connell St cerca de Sol: deportes en directo en pantallas — fútbol, NFL, NBA, rugby, F1, tenis y otras noches grandes cuando están confirmadas.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Pantallas · pintas · Sol"
        title={`Deportes en directo en ${SITE_NAME}`}
        lead="Noches de fútbol cuando importan, más NFL, NBA, rugby, F1, tenis y otros eventos grandes cuando están confirmados — a un paso de Sol. No prometemos todo siempre: consulta la agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="es" />
      <Section title="Qué ponemos">
        <p>
          El pub se llena alrededor de las pantallas. Coge una pinta, busca un
          sitio y disfruta — fútbol los fines de semana y noches europeas, y
          otros deportes cuando hay un evento grande confirmado.
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
          NFL y NBA cuando se emiten; rugby, F1 y tenis cuando hay una noche
          grande confirmada. Pregunta en la barra por la programación — o
          consulta la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
