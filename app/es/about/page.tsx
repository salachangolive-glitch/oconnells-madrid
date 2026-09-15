import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sobre O'Connell St Madrid",
  description:
    "Sobre O'Connell St: pub irlandés y sports bar en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Puerta del Sol. Sin terraza; sin música en vivo habitual.",
  path: "/es/about",
  locale: "es",
});

export default function EsAboutPage() {
  return (
    <PageShell locale="es" altLangHref="/about">
      <PageHero
        eyebrow="Sobre nosotros"
        title={SITE_NAME}
        lead="Pub irlandés y sports bar en el centro de Madrid — pantallas de fútbol y deporte USA seleccionado, jueves chupitos €1 para Erasmus."
      />
      <PhotoPlaceholder
        label="Retrato del bar / sala — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="En resumen">
        <p>
          Estamos en {ADDRESS.full}, cerca de Puerta del Sol. Teléfono:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <p>
          No somos terraza, ni local de música en vivo habitual, ni partner
          oficial de equipos o ligas. Sí somos un pub/sports bar irlandés
          céntrico para partidos, pintas y jueves €1.
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
        </p>
      </Section>
    </PageShell>
  );
}
