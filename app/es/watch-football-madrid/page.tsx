import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ver fútbol en Madrid cerca de Sol",
  description:
    "Ver Premier League, Champions League y LaLiga en O'Connell St, Calle de Espoz y Mina 7, cerca de Sol. Pub irlandés céntrico en Madrid.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Ver fútbol · Madrid"
        title="Un pub irlandés céntrico para el partido"
        lead={`${SITE_NAME} está en ${ADDRESS.street}, a poca distancia de Sol — Premier League, Champions League o LaLiga en pantallas sin salir del centro.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Qué se emite">
        <p>
          Fines de semana de Premier League, Champions League entre semana y
          noches de LaLiga en pantallas cuando están confirmadas. Viajeros y
          locales nos usan como punto céntrico para ver el partido.
        </p>
        <p>
          Consulta la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>{" "}
          para fechas confirmadas, o pregunta en la barra.
        </p>
      </Section>
      <Section title="Cómo llegar">
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
          También hay páginas sobre{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>{" "}
          y{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          , o la vista general de{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
