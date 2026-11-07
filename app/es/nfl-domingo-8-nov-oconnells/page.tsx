import Link from "next/link";
import { FourSisterBars } from "@/components/FourSisterBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Domingo 8 nov en O'Connell's — NFL desde las 12:00",
  description:
    "Domingo 8 de noviembre: O'Connell's abre desde las 12:00 en Espoz y Mina 7. Bengals–Falcons 15:30, NFL desde las 19:00, Atlético–Barcelona 21:00. Preguntad qué partido hay. Four Corner desde las 14:00.",
  path: PATHS.sundayEs,
  locale: "es",
});

export default function EsSundayNflPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.sundayEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · desde las 12:00"
        title="Domingo NFL en O'Connell's, junto a Sol"
        lead="Excepción de un día: abrimos desde las 12:00 (el domingo habitual es a las 14:00). Pub irlandés en Espoz y Mina 7, junto a Puerta del Sol. Independiente — no es un evento oficial de la NFL. Preguntad qué partido hay."
      />

      <Section title="Por qué abrimos a mediodía" featured>
        <p>
          {ADDRESS.full}. Los domingos habituales empezamos a las 14:00. El
          domingo 8 de noviembre abrimos a las 12:00 para que la sala ya esté
          en marcha antes del partido de Madrid. {WEEKEND_HOURS.sun8NovNoteEs}
        </p>
        <p>
          El partido NFL de Madrid es en el Bernabéu. Podéis ver Bengals–Falcons
          aquí en pantalla grande si no vais al estadio. A partir de las 19:00
          este pub también es la parada si volvéis al centro.
        </p>
      </Section>

      <Section title="Ventanas del domingo (hora Madrid)">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-cream">15:30</strong> — Bengals–Falcons
            (partido del Bernabéu; también en nuestra pantalla grande).
          </li>
          <li>
            <strong className="text-cream">19:00</strong> — siete partidos NFL,
            luego otro a las <strong className="text-cream">22:05</strong> y tres
            más a las <strong className="text-cream">22:25</strong>. Preguntad
            cuál hay. No prometemos todos los kickoffs en todas las pantallas.
          </li>
          <li>
            <strong className="text-cream">21:00</strong> — Atlético–Barcelona,
            misma sala, misma noche. Preguntad en barra.
          </li>
        </ul>
        <p>
          Las pantallas se comparten. Si necesitáis un partido concreto,
          decídlo al entrar — preferimos deciros la verdad a fingir que cada
          ventana va en cada tele.
        </p>
      </Section>

      <Section title="Las otras tres salas">
        <p>
          Dubliners está en esta calle desde las 12:00. O&apos;Reilly&apos;s
          (Pasaje de Matheu 4) mantiene su 11:30–01:30 de siempre. Four Corner
          (Calle de la Victoria 6) abre el domingo desde las 14:00 hasta la
          madrugada como parte del mismo punto de encuentro. No listamos qué
          partidos echan allí.
        </p>
        <p>
          <Link href={PATHS.hubEs} className="text-gold underline">
            Direcciones, Maps y horarios de los cuatro
          </Link>
          {" · "}
          <Link href={PATHS.saturdayEs} className="text-gold underline">
            Primero el sábado — sin NFL en directo
          </Link>
        </p>
      </Section>

      <FourSisterBars locale="es" />
    </PageShell>
  );
}
