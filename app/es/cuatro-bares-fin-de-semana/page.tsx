import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { TonightMeetupCta } from "@/components/TonightMeetupCta";
import { FAN_WEEKEND, PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cuatro bares, un fin de semana junto a Sol — 7–8 nov",
  description:
    "O'Reilly's, Dubliners, O'Connell's y Four Corner: un fin de semana junto a Puerta del Sol, 7–8 de noviembre. Direcciones, Maps y horarios. Pubs irlandeses independientes — no es un evento oficial de la NFL.",
  path: PATHS.hubEs,
  locale: "es",
});

export default function EsFourBarsHubPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.hubEn}>
      <PageHero
        eyebrow={FAN_WEEKEND.sloganEs}
        title="Cuatro bares hermanos, un punto de encuentro junto a Sol"
        lead="Sábado 7 y domingo 8 de noviembre. No son cuatro noches sueltas — cuatro salas a pocos minutos de Puerta del Sol. Pubs irlandeses independientes. No es un evento oficial de la NFL."
      />

      <TonightMeetupCta locale="es" />

      <Section title="Esta noche 18:00–19:00 — tres salas, no Four Corner">
        <p>
          Quedada 18:00–19:00 en O&apos;Reilly&apos;s, Dubliners y
          O&apos;Connell&apos;s. Four Corner es domingo desde las 14:00
          solamente, con pantallas de deporte. El sábado no hay NFL.
          Valencia–Real Madrid a las 21:00 si lo estamos poniendo.
        </p>
      </Section>

      <Section title="Cómo encaja el fin de semana">
        <p>
          El sábado no hay kickoffs oficiales de la NFL. Priorizamos las tres
          salas que ya abren: O&apos;Reilly&apos;s desde las 11:30, Dubliners
          desde las 12:00, O&apos;Connell&apos;s desde las 15:00 en Espoz y Mina
          7. Four Corner se suma el domingo desde las 14:00 hasta la madrugada,
          con NFL en pantallas — pregunta qué partido echan.
        </p>
        <p>{WEEKEND_HOURS.sun8NovNoteEs}</p>
        <p>
          El domingo es el día NFL: Bengals–Falcons a las 15:30 (el partido de
          Madrid en el Bernabéu), más NFL desde las 19:00, Atlético–Barcelona a
          las 21:00. Preguntad qué partido hay. No prometemos todos los kickoffs
          en todas las pantallas.
        </p>
        <p>
          <Link href={PATHS.saturdayEs} className="text-gold underline">
            Sábado en O&apos;Connell&apos;s
          </Link>
          {" · "}
          <Link href={PATHS.laterDoorEs} className="text-gold underline">
            Esta puerta hasta las 15:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Pantallas del domingo
          </Link>
          {" · "}
          <Link href={PATHS.usualSundayEs} className="text-gold underline">
            El domingo habitual es a las 14:00
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="es" />
    </PageShell>
  );
}
