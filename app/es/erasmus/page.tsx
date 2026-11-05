import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus en Madrid: jueves junto a Sol | O'Connell St",
  description:
    "Erasmus en Madrid: los jueves en O'Connell St, pub irlandés junto a la Puerta del Sol con deporte en directo, cerveza y comida de pub. Espoz y Mina 7.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Jueves · Sol"
        title="Erasmus en Madrid: los jueves, junto a Sol"
        lead="Estudiantes Erasmus, visitantes y gente de todas partes acaban en este pub irlandés, a un paso de la Puerta del Sol. El jueves es la noche en que el ambiente internacional llena la barra."
      />
      <Section title="Los jueves">
        <p>
          Los jueves {SITE_NAME} abre a las {HOURS.monThu.open} y cierra a las{" "}
          {HOURS.monThu.close}. Deporte en directo en pantalla grande cuando está
          confirmado, cerveza en la barra y comida de pub. Es una noche normal de
          pub con ambiente internacional, no una fiesta aparte.
        </p>
      </Section>
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}, junto a la Puerta del Sol, en pleno centro de Madrid:
          fácil de encontrar para un grupo recién llegado a la ciudad.
        </p>
        <p>Horario: {HOURS.summaryEs}.</p>
        <p>
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-gold underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/menu" className="text-gold underline">
            Comida y bebida
          </Link>
          {" · "}
          <Link href="/es/location" className="text-gold underline">
            Cómo llegar
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
