import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Jueves chupitos a 1 € cerca de Sol",
  description:
    "Jueves chupitos a 1 € en O'Connell St Madrid — Erasmus, internacionales, turistas y amigos cerca de Sol. También hay chupitos a 1 € los miércoles.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Jueves · 1 €"
        title="Jueves · chupitos a 1 €"
        lead={`En ${SITE_NAME}, el jueves son chupitos a 1 € — Erasmus, internacionales, turistas y quien quiera una buena noche cerca de Sol.`}
      />
      <Section title="Por qué el jueves">
        <p>
          Chupitos a 1 € y a un paso de Sol — ambiente de pub irlandés para
          compañeros Erasmus, gente del hostel o el grupo con el que sales por
          Madrid.
        </p>
        <p>
          También hay chupitos a 1 € los miércoles. El jueves suele ser el más
          animado.
        </p>
      </Section>
      <Section title="Información útil">
        <ul className="list-disc space-y-2 pl-5">
          <li>Cerca de Sol — cómodo para grupos y viajeros.</li>
          <li>Pregunta en barra qué se sirve esa noche.</li>
          <li>
            Combínalo con un partido de{" "}
            <Link href="/es/whats-on" className="text-gold underline">
              Partidos
            </Link>
            .
          </li>
        </ul>
        <p>
          ¿Dudas? <Link href="/es/contact" className="text-gold underline">Escríbenos</Link>. {" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
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
