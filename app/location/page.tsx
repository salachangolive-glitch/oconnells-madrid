import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub near Puerta del Sol — Calle de Espoz y Mina 7, Madrid",
  description:
    "Find O'Connell St at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. Google Maps directions.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <PageShell locale="en" altLangHref="/es/location">
      <PageHero
        eyebrow="Location · Madrid"
        title={`Pub near Puerta del Sol — how to find ${SITE_NAME}`}
        lead={`${ADDRESS.full} — a short walk from Puerta del Sol.`}
      />
      <VenueHero
        variant="secondary"
        alt="O'Connell St on Calle de Espoz y Mina near Puerta del Sol"
        className="mb-10"
      />
      <Section title="Address & hours">
        <p>{ADDRESS.full}</p>
        <p>
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          {" · "}
          <a href="/contact" className="text-cream underline">
            Contact
          </a>
        </p>
        <ul className="list-none space-y-1">
          {HOURS.linesEn.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            Open in Google Maps
          </a>
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/stairs-levels.webp"
        alt="Stairs between floors at O'Connell St Irish pub near Sol"
        position="object-[center_40%]"
      />
      <Section title="Getting here from Puerta del Sol">
        <p>
          The nearest station is Sol (Metro and Cercanías), which comes out
          right on Puerta del Sol. From the square, head for Calle de Espoz y
          Mina and look for number 7: a red facade with gold O&apos;CONNELL ST.
          lettering above the door.
        </p>
        <p>
          Not sure of the way? The Google Maps button above opens our listing
          directly, so you can follow the route from wherever you are in the
          centre.
        </p>
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina. Handy
          before a Premier League, Champions League or LaLiga kick-off — or for
          Thursday €1 shots with friends.
        </p>
        <p>
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/sports-bar-sol" className="text-cream underline">
            Sports bar in Sol
          </Link>
          {" · "}
          <Link href="/thursday-1-euro-shots" className="text-cream underline">
            Thursday €1
          </Link>
        </p>
      </Section>
      <Section title="Opening hours">
        <p>
          We open every day: from {HOURS.monThu.open} Monday to Thursday, from{" "}
          {HOURS.friSat.open} on Friday and Saturday, and from {HOURS.sun.open}{" "}
          on Sunday. We close at {HOURS.monThu.close} from Sunday to Thursday
          and at {HOURS.friSat.close} on Friday and Saturday nights.
        </p>
      </Section>
    </PageShell>
  );
}
