import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches Erasmus cerca de Puerta del Sol",
  description:
    "Pub irlandés para Erasmus cerca de Sol: jueves de chupitos a 1 €, pantallas de fútbol y quedar fácil en Madrid Centro.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Internacionales"
        title={`Tu noche en ${SITE_NAME}`}
        lead="Quedar cerca de Sol, ver el partido y quedarte al jueves de chupitos a 1 € — el ambiente de un Irish pub de verdad en Madrid Centro."
      />
      <ThursdayFeature locale="es" />
      <Section title="Por qué funciona">
        <p>
          Central para que todo el mundo llegue. Ambiente fácil en barra. Pantallas
          cuando hay partido gordo. Pon el jueves en el grupo y el resto se
          organiza solo.
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
