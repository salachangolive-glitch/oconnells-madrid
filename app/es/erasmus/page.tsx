import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches Erasmus cerca de Sol",
  description:
    "Pub irlandés para Erasmus cerca de Sol: jueves de chupitos a 1 €, fútbol en pantallas y punto de encuentro céntrico.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Internacionales"
        title={`Tu noche en ${SITE_NAME}`}
        lead="Cerca de Sol: partido en pantallas y jueves de chupitos a 1 € — pub irlandés con ambiente internacional."
      />
      <ThursdayFeature locale="es" />
      <Section title="Por qué funciona">
        <p>
          Céntrico para que todo el mundo llegue. Trato en inglés en barra.
          Pantallas cuando hay partidos importantes. Los chupitos a 1 € del
          jueves dan un plan claro.
        </p>
        <p>
          <Link href="/es/sports" className="text-gold underline">
            Deportes
          </Link>
          {" · "}
          <Link href="/es/location" className="text-gold underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-gold underline">
            Partidos
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
