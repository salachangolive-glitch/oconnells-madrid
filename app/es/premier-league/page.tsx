import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League en pantallas en Madrid cerca de Sol",
  description:
    "Premier League en O'Connell St cerca de Sol cuando la emisión está confirmada. Horario, entrada sin reserva y Agenda.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid"
        title={`Premier League en ${SITE_NAME}`}
        lead="La Premier se pone cuando de verdad la vamos a emitir. Si quieres la hora de esta semana, está en la agenda, no aquí."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Televisiones de deportes en O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Partidos confirmados de esta semana">
        <p>
          No publicamos un horario aquí si el pub no ha confirmado la emisión.
          Mira la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          o pregunta en la barra.
        </p>
        <p>
          También{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          y{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Horario y cómo llegar">
        <p>
          {ADDRESS.full}, a un paso de Puerta del Sol. {HOURS.summaryEs}. No se
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
            Cómo llegar desde Puerta del Sol
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
