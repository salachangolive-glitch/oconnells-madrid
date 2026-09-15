import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Jueves chupitos €1 — noche prioritaria Erasmus",
  description:
    "Jueves chupitos €1 en O'Connell St Madrid cerca de Sol. Prioridad comercial para Erasmus; también miércoles €1. Tel. +34 915 32 79 56.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Chupitos €1"
        title="Jueves chupitos €1"
        lead={`En ${SITE_NAME}, el jueves es la noche que priorizamos para Erasmus: chupitos a €1, ubicación céntrica, ambiente de pub interior.`}
      />
      <PhotoPlaceholder
        label="Noche de chupitos — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Jueves frente a miércoles">
        <p>
          Los miércoles también hay chupitos €1. El jueves sigue siendo la
          prioridad comercial para Erasmus e internacionales. No listamos aquí
          la carta completa de chupitos ni otros precios — pregunta en barra.
        </p>
      </Section>
      <Section title="Conviene saber">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cerca de Puerta del Sol.</li>
          <li>Sin terraza; noches en interior.</li>
          <li>Sin música en vivo habitual.</li>
        </ul>
        <p>
          ¿Dudas? Llama al{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          . También{" "}
          <Link href="/es/erasmus" className="text-cream underline">
            Erasmus
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
