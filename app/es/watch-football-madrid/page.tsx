import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ver fútbol en Madrid cerca de Sol",
  description:
    "Fútbol confirmado en O'Connell St, Calle de Espoz y Mina 7, cerca de Sol. Horario, cómo llegar y Agenda.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Ver fútbol · Madrid"
        title="Fútbol en un pub junto a Sol"
        lead={`${SITE_NAME} está en ${ADDRESS.street}, a pocos pasos de Puerta del Sol. Los partidos confirmados están en la Agenda.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Partidos confirmados">
        <p>
          Un partido figura como confirmado solo cuando el pub lo emite.
          Consulta la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>{" "}
          para la hora de Madrid. Si no está en la lista, pregunta en la barra:
          no des por hecho que se retransmite.
        </p>
        <p>
          {HOURS.summaryEs}. No se reservan mesas. Atendemos por orden de
          llegada. El punto de referencia es Sol: Espoz y Mina 7 está a unos
          minutos andando. Solo damos un partido por confirmado cuando se ve
          en el pub.
        </p>
      </Section>
      <Section title="Horario y cómo llegar">
        <p>{ADDRESS.full}. {HOURS.summaryEs}.</p>
        <p>
          Desde Metro Sol, camina hasta Calle de Espoz y Mina. Fachada roja y
          rótulo dorado. No se reservan mesas. Atendemos por orden de llegada.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          . También{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          ,{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          y{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
