import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { TWO_SATURDAY_CLOCKS_PATHS } from "@/lib/two-saturday-football-clocks";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Two Saturday football clocks, one Sol room | O'Connell St",
  description:
    "LaLiga Saturday night vs English afternoon at Espoz y Mina 7: two Madrid clocks, one room. Confirmed only on What's On. Ask which game. GET DIRECTIONS.",
  path: TWO_SATURDAY_CLOCKS_PATHS.en,
});

export default function TwoSaturdayFootballClocksPage() {
  return (
    <PageShell locale="en" altLangHref={TWO_SATURDAY_CLOCKS_PATHS.es}>
      <PageHero
        eyebrow="This door · Saturday · two football clocks"
        title="Saturday holds two football clocks in one Sol room — not two promises."
        lead="Some Saturdays stack a LaLiga kickoff near 21:00 Madrid with an English afternoon tie earlier the same day. This Irish pub on Espoz y Mina 7 lives in both habits: Spanish night football and Premier Saturday graphics. The job is not to invent a private box for each league — it is to read the right clock for the match you care about."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Football seating and screens at O'Connell St near Sol"
        position="object-[center_20%]"
      />
      <Section title="Afternoon English, night Spanish — same Saturday" featured>
        <p>
          {ADDRESS.full}. A visitor chasing{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>{" "}
          football thinks in 15:00 or 17:30 UK graphics, already shifted to
          Madrid on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . A Madrid local or LaLiga fan thinks in a 21:00 or 22:00 Saturday
          night slot. Both can land on the same calendar square. We do not
          guarantee two dedicated walls; we guarantee honesty: Confirmed rows
          only, Madrid time, then ask which game is on.
        </p>
        <p>
          If you are still converting a UK graphic, do that once on{" "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-cream underline"
          >
            Madrid clocks for Saturday English kick-offs
          </Link>
          , then return here for why Saturday is not only an English afternoon
          story.
        </p>
      </Section>
      <Section title="What we do not promise on a stacked Saturday">
        <p>
          Overlapping kickoffs still happen in one Irish pub near Sol. Staff
          choose what goes where that night. We do not publish a screen map or a
          seat guarantee. For how the Confirmed label works, see{" "}
          <Link
            href="/how-whats-on-marks-confirmed-this-door"
            className="text-cream underline"
          >
            how What&apos;s On marks Confirmed
          </Link>
          . For broader football at this door, see{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Sol
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
          <Link href="/sports" className="text-cream underline">
            Live sports
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
