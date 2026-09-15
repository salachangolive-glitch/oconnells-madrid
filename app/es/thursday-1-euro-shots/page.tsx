import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Jueves chupitos €1 cerca de Puerta del Sol",
  description:
    "Jueves chupitos €1 en O'Connell St Madrid — Erasmus, internacionales, turistas y grupos cerca de Sol. También miércoles €1. Tel. +34 915 32 79 56.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Chupitos €1 · Jueves"
        title="Jueves chupitos €1"
        lead={`En ${SITE_NAME}, el jueves es la noche de chupitos a €1 — Erasmus, internacionales, turistas y quien quiera una noche fácil en Madrid Centro cerca de Sol.`}
      />
      <VenueHero className="mb-10" aspect="video" caption="Jueves €1 · Erasmus" />
      <Section title="Por qué el jueves" featured>
        <p>
          Chupitos a €1, a poca distancia de Puerta del Sol, energía de pub
          irlandés — es la noche a la que la gente de verdad viene. Trae a tus
          compañeros de Erasmus, al hostel o al grupo del WhatsApp.
        </p>
        <p>También hay miércoles €1. El jueves es la noche estrella.</p>
      </Section>
      <Section title="Conviene saber">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cerca de Puerta del Sol — fácil para grupos mixtos y viajeros.</li>
          <li>Pregunta en barra qué se sirve esa noche.</li>
          <li>
            Combínalo con un partido de{" "}
            <Link href="/whats-on" className="text-cream underline">
              what&apos;s on
            </Link>
            .
          </li>
        </ul>
        <p>
          ¿Dudas? Llama al{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          .{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Cómo llegar
          </a>
          {" · "}
          <Link href="/es/erasmus" className="text-cream underline">
            Erasmus
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
