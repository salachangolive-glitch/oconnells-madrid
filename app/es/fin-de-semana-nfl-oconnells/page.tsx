import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sábado 7 nov NFL en O'Connell's — evento pasado",
  description:
    "Sábado 7 de noviembre de 2026 en O'Connell's, Espoz y Mina 7: 15:00–03:30, sin NFL en directo aquel día. Aquel sábado ya ha tenido lugar. Domingos habituales desde las 14:00. Consulta la Agenda.",
  path: PATHS.saturdayEs,
  locale: "es",
});

export default function EsSaturdayFansPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.saturdayEn}>
      <PageHero
        eyebrow="Evento pasado · sábado 7 de noviembre de 2026 · Espoz y Mina 7"
        title="El fin de semana NFL en aquel sábado"
        lead="El sábado 7 de noviembre de 2026 no hubo NFL en directo. O'Connell's abrió a las 15:00 (hasta las 03:30) en Calle de Espoz y Mina 7, la misma calle que Dubliners. Pub irlandés independiente."
      />
      <PastEventNotice locale="es" />

      <Section title="Quedada 18:00–19:00 en esta puerta">
        <p>
          La quedada del sábado 7 de noviembre es 18:00–19:00 en
          O&apos;Connell&apos;s (esta sala, Espoz y Mina 7), Dubliners en la
          misma calle y O&apos;Reilly&apos;s en Pasaje de Matheu 4. Abrimos a
          las 15:00, así que la ventana empieza con la sala ya abierta. Four
          Corner no abre esta noche — domingo desde las 14:00 hasta la
          madrugada, con pantallas de deporte. El sábado no hay NFL.
          Valencia–Real Madrid a las 21:00 si lo estamos poniendo.
        </p>
      </Section>

      <Section title="Hoy no hay NFL en directo" featured>
        <p>
          El sábado 7 de noviembre no hubo partidos NFL. Aquel sábado el fútbol
          en Sol fue europeo, no americano.
        </p>
        <p>
          Valencia–Real Madrid es a las 21:00. Lo ponemos cuando lo estamos
          emitiendo — preguntad en barra. El fútbol del sábado por aquí es
          europeo, no americano.
        </p>
      </Section>

      <Section title="Esta sala, esta hora">
        <p>
          {ADDRESS.full}. Fachada roja, ribete verde, rótulo dorado. Abrimos más
          tarde que el restaurante-bar de la esquina: 15:00 hoy, y nos quedamos
          hasta las 03:30. Si queréis comer y terraza primero, eso es
          O&apos;Reilly&apos;s en Pasaje de Matheu 4 desde las 11:30. Dubliners
          ya abre en esta calle desde las 12:00.
        </p>
        <p>
          Four Corner en Calle de la Victoria 6 se suma el domingo desde las
          14:00 hasta la madrugada, con NFL en pantallas — pregunta qué partido
          echan.
        </p>
      </Section>

      <Section title="El domingo ya es público hoy">
        <p>{WEEKEND_HOURS.sun8NovNoteEs}</p>
        <p>
          Mañana: Bengals–Falcons a las 15:30 (partido de Madrid en el
          Bernabéu; pantalla grande aquí si no vais al estadio), ventanas NFL
          desde las 19:00, Atlético–Barcelona a las 21:00. Preguntad qué
          partido hay. No prometemos todos los kickoffs en todas las pantallas.
        </p>
        <p>
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Domingo 8 nov en O&apos;Connell&apos;s
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Los cuatro bares
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="es" />
    </PageShell>
  );
}
