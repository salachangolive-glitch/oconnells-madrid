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
        lead="Vienes a por una pinta y te quedas con lo que de verdad está puesto. Fútbol cuando la noche lo pide, y NFL, NBA, rugby, F1 o tenis cuando lo hemos confirmado — a un paso de Sol. No prometemos todos los partidos. Mira la agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="es" />
      <Section title="Qué ponemos">
        <p>
          Vienes a por una pinta y acabas viendo lo que de verdad está
          puesto. Fútbol casi todos los fines de semana y las noches europeas,
          y otro deporte cuando hemos confirmado un partido grande para el
          bar. No rellenamos la agenda con encuentros que no vamos a emitir.
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
          NFL y NBA cuando esos partidos están en nuestras pantallas; rugby,
          F1 y tenis en las noches que hemos confirmado. Si te importa un
          partido concreto, pregunta en la barra o mira la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
