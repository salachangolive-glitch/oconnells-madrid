import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { CONFIRMED_PROCESS_PATHS } from "@/lib/whats-on-confirmed-this-door";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Todo el gran deporte en directo en la Agenda | O'Connell St",
  description:
    "Agenda en Espoz y Mina 7: todo el gran deporte en directo — fútbol, rugby, NFL y baloncesto — en hora de Madrid. Ya no hay etiqueta de pendiente. CÓMO LLEGAR.",
  path: CONFIRMED_PROCESS_PATHS.es,
  locale: "es",
});

export default function ComoMarcaConfirmadoAgendaPage() {
  return (
    <PageShell locale="es" altLangHref={CONFIRMED_PROCESS_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · Agenda · Confirmado"
        title="Todo el gran deporte, en directo en nuestras pantallas — cada fila dice Confirmado."
        lead="Decisión del dueño, 26 de noviembre de 2026: en esta puerta de Espoz y Mina 7 emitimos en directo todo el gran deporte — fútbol, rugby, NFL y baloncesto incluidos. Cada fila de la Agenda va marcada Confirmado, en hora de Madrid. Ya no hay etiqueta de pendiente."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_45%]"
      />
      <Section title="Hora de Madrid en la fila, no una gráfica del Reino Unido" featured>
        <p>
          {ADDRESS.full}. La{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          es la lista móvil de siete días solo de este pub. Las columnas de
          saque ya son relojes de Madrid. No pedimos que sumes una hora encima de
          una fila Confirmado. Si sigues con una gráfica del sábado en hora
          británica, lee una vez{" "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-cream underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>{" "}
          y confía en la lista.
        </p>
      </Section>
      <Section title="Qué significa Confirmado ahora">
        <p>
          Desde el 26 de noviembre de 2026 la regla del dueño es sencilla: todo
          el gran deporte va en directo a nuestras pantallas en este pub
          irlandés junto a Sol — fútbol, rugby, NFL y baloncesto, además de
          Fórmula 1, tenis y más. Cada fila de la Agenda lleva{" "}
          <strong className="text-cream">Confirmado</strong>; la antigua
          etiqueta de pendiente ya no existe. Cuando coinciden saques, el equipo
          elige qué va a cada pantalla esa noche.
        </p>
        <p>
          El único límite es el reloj de la puerta: un partido que empieza a
          menos de una hora del cierre no aparece en la lista. Las páginas de
          partido siguen a la Agenda — la misma regla que en{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>{" "}
          y en{" "}
          <Link
            href="/es/noches-europeas-martes-miercoles-esta-puerta"
            className="text-cream underline"
          >
            noches europeas de martes y miércoles en esta puerta
          </Link>
          .
        </p>
      </Section>
      <Section title="Pregunta qué partido echan">
        <p>
          La lista se reconstruye cada mañana con el calendario confirmado que
          publicamos. Si tu cruce no está en la página, o chocan dos partidos,
          pregunta en la barra — esa pregunta es el producto. Para noches
          europeas entre semana el reloj de puerta es otra historia; los cruces
          siguen en{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            ver la Champions junto a Sol
          </Link>
          .
        </p>
        <p>
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Abrir la Agenda
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>
          Esta ficha, CID 10697659365903665225. No la puerta de al lado.
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
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
