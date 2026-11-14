import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "United 17:30 después del par inglés — O'Connell's, Sol",
  description:
    "Manchester United–Aston Villa es a las 17:30 Madrid el domingo 8 nov, después de Liverpool y Chelsea a las 15:00. O'Connell's, Espoz y Mina 7. Preguntad qué hay en pantalla. Cuatro bares, Maps, Four Corner 14:00.",
  path: PL_PATHS.unitedEs,
  locale: "es",
});

export default function EsUnited1730Page() {
  return (
    <PageShell locale="es" altLangHref={PL_PATHS.unitedEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · el pitido inglés más tarde"
        title="United es a las 17:30. Después del par. Después del kickoff NFL también."
        lead="Manchester United–Aston Villa es a las 17:30 hora de Madrid. Liverpool y Chelsea ya han pitado a las 15:00. El partido NFL de Madrid ya ha pitado a las 15:30. Esta puerta irlandesa en Espoz y Mina 7 no finge que esos relojes estén vacíos. Preguntad qué partido hay."
      />

      <Section title="El cerrojo inglés más tarde" featured>
        <p>
          {ADDRESS.full}. Las {PL_KICKOFFS.unitedVilla.madrid} son el único
          pitido de Premier League del domingo 8 de noviembre que no está
          apilado a las 15:00. Palace–Liverpool, Sunderland–Chelsea,
          Brighton–Brentford, Ipswich–Bournemouth — todos a las 15:00 Madrid.
          United–Villa es el que espera.
        </p>
        <p>
          Esperar no significa que la sala espere a United. A las 15:30
          Bengals–Falcons es el Madrid Game de la NFL. Si llegáis a las 17:20
          por Old Trafford, podéis entrar con fútbol americano todavía en el
          cristal. Ese solape es el motivo de decirlo en voz alta. No
          quitamos United de una promesa en la web. Os decimos que preguntéis.
        </p>
      </Section>

      <Section title="Cómo se apila de verdad la tarde">
        <ul className="list-disc space-y-2 pl-5">
          <li>12:00 — aquel domingo abrió esta puerta (el domingo habitual es 14:00).</li>
          <li>
            14:00 — Four Corner, Victoria 6, abre hasta la madrugada, pantallas
            de deporte.
          </li>
          <li>15:00 — Liverpool, Chelsea, Brighton, Ipswich (hora inglesa).</li>
          <li>15:30 — Bengals–Falcons (NFL Madrid Game).</li>
          <li>17:30 — Manchester United–Aston Villa.</li>
        </ul>
        <p className="mt-3">
          Atlético–Barcelona es a las 21:00 — no es Real Madrid–Barcelona.
          Seguid preguntando. No todos los partidos van en todas las pantallas.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEs} className="text-gold underline">
            Liverpool 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.chelseaEs} className="text-gold underline">
            Chelsea 15:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEs} className="text-gold underline">
            NFL domingo en este pub
          </Link>
        </p>
      </Section>

      <Section title="Cuatro puertas hermanas, un pitido inglés más tarde">
        <p>
          La cocina de O’Reilly’s ya tira desde las 11:30 en el pasaje.
          Dubliners desde las 12:00 en esta calle. Nosotros desde las 12:00
          este domingo. Four Corner desde las 14:00, con pantallas. United a
          las 17:30 llega lo bastante tarde para que los cuatro cerrojos hayan
          girado. No llega lo bastante tarde como para inventar un listado de
          United en Victoria 6.
        </p>
        <p>
          <Link href={PATHS.hubEs} className="text-gold underline">
            Cuatro bares junto a Sol
          </Link>
        </p>
      </Section>

      <PremierSundayFourBars locale="es" />
    </PageShell>
  );
}
