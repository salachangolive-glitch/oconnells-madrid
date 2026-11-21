import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SATURDAY_CLOCK_PATHS } from "@/lib/saturday-english-madrid-clocks";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Saturday English kick-offs: Madrid clocks | O'Connell St",
  description:
    "UK Saturday kick-offs at Espoz y Mina 7: Madrid is one hour ahead. What's On is already Madrid time. Saturday open 15:00. GET DIRECTIONS.",
  path: SATURDAY_CLOCK_PATHS.en,
});

export default function SaturdayEnglishMadridClocksPage() {
  return (
    <PageShell locale="en" altLangHref={SATURDAY_CLOCK_PATHS.es}>
      <PageHero
        eyebrow="This door · Saturday English kick-offs · Madrid clocks"
        title="Add one hour. Then stop. What's On is already Madrid time."
        lead="If you are walking to the gold lettering on Espoz y Mina 7 with a UK Saturday graphic in your pocket, convert once. This Irish pub lists confirmed Premier League kickoffs in Madrid time. Adding an hour and then reading What's On as if it were still UK time puts you an hour late."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Seating and screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="The conversion is one hour, not two" featured>
        <p>
          Spain sits one hour ahead of the UK for ordinary Saturday football
          (CET vs GMT in winter; CEST vs BST in summer). A 15:00 UK kickoff is
          16:00 on this street. A 17:30 UK kickoff is 18:30 here. The 12:30 UK
          lunch slot is 13:30 Madrid.
        </p>
        <p>
          {ADDRESS.full}.{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          already prints that Madrid clock on every confirmed row. Trust that
          column. Do not add a second hour on top of it.
        </p>
      </Section>
      <Section title="This Saturday door unlocks at 15:00">
        <p>
          Saturday here is {HOURS.sat.open}–{HOURS.sat.close} — the published
          Saturday line, not a new hour. A 12:30 UK / 13:30 Madrid kickoff
          falls before this door opens. We do not invent a screening for a
          match that kicks off while the lock is still on. The 15:00 UK /
          16:00 Madrid slot and the 17:30 UK / 18:30 Madrid slot sit after
          Saturday unlock, and only go on the screens when What’s On marks
          them Confirmed. Ask which game is on.
        </p>
      </Section>
      <Section title="GET DIRECTIONS to this pin">
        <p>
          This listing, not a neighbouring door: CID 10697659365903665225.
        </p>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
