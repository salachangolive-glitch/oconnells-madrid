import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ubicación — Calle de Espoz y Mina 7, cerca de Sol",
  description:
    "Encuentra O'Connell St en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Puerta del Sol. Cómo llegar en Google Maps. Tel. +34 915 32 79 56. Sin terraza.",
  path: "/es/location",
  locale: "es",
});

export default function EsLocationPage() {
  return (
    <PageShell locale="es" altLangHref="/location">
      <PageHero
        eyebrow="Ubicación"
        title={`Cómo llegar a ${SITE_NAME}`}
        lead={`${ADDRESS.full} — a poca distancia de Puerta del Sol.`}
      />
      <PhotoPlaceholder
        label="Calle / entrada — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Dirección y contacto">
        <p>{ADDRESS.full}</p>
        <p>
          Teléfono:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            Abrir en Google Maps
          </a>
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          Dirígete a Puerta del Sol y camina hasta Calle de Espoz y Mina. El
          local es solo interior — no hay terraza. Para partidos y jueves €1,
          mira también{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes
          </Link>{" "}
          y{" "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            jueves chupitos
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
