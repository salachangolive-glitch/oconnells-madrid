import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { HighlightCards, PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Pub irlandés y sports bar cerca de Sol`,
  description:
    "O'Connell St: pub irlandés y sports bar en Calle de Espoz y Mina 7, Madrid Centro cerca de Puerta del Sol. Premier League, Champions League y LaLiga. Jueves chupitos €1 para Erasmus y viajeros.",
  path: "/es",
  locale: "es",
});

export default function EsHomePage() {
  return (
    <PageShell locale="es" altLangHref="/">
      <PageHero
        eyebrow="Espoz y Mina · Puerta del Sol"
        title="Pub irlandés y sports bar en Madrid Centro"
        lead="Pantallas para el fútbol. Jueves chupitos €1. A un paso de Sol."
      />
      <VenueHero variant="hero" className="mb-8" />
      <HighlightCards
        items={[
          {
            href: "/es/sports",
            title: "Deportes y pantallas",
            blurb: "PL, Champions League, LaLiga — NFL y NBA cuando tocan.",
          },
          {
            href: "/whats-on",
            title: "What's on",
            blurb: "Partidos confirmados y noches semanales.",
          },
          {
            href: "/es/thursday-1-euro-shots",
            title: "Jueves chupitos €1",
            blurb: "La noche para Erasmus, turistas y grupos de amigos.",
          },
          {
            href: "/es/erasmus",
            title: "Erasmus e internacionales",
            blurb: "Quedar fácil cerca de Sol — ambiente friendly.",
          },
          {
            href: "/es/location",
            title: "Ubicación",
            blurb: "Calle de Espoz y Mina 7, 28012 Madrid.",
          },
          {
            href: MAPS_URL,
            title: "Cómo llegar",
            blurb: "Abre Google Maps — a poca distancia de Sol.",
          },
        ]}
      />
      <Section title="Ver fútbol en Madrid Centro">
        <p>
          ¿Buscas dónde ver fútbol cerca de Sol? {SITE_NAME} es un sports bar
          irlandés a pocos minutos de Puerta del Sol — Premier League los fines
          de semana, Champions League entre semana y LaLiga en pantallas, con
          NFL y NBA cuando se emiten.
        </p>
        <p>
          <Link
            href="/es/watch-football-madrid"
            className="text-cream underline"
          >
            Ver fútbol en Madrid
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
        </p>
      </Section>
      <Section title="Jueves chupitos €1" featured>
        <p>
          Los jueves son chupitos a €1 — la noche fácil para Erasmus,
          internacionales y quien explore Madrid Centro. También hay miércoles
          €1; el jueves es el que todo el mundo menciona.
        </p>
        <p>
          <Link
            href="/es/thursday-1-euro-shots"
            className="inline-flex rounded-md bg-cream px-4 py-2 font-semibold text-pub-green hover:bg-cream/90"
          >
            Detalles del jueves €1
          </Link>
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          {ADDRESS.full}. Llama al{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>{" "}
          o abre{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Google Maps
          </a>
          . {HOURS.summaryEs}.
        </p>
        <p>
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
          {" · "}
          <Link href="/es/about" className="text-cream underline">
            Sobre nosotros
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
