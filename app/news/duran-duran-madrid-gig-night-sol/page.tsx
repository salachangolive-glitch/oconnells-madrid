import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Duran Duran in Madrid, Fri 6 Nov: an Irish pub near Sol to meet up before the gig",
  description:
    "Going to Duran Duran's Free To Love Tour at the Movistar Arena, Friday 6 November 2026, 21:00? Meet at O'Connell St, Espoz y Mina 7 by Puerta del Sol, before or after the show.",
  path: "/news/duran-duran-madrid-gig-night-sol",
});

export default function NewsDuranDuranGigNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Gig night · Friday 6 November 2026 · 21:00"
        title="Duran Duran in Madrid: meet by Sol before and after the show"
        lead="Duran Duran bring the Free To Love Tour to the Movistar Arena on Friday 6 November. If you're coming in from abroad or from across town, Puerta del Sol is the easiest place to gather the group first and to land afterwards."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The gig">
        <ul className="list-disc space-y-1 pl-5">
          <li>Duran Duran, Free To Love Tour</li>
          <li>Friday 6 November 2026, 21:00 (Madrid time)</li>
          <li>Movistar Arena, Madrid</li>
        </ul>
        <p>
          Date and start time are as listed on the{" "}
          <a
            href="https://www.movistararena.es/programacion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Movistar Arena programme
          </a>
          . Check your ticket for door times and entry details.
        </p>
      </Section>
      <Section title="Before the show: gather the group at Sol">
        <p>
          Friends arriving from different hotels, flights or neighbourhoods?
          Pick one central spot and share the pin. O&apos;Connell St is at
          Calle de Espoz y Mina 7, a couple of minutes&apos; walk from Puerta
          del Sol, and on Fridays we open at 16:00, so there&apos;s plenty of
          time for a pint while the last of the crew turns up.
        </p>
        <p>
          From Sol, Metro Line 2 runs direct to Goya, the stop for the Movistar
          Arena, with no change of line. Leave yourself enough time to get
          through the doors before 21:00.
        </p>
      </Section>
      <Section title="After the show: back to the centre">
        <p>
          When the encore is done, take Line 2 back to Sol and walk round the
          corner to Espoz y Mina 7. On Fridays O&apos;Connell St stays open
          until 03:30, so there&apos;s time to talk through the setlist with
          the rest of the group. It&apos;s an Irish pub near Sol to meet up before the gig,
          wherever you came from.
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
