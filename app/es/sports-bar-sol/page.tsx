import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar deportivo en Sol, Madrid — noches de fútbol",
  description:
    "Bar deportivo junto a la Puerta del Sol, en Calle de Espoz y Mina 7: fútbol en pantallas y punto de encuentro antes y después del partido. Sin reserva; horarios en la Agenda.",
  path: "/es/sports-bar-sol",
  locale: "es",
});

export default function EsSportsBarSolPage() {
  return (
    <PageShell locale="es" altLangHref="/sports-bar-sol">
      <PageHero
        eyebrow="Pub deportivo · Puerta del Sol"
        title="Bar deportivo en Sol para noches de fútbol"
        lead={`${SITE_NAME} está en Calle de Espoz y Mina 7, junto a Puerta del Sol: punto de encuentro en el centro para fútbol, antes del partido y después.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en O'Connell St junto a Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Champions League en el centro">
        <p>
          Cuando hay Champions, mucha gente se concentra en Sol antes de ir al
          estadio y vuelve al centro después. O&apos;Connell St es un pub
          irlandés deportivo en esa misma zona: entra, busca una pantalla y
          úsalo como punto de encuentro de la noche.
        </p>
        <p>
          Los horarios confirmados en hora de Madrid están siempre en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . La carta está en el{" "}
          <Link href="/es/menu" className="text-cream underline">
            menú
          </Link>
          .
        </p>
      </Section>
      <Section title="Atlético de Madrid–Bayern · martes 3 de noviembre, 21:00">
        <p>
          Noche de Champions en el Metropolitano. Emitimos Atlético de Madrid
          contra Bayern de Múnich en directo a las 21:00 hora de Madrid. Quedad
          en Sol antes de salir hacia el estadio, o volved al centro después
          para comentar el partido. Entrada sin reserva: por orden de llegada.
        </p>
      </Section>
      <Section title="También en el calendario">
        <p>
          El domingo 8 de noviembre emitimos en directo todos los partidos NFL
          de la jornada.
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          {ADDRESS.full}, junto a Puerta del Sol. {HOURS.summaryEs}. No se
          reservan mesas. Atendemos por orden de llegada.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar desde Sol
          </a>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
