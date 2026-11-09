import { UpcomingNotes } from "@/components/UpcomingNotes";
import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar deportivo Sol Madrid — pub irlandés",
  description:
    "Pub de Premier League y bar deportivo Sol en Espoz y Mina 7. Cruces nombrados solo si la Agenda marca Confirmado. Hora Madrid. CÓMO LLEGAR.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Bar deportivo Sol Madrid · pub de Premier League en Madrid"
        title="Pub de Premier League en Madrid en este bar deportivo de Sol"
        lead={`${SITE_NAME} en ${ADDRESS.full}: pub irlandés y bar deportivo Sol Madrid, junto a Puerta del Sol. Nombramos una emisión solo cuando la Agenda la marca Confirmado — hora de Madrid en cada fila. Pregunta qué partido echan.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes y pasillo de asientos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_15%]"
      />
      <Section title="Cruces nombrados — Confirmado, hora de Madrid" featured>
        <p>
          La lista siguiente es la misma agenda confirmada que la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-gold underline">
            Agenda
          </Link>
          . No inventamos saques ni prometemos todas las ligas a la vez. Si chocan
          dos partidos, pregunta en la barra qué imagen principal echan.
        </p>
        <FixtureStrip locale="es" windowOnly showHeading={false} />
      </Section>
      <Section title="Fútbol en directo en esta puerta">
        <p>
          El fútbol manda la sala: Premier, LaLiga, Champions y otras
          competiciones cuando la emisión está confirmada. Fines de semana
          ingleses:{" "}
          <Link href="/es/premier-league" className="text-gold underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-gold underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>
          . Más fútbol:{" "}
          <Link href="/es/watch-football-madrid" className="text-gold underline">
            ver fútbol en Madrid
          </Link>
          {" · "}
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
          NFL, NBA, rugby, Fórmula 1 y tenis solo cuando la Agenda los marca
          Confirmado. Para NFL junto a Sol:{" "}
          <Link href="/es/nfl-madrid" className="text-gold underline">
            NFL en Madrid
          </Link>
          . ¿Un partido concreto? Pregunta en la barra; la agenda está en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR — este pin de Maps">
        <p>
          Las búsquedas de bar deportivo Sol Madrid deben caer en esta ficha en
          Espoz y Mina 7, no en la puerta de al lado. CID 10697659365903665225.
        </p>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            CÓMO LLEGAR
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          .
        </p>
      </Section>
      <SportsPageWayfinding locale="es" currentPath="/es/sports" />
      <LocaloFindUs locale="es" />
      <UpcomingNotes locale="es" />
    </PageShell>
  );
}
