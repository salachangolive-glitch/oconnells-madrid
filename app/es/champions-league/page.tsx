import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de Champions League en el centro de Madrid",
  description:
    "Champions League en O'Connell St cerca de Sol cuando la emisión está confirmada. Horario, entrada sin reserva y Agenda.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Champions en ${SITE_NAME}`}
        lead="Noches de Champions League en O'Connell St, Calle de Espoz y Mina 7. Los cruces confirmados y la hora de Madrid están en la Agenda."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_45%]"
      />
      <Section title="Antes de venir">
        <p>
          Consulta la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          para el cruce y la hora de Madrid. Si no está en la lista, pregunta
          en la barra antes de venir.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}. No se reservan mesas. Atendemos
          por orden de llegada.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar desde Sol
          </a>
          .
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
