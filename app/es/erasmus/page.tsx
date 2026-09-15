import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches Erasmus cerca de Puerta del Sol",
  description:
    "Pub irlandés friendly para Erasmus cerca de Sol: jueves chupitos €1, pantallas de fútbol, quedar fácil en Madrid Centro. O'Connell St, Espoz y Mina 7.",
  path: "/es/erasmus",
  locale: "es",
});

export default function EsErasmusPage() {
  return (
    <PageShell locale="es" altLangHref="/erasmus">
      <PageHero
        eyebrow="Erasmus · Internacionales · Madrid"
        title={`Noches para estudiantes en ${SITE_NAME}`}
        lead="Pub irlandés céntrico y fácil para internacionales — jueves de chupitos €1, fútbol en pantallas y un punto de encuentro que todo el mundo encuentra cerca de Puerta del Sol."
      />
      <VenueHero className="mb-10" aspect="video" caption="Noches Erasmus · Sol" />
      <Section title="Haz del jueves tu noche" featured>
        <p>
          Los jueves de chupitos €1 son el ritual semanal fácil para Erasmus e
          internacionales. También hay miércoles €1 — el jueves es el que va al
          grupo de WhatsApp.
        </p>
        <p>
          <Link
            href="/es/thursday-1-euro-shots"
            className="inline-flex rounded-md bg-cream px-4 py-2 font-semibold text-pub-green hover:bg-cream/90"
          >
            Jueves chupitos €1
          </Link>
        </p>
      </Section>
      <Section title="Por qué Sol">
        <p>
          Cerca de Puerta del Sol facilita quedar en grupo — seas nuevo en
          Madrid Centro o enseñes la ciudad a amigos. Mira Premier League,
          Champions League o LaLiga en pantallas y quédate la noche.
        </p>
        <p>
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
