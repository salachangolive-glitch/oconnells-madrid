import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  FACTS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Irish pub & sports bar near Puerta del Sol`,
  description:
    "O'Connell St: Irish pub and sports bar at Calle de Espoz y Mina 7, near Puerta del Sol. Football screens (PL, UCL, LaLiga), NFL/NBA when shown, Thursday €1 shots.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell locale="en" altLangHref="/es">
      <PageHero
        eyebrow="Madrid · Sol"
        title={`${SITE_NAME}: Irish pub & sports bar near Puerta del Sol`}
        lead="Central match nights and Erasmus-friendly Thursday €1 shots — a short walk from Sol, indoors only."
      />
      <PhotoPlaceholder
        label="Exterior / bar interior — NEED_REAL_PHOTO"
        className="mb-10"
        aspect="wide"
      />
      <Section title="What we are">
        <p>
          {SITE_NAME} is an Irish pub and sports bar at {ADDRESS.full},{" "}
          {FACTS.type.toLowerCase()} near Puerta del Sol. Come for the screens,
          a pint, and a central spot that stays focused on sport — not a
          terrace, not a live-music venue.
        </p>
      </Section>
      <Section title="Sport on the screens">
        <p>
          Football coverage centres on the Premier League, UEFA Champions
          League, and LaLiga. NFL and NBA appear when those games are shown.
          We are not an official club or league partner — just a pub with
          screens for the fixtures people ask for.
        </p>
        <p>
          <Link href="/sports" className="text-cream underline">
            Sports overview
          </Link>
          {" · "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            Watch football in Madrid
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
        </p>
      </Section>
      <Section title="Thursday €1 shots">
        <p>
          Thursday is our commercial priority for Erasmus nights: €1 shots.
          Wednesday €1 shots also exist; if you are choosing one night for
          students and internationals, start with Thursday.
        </p>
        <p>
          <Link
            href="/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Thursday €1 shots details
          </Link>
          {" · "}
          <Link href="/erasmus" className="text-cream underline">
            Erasmus nights
          </Link>
        </p>
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}. No terrace — seating is indoors. Call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>{" "}
          or open{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Google Maps directions
          </a>
          .
        </p>
        <p>
          <Link href="/location" className="text-cream underline">
            Location & how to get here
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
          {" · "}
          <Link href="/about" className="text-cream underline">
            About
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
