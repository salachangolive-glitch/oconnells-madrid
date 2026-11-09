import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub para ver la Champions en Madrid, junto a Sol",
  description:
    "Pub Champions junto a Sol en Espoz y Mina 7. Cruces UCL nombrados solo si la Agenda marca Confirmado. Hora Madrid. CÓMO LLEGAR.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="Pub Champions Madrid · noches UEFA"
        title={`Pub para ver la Champions junto a Sol: ${SITE_NAME}`}
        lead={`Noches de Champions League en ${ADDRESS.full}, junto a Puerta del Sol. Nombramos un cruce UCL solo cuando la Agenda lo marca Confirmado — hora de Madrid en cada fila. Pregunta qué partido echan.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_45%]"
      />
      <Section title="Champions League en esta puerta" featured>
        <p>
          Este pub irlandés junto a Sol pone la UEFA Champions League cuando la
          emisión está confirmada — no cada noche europea en cada pantalla. Los
          martes y miércoles en esta dirección:{" "}
          <Link
            href="/es/noches-europeas-martes-miercoles-esta-puerta"
            className="text-cream underline"
          >
            noches europeas en esta puerta
          </Link>
          . Más fútbol:{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Madrid
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          .
        </p>
      </Section>
      <Section title="Cruces Champions nombrados (Confirmado, hora Madrid)">
        <p>
          Las filas siguientes salen de la misma agenda confirmada que la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Si tu cruce no está, pregunta en la barra antes de sentarte.
        </p>
        <PremierLeagueLines locale="es" competition="ucl" windowOnly />
        <p className="mt-4 text-sm text-cream-muted">
          Solo aparecen cruces UCL marcados Confirmado. Las horas se actualizan
          al reconstruir la agenda — relojes de Madrid, no un gráfico UK dos
          veces.
        </p>
      </Section>
      <Section title="CÓMO LLEGAR — este pin de Maps">
        <p>
          Las búsquedas de pub Champions Madrid deben caer en esta ficha en
          Espoz y Mina 7, no en la puerta de al lado. CID 10697659365903665225.
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
          .
        </p>
      </Section>
    </PageShell>
  );
}
