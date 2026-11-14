import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, MAPS_URL } from "@/lib/venue";

/*
 * Real Madrid v Celta, LaLiga matchday 13 (Radar OC9, eventos-madrid-2026-11-03.md).
 * realmadrid.com 21/10/2026: Saturday 21 November 2026, 21:00 Madrid, Santiago Bernabéu;
 * Orange TV and Movistar Plus+. Kick-off 21:00 CET from the club site (not 20:00 from some aggregators).
 * Saturday hours 15:00–03:30 per lib/venue HOURS.sat. Routine «OC eventos importantes con antelación», 7 Nov 2026.
 */
export const metadata = buildMetadata({
  title: "Real Madrid v Celta, Sat 21 Nov 21:00: Saturday-night LaLiga in an Irish pub near Sol",
  description:
    "Real Madrid v Celta, LaLiga matchday 13, Saturday 21 November 2026 at the Santiago Bernabéu, 21:00 Madrid time. Watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol.",
  path: "/news/real-madrid-celta-saturday-night-sol",
});

export default function NewsRealMadridCeltaSaturdayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="LaLiga · Saturday 21 November 2026 · 21:00"
        title="Real Madrid v Celta: Saturday-night LaLiga in Sol"
        lead="Real Madrid host Celta at the Santiago Bernabéu on Saturday 21 November. If you're in Madrid that night — living here, visiting, or watching from the centre — you can watch it live at O'Connell St, a couple of minutes from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid v Celta, LaLiga matchday 13</li>
          <li>Saturday 21 November 2026, 21:00 Madrid time</li>
          <li>Santiago Bernabéu, Madrid</li>
          <li>Orange TV and Movistar Plus+</li>
        </ul>
        <p>
          Date and kick-off are as listed by{" "}
          <a
            href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/el-real-madrid-celta-se-jugara-el-sabado-21-de-noviembre-a-las-21-00-horas-21-10-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Real Madrid on 21 October 2026
          </a>
          {" "}
          and on the{" "}
          <a
            href="https://www.laliga.com/en-GB/laliga-easports/results/2026-27/gameweek-13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            LaLiga matchday 13 page
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Live on the screens at O'Connell St">
        <p>
          On Saturdays O&apos;Connell St opens at {HOURS.sat.open} and stays
          open until {HOURS.sat.close}, so there&apos;s time to get into the
          centre well before kick-off, and no rush to leave after the final
          whistle.
        </p>
        <p>
          A Saturday-night LaLiga match at the Bernabéu draws people into the
          centre. Calle de Espoz y Mina 7 is just round the corner from Puerta
          del Sol, so a mixed group can watch the same game in the same place.
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
