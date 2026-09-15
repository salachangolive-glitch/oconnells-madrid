import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Jueves chupitos a 1 € cerca de Puerta del Sol",
  description:
    "Jueves chupitos a 1 € en O'Connell St Madrid — Erasmus, internacionales, turistas y grupos cerca de Sol. También miércoles a 1 €. Tel. +34 915 32 79 56.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Jueves · 1 €"
        title="Jueves · chupitos a 1 €"
        lead={`En ${SITE_NAME}, el jueves es la noche de chupitos a 1 € — Erasmus, internacionales, turistas y quien quiera una noche fácil en Madrid Centro cerca de Sol.`}
      />
      <Section title="Por qué el jueves">
        <p>
          Chupitos a 1 €, a un paso de Puerta del Sol y ambiente de Irish pub —
          la noche a la que los grupos sí vienen. Trae a tus compañeros Erasmus,
          a la gente del hostel o al grupo de WhatsApp.
        </p>
        <p>También hay miércoles a 1 €. El jueves es el que más se nota.</p>
      </Section>
      <Section title="Bueno saberlo">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cerca de Sol — fácil para grupos mezclados y viajeros.</li>
          <li>Pregunta en barra qué se sirve esa noche.</li>
          <li>
            Combínalo con un partido de{" "}
            <Link href="/es/whats-on" className="text-gold underline">
              Partidos
            </Link>
            .
          </li>
        </ul>
        <p>
          ¿Dudas? Llama al{" "}
          <a href={PHONE_TEL} className="text-gold underline">
            {PHONE_DISPLAY}
          </a>
          .{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Cómo llegar
          </a>
          {" · "}
          <Link href="/es/location" className="text-gold underline">
            Ubicación
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
