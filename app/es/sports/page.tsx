import { UpcomingNotes } from "@/components/UpcomingNotes";
import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { AfterGameSundayHighlight } from "@/components/AfterGameSundayHighlight";
import { PremierSunday8NovHighlight } from "@/components/PremierSunday8NovHighlight";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar deportivo Sol Madrid — pub irlandés",
  description:
    "Bar deportivo Sol Madrid en O'Connell St, pub irlandés junto a Puerta del Sol. Fútbol, NFL, baloncesto, rugby, Fórmula 1 y tenis cuando está confirmado. Consulta la Agenda.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Bar deportivo Sol Madrid · pub irlandés"
        title={`Deportes en directo en ${SITE_NAME}`}
        lead="Bar deportivo Sol Madrid: pub irlandés junto a Puerta del Sol, con fútbol, NFL, NBA, rugby, Fórmula 1, tenis y otros deportes cuando la emisión está confirmada. Las horas están en la Agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="es" windowOnly />
      <PremierSunday8NovHighlight locale="es" />
      <AfterGameSundayHighlight locale="es" />
      <Section title="Qué ponemos">
        <p>
          Este pub irlandés y bar deportivo pone fútbol casi todos los fines de
          semana y las noches europeas, y otros deportes cuando esa emisión está
          confirmada: Premier League, EFL Championship, LaLiga, Segunda,
          Champions League, Europa League, Conference League, selecciones, NFL,
          NBA, Euroliga, rugby, Fórmula 1, MotoGP, tenis, UFC y boxeo cuando se
          ven en el pub.
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
      <Section title="Pub de Premier League en Madrid">
        <p>
          Si buscas un pub de Premier League en Madrid, este pub irlandés junto
          a Puerta del Sol pone los saques ingleses de sábado y domingo cuando
          la emisión está confirmada, en hora de Madrid en la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          . Pregunta qué partido echan.{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-gold underline"
          >
            CÓMO LLEGAR
          </a>{" "}
          es el pin de esta ficha. Detalle en{" "}
          <Link href="/es/premier-league" className="text-gold underline">
            Premier League
          </Link>
          {" · "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-gold underline"
          >
            relojes de Madrid para saques ingleses de sábado
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
          Fútbol americano, NBA, rugby, Fórmula 1 y tenis se ponen cuando los
          estamos emitiendo. Para ver la NFL en Madrid en este bar NFL Madrid
          junto a Sol, mira{" "}
          <Link href="/es/nfl-madrid" className="text-gold underline">
            NFL en Madrid
          </Link>
          . Si te importa un partido concreto, pregunta en la barra o mira la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          . Four Corner en Victoria 6 está abierto desde las 14:00, con
          pantallas de deporte — pregunta qué partido echan.
        </p>
      </Section>
      <LocaloFindUs locale="es" />
      <UpcomingNotes locale="es" />
    </PageShell>
  );
}
