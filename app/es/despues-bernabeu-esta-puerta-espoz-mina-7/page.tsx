import Link from "next/link";
import { AfterGameSundayFourBars } from "@/components/AfterGameSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { AFTER_GAME_PATHS } from "@/lib/after-game-sunday-8-nov";
import { PATHS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Después del Bernabéu: esta puerta en Espoz y Mina 7",
  description:
    "Salid del Madrid Game en el Bernabéu hacia O'Connell's, Calle de Espoz y Mina 7, luego Dubliners al mismo número, O'Reilly's Pasaje de Matheu 4 y Four Corner Victoria 6. Maps y CÓMO LLEGAR. Four Corner abierto desde las 14:00 con pantallas de deporte.",
  path: AFTER_GAME_PATHS.bernabeuEs,
  locale: "es",
});

export default function EsDespuesBernabeuEstaPuertaPage() {
  return (
    <PageShell locale="es" altLangHref={AFTER_GAME_PATHS.bernabeuEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · del estadio a esta calle"
        title="Después del Bernabéu, esta puerta en Espoz y Mina 7"
        lead="Cuando salís del Madrid Game, la puerta irlandesa de esta calle es la fachada roja con el rótulo dorado. O'Connell's. Luego las tres hermanas. Pub independiente. No es un evento oficial de la NFL. No inventamos el trayecto desde el estadio."
      />

      <Section title="La salida del estadio cae en esta calle" featured>
        <p>
          {ADDRESS.full}. Ese es este pub: O&apos;Connell St en el pin de
          Maps, rótulo dorado sobre fachada roja. Dubliners comparte el
          número y tiene su propia puerta. No somos un circuito turístico
          que empieza en la plaza y cuenta cuatro salas seguidas. Somos la
          puerta que podéis nombrar cuando el estadio os suelta.
        </p>
        <p>
          CÓMO LLEGAR, abajo, es el pin CID de esta ficha. No inventamos
          metros, minutos de taxi ni un reloj de Metro desde el Bernabéu.
          Abrid Maps. Andad o id como ya sepáis. La calle es Calle de Espoz
          y Mina. El rótulo es el nuestro.
        </p>
      </Section>

      <Section title="Luego las tres puertas hermanas">
        <p>
          El mismo número, otra puerta: Dubliners, sigue Espoz y Mina 7. A
          la vuelta: O&apos;Reilly&apos;s Restaurant Bar, Pasaje de Matheu 4.
          Una calle más: Four Corner, Calle de la Victoria 6 — ya abierto
          desde las 14:00 hasta la madrugada, con pantallas de deporte. Esa
          apertura está confirmada. Lo que echan en esas pantallas no lo
          listamos aquí. Preguntad qué partido hay.
        </p>
        <p>
          Saltad si la sala está llena. Quedaos si el rótulo dorado aún
          tiene taburete. Cuatro direcciones, cuatro Maps. Esta puerta
          primero.
        </p>
        <p>
          <Link href={AFTER_GAME_PATHS.eveningEs} className="text-gold underline">
            NFL noche, luego Atlético–Barcelona 21:00, desde esta puerta
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Los cuatro bares
          </Link>
        </p>
      </Section>

      <AfterGameSundayFourBars locale="es" />
    </PageShell>
  );
}
