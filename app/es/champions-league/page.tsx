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
        lead="Las noches europeas se llenan cuando el cruce está de verdad en nuestras pantallas. Si tu plan depende de un partido, mira la agenda antes de venir."
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
          si te importa un cruce concreto. Si no figura como confirmado,
          pregunta en la barra. Aquí no inventamos horas.
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
