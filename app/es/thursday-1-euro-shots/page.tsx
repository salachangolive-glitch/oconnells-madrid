import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Chupitos a 1 € los jueves cerca de Sol",
  description:
    "Chupitos a 1 € los jueves en O'Connell St Madrid cerca de Sol. Pregunta en la barra: es una oferta de los jueves, no de cada bebida toda la noche.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Jueves · 1 €"
        title="Chupitos a 1 € los jueves"
        lead={`En ${SITE_NAME}, el jueves es la noche de los chupitos a 1 €. Pregunta en la barra al llegar.`}
      />
      <Section title="Por qué el jueves">
        <p>
          Chupitos a 1 € los jueves y a un paso de Sol — ambiente de pub
          irlandés para grupos, gente del hostel o quien quiera una buena noche
          en Madrid.
        </p>
        <p>
          La oferta de chupitos a 1 € es de los jueves, no de otros días.
          No es una promesa de que cada bebida y cada hora salgan a 1 € —
          pregunta en la barra qué se sirve.
        </p>
      </Section>
      <Section title="Información útil">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cerca de Sol — cómodo para grupos y viajeros.</li>
          <li>Pregunta en la barra qué se sirve esa noche.</li>
          <li>
            Combínalo con un partido de la{" "}
            <Link href="/es/whats-on" className="text-gold underline">
              Agenda
            </Link>
            .
          </li>
        </ul>
        <p>
          ¿Dudas?{" "}
          <Link href="/es/contact" className="text-gold underline">
            Escríbenos
          </Link>
          .{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
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
