import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub de fútbol en Sol, Madrid — partidos en directo",
  description:
    "Ver fútbol en Sol en Espoz y Mina 7: cruces nombrados solo si la Agenda marca Confirmado. Hora Madrid. Pregunta qué partido. CÓMO LLEGAR.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Ver fútbol en Madrid · fútbol en directo en esta puerta"
        title={`Pub de fútbol en Sol: ${SITE_NAME}`}
        lead={`${SITE_NAME} en ${ADDRESS.full}: pub irlandés junto a Puerta del Sol para ver fútbol en directo. Nombramos una emisión solo cuando la Agenda la marca Confirmado — hora de Madrid en cada fila. Pregunta qué partido echan.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Cruces nombrados — Confirmado, hora de Madrid" featured>
        <p>
          La lista siguiente coincide con las filas confirmadas de la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . No inventamos saques ni prometemos todas las ligas a la vez. Si chocan
          dos partidos, pregunta en la barra qué imagen principal echan.
        </p>
        <FixtureStrip locale="es" windowOnly showHeading={false} showDirections={false} />
      </Section>
      <Section title="Fútbol en directo en esta puerta">
        <p>
          Premier League, LaLiga, Champions y otras competiciones cuando la
          emisión está confirmada. Fines de semana ingleses:{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-cream underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>
          . Dos relojes el sábado en una sala:{" "}
          <Link
            href="/es/dos-relojes-futbol-sabado-una-sala-esta-puerta"
            className="text-cream underline"
          >
            dos relojes de fútbol el sábado
          </Link>
          . Más deporte:{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <Section title="Preguntas frecuentes">
        <div>
          <h3 className="font-semibold">¿Qué partidos ponéis?</h3>
          <p>
            Solo fútbol (y otros deportes) que la Agenda marca Confirmado, con
            hora de Madrid en cada fila. Si no sale en la lista, pregunta en la
            barra — no prometemos cada partido en cada pantalla.
          </p>
        </div>
      </Section>
      <Section title="CÓMO LLEGAR — este pin de Maps">
        <p>
          Las búsquedas de ver fútbol en Madrid deben caer en esta ficha en
          Espoz y Mina 7, no en la puerta de al lado. CID 10697659365903665225.
        </p>
        <p>
          Desde Sol, camina hasta Espoz y Mina — fachada roja, rótulo dorado.{" "}
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
          {" · "}
          <Link href="/es/sports-bar-sol" className="text-cream underline">
            bar deportivo en Sol
          </Link>
          {" · "}
          <Link href="/es/nfl-madrid" className="text-cream underline">
            noches NFL
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
