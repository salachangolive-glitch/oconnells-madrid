import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de Champions League en el centro de Madrid",
  description:
    "Champions League en O'Connell St cerca de Sol cuando la emisión está confirmada. Horario, cómo llegar y Agenda.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Champions League en ${SITE_NAME}`}
        lead="La Champions League se pone en las pantallas cuando la emisión está confirmada. Los horarios de esta semana están en la Agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_45%]"
      />
      <Section title="Antes de venir">
        <p>
          Consulta la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>{" "}
          si tu plan depende de un partido. Si no figura como confirmado,
          pregunta en la barra.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}. Desde Puerta del Sol se camina
          hasta Calle de Espoz y Mina. No se reservan mesas.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Cómo llegar
          </a>
          .
        </p>
        <p>
          Estamos en Calle de Espoz y Mina 7, junto a Puerta del Sol.{" "}
          {HOURS.summaryEs}. No se reservan mesas. Atendemos por orden de
          llegada. Ven al cruce que de verdad ponemos en las pantallas, no a
          todos los partidos europeos de la tele. La agenda es la lista; aquí
          no inventamos horas.
        </p>
        <p>
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
