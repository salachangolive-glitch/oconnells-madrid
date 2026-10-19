import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Fontaines D.C. en Madrid: pub irlandés junto a Sol antes y después",
  description:
    "¿Vas a Fontaines D.C. en el Movistar Arena el jueves 22 de octubre? O'Connell St es un pub irlandés junto a Sol, abierto los jueves desde las 18:00.",
  path: "/es/fontaines-dc-madrid",
  locale: "es",
});

export default function FontainesPageEs() {
  return (
    <PageShell locale="es" altLangHref="/fontaines-dc-madrid">
      <PageHero
        eyebrow="Jueves 22 de octubre · Madrid"
        title="Noche de Fontaines D.C.: una pinta junto a Sol"
        lead="Una banda irlandesa en la ciudad y un pub irlandés junto a Sol. Queda aquí antes del concierto o vuelve al centro después."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Grifos de la barra de O'Connell St junto a Sol"
        position="object-[center_40%]"
      />
      <Section title="El concierto">
        <p>
          Fontaines D.C. tocan en el Movistar Arena el jueves 22 de octubre de
          2026, con inicio anunciado a las 20:45. Entradas, apertura de puertas y
          normas en la{" "}
          <a
            href="https://www.movistararena.es/programacion/evento/fontaines-d-c-d-c-eu-tour-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            página del evento en el Movistar Arena
          </a>
          .
        </p>
      </Section>
      <Section title="Antes y después">
        <p>
          Los jueves abrimos a las 18:00, así que hay tiempo para tomar algo antes
          de ir al recinto, y seguimos abiertos cuando vuelvas al centro. Además es nuestra noche de{" "}
          <Link href="/es/thursday-1-euro-shots" className="text-cream underline">
            chupitos del jueves
          </Link>
          .
        </p>
      </Section>
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}, junto a Sol. {HOURS.summaryEs}.
        </p>
        <p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-event="directions" className="text-cream underline">
            Cómo llegar
          </a>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">Deportes y eventos</Link>
        </p>
      </Section>
    </PageShell>
  );
}
