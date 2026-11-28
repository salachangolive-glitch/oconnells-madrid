import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { EUROPEAN_NIGHT_PATHS } from "@/lib/european-nights-weeknight-door";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches europeas entre semana, esta puerta | O'Connell St",
  description:
    "Fútbol europeo mar/mié en Espoz y Mina 7: esta puerta abre a las 18:00 lun–jue. Noches de Champions confirmadas en hora de Madrid. CÓMO LLEGAR.",
  path: EUROPEAN_NIGHT_PATHS.es,
  locale: "es",
});

export default function NochesEuropeasEntreSemanaPage() {
  return (
    <PageShell locale="es" altLangHref={EUROPEAN_NIGHT_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · martes y miércoles · noches europeas"
        title="Las noches europeas caen después del cerrojo entre semana, no a mediodía."
        lead="Sol turístico sigue pensando que los pubs irlandeses abren al mediodía. Esta puerta en Espoz y Mina 7 gira la llave a las 18:00 de lunes a jueves — la línea entre semana ya publicada — así un saque de Champions a las 21:00 en Madrid es tres horas de sala, no una fachada cerrada."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_45%]"
      />
      <Section title="Las 18:00 son el cerrojo entre semana, no un horario nuevo" featured>
        <p>
          {ADDRESS.full}. De lunes a jueves abrimos a las {HOURS.monThu.open} y
          cerramos a las {HOURS.monThu.close}. Eso ya está en la pizarra de
          esta web. No lo movemos. El fútbol continental entre semana en
          Madrid suele sentarse a las 21:00. Entras después del trabajo, no
          antes de comer.
        </p>
        <p>
          Un hueco a las 18:45 en Madrid, cuando la Agenda lista uno, también
          cae después de este cerrojo. Un saque a primera hora de la tarde un
          martes no es la historia de esta puerta. No inventamos una emisión
          para un partido que saca con el rótulo dorado a oscuras.
        </p>
      </Section>
      <Section title="Solo cruces confirmados — hora de Madrid">
        <p>
          Nombramos una noche de Champions, Europa League o Conference League
          solo cuando la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          la marca Confirmado, en hora de Madrid. Pregunta qué partido echan.
          La ficha de competición — los cruces, no este reloj de puerta — es{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            ver la Champions junto a Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>
          Esta ficha, CID 10697659365903665225. No la puerta de al lado.
        </p>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            CÓMO LLEGAR
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
