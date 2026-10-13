import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ver fútbol en Madrid cerca de Sol",
  description:
    "Ver fútbol junto a la Puerta del Sol en O'Connell St, Calle de Espoz y Mina 7. Partidos confirmados, horario, cómo llegar y Agenda.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Ver fútbol · Madrid"
        title="Ver fútbol junto a Sol, Madrid"
        lead={`${SITE_NAME} está en ${ADDRESS.street}, junto a la Puerta del Sol. Los partidos confirmados están en la Agenda.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Partidos confirmados">
        <p>
          Premier League, LaLiga, Champions League y otro fútbol confirmado se
          ven en las pantallas. La lista, con hora de Madrid, está en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          . Si un partido no sale, pregunta en la barra.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}. No se reservan mesas. Atendemos
          por orden de llegada.
        </p>
      </Section>
      <Section title="Getafe–Brighton · jueves 5 de noviembre, 21:00">
        <p>
          ¿Vienes con los aficionados ingleses o del Getafe? O&apos;Connell St es
          un pub irlandés junto a Sol: punto de encuentro en el centro antes de ir
          a Getafe y para volver después. Emitimos el partido en directo. Sin
          reserva.
        </p>
      </Section>
      <Section title="Preguntas frecuentes">
        <div>
          <h3 className="font-semibold">¿Qué partidos ponéis?</h3>
          <p>
            Premier League, LaLiga, Champions League y otro fútbol confirmado,
            además de la NFL y más. Cada partido confirmado está en la Agenda con
            la hora de Madrid.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">¿Hay que reservar?</h3>
          <p>No hace falta reservar: entra cuando quieras, por orden de llegada.</p>
        </div>
      </Section>
      <Section title="Horario y cómo llegar">
        <p>{ADDRESS.full}. {HOURS.summaryEs}.</p>
        <p>
          Desde Metro Sol, camina hasta Calle de Espoz y Mina. Fachada roja y
          rótulo dorado.{" "}
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
          </Link>
          ,{" "}
          <Link href="/es/nfl-madrid" className="text-cream underline">
            NFL en Madrid
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
