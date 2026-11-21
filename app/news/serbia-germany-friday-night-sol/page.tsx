import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/*
 * Serbia v Germany, UEFA Nations League (Radar OC10, eventos-madrid-2026-11-03.md).
 * match.uefa.com/v5 id 2047887: 2026-11-13T19:45Z = 20:45 Madrid, Stadion Rajko Mitić, Belgrade (read 5 Nov 2026 ~09:55).
 * Friday hours 16:00–03:30 per lib/venue. Routine «OC eventos importantes con antelación», 5 Nov 2026.
 */
export const metadata = buildMetadata({
  title: "Serbia v Germany, Fri 13 Nov 20:45: watch the Nations League in an Irish pub near Sol",
  description:
    "Serbia v Germany, UEFA Nations League, Friday 13 November 2026 in Belgrade, 20:45 Madrid time. German and Serbian supporters in Madrid can watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol.",
  path: "/news/serbia-germany-friday-night-sol",
});

export default function NewsSerbiaGermanyFridayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="UEFA Nations League · Friday 13 November 2026 · 20:45"
        title="Serbia v Germany: a Friday football night in Sol"
        lead="Serbia host Germany in Belgrade on Friday 13 November. If you're German or Serbian and living in Madrid, here for work or on a weekend away, you can watch it live in the centre of the city at O'Connell St, a couple of minutes from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Serbia v Germany, UEFA Nations League, League A</li>
          <li>Friday 13 November 2026, 20:45 Madrid time (the same time in Serbia and Germany)</li>
          <li>Stadion Rajko Mitić, Belgrade</li>
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
          On Fridays O&apos;Connell St opens at 16:00 and stays open until
          03:30, so you can come straight from work, settle in well before
          kick-off and carry on into the weekend after the final whistle.
        </p>
        <p>
          A Friday-night international is a good excuse to start the weekend
          in the centre. Puerta del Sol is the easiest meeting place in Madrid,
          and Calle de Espoz y Mina 7 is just round the corner, so German and
          Serbian friends, colleagues and flatmates can watch the same game
          in the same place.
        </p>
        <p lang="de">
          Auf Deutsch: Serbien gegen Deutschland, Freitag, 13. November,
          20:45 Uhr, live im O&apos;Connell St an der Puerta del Sol.
        </p>
      </Section>
      <Section title="More football that week">
        <p>
          On Sunday 15 November Spain play England at the Riyadh Air
          Metropolitano, 20:45:{" "}
          <Link href="/news/spain-england-sunday-night-sol" className="text-gold underline">
            Spain v England: Sunday night football in Sol
          </Link>
          . On Monday 16 November Germany are back on the screens against the
          Netherlands:{" "}
          <Link href="/news/germany-netherlands-monday-night-sol" className="text-gold underline">
            Germany v Netherlands: Monday night in Sol
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
