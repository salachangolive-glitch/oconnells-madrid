import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "El domingo habitual es a las 14:00 — este domingo O'Connell's abre a las 12:00",
  description:
    "El domingo habitual de O'Connell's es a las 14:00. El 8 nov abrimos a las 12:00. Four Corner sigue a las 14:00 en Victoria 6, con pantallas. Direcciones y Maps de los cuatro bares junto a Sol.",
  path: PATHS.usualSundayEs,
  locale: "es",
});

export default function EsUsualSundayPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.usualSundayEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · una excepción en el horario"
        title="El domingo habitual es a las 14:00. Este no."
        lead="El horario de este pub sigue diciendo domingo desde las 14:00. Dejadlo para el resto de semanas. El domingo 8 de noviembre el cerrojo gira a las 12:00 para que la sala exista antes del partido NFL de Madrid. Pub irlandés independiente en Espoz y Mina 7. No es un evento oficial de la NFL."
      />

      <Section title="Por qué la pizarra falla un solo día" featured>
        <p>
          {ADDRESS.full}. {WEEKEND_HOURS.sun8NovNoteEs} No estamos copiando el
          servicio de nadie. Es una excepción de un día para que la sala
          irlandesa ya sea sala a mediodía, no una fachada cerrada mientras en
          la plaza se habla del kickoff.
        </p>
        <p>
          Bengals–Falcons es a las 15:30 en el Bernabéu. Podéis verlo aquí en
          pantalla grande si no vais al estadio. Desde las 19:00 este pub
          también es donde caéis si volvéis a Sol. Preguntad qué partido hay.
          No prometemos todos los kickoffs en todos los televisores.
        </p>
      </Section>

      <Section title="Four Corner sigue abriendo a las 14:00 — con pantallas">
        <p>
          No mezcléis los dos relojes del domingo. Four Corner en Calle de la
          Victoria 6 sigue abriendo desde las 14:00 hasta la madrugada, con
          pantallas de deporte — pregunta qué partido echan. Esa es su hora,
          no la nuestra. Para entonces nosotros ya llevamos dos horas abiertos.
        </p>
        <p>
          O&apos;Reilly&apos;s en Pasaje de Matheu 4 mantiene el 11:30–01:30.
          Dubliners en esta calle, desde las 12:00. Tres salas además de Four
          Corner; Four Corner a partir de las 14:00.
        </p>
        <p>
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Ventanas del domingo en este pub
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Direcciones y Maps
          </Link>
          {" · "}
          <Link href={PATHS.laterDoorEs} className="text-gold underline">
            Sábado: esta puerta hasta las 15:00
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="es" />
    </PageShell>
  );
}
