import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/*
 * Germany v Netherlands, UEFA Nations League (Radar OC11, eventos-madrid-2026-11-03.md).
 * match.uefa.com/v5 comp 2014 id 2047909: 2026-11-16T19:45Z = 20:45 Madrid, Berlin (read 3 Nov 2026 ~10:00).
 * Monday hours 18:00–03:00 per lib/venue. Routine «OC eventos importantes con antelación», 3 Nov 2026.
 */
export const metadata = buildMetadata({
  title: "Germany v Netherlands, Mon 16 Nov 20:45: watch the Nations League in an Irish pub near Sol",
  description:
    "Germany v Netherlands, UEFA Nations League, Monday 16 November 2026 in Berlin, 20:45 Madrid time. German and Dutch supporters in Madrid can watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol.",
  path: "/news/germany-netherlands-monday-night-sol",
});

export default function NewsGermanyNetherlandsMondayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="UEFA Nations League · Monday 16 November 2026 · 20:45"
        title="Germany v Netherlands: a Monday football night in Sol"
        lead="Germany host the Netherlands in Berlin on Monday 16 November. If you're German or Dutch and living in Madrid, studying here or just passing through, you can watch it live in the centre of the city at O'Connell St, a couple of minutes from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Germany v Netherlands, UEFA Nations League, League A</li>
          <li>Monday 16 November 2026, 20:45 Madrid time (the same time in Germany and the Netherlands)</li>
          <li>Berlin</li>
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
          On Mondays O&apos;Connell St opens at 18:00 and stays open until
          03:00, so there&apos;s time to finish work or classes, get into the
          centre and have a pint before kick-off, and no rush to leave after
          the final whistle.
        </p>
        <p>
          Germany and the Netherlands is one of the classic rivalries in
          European football, and Madrid has plenty of supporters of both
          sides. Puerta del Sol is the easiest place in the city for a mixed
          group to find each other, and Calle de Espoz y Mina 7 is just round
          the corner, so German and Dutch friends can watch the same game in
          the same place.
        </p>
        <p>
          Auf Deutsch: Deutschland gegen die Niederlande, Montag, 16. November,
          20:45 Uhr, live im O&apos;Connell St an der Puerta del Sol.
        </p>
      </Section>
      <Section title="More football that week">
        <p>
          The night before, on Sunday 15 November, Spain play England at the
          Riyadh Air Metropolitano, 20:45. Our guide to that night is here:{" "}
          <Link href="/news/spain-england-sunday-night-sol" className="text-gold underline">
            Spain v England: Sunday night football in Sol
          </Link>
          . All the fixtures are on{" "}
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
