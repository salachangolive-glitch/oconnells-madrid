import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar para ver la NFL en Madrid cerca de Sol",
  description:
    "Dónde ver la NFL en Madrid: O'Connell St, pub irlandés deportivo en la calle Espoz y Mina, a un paso de Sol. Partidos confirmados en la Agenda.",
  path: "/es/nfl-madrid",
  locale: "es",
});

const faq = [
  {
    q: "¿Dónde ver la NFL en Madrid?",
    a: "O'Connell St es un pub deportivo en el centro de Madrid, a pocos minutos de la Puerta del Sol. Ponemos la NFL en las teles cuando la estamos emitiendo, y cada partido confirmado aparece en la Agenda con la hora de Madrid.",
  },
  {
    q: "¿Ponéis todos los partidos de la NFL?",
    a: "No. Algunos empiezan después del cierre en horario de Madrid, y solo anunciamos un partido cuando la emisión está confirmada. Si buscas uno en concreto, mira la Agenda o pregunta en la barra.",
  },
  {
    q: "¿Estáis cerca del Bernabéu?",
    a: "Estamos en el centro, junto a Sol, no al lado del estadio. En metro desde Sol es fácil pasar por aquí en un día por el centro.",
  },
  {
    q: "¿Hay que reservar?",
    a: "No. No hay reservas de mesa: entra cuando quieras, por orden de llegada.",
  },
];

export default function NflMadridPageEs() {
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="NFL · Centro de Madrid"
        title={`Ver la NFL en Madrid en ${SITE_NAME}`}
        lead="Un pub irlandés deportivo a pocos minutos de la Puerta del Sol, con fútbol americano en las teles cuando lo estamos emitiendo."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Televisiones en la zona deportiva de O'Connell St cerca de Sol"
        position="object-[center_35%]"
      />
      <Section title="Un pub deportivo en el centro de Madrid">
        <p>
          Si buscas un bar deportivo en Madrid para ver un partido, O&apos;Connell
          St está en {ADDRESS.street}, junto a Sol. El fútbol es lo de cada día, y
          la NFL, la NBA, el rugby y la Fórmula 1 se ponen cuando los emitimos.
        </p>
        <p>
          Los partidos confirmados de los próximos 7 días, en hora de Madrid,
          están en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Más sobre los{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes que ponemos
          </Link>{" "}
          y el{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar desde la Puerta del Sol
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
        </p>
      </Section>
      <Section title="Preguntas frecuentes">
        {faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  );
}
