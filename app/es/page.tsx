import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureStrip } from "@/components/FixtureStrip";
import { HalloweenTeaser } from "@/components/HalloweenSol";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { InteriorGallery, InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { VenueHero } from "@/components/VenueHero";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `Pub irlandés en Sol con deportes en directo | ${SITE_NAME} Madrid`,
  description:
    "Pub irlandés junto a Puerta del Sol, con deportes en directo y chupitos a 1 € los jueves. Calle de Espoz y Mina 7, Madrid.",
  path: "/es",
  locale: "es",
});

export default function EsHomePage() {
  return (
    <PageShell
      locale="es"
      altLangHref="/"
      cover={
        <VenueHero
          variant="hero"
          alt="Fachada del pub irlandés O'Connell St, Calle de Espoz y Mina 7, Madrid"
        />
      }
    >
      <PostMatchBanner locale="es" />
      <header className="mb-8 max-w-2xl text-center sm:mx-auto">
        <h1 className="font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
          O&apos;Connell St Madrid{" "}
          <span className="mt-1 block text-lg font-semibold text-gold sm:text-xl lg:text-2xl">
            Pub irlandés en Sol
          </span>
        </h1>
        <p className="mt-2 text-sm tracking-wide text-cream-muted sm:text-base">
          Deportes en directo · Gente de muchos países
        </p>
      </header>
      <div className="mb-10 border-y border-gold/20 bg-pub-burgundy-deep/80">
        <HomeCtaBand locale="es" />
      </div>

      <section className="mb-12 max-w-2xl">
        <p className="text-sm leading-relaxed text-cream-muted sm:text-base">
          O&apos;Connell St es un pub irlandés junto a Puerta del Sol, con
          deportes en directo, gente de muchos países y chupitos a 1 € los
          jueves.
        </p>
        <p className="mt-3">
          <Link href="/es/nfl-madrid" className="text-sm text-gold hover:text-cream">
            NFL en Madrid
          </Link>
        </p>
      </section>

      {/* Pub cerca de la Puerta del Sol — relevancia landing Ads (19 oct) */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Pub cerca de la Puerta del Sol
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          O&apos;Connell St es un pub irlandés y bar deportivo en la{" "}
          {ADDRESS.street}, junto a la Puerta del Sol, en pleno centro de
          Madrid. Abrimos todos los días. Hay deportes en
          directo en pantallas grandes; los partidos confirmados están en la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
        <p className="mt-3">
          <Link href="/es/location" className="text-sm text-gold hover:text-cream">
            Cómo llegar y horarios →
          </Link>
        </p>
      </section>

      <HalloweenTeaser locale="es" today={madridTodayYmd(agendaBuildNow())} />
      <FixtureStrip locale="es" windowOnly />
      <p className="mb-12 max-w-2xl text-sm text-cream-muted sm:text-base">
        Más fútbol:{" "}
        <Link href="/es/premier-league" className="text-gold underline">
          Premier League
        </Link>
        ,{" "}
        <Link href="/es/champions-league" className="text-gold underline">
          noches de Champions
        </Link>{" "}
        y nuestro{" "}
        <Link href="/es/sports-bar-sol" className="text-gold underline">
          bar deportivo en Sol
        </Link>{" "}
        para los días de partido.
      </p>
      {/* Bayern fans articles (Atlético–Bayern 3 Nov): build-time date gate, gone from the 4 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-03" ? (
        <p className="mb-12 max-w-2xl border-l-2 border-gold pl-4 text-sm text-cream-muted sm:text-base">
          Atlético–Bayern, martes 3 de noviembre, 21:00 — afición del Bayern en Madrid:{" "}
          <Link href="/news/bayern-fans-madrid-timing" className="text-gold underline">
            los horarios de Madrid: cenar tarde y partido a las 21:00 (inglés)
          </Link>
          {" · "}
          <a href="/de/bayern-fans-madrid-uhrzeiten" hrefLang="de" lang="de" className="text-gold underline">
            Madrid tickt anders (alemán)
          </a>
        </p>
      ) : null}

      <InteriorPhoto
        variant="editorial"
        src="/images/interior/bar-corner.webp"
        alt="Barra del pub irlandés O'Connell St cerca de Sol — madera, taburetes y luz cálida"
      />
      <InteriorGallery
        ariaLabel="Fotos del interior"
        items={[
          {
            src: "/images/interior/bar-taps.webp",
            alt: "Barra larga de madera y grifos en O'Connell St",
            position: "object-center",
          },
          {
            src: "/images/interior/sports-aisle.webp",
            alt: "Pantallas de deportes y pasillo de asientos en O'Connell St",
            position: "object-[center_20%]",
          },
          {
            src: "/images/interior/about-salon.webp",
            alt: "Mesas con televisiones en el salón de O'Connell St",
            position: "object-center",
          },
          {
            src: "/images/interior/stairs-levels.webp",
            alt: "Escaleras entre plantas del pub irlandés O'Connell St",
            position: "object-center",
          },
        ]}
      />

      <ThursdayFeature locale="es" />

      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Turistas e internacionales
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          Estudiantes, turistas y gente de fuera, a un paso de Sol.
          Los jueves, pregunta en la barra por los chupitos a 1 €.
        </p>
        <p className="mt-3">
          <Link
            href="/es/erasmus"
            className="text-sm text-gold hover:text-cream"
          >
            Ambiente internacional en O&apos;Connell St →
          </Link>
        </p>
      </section>

      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Sobre nosotros
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          {SITE_NAME} es un pub irlandés y bar deportivo en {ADDRESS.full}.{" "}
          {HOURS.summaryEs}.
        </p>
        <p className="mt-3">
          <Link href="/es/about" className="text-sm text-gold hover:text-cream">
            Más sobre nosotros →
          </Link>
        </p>
      </section>

      <Section title="Respuestas rápidas">
        <dl className="space-y-5">
          <div>
            <dt className="font-semibold text-cream">¿Cuál es el horario?</dt>
            <dd className="mt-1 text-cream/80">{HOURS.summaryEs}.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">¿Estáis cerca de Sol?</dt>
            <dd className="mt-1 text-cream/80">
              Sí — {ADDRESS.street}, a un paso de Puerta del Sol.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">
              ¿Ponéis deportes en directo?
            </dt>
            <dd className="mt-1 text-cream/80">
              Sí. Los partidos y eventos confirmados están en la{" "}
              <Link href="/es/whats-on" data-event="whats_on" className="text-gold underline">
                Agenda
              </Link>
              ; pregunta en la barra por la noche.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">
              ¿Cómo llego desde Metro Sol?
            </dt>
            <dd className="mt-1 text-cream/80">
              Sal en Sol y camina hasta Calle de Espoz y Mina — fachada roja y
              rótulo dorado.{" "}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="directions"
                className="text-gold underline"
              >
                Google Maps
              </a>
              .
            </dd>
          </div>
        </dl>
      </Section>

      <Section title="Cómo encontrarnos">
        <p>
          {ADDRESS.full}. Abre{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-gold underline"
          >
            Google Maps
          </a>
          . {HOURS.summaryEs}.
        </p>
        <p>
          <Link href="/es/location" className="text-gold underline">
            Ubicación y horarios →
          </Link>
        </p>
      </Section>

      <Section title="Contacto">
        <p>
          ¿Dudas sobre una noche de partido o un grupo?{" "}
          <Link href="/es/contact" data-event="contact" className="text-gold underline">
            Escríbenos por el formulario
          </Link>
          . Los jueves:{" "}
          <Link href="/es/thursday-1-euro-shots" className="text-gold underline">
            chupitos a 1 € junto a Sol
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
