import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sobre O'Connell St Madrid",
  description:
    "Sobre O'Connell St: pub irlandés y sports bar en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Puerta del Sol. Pantallas de fútbol y jueves chupitos €1.",
  path: "/es/about",
  locale: "es",
});

export default function EsAboutPage() {
  return (
    <PageShell locale="es" altLangHref="/about">
      <PageHero
        eyebrow="Sobre nosotros"
        title={SITE_NAME}
        lead="Pub irlandés y sports bar en el corazón de Madrid — Premier League, Champions League y LaLiga en pantallas, jueves chupitos €1 para Erasmus e internacionales."
      />
      <VenueHero variant="secondary" className="mb-10" />
      <Section title="En resumen">
        <p>
          Estamos en {ADDRESS.full}, cerca de Puerta del Sol en Madrid Centro.
          Teléfono:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          . {HOURS.summaryEs}.
        </p>
        <p>
          Ven por el partido, la pinta y los jueves €1 — un sports bar irlandés
          céntrico para viajeros, estudiantes y locales que quieren pantallas
          cerca de Sol.
        </p>
        <p>
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
          {" · "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves €1
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
