import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { LISTING_NUMBER_SEVEN_PATHS } from "@/lib/listing-number-seven-pin";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Irish pub near Sol — how to get here",
  description:
    "Irish pub and sports bar at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. GET DIRECTIONS on the O'Connell St Maps pin.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <PageShell locale="en" altLangHref="/es/location">
      <PageHero
        eyebrow="Irish pub · sports bar · Puerta del Sol"
        title={`How to get to this Irish pub near Sol — ${SITE_NAME}`}
        lead={`${ADDRESS.full} — Irish pub and sports bar, a short walk from Puerta del Sol. Meeting point for Sunday NFL and Atlético–Barcelona 21:00.`}
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
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            GET DIRECTIONS
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
          Not sure of the way? GET DIRECTIONS above is the Maps pin for this
          Irish pub listing, so you can follow the route from wherever you are
          in the centre.
        </p>
        <p>
          Last metres from the Sol clock to the gold lettering on this door:{" "}
          <Link
            href="/last-metres-sol-clock-to-gold-lettering-this-door"
            className="text-cream underline"
          >
            Sol clock to gold lettering
          </Link>
          . Two Irish pub listings can share number 7 in Maps — football at this
          door needs the{" "}
          <Link href={LISTING_NUMBER_SEVEN_PATHS.en} className="text-cream underline">
            O&apos;Connell St pin on this listing
          </Link>
          , not another saved place on the same street number.
        </p>
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina. This door
          is the meeting point: Sunday NFL afternoon on the screens (Bengals at
          Falcons 15:30 if you are not at the stadium), RedZone from 19:00, then
          Atlético vs Barcelona at 21:00 when we are showing it. Four Corner on
          Victoria 6 is open from 14:00, with sports screens. Ask which game is
          on. See{" "}
          <Link href="/nfl-madrid" className="text-cream underline">
            NFL bar Madrid
          </Link>
          {" · "}
          <Link href="/evening-nfl-then-atleti-barca-this-door" className="text-cream underline">
            Evening NFL then Atleti 21:00
          </Link>
          .
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
      <LocaloFindUs locale="en" />
      <Section title="Opening hours">
        <p>
          We open every day: from {HOURS.monThu.open} Monday to Thursday, from{" "}
          {HOURS.fri.open} on Friday, from {HOURS.sat.open} on Saturday, and from {HOURS.sun.open}{" "}
          on Sunday. We close at {HOURS.monThu.close} from Sunday to Thursday
          and at {HOURS.fri.close} on Friday and Saturday nights.
        </p>
      </Section>
    </PageShell>
  );
}
