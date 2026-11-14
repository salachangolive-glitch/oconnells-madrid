import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { LISTING_NUMBER_SEVEN_PATHS } from "@/lib/listing-number-seven-pin";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, GBP_PLACE_ID, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Número 7: este pin de O'Connell St | fútbol Sol",
  description:
    "En Espoz y Mina 7 hay más de una ficha en Maps. Este pin — O'Connell St — es el pub irlandés del fútbol. CID en ficha. Confirmados en la Agenda.",
  path: LISTING_NUMBER_SEVEN_PATHS.es,
  locale: "es",
});

export default function EsListingNumberSevenPinPage() {
  return (
    <PageShell locale="es" altLangHref={LISTING_NUMBER_SEVEN_PATHS.en}>
      <PageHero
        eyebrow="Identidad de ficha · Espoz y Mina 7 · fútbol en directo"
        title="Esta ficha en el número 7: el pin de Maps de O'Connell St para el fútbol en esta puerta."
        lead={`Maps puede mostrar más de un pub irlandés en ${ADDRESS.full}. Para ver fútbol en directo en ${SITE_NAME}, abre el pin de esta ficha — fachada roja, rótulo dorado O'CONNELL ST. — no la miniatura que te resulte familiar en la búsqueda.`}
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Rincón de barra en O'Connell St en Espoz y Mina 7 cerca de Sol"
        position="object-[center_35%]"
      />
      <Section title="El mismo número, pin distinto en Maps" featured>
        <p>
          Calle de Espoz y Mina 7 es una dirección en el pasaje junto a Puerta
          del Sol.           Google puede enlazar más de una ficha a ese número — cada una con su
          pin, reseñas y destino de CÓMO LLEGAR. Esta página desambigua el
          fútbol en esta ficha de pub irlandés, publicada como O&apos;Connell St
          en Maps.
        </p>
        <p>
          No te decimos que elijas una puerta “rival”. Te decimos que revises el
          pin antes de caminar: si buscas el pub irlandés deportivo que nombra
          saques solo cuando la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          los marca Confirmado, usa{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            CÓMO LLEGAR
          </a>{" "}
          con CID 10697659365903665225 (place ID{" "}
          <span className="font-mono text-sm">{GBP_PLACE_ID}</span>). Es esta
          ficha, no la miniatura de un vecino.
        </p>
        <p>
          Comprueba la fachada: frente rojo, rótulo dorado con este nombre. La
          dirección completa está en{" "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          . Caminar desde la plaza es otro asunto — mira{" "}
          <Link
            href="/es/ultimos-metros-reloj-sol-rotulo-dorado-esta-puerta"
            className="text-cream underline"
          >
            últimos metros del reloj de Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="Cruces nombrados cuando el pin es el correcto">
        <p>
          Cuando Maps cae en esta puerta, la lista honesta de fútbol son las
          mismas filas confirmadas que la Agenda — hora de Madrid; pregunta qué
          partido si chocan dos noches. No inventamos pantallas ni prometemos
          todas las ligas.
        </p>
        <FixtureStrip locale="es" windowOnly showHeading={false} showDirections={false} />
        <p className="mt-4 text-sm text-cream-muted">
          Contexto Premier y Champions:{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          . Más partidos:{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR — O'Connell St en este pin">
        <p>
          Las búsquedas de pub irlandés en Puerta del Sol deben seguir
          resolviendo a esta ficha cuando el plan es fútbol. Usa el CID de arriba
          para que la navegación termine en el rótulo dorado, no en otro sitio
          guardado en el mismo número.
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
          <Link href="/es" className="text-cream underline">
            Inicio
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
