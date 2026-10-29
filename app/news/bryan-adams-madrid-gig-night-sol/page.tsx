import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bryan Adams in Madrid, Tue 10 Nov: an Irish pub near Sol before and after the gig",
  description:
    "Going to Bryan Adams' Roll with the Punches tour at the Movistar Arena, Tuesday 10 November 2026, 20:30? Meet at O'Connell St, Espoz y Mina 7 by Puerta del Sol, before or after the show.",
  path: "/news/bryan-adams-madrid-gig-night-sol",
});

export default function NewsBryanAdamsGigNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Gig night · Tuesday 10 November 2026 · 20:30"
        title="Bryan Adams in Madrid: a Tuesday gig night that starts at Sol"
        lead="Bryan Adams plays the Movistar Arena on Tuesday 10 November with his Roll with the Punches tour. A weeknight gig means people coming straight from work, from hotels and from the airport, so it helps to pick one easy place in the centre to meet first."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The gig">
        <ul className="list-disc space-y-1 pl-5">
          <li>Bryan Adams, Roll with the Punches</li>
          <li>Tuesday 10 November 2026, 20:30 (Madrid time)</li>
          <li>Movistar Arena, Avenida de Felipe II, Madrid</li>
        </ul>
        <p>
          Date and start time are as listed on the{" "}
          <a
            href="https://www.movistararena.es/programacion/evento/bryan-adams-roll-with-the-punches/10-11-2026/20:30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Movistar Arena event page
          </a>
          . Check your ticket for door times and entry details.
        </p>
      </Section>
      <Section title="After work: one pin for the whole group">
        <p>
          On a Tuesday, not everyone gets away at the same time. Share one
          location and let people drift in as they finish: O&apos;Connell St
          is at Calle de Espoz y Mina 7, a couple of minutes&apos; walk from
          Puerta del Sol. From Monday to Thursday we open at 18:00, which
          leaves time for a pint before you head out to the arena.
        </p>
        <p>
          From Sol, Metro Line 2 runs direct to Goya, the stop for the Movistar
          Arena, with no change of line. With a 20:30 start, aim to leave the
          centre in good time so you&apos;re through the doors before the
          first song.
        </p>
      </Section>
      <Section title="After the encore: back to the centre">
        <p>
          When the show finishes, take Line 2 back to Sol and walk round the
          corner to Espoz y Mina 7. On weeknights O&apos;Connell St stays open
          until 03:00, so there&apos;s no rush to call it a night straight
          after the last chorus. If you&apos;re visiting Madrid, the streets
          around Sol, Calle Mayor and Plaza Mayor are all a short walk away.
        </p>
        <p>
          Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          , and the rest of the week&apos;s events are on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid.{" "}
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
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
