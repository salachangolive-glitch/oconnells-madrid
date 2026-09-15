import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "About O'Connell St Madrid",
  description:
    "About O'Connell St: Irish pub and sports bar at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. No terrace; no habitual live music.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell locale="en" altLangHref="/es/about">
      <PageHero
        eyebrow="About"
        title={SITE_NAME}
        lead="An Irish pub and sports bar in the heart of Madrid — screens for football and selected US sports, Thursday €1 shots for Erasmus nights."
      />
      <PhotoPlaceholder
        label="Bar portrait / room — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="The short version">
        <p>
          We are at {ADDRESS.full}, near Puerta del Sol. Phone:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <p>
          What we are not: a terrace venue, a habitual live-music club, or an
          official team/league partner. What we are: a central Irish-style
          sports pub for matches, pints, and Thursday €1 shots.
        </p>
        <p>
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/thursday-1-euro-shots" className="text-cream underline">
            Thursday €1
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
