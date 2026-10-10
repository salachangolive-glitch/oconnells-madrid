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
        eyebrow="Deportes en directo · Sol"
        title={`Deportes en directo en ${SITE_NAME}`}
        lead="Pub irlandés junto a Puerta del Sol, con fútbol, NFL, NBA, rugby, Fórmula 1, tenis y otros deportes cuando la emisión está confirmada. Las horas están en la Agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="es" />
      <Section title="Qué ponemos">
        <p>
          Ponemos fútbol casi todos los fines de semana y las noches europeas,
          y otros deportes cuando esa emisión está confirmada: Premier League,
          EFL Championship, LaLiga, Segunda, Champions League, Europa League,
          Conference League, selecciones, NFL, NBA, Euroliga, rugby, Fórmula 1,
          MotoGP, tenis, UFC y boxeo cuando se ven en el pub.
        </p>
        <p>
          Para las horas, mira la{" "}
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
          NFL, NBA, rugby, Fórmula 1 y tenis se ponen cuando los estamos
          emitiendo. Si te importa un partido concreto, pregunta en la barra o
          mira la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
