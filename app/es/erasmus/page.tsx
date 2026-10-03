import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches Erasmus cerca de Sol",
  description:
    "Pub irlandés a pocos pasos de Puerta del Sol para estudiantes y público internacional. Jueves: chupitos a 1 €. Agenda con deportes confirmados.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Internacionales"
        title={`Tu noche en ${SITE_NAME}`}
        lead="Si estás de Erasmus en Madrid, O'Connell St queda a un paso de Sol. Se entra, se pide en inglés si quieres, y si hay partido confirmado se ve en las pantallas."
      />
      <ThursdayFeature locale="es" />
      <Section title="Cómo es la noche">
        <p>
          Queda céntrico, así que todo el mundo encuentra la puerta. En la
          barra se habla inglés. Las pantallas se encienden cuando el partido
          está confirmado, no porque sí. Y los jueves los chupitos a 1 € dan
          un plan — pregunta al llegar, por si esa noche hay algún matiz.
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
