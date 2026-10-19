import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Fontaines D.C. Madrid: Irish pub near Sol before and after the gig",
  description:
    "Going to Fontaines D.C. at Movistar Arena on Thursday 22 October? O'Connell St is an Irish pub just off Puerta del Sol, open from 18:00 on Thursdays.",
  path: "/fontaines-dc-madrid",
});

export default function FontainesPage() {
  return (
    <PageShell locale="en" altLangHref="/es/fontaines-dc-madrid">
      <PageHero
        eyebrow="Thursday 22 October · Madrid"
        title="Fontaines D.C. night: a pint near Sol"
        lead="An Irish band in town, an Irish pub just off Puerta del Sol. Meet your friends here before the show or come back to the centre afterwards."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Taps at the bar of O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="The gig">
        <p>
          Fontaines D.C. play Movistar Arena on Thursday 22 October 2026, with the
          show listed for 20:45. Tickets, door times and venue rules are on the{" "}
          <a
            href="https://www.movistararena.es/programacion/evento/fontaines-d-c-d-c-eu-tour-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Movistar Arena event page
          </a>
          .
        </p>
      </Section>
      <Section title="Before and after">
        <p>
          We open at 18:00 on Thursdays, so there&apos;s time for a drink before
          heading to the arena, and we&apos;re open late for when you get back to
          the centre. It&apos;s also our{" "}
          <Link href="/thursday-1-euro-shots" className="text-cream underline">
            Thursday shots
          </Link>{" "}
          night.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}, just off Puerta del Sol. {HOURS.summaryEn}.
        </p>
        <p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-event="directions" className="text-cream underline">
            How to get here
          </a>
          {" · "}
          <Link href="/sports" className="text-cream underline">Sports &amp; events</Link>
        </p>
      </Section>
    </PageShell>
  );
}
