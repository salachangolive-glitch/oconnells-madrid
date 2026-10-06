import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Chupitos a 1 euro los jueves en Madrid, junto a Sol",
  description:
    "Chupitos a 1 euro los jueves en Madrid: en O'Connell St, Calle de Espoz y Mina 7, junto a Sol, con deporte en directo en las pantallas.",
  path: "/es/thursday-1-euro-shots",
  locale: "es",
});

export default function EsThursdayShotsPage() {
  return (
    <PageShell locale="es" altLangHref="/thursday-1-euro-shots">
      <PageHero
        eyebrow="Jueves · 1 €"
        title="Chupitos a 1 euro los jueves en Madrid"
        lead="Los jueves tenemos chupitos a 1 € y deporte en directo en las pantallas, junto a Sol. Consulta en barra la selección disponible esa noche."
      />
      <Section title="Chupitos y partidos los jueves">
        <p>
          Los jueves tenemos chupitos a 1 €. Consulta en barra la selección
          disponible esa noche.
        </p>
        <p>
          Y el jueves también hay deporte en directo: con Movistar tenemos
          prácticamente todos los deportes.
        </p>
        <p>
          {SITE_NAME} está en Calle de Espoz y Mina 7, a un paso de Puerta del
          Sol. No se reservan mesas. Atendemos por orden de llegada.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Solo los jueves.</li>
          <li>
            Los partidos de esta semana están en la{" "}
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
