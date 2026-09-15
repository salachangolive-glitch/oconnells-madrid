import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Ver fútbol en Madrid cerca de Puerta del Sol",
  description:
    "Ver Premier League, Champions League y LaLiga en O'Connell St, Calle de Espoz y Mina 7, cerca de Puerta del Sol. Pub irlandés interior.",
  path: "/es/watch-football-madrid",
  locale: "es",
});

export default function EsWatchFootballPage() {
  return (
    <PageShell locale="es" altLangHref="/watch-football-madrid">
      <PageHero
        eyebrow="Fútbol en Madrid"
        title="Un sitio céntrico para ver el partido"
        lead={`${SITE_NAME} está en ${ADDRESS.street}, a poca distancia de Puerta del Sol — útil si quieres pantallas sin salir del centro.`}
      />
      <PhotoPlaceholder
        label="Pantallas de fútbol — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Qué se emite">
        <p>
          Interés en Premier League, UEFA Champions League y LaLiga. Los
          horarios cambian; llama si un partido concreto importa a tu grupo.
        </p>
      </Section>
      <Section title="Notas prácticas">
        <ul className="list-disc space-y-2 pl-5">
          <li>Solo interior — sin terraza.</li>
          <li>No es un local de música en vivo habitual.</li>
          <li>
            No somos un pub oficial de club — emitimos fútbol, no representamos
            a equipos ni ligas.
          </li>
        </ul>
        <p>
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
