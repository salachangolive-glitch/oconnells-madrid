import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ATLETICO_VIKING_NEWS } from "@/lib/articles/atletico-viking-wednesday-night-sol";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";

const { paths, uefaUrl } = ATLETICO_VIKING_NEWS;
const H1 =
  "Viking FK en Madrid: un miércoles de Champions que empieza en Sol";
const DESCRIPTION =
  "Aficionados del Viking FK en Madrid: Atlético–Viking, mié 25 nov 2026, 21:00, Riyadh Air Metropolitano. O'Connell St, Espoz y Mina 7 junto a Sol, punto de encuentro antes o después.";

export const metadata = buildMetadata({
  title: "Atlético–Viking, mié 25 nov 21:00: pub irlandés junto a Sol",
  description: DESCRIPTION,
  path: paths.es,
  locale: "es",
});

export default function EsNoticiasAtleticoVikingMiercolesSolPage() {
  return (
    <PageShell locale="es" altLangHref={paths.en}>
      <PageHero
        eyebrow="UEFA Champions League · miércoles 25 de noviembre de 2026 · 21:00"
        title={H1}
        lead="El Atlético recibe al Viking FK en el Riyadh Air Metropolitano el miércoles 25 de noviembre, jornada 5 de la fase de liga. ¿Vienes de Noruega o ya estás en Madrid? Comparte un pin en el centro antes de ir al estadio — y un sitio para reunirse después. Es el Viking FK de Stavanger, no los Minnesota Vikings de la NFL."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Grifos de cerveza en el pub irlandés O'Connell St junto a Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="El partido">
        <ul className="list-disc space-y-1 pl-5">
          <li>Atlético de Madrid–Viking FK, UEFA Champions League, fase de liga, jornada 5</li>
          <li>Miércoles 25 de noviembre de 2026, 21:00 hora de Madrid</li>
          <li>Riyadh Air Metropolitano, Madrid</li>
        </ul>
        <p>
          Fecha, hora y estadio según la{" "}
          <a
            href={uefaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            ficha del partido en UEFA
          </a>
          . Los horarios pueden cambiar: compruébalo el mismo día.
        </p>
      </Section>
      <Section title="¿Vienes de Noruega? Un pin para el grupo">
        <p>
          Comparte una dirección y que cada uno llegue cuando pueda:
          O&apos;Connell St está en Calle de Espoz y Mina 7, a dos minutos de
          Puerta del Sol. Los miércoles abrimos a las 18:00 — punto de encuentro
          antes de ir al Metropolitano.
        </p>
        <p>
          Desde Sol, la línea 2 de Metro va a Las Rosas; el Atlético indica unos
          quince minutos a pie desde allí hasta el estadio. La línea 7 para en
          Estadio Metropolitano, junto al campo. Los días de partido la EMT
          pone el autobús SE721 entre Canillejas (línea 5) y el estadio desde
          dos horas antes del saque. Sal del centro con tiempo.
        </p>
        <p lang="no">
          Velkommen til Madrid! O&apos;Connell St er et irsk pub ved Puerta del
          Sol — et møtested før kampen på Metropolitano.
        </p>
      </Section>
      <Section title="Después del pitido final: vuelta al centro">
        <p>
          Cuando termine el partido, regresa hacia Sol y camina hasta Espoz y
          Mina 7. De lunes a jueves O&apos;Connell St sigue abierto hasta las
          03:00. Si la Agenda marca Confirmada una emisión en{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-gold underline">
            la Agenda
          </Link>
          , pregunta en la barra qué imagen ponen; no prometemos cada cruce de
          Champions en cada pantalla.
        </p>
        <p>
          Horarios en{" "}
          <Link href="/es/location" className="text-gold underline">
            Ubicación
          </Link>
          . Contexto Champions:{" "}
          <Link href="/es/champions-league" className="text-gold underline">
            Champions junto a Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · junto a Puerta del Sol,
          Madrid. CID de ficha 10697659365903665225.{" "}
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
          <Link href="/es/contact" className="text-cream underline">
            Contacto
          </Link>
          {" · "}
          <Link href={paths.en} className="text-cream underline">
            Read in English
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
