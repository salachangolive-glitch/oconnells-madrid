import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, MAPS_URL } from "@/lib/venue";

/*
 * Real Madrid v Deportivo Alavés, LaLiga matchday 14 (Radar 16 Nov §7 + eventos-madrid-2026-11-19.md:
 * Real Madrid–Alavés sáb 28 nov, los 3 pubs, publish by Sat 21 Nov).
 * laliga.com gameweek-14 page (read 19 Nov 2026): 2026-11-28T20:00Z = Saturday 28 November 2026,
 * 21:00 Madrid, Bernabéu. Screening Confirmed under owner order 20 Nov 2026 14:42 (all football
 * leagues may be announced as broadcast). No channel named (not verified on a primary source).
 * Saturday hours per lib/venue HOURS.sat. Sports radar 20 Nov 2026.
 */
export const metadata = buildMetadata({
  title: "Real Madrid v Alavés, Sat 28 Nov 21:00: Saturday-night LaLiga in an Irish pub near Sol",
  description:
    "Real Madrid v Deportivo Alavés, LaLiga matchday 14, Saturday 28 November 2026 at the Bernabéu, 21:00 Madrid time. Watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol.",
  path: "/news/real-madrid-alaves-saturday-night-sol",
});

export default function NewsRealMadridAlavesSaturdayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="LaLiga · Saturday 28 November 2026 · 21:00"
        title="Real Madrid v Alavés: the last Saturday night of November, near Sol"
        lead="Real Madrid host Deportivo Alavés at the Bernabéu on Saturday 28 November, 21:00 Madrid time. If you're in Madrid that night — living here, visiting, or watching from the centre — you can watch it live at O'Connell St, the Irish pub at Espoz y Mina 7 a couple of minutes from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid v Deportivo Alavés, LaLiga matchday 14</li>
          <li>Saturday 28 November 2026, 21:00 Madrid time</li>
          <li>Santiago Bernabéu, Madrid</li>
        </ul>
        <p>
          Date and kick-off are as listed on the{" "}
          <a
            href="https://www.laliga.com/en-GB/laliga-easports/results/2026-27/gameweek-14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            LaLiga matchday 14 page
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Live on the screens at O'Connell St">
        <p>
          On Saturdays O&apos;Connell St opens at {HOURS.sat.open} and stays
          open until {HOURS.sat.close}. That leaves the whole afternoon and
          evening for the earlier LaLiga games on the same matchday, and no rush
          to head off once the final whistle goes at the Bernabéu.
        </p>
        <p>
          Not going to the stadium? Calle de Espoz y Mina 7 is just round the
          corner from Puerta del Sol, so it is an easy place for a group of
          Madrid and Alavés supporters, or friends who only follow one of them,
          to watch the same game in the same place.
        </p>
        <p>
          All the fixtures are on{" "}
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
          Madrid. Sol station (Metro Lines 1, 2 and 3, and Cercanías) comes out
          on the square; from there head for Calle de Espoz y Mina and look for
          number 7, a red facade with gold O&apos;CONNELL ST. lettering above the
          door. Two Irish pub listings can share number 7 on Maps, so follow the
          O&apos;Connell St pin.{" "}
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
