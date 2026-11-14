import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { TWO_SATURDAY_CLOCKS_PATHS } from "@/lib/two-saturday-football-clocks";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Dos relojes de fútbol el sábado, una sala | O'Connell St",
  description:
    "LaLiga sábado noche vs tarde inglesa en Espoz y Mina 7: dos relojes de Madrid, una sala. Solo Confirmado en la Agenda. Pregunta qué partido. CÓMO LLEGAR.",
  path: TWO_SATURDAY_CLOCKS_PATHS.es,
  locale: "es",
});

export default function DosRelojesFutbolSabadoPage() {
  return (
    <PageShell locale="es" altLangHref={TWO_SATURDAY_CLOCKS_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · sábado · dos relojes de fútbol"
        title="El sábado mete dos relojes de fútbol en una sala de Sol — no dos promesas."
        lead="Algunos sábados apilan un saque de LaLiga cerca de las 21:00 en Madrid con un partido inglés por la tarde el mismo día. Este pub irlandés en Espoz y Mina 7 vive en los dos hábitos: fútbol español de noche y gráficas inglesas del sábado. El trabajo no es inventar un reservado por liga — es leer el reloj correcto para el partido que te importa."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos y pantallas de fútbol en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Tarde inglesa, noche española — el mismo sábado" featured>
        <p>
          {ADDRESS.full}. Quien busca{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>{" "}
          piensa en gráficas del Reino Unido a las 15:00 o 17:30, ya pasadas a
          Madrid en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Un local o aficionado de LaLiga piensa en un sábado de noche a las
          21:00 o 22:00. Los dos pueden caer en el mismo cuadrado del
          calendario. No garantizamos dos paredes dedicadas; garantizamos
          honestidad: solo filas Confirmado, hora de Madrid, y pregunta qué
          partido echan.
        </p>
        <p>
          Si aún conviertes una gráfica del Reino Unido, hazlo una vez en{" "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-cream underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>
          , y vuelve aquí para por qué el sábado no es solo historia de tarde
          inglesa.
        </p>
      </Section>
      <Section title="Qué no prometemos en un sábado apilado">
        <p>
          Los saques solapados siguen pasando en un pub irlandés junto a Sol. El
          equipo elige qué va dónde esa noche. No publicamos un mapa de
          pantallas ni una promesa de asiento. Para cómo funciona Confirmado,{" "}
          <Link
            href="/es/como-marca-confirmado-la-agenda-esta-puerta"
            className="text-cream underline"
          >
            cómo marca Confirmado la Agenda
          </Link>
          . Para fútbol más amplio en esta puerta,{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Sol
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
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
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
