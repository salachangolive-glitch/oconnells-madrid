import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sobre O'Connell St Madrid",
  description:
    "Sobre O'Connell St: pub irlandés y bar deportivo en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Sol. Pantallas de fútbol y jueves chupitos a 1 €.",
  path: "/es/about",
  locale: "es",
});

export default function EsAboutPage() {
  return (
    <PageShell locale="es" altLangHref="/about">
      <PageHero
        eyebrow="Sobre nosotros"
        title={SITE_NAME}
        lead="Pub irlandés y bar deportivo en el corazón de Madrid — Premier League, Champions League y LaLiga en pantallas, jueves chupitos a 1 € para Erasmus e internacionales."
      />
      <InteriorPhoto
        src="/images/interior/about-salon.webp"
        alt="Mesas de madera, barriles y decoración clásica de pub irlandés en O'Connell St"
        position="object-center"
      />
      <Section title="En resumen">
        <p>
          Estamos en {ADDRESS.full}, cerca de Puerta del Sol. {HOURS.summaryEs}.
        </p>
        <p>
          Ven por el partido, la pinta y los jueves de chupitos a 1 € — un pub
          irlandés céntrico para viajeros, estudiantes y locales.
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
            Jueves 1 €
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-cream underline">
            Partidos
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
