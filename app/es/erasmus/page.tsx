import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches Erasmus cerca de Puerta del Sol",
  description:
    "Pub irlandés friendly para Erasmus cerca de Sol: jueves chupitos €1 como prioridad; también miércoles €1. O'Connell St, Espoz y Mina 7.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Madrid"
        title={`Noches para estudiantes en ${SITE_NAME}`}
        lead="Pub irlandés céntrico y fácil para internacionales — con el jueves de chupitos €1 como noche prioritaria para Erasmus."
      />
      <PhotoPlaceholder
        label="Noche Erasmus / público del bar — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Jueves primero">
        <p>
          Los jueves de chupitos €1 son la prioridad comercial para Erasmus. Los
          miércoles también hay chupitos €1, pero si eliges una noche semanal,
          que sea el jueves.
        </p>
        <p>
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves chupitos €1
          </Link>
        </p>
      </Section>
      <Section title="Por qué Sol">
        <p>
          Cerca de Puerta del Sol facilita quedar en grupo. Sin terraza y sin
          música en vivo habitual: noche de pub/sports bar interior.
        </p>
      </Section>
    </PageShell>
  );
}
