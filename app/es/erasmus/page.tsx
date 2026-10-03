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
        lead="O'Connell St está a pocos pasos de Puerta del Sol y es una opción sencilla para estudiantes y público internacional que buscan un pub en el centro de Madrid."
      />
      <ThursdayFeature locale="es" />
      <Section title="El pub">
        <p>
          Los jueves hay chupitos a 1 €, y puedes consultar en la Agenda los
          deportes confirmados de la semana.
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
