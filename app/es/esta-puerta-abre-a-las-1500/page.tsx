import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Esta puerta abre a las 15:00 — O'Connell's, Espoz y Mina 7",
  description:
    "O'Connell's es la puerta más tarde en Espoz y Mina 7: sábado desde las 15:00. Quedada 18:00–19:00 con la sala ya abierta. Four Corner domingo 14:00 con pantallas. Maps de los cuatro bares.",
  path: PATHS.laterDoorEs,
  locale: "es",
});

export default function EsLaterDoorPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.laterDoorEn}>
      <PageHero
        eyebrow="Evento pasado · sábado 7 de noviembre de 2026 · fachada roja, rótulo dorado"
        title="Esta puerta abre a las 15:00"
        lead="Los sábados este pub sigue abriendo a las 15:00. El sábado 7 de noviembre de 2026 no hubo kickoff NFL. Sala irlandesa independiente en Espoz y Mina 7."
      />
      <PastEventNotice locale="es" />

      <Section title="El cerrojo más tarde de esta calle" featured>
        <p>
          {ADDRESS.full}. Misma calle que Dubliners, puerta más tarde. Ellos ya
          tiran de barril desde las 12:00. Nosotros somos la fachada roja con
          ribete verde: 15:00 hasta las 03:30. Si queréis cocina y terraza
          primero, eso es O&apos;Reilly&apos;s en Pasaje de Matheu 4 desde las
          11:30 — y luego dais la vuelta a este rótulo después de las tres.
        </p>
        <p>
          El sábado 7 de noviembre no hubo kickoff NFL. Valencia–Real Madrid
          fue a las 21:00 aquella noche.
        </p>
      </Section>

      <Section title="La quedada, con la puerta ya abierta">
        <p>
          La quedada 18:00–19:00 no es una cita ante una puerta cerrada. Son
          tres horas después de abrir: O&apos;Connell&apos;s, Dubliners en esta
          calle, O&apos;Reilly&apos;s a la vuelta. Four Corner en Calle de la
          Victoria 6 no entra en la ventana de esta noche.
        </p>
        <p>
          <Link href={PATHS.saturdayEs} className="text-gold underline">
            El sábado en este pub
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Los cuatro bares
          </Link>
        </p>
      </Section>

      <Section title="Four Corner el domingo, 14:00, con pantallas">
        <p>
          Four Corner se sumó aquel domingo desde las 14:00 hasta la madrugada,
          con pantallas de deporte. Aquel domingo nosotros abrimos desde las
          12:00 (los domingos habituales, desde las 14:00).
        </p>
        <p>
          <Link href={PATHS.usualSundayEs} className="text-gold underline">
            El domingo habitual es a las 14:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Pantallas del domingo en O&apos;Connell&apos;s
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="es" />
    </PageShell>
  );
}
