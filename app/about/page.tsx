import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { aboutPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "About O'Connell St Madrid — Irish pub for European football at Sol",
  description:
    "About O'Connell St: Irish pub at Calle de Espoz y Mina 7, near Puerta del Sol. Premier League, Champions League and LaLiga on a projector and 9 screens.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell locale="en" altLangHref="/es/about">
      <JsonLd data={aboutPageJsonLd("en")} />
      <PageHero
        eyebrow="About"
        title={`About ${SITE_NAME} Madrid`}
        lead="An Irish pub a short walk from Puerta del Sol, where European football is the main event on the screens."
      />
      <InteriorPhoto
        src="/images/interior/about-salon.webp"
        alt="Tables and wall TVs in the seating area at O'Connell St near Sol"
        position="object-center"
      />
      <Section title="Who we are">
        <p>
          {SITE_NAME} is an Irish pub and sports bar at {ADDRESS.full}, in the
          centre of Madrid. Puerta del Sol is a short walk away. You will know
          the building by its red facade with gold O&apos;CONNELL ST. lettering
          above the door.
        </p>
        <p>
          Inside there is a long wooden bar with beer taps, barrel seating,
          tables under wall TVs and stairs between floors. The crowd is a mix of
          people from Madrid, Erasmus students and visitors from all over.
        </p>
      </Section>
      <Section title="European football at Sol">
        <p>
          Football is the heart of the place. We show the Premier League, the
          UEFA Champions League and LaLiga, with the game on the projector and 9
          screens. On big European nights the pub is a meeting point in the
          centre before and during the match.
        </p>
        <p>
          Other sport goes on too when it is shown: NFL, NBA, rugby, Formula 1
          and tennis. Every confirmed match is listed on{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the next 7 days, always in Madrid time. If a game is not there
          yet, ask at the bar.
        </p>
        <p>
          A typical week: the Premier League plays mostly on Saturdays and
          Sundays, from early afternoon Madrid time. Champions League nights
          are Tuesdays and Wednesdays, with evening kick-offs. LaLiga spreads
          its games across the weekend, from lunchtime to late evening. When
          matches overlap, What&apos;s On shows which ones are confirmed for the
          pub, and the listing is rebuilt every morning so it follows the
          latest confirmed schedule.
        </p>
        <p>
          More on the football:{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            Watch football in Madrid
          </Link>
        </p>
      </Section>
      <Section title="Opening hours">
        <ul className="list-none space-y-1">
          {HOURS.linesEn.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          We open in the afternoon and stay open late, every day of the week,
          so evening kick-offs and late games fit easily.
        </p>
      </Section>
      <Section title="Food">
        <p>
          The{" "}
          <Link href="/menu" className="text-cream underline">
            menu
          </Link>{" "}
          has tapas and raciones to share, rice dishes, burgers, pizza and an
          Irish breakfast, so you can eat during the match.
        </p>
      </Section>
      <Section title="How to find us">
        <p>
          Take Metro or Cercanías to Sol, walk from the square to Calle de Espoz
          y Mina and look for number 7.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Google Maps
          </a>{" "}
          opens our listing directly. For questions about a match night or a
          group, write to us through the{" "}
          <Link href="/contact" className="text-cream underline">
            contact form
          </Link>
          .
        </p>
        <p>
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
          {" · "}
          <Link href="/erasmus" className="text-cream underline">
            Erasmus
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
