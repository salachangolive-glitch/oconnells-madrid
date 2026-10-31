import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "England v Croatia, Thu 12 Nov 20:45: watch the Nations League in an Irish pub near Sol",
  description:
    "England v Croatia, UEFA Nations League, Thursday 12 November 2026 at Wembley, 20:45 Madrid time. Watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol in central Madrid.",
  path: "/news/england-croatia-thursday-night-sol",
});

export default function NewsEnglandCroatiaThursdayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="UEFA Nations League · Thursday 12 November 2026 · 20:45"
        title="England v Croatia: a Thursday football night in Sol"
        lead="England play Croatia at Wembley on Thursday 12 November. If you're living in Madrid, here for work or just visiting, you can watch it live in the centre of the city at O'Connell St, a couple of minutes from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>England v Croatia, UEFA Nations League, League A</li>
          <li>Thursday 12 November 2026, 20:45 Madrid time (19:45 in the UK)</li>
          <li>Wembley Stadium, London</li>
        </ul>
        <p>
          Date and kick-off are as listed in the{" "}
          <a
            href="https://www.uefa.com/uefanationsleague/fixtures-results/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            UEFA Nations League fixtures
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Live on the screens at O'Connell St">
        <p>
          From Monday to Thursday O&apos;Connell St opens at 18:00 and stays
          open until 03:00, so there&apos;s plenty of time to finish work,
          get across town and have a pint before kick-off, and no hurry to
          leave once the final whistle goes.
        </p>
        <p>
          It&apos;s a full Nations League evening: Spain play Czechia in
          Prague at the same time, 20:45 Madrid time. England supporters,
          Croatia supporters and Spain supporters can all watch their game in
          the same place in the centre. Puerta del Sol is the easiest spot in
          Madrid for a mixed group to find each other, and Calle de Espoz y
          Mina 7 is just round the corner.
        </p>
      </Section>
      <Section title="Three days later: Spain v England in Madrid">
        <p>
          England are back in action on Sunday 15 November, against Spain at
          the Riyadh Air Metropolitano, 20:45. If you&apos;re in town for that
          one, Thursday is a good chance to get to know the area around Sol
          first. Both games, and the rest of the fixtures, are on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          , and opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid. Sol station (Metro and Cercanías) comes out on the square, a
          couple of minutes&apos; walk away.{" "}
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
