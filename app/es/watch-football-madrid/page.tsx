import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ver fútbol en Madrid cerca de Puerta del Sol",
  description:
    "Ver Premier League, Champions League y LaLiga en O'Connell St, Calle de Espoz y Mina 7, cerca de Puerta del Sol. Pub irlandés en Madrid Centro.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Ver fútbol · Madrid"
        title="Un pub irlandés céntrico para el partido"
        lead={`${SITE_NAME} está en ${ADDRESS.street}, a poca distancia de Puerta del Sol — ideal si quieres Premier League, Champions League o LaLiga en pantallas sin salir de Madrid Centro.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Zona de mesas de madera y pantalla grande para deportes en directo en O'Connell St"
        position="object-[center_20%]"
      />
      <Section title="Qué se emite">
        <p>
          Fines de semana de Premier League, midweeks de Champions League y
          noches de LaLiga en pantallas. ¿Lo buscas antes de llegar? Somos el
          pub irlandés de la zona de Sol que los viajeros apuntan para el
          pitido inicial.
        </p>
        <p>
          Mira{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            la cartelera
          </Link>{" "}
          para partidos confirmados, o pregunta si un partido concreto es
          imprescindible.
        </p>
      </Section>
      <Section title="Cómo llegar al pitido">
        <p>
          Dirígete a Puerta del Sol y camina hasta Calle de Espoz y Mina.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Abrir cómo llegar
          </a>
          .
        </p>
        <p>
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
