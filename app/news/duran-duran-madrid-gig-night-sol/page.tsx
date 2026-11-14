import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/**
 * Duran Duran Free To Love Tour, Movistar Arena, Fri 6 Nov 2026, 21:00.
 * Archived 7 Nov 2026 (DG): past event, no 301, stays indexable and in the
 * sitemap. Meet-before/after angle at O'Connell St, Espoz y Mina 7 by Sol.
 */
export const metadata = buildMetadata({
  title: "Duran Duran in Madrid, Fri 6 Nov 2026: past gig night near Sol",
  description:
    "Duran Duran played the Movistar Arena on Friday 6 November 2026 at 21:00. O'Connell St at Espoz y Mina 7 by Puerta del Sol was a place to meet before and after the show. See What's On for what's next.",
  path: "/news/duran-duran-madrid-gig-night-sol",
});

export default function NewsDuranDuranGigNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Past event · Gig night · Friday 6 November 2026 · 21:00"
        title="Duran Duran in Madrid: a gig night by Sol"
        lead="Duran Duran played the Free To Love Tour at the Movistar Arena on Friday 6 November 2026. O'Connell St at Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol, was a place to meet before the show and to land afterwards."
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
          Date and start time were as listed on the{" "}
          <a
            href="https://www.movistararena.es/programacion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Movistar Arena programme
          </a>
          .
        </p>
      </Section>
      <Section title="Before and after the show">
        <p>
          Friends arriving from different hotels, flights or neighbourhoods
          often pick one central spot and share the pin. O&apos;Connell St is at
          Calle de Espoz y Mina 7, a couple of minutes&apos; walk from Puerta
          del Sol. From Sol, Metro Line 2 runs direct to Goya, the stop for the
          Movistar Arena, with no change of line.
        </p>
        <p>
          After the encore, Line 2 back to Sol and a short walk round the
          corner to Espoz y Mina 7 was the route many groups used to talk
          through the setlist. On Fridays the pub stays open until 03:30.
        </p>
      </Section>
      <Section title="This event has taken place">
        <p>
          This gig night has now taken place. For what is coming up next, see{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
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
