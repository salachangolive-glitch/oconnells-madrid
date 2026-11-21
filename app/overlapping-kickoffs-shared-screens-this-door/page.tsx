import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { OVERLAPPING_KICKOFFS_PATHS } from "@/lib/overlapping-kickoffs-shared-screens";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Overlapping kickoffs, shared screens | O'Connell St",
  description:
    "Two games, one Sol room at Espoz y Mina 7: shared screens, not a private box. Confirmed on What's On only. Ask which game and where to sit. GET DIRECTIONS.",
  path: OVERLAPPING_KICKOFFS_PATHS.en,
});

export default function OverlappingKickoffsSharedScreensPage() {
  return (
    <PageShell locale="en" altLangHref={OVERLAPPING_KICKOFFS_PATHS.es}>
      <PageHero
        eyebrow="This door · overlapping kickoffs · shared screens"
        title="Overlapping kickoffs share one Sol room — pick a stool, not a private box."
        lead="Premier at 18:30 Madrid and LaLiga at 21:00 can land on the same Saturday. NFL can stack on a Sunday night beside football. This Irish pub on Espoz y Mina 7 is one room with shared screens, not a stadium suite. The honest question is not how many TVs exist — it is which confirmed tie you care about and where you can see it from your stool."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Sports corridor and shared screens at O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="One room, several clocks" featured>
        <p>
          {ADDRESS.full}. When two Confirmed rows on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          overlap, staff route feeds to the screens that night. We do not sell a
          named seat facing only your league. We do not invent a count of
          screens on this page. If you need certainty before you walk in, ask
          which game is on and whether your kickoff is the one on the main
          picture.
        </p>
        <p>
          Saturday can mix English afternoon habits with Spanish night football
          in the same calendar square — that is a clock story, not a booth
          story. Read{" "}
          <Link
            href="/two-saturday-football-clocks-one-sol-room-this-door"
            className="text-cream underline"
          >
            two Saturday football clocks in one Sol room
          </Link>{" "}
          for the split clocks; this page is what happens when both clocks are
          live at once.
        </p>
      </Section>
      <Section title="Confirmed only — then ask">
        <p>
          We name a screening on a permanent page only when What&apos;s On marks
          it Confirmed, in Madrid time. The label is explained on{" "}
          <Link
            href="/how-whats-on-marks-confirmed-this-door"
            className="text-cream underline"
          >
            how What&apos;s On marks Confirmed
          </Link>
          . Here the point is overlap: a Confirmed row does not reserve a wall
          for you alone. First come, first served at the bar rail.
        </p>
        <p>
          Broader match-day context lives on{" "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="GET DIRECTIONS to this pin">
        <p>
          This listing, CID 10697659365903665225. Not a neighbouring door.
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
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
