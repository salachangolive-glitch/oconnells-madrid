import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SATURDAY_CLOCK_PATHS } from "@/lib/saturday-english-madrid-clocks";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Saques ingleses sábado: reloj Madrid | O'Connell St",
  description:
    "Saques ingleses de sábado en Espoz y Mina 7: Madrid va una hora por delante. La Agenda ya está en hora de Madrid. Sábado 15:00. CÓMO LLEGAR.",
  path: SATURDAY_CLOCK_PATHS.es,
  locale: "es",
});

export default function RelojesMadridSaquesInglesesPage() {
  return (
    <PageShell locale="es" altLangHref={SATURDAY_CLOCK_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · saques ingleses de sábado · reloj de Madrid"
        title="Suma una hora. Y para. La Agenda ya está en hora de Madrid."
        lead="Si llegas al rótulo dorado de Espoz y Mina 7 con una gráfica del sábado en hora del Reino Unido, convierte una sola vez. Este pub irlandés lista los saques de Premier confirmados en hora de Madrid. Sumar una hora y luego leer la Agenda como si siguiera en hora británica te deja una hora tarde."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos y pantallas en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="La conversión es una hora, no dos" featured>
        <p>
          España va una hora por delante del Reino Unido en un sábado de fútbol
          normal (CET frente a GMT en invierno; CEST frente a BST en verano).
          Un saque a las 15:00 en el Reino Unido es 16:00 en esta calle. Uno a
          las 17:30 británicas es 18:30 aquí. El hueco de las 12:30 británicas
          es 13:30 en Madrid.
        </p>
        <p>
          {ADDRESS.full}. La{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          ya imprime ese reloj de Madrid en cada fila confirmada. Fíate de esa
          columna. No le sumes una segunda hora encima.
        </p>
      </Section>
      <Section title="Esta puerta del sábado abre a las 15:00">
        <p>
          El sábado aquí es {HOURS.sat.open}–{HOURS.sat.close} — la línea de
          sábado ya publicada, no un horario nuevo. Un saque 12:30 Reino Unido
          / 13:30 Madrid cae antes de que abra esta puerta. No inventamos una
          emisión para un partido que saca con el cerrojo puesto. El hueco
          15:00 Reino Unido / 16:00 Madrid y el 17:30 Reino Unido / 18:30
          Madrid quedan después de abrir, y solo van a pantalla cuando la
          Agenda los marca Confirmado. Pregunta qué partido echan.
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>
          Esta ficha, no la puerta de al lado: CID 10697659365903665225.
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
          <Link href="/es/premier-league" className="text-cream underline">
            Pub de Premier League en Madrid
          </Link>
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
