import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Pub irlandés y sports bar cerca de Sol`,
  description:
    "O'Connell St: pub irlandés y sports bar en Calle de Espoz y Mina 7, cerca de Puerta del Sol. Pantallas de fútbol (PL, UCL, LaLiga), NFL/NBA cuando se emiten, jueves chupitos €1.",
  path: "/es",
  locale: "es",
});

export default function EsHomePage() {
  return (
    <PageShell locale="es" altLangHref="/">
      <PageHero
        eyebrow="Madrid · Sol"
        title={`${SITE_NAME}: pub irlandés y sports bar cerca de Puerta del Sol`}
        lead="Noches de partido en el centro y jueves de chupitos €1 pensados para Erasmus — a pocos minutos de Sol, solo interior."
      />
      <PhotoPlaceholder
        label="Exterior / interior del bar — NEED_REAL_PHOTO"
        className="mb-10"
        aspect="wide"
      />
      <Section title="Qué somos">
        <p>
          {SITE_NAME} es un pub irlandés y sports bar en {ADDRESS.full}, cerca
          de Puerta del Sol. Ven por las pantallas, una pinta y un sitio
          céntrico centrado en el deporte — sin terraza y sin música en vivo
          habitual.
        </p>
      </Section>
      <Section title="Deporte en pantallas">
        <p>
          Fútbol: Premier League, UEFA Champions League y LaLiga. NFL y NBA
          cuando se emiten esos partidos. No somos partner oficial de clubes ni
          ligas — solo un pub con pantallas.
        </p>
        <p>
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
          {" · "}
          <Link
            href="/es/watch-football-madrid"
            className="text-cream underline"
          >
            Ver fútbol en Madrid
          </Link>
        </p>
      </Section>
      <Section title="Jueves chupitos €1">
        <p>
          El jueves es la prioridad comercial para Erasmus: chupitos a €1. Los
          miércoles también hay chupitos €1; si eliges una noche semanal para
          estudiantes e internacionales, empieza por el jueves.
        </p>
        <p>
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves €1
          </Link>
          {" · "}
          <Link href="/es/erasmus" className="text-cream underline">
            Erasmus
          </Link>
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          {ADDRESS.full}. Sin terraza. Llama al{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>{" "}
          o abre{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Google Maps
          </a>
          .
        </p>
        <p>
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/about" className="text-cream underline">
            Sobre nosotros
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
