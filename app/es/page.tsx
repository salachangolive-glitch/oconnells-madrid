import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureStrip } from "@/components/FixtureStrip";
import { NflSunday8Nov } from "@/components/NflSunday8Nov";
import { AfterGameSundayHighlight } from "@/components/AfterGameSundayHighlight";
import { PremierSunday8NovHighlight } from "@/components/PremierSunday8NovHighlight";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { InteriorGallery, InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { TonightMeetupCta } from "@/components/TonightMeetupCta";
import { LocaloFindUs } from "@/components/LocaloFindUs";
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
          Pub irlandés · bar deportivo · deporte en directo
        </p>
        <div className="mx-auto mt-4 inline-block rounded border border-gold/30 px-4 py-2 text-sm text-cream sm:text-base">
          <p className="font-semibold text-gold">Abierto todos los días</p>
          <p>{HOURS.summaryEs}</p>
          <p className="mt-1 text-gold">Excepción domingo 8 nov: abrimos desde las 12:00</p>
        </div>
      </header>
      <TonightMeetupCta locale="es" />
      <div className="mb-10 border-y border-gold/20 bg-pub-burgundy-deep/80">
        <HomeCtaBand locale="es" />
      </div>

      {/* Domingo NFL 8 nov: tercer bloque de la portada (dueño vía DG 30 oct), se retira el 9 nov */}
      <NflSunday8Nov locale="es" today={madridTodayYmd(agendaBuildNow())} />
      <PremierSunday8NovHighlight locale="es" />
      <AfterGameSundayHighlight locale="es" />

      <section className="mb-12 max-w-2xl">
        <p className="text-sm leading-relaxed text-cream-muted sm:text-base">
          O&apos;Connell St es un pub irlandés y bar deportivo junto a Puerta
          del Sol, con deportes en directo, gente de muchos países y chupitos a
          1 € los jueves. El domingo, esta es la puerta del bar NFL Madrid en
          Espoz y Mina 7 —{" "}
          <Link href="/es/nfl-madrid" className="text-gold underline">
            ver la NFL en Madrid
          </Link>{" "}
          en pantallas, y pregunta qué partido echan.
        </p>
      </section>

      {/* Pub cerca de la Puerta del Sol — relevancia landing Ads (19 oct) */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Pub irlandés y bar deportivo junto a Puerta del Sol
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          O&apos;Connell St es un pub irlandés y bar deportivo en la{" "}
          {ADDRESS.street}, junto a la Puerta del Sol, en pleno centro de
          Madrid — un bar deportivo en Sol, Madrid, con pantallas. Abrimos todos los días, hasta las 03:00 de domingo a jueves y hasta las 03:30 viernes y sábado. Hay deportes en
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

      <FixtureStrip locale="es" windowOnly />
      <p className="mb-12 max-w-2xl text-sm text-cream-muted sm:text-base">
        Este pub irlandés en Sol es también un pub de Premier League en Madrid:
        fútbol inglés en pantallas cuando está confirmado, en la misma sala que
        la NFL. Más:{" "}
        <Link href="/es/premier-league" className="text-gold underline">
          Premier League
        </Link>
        ,{" "}
        <Link
          href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
          className="text-gold underline"
        >
          relojes de Madrid para saques ingleses de sábado
        </Link>
        ,{" "}
        <Link href="/es/champions-league" className="text-gold underline">
          noches de Champions
        </Link>
        ,{" "}
        <Link
          href="/es/noches-europeas-martes-miercoles-esta-puerta"
          className="text-gold underline"
        >
          noches europeas de martes y miércoles en esta puerta
        </Link>
        ,{" "}
        <Link
          href="/es/como-marca-confirmado-la-agenda-esta-puerta"
          className="text-gold underline"
        >
          cómo marca Confirmado la Agenda
        </Link>
        ,{" "}
        <Link
          href="/es/dos-relojes-futbol-sabado-una-sala-esta-puerta"
          className="text-gold underline"
        >
          dos relojes de fútbol el sábado en una sala
        </Link>
        ,{" "}
        <Link
          href="/es/saques-solapados-pantallas-compartidas-esta-puerta"
          className="text-gold underline"
        >
          saques solapados y pantallas compartidas
        </Link>
        ,{" "}
        <Link
          href="/es/ultimos-metros-reloj-sol-rotulo-dorado-esta-puerta"
          className="text-gold underline"
        >
          últimos metros del reloj de Sol a esta puerta
        </Link>
        ,{" "}
        <Link href="/es/nfl-madrid" className="text-gold underline">
          ver la NFL en Madrid
        </Link>{" "}
        y nuestro{" "}
        <Link href="/es/sports-bar-sol" className="text-gold underline">
          bar deportivo en Sol
        </Link>{" "}
        para los días de partido.
      </p>

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
          Estudiantes Erasmus, turistas y gente de fuera, a un paso de Sol.
          Los jueves son la noche en que el ambiente internacional llena la barra.
        </p>
        <p className="mt-3">
          <Link
            href="/es/erasmus"
            className="text-sm text-gold hover:text-cream"
          >
            Erasmus en Madrid: los jueves, junto a Sol →
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
              Sí. Este bar deportivo pone los partidos confirmados en la{" "}
              <Link href="/es/whats-on" data-event="whats_on" className="text-gold underline">
                Agenda
              </Link>
              ; pregunta en la barra por la noche. Para ver la NFL en Madrid,
              mira el{" "}
              <Link href="/es/nfl-madrid" className="text-gold underline">
                bar NFL Madrid
              </Link>
              .
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

      <LocaloFindUs locale="es" />
      <Section>
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
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
