import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Domingo 8 nov en O'Connell's — domingo NFL pasado",
  description:
    "Domingo 8 de noviembre de 2026 en O'Connell's, Espoz y Mina 7: abrimos 12:00, Bengals–Falcons 15:30. Aquel día ya ha tenido lugar. Domingos habituales desde las 14:00. Consulta la Agenda.",
  path: PATHS.sundayEs,
  locale: "es",
});

export default function EsSundayNflPage() {
  return (
    <PageShell locale="es" altLangHref={PATHS.sundayEn}>
      <PageHero
        eyebrow="Evento pasado · domingo 8 de noviembre de 2026"
        title="Domingo NFL en O'Connell's, junto a Sol"
        lead="Aquel domingo abrimos desde las 12:00 (el domingo habitual es a las 14:00). Pub irlandés en Espoz y Mina 7, junto a Puerta del Sol. Bengals–Falcons fue a las 15:30."
      />
      <PastEventNotice locale="es" />

      <Section title="Por qué abrimos a mediodía" featured>
        <p>
          {ADDRESS.full}. Los domingos habituales empezamos a las 14:00. El
          domingo 8 de noviembre abrimos a las 12:00 para que la sala ya estuviera
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
          madrugada. NFL en pantallas — pregunta qué partido echan.
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

      <FourBarsNearSol locale="es" />
    </PageShell>
  );
}
