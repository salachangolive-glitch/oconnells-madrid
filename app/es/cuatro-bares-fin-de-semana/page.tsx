import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { FAN_WEEKEND, PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cuatro bares, un fin de semana junto a Sol — evento pasado",
  description:
    "O'Reilly's, Dubliners, O'Connell's y Four Corner: el fin de semana junto a Puerta del Sol, 7–8 de noviembre de 2026, ya ha tenido lugar. Direcciones y Maps. Pubs irlandeses independientes.",
  path: PATHS.hubEs,
  locale: "es",
});

export default function EsFourBarsHubPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.hubEn}>
      <PageHero
        eyebrow={`Evento pasado · ${FAN_WEEKEND.sloganEs}`}
        title="Cuatro bares hermanos, un punto de encuentro junto a Sol"
        lead="Sábado 7 y domingo 8 de noviembre de 2026. Cuatro salas a pocos minutos de Puerta del Sol: O'Reilly's, Dubliners, O'Connell's y Four Corner. Pubs irlandeses independientes."
      />
      <PastEventNotice locale="es" />

      <Section title="Cómo encajó el fin de semana">
        <p>
          El sábado no hubo kickoffs NFL. Tres salas ya abrían:
          O&apos;Reilly&apos;s desde las 11:30, Dubliners desde las 12:00,
          O&apos;Connell&apos;s desde las 15:00 en Espoz y Mina 7. Four Corner
          se sumó el domingo desde las 14:00 hasta la madrugada, con NFL en
          pantallas.
        </p>
        <p>{WEEKEND_HOURS.sun8NovNoteEs}</p>
        <p>
          El domingo fue el día NFL: Bengals–Falcons a las 15:30 (el partido de
          Madrid en el Bernabéu), más NFL desde las 19:00, Atlético–Barcelona a
          las 21:00.
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
