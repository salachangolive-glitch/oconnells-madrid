import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus y visitantes cerca de Sol",
  description:
    "O'Connell St, junto a Puerta del Sol: pub irlandés con estudiantes Erasmus, turistas y gente de fuera. Espoz y Mina 7.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Visitantes"
        title={`Gente de fuera en ${SITE_NAME}`}
        lead="Estudiantes Erasmus, turistas y gente de muchos países coinciden en este pub irlandés, a un paso de Puerta del Sol. Es una noche normal del bar, no una fiesta Erasmus aparte."
      />
      <ThursdayFeature locale="es" />
      <Section title="En el pub">
        <p>
          {SITE_NAME} está en Calle de Espoz y Mina 7. El ambiente es
          internacional toda la semana. El deporte confirmado se ve en las
          pantallas: mira la Agenda para las horas. Los jueves, pregunta en
          la barra por los chupitos a 1 €.
        </p>
        <p>
          <Link href="/es/sports" className="text-gold underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/location" className="text-gold underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
