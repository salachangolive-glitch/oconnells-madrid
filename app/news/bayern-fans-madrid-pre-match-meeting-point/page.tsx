import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-madrid-treffpunkt";

export const metadata = buildMetadata({
  title: "Where to watch Atlético v Bayern in Madrid: Bayern fans meeting point by Sol",
  description:
    "Bayern fans in Madrid for Atlético v Bayern, Tue 3 Nov, 21:00: spend the build-up in the centre. A pre-match meeting point by Puerta del Sol, and the game live on our screens.",
  path: "/news/bayern-fans-madrid-pre-match-meeting-point",
});

export default function NewsBayernFansPreMatchPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Bayern fans in Madrid: the build-up starts in the centre"
        lead="Atlético Madrid v Bayern Munich kicks off at 21:00 Madrid time at the Riyadh Air Metropolitano. The hours before belong to the city centre: red shirts around Puerta del Sol, songs in German and Spanish, and a meeting point a few steps from the square."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Sports screens and seating at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_20%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Treffpunkt für Bayern-Fans an der Puerta del Sol
        </a>
      </p>
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Atlético Madrid v Bayern Munich, UEFA Champions League league phase</li>
          <li>Tuesday 3 November 2026, 21:00 Madrid time</li>
          <li>Riyadh Air Metropolitano, Madrid</li>
          <li>On TV in Spain: Movistar Plus+</li>
        </ul>
        <p>
          No ticket, or meeting friends who have one? At O&apos;Connell St the
          match is live on our screens.
        </p>
      </Section>
      <Section title="An afternoon in the centre, then the evening at Sol">
        <p>
          Away days in Madrid tend to start in the middle of town. Puerta del
          Sol is where the city meets: Plaza Mayor is a short stroll away, and
          the streets around the square are made for wandering in a group
          before you settle somewhere for the evening.
        </p>
        <p>
          On Tuesdays O&apos;Connell St opens at 18:00. That gives you three
          hours before kick-off to find your crew, swap stories from the trip
          and get the voice warmed up, whether you&apos;re heading out to the
          stadium later or staying to watch here.
        </p>
      </Section>
      <Section title="Three Irish pubs, one meeting point">
        <p>
          Big group, or friends arriving at different times? There are three
          Irish pubs to meet at, all in the centre:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, the same address</li>
          <li>O&apos;Reilly&apos;s · 200 m from Puerta del Sol</li>
        </ul>
        <p>
          Pick one as your Treffpunkt, share the pin and the rest of the group
          will find you. Atleti fans are just as welcome: a Champions League
          night is better with both sides in the room.
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St is at Calle de Espoz y Mina 7, just off Puerta del
          Sol. Sol station (Metro and Cercanías) comes out on the square. Look
          for the red facade with gold lettering at number 7.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Open directions
          </a>
          {" · "}
          <Link href="/location" className="text-cream underline">
            How to find us
          </Link>
          {" · "}
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
