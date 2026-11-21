import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { CONFIRMED_PROCESS_PATHS } from "@/lib/whats-on-confirmed-this-door";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Confirmed on What's On: ask which game | O'Connell St",
  description:
    "How Confirmed works on What's On at Espoz y Mina 7: Madrid time only, not every match on every screen. Open the list or ask at the bar. GET DIRECTIONS.",
  path: CONFIRMED_PROCESS_PATHS.en,
});

export default function HowWhatsOnMarksConfirmedPage() {
  return (
    <PageShell locale="en" altLangHref={CONFIRMED_PROCESS_PATHS.es}>
      <PageHero
        eyebrow="This door · What's On · Confirmed"
        title="Confirmed means we plan to put it on the screens — then ask which game."
        lead="A Sol pub that promises every kickoff on every wall is lying. At this door on Espoz y Mina 7, the honesty is in the label: What's On rows marked Confirmed are in Madrid time and scheduled for the room. Everything else is a bar conversation."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_45%]"
      />
      <Section title="Madrid time on the row, not a UK graphic" featured>
        <p>
          {ADDRESS.full}.{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          is the rolling seven-day list for this pub only. Kickoff columns are
          already Madrid clocks. We do not ask you to add an hour on top of a
          Confirmed row. If you are still carrying a UK Saturday graphic, read{" "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-cream underline"
          >
            Madrid clocks for Saturday English kick-offs
          </Link>{" "}
          once, then trust the list.
        </p>
      </Section>
      <Section title="What Confirmed does and does not promise">
        <p>
          <strong className="text-cream">Confirmed</strong> on a row means we
          intend to show that screening in this Irish pub near Sol — football
          first, then other sport when we are carrying it. It does not mean every
          league in the world at once. It does not mean your stool faces a
          private box. Overlapping kickoffs still happen; the staff pick what
          goes on which screen that night.
        </p>
        <p>
          A row can say <strong className="text-cream">To be confirmed</strong>{" "}
          when the time or rights are not settled yet. Treat that as “not
          Confirmed.” We do not name a match on a permanent article page until
          What&apos;s On marks it Confirmed — the same rule as{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>{" "}
          and{" "}
          <Link
            href="/tuesday-wednesday-european-nights-this-door"
            className="text-cream underline"
          >
            Tuesday and Wednesday European nights
          </Link>
          .
        </p>
      </Section>
      <Section title="Ask which game is on">
        <p>
          The list is rebuilt from the confirmed schedule we publish each
          morning. If your tie is not on the page, or two games clash, ask at
          the bar — that question is the product. For midweek continental
          nights the door-clock story is separate from this label; fixtures stay
          on{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League near Sol
          </Link>
          .
        </p>
        <p>
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            Open What&apos;s On
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live sports
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
