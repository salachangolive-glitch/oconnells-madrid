import Link from "next/link";
import { AfterGameSundayFourBars } from "@/components/AfterGameSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { AFTER_GAME_PATHS } from "@/lib/after-game-sunday-8-nov";
import { PATHS } from "@/lib/fan-weekend";
import { PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL noche y luego Atlético–Barcelona 21:00 desde esta puerta",
  description:
    "Desde O'Connell's, Espoz y Mina 7: NFL RedZone desde las 19:00, luego Atlético–Barcelona a las 21:00. Solo nombres que este sitio ya confirma. Preguntad qué hay en pantalla. La Premier League sigue en el mismo domingo. Four Corner desde las 14:00 con pantallas de deporte.",
  path: AFTER_GAME_PATHS.eveningEs,
  locale: "es",
});

export default function EsNflNocheLuegoAtletiPage() {
  return (
    <PageShell locale="es" altLangHref={AFTER_GAME_PATHS.eveningEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · esta puerta después del Madrid Game"
        title="NFL de noche, luego Atlético–Barcelona a las 21:00, desde esta puerta"
        lead="Desde el rótulo dorado en Espoz y Mina 7 la noche es fútbol americano primero, luego Atlético–Barcelona a las 21:00. Nombramos un partido solo donde este sitio ya lo confirma. Preguntad qué hay en pantalla. La Premier League sigue siendo este domingo — no la sustituimos."
      />

      <Section title="Lo que esta puerta ya confirma" featured>
        <p>
          {ADDRESS.full}. Desde las 19:00, NFL RedZone está en directo en
          esta sala — esa emisión ya está en nuestra propia agenda. Hay
          ventanas NFL de noche el mismo domingo. No nombramos esos pitidos
          como emisiones aquí. Si entráis por un partido americano concreto,
          preguntad cuál está puesto. Preferimos decirlo a inventar una
          ficha.
        </p>
        <p>
          A las 21:00, Atlético de Madrid–Barcelona es la noche de LaLiga
          que este sitio ya publica como en directo junto a Sol cuando lo
          estemos emitiendo. La misma sala. Pantallas compartidas. Preguntad
          en barra. Por orden de llegada.
        </p>
      </Section>

      <Section title="La Premier League sigue al lado">
        <p>
          El domingo inglés no se cancela porque la NFL haya jugado en
          Madrid. Crystal Palace–Liverpool, Sunderland–Chelsea,
          Brighton–Brentford e Ipswich–Bournemouth comparten las 15:00;
          Manchester United–Aston Villa es a las 17:30. Esos relojes son la
          misma fecha. Esta página no los sustituye con RedZone ni con el
          Atleti. Tampoco promete una señal de Premier League con nombre en
          un televisor con nombre. Preguntad qué partido hay.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEs} className="text-gold underline">
            Liverpool a las 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEs} className="text-gold underline">
            United a las 17:30
          </Link>
          {" · "}
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Ventanas de domingo en esta puerta
          </Link>
        </p>
      </Section>

      <Section title="Four Corner ya está abierto, con pantallas">
        <p>
          Four Corner en Calle de la Victoria 6 abrió desde las 14:00 hasta
          la madrugada, con pantallas de deporte. Esa hora está confirmada.
          Su parrilla no. Dubliners es la otra puerta de este número.
          O&apos;Reilly&apos;s es Pasaje de Matheu 4. Saltad si os hace falta
          otra sala. Esta puerta sigue siendo la del rótulo dorado.
        </p>
        <p>
          <Link href={AFTER_GAME_PATHS.bernabeuEs} className="text-gold underline">
            Después del Bernabéu, esta puerta primero
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Direcciones y Maps
          </Link>
        </p>
      </Section>

      <AfterGameSundayFourBars locale="es" />
    </PageShell>
  );
}
