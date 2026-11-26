import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { CONFIRMED_PROCESS_PATHS } from "@/lib/whats-on-confirmed-this-door";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Every major sport live on What's On | O'Connell St",
  description:
    "What's On at Espoz y Mina 7: every major sport shown live — football, rugby, NFL and basketball — in Madrid time. No pending label. GET DIRECTIONS.",
  path: CONFIRMED_PROCESS_PATHS.en,
});

export default function HowWhatsOnMarksConfirmedPage() {
  return (
    <PageShell locale="en" altLangHref={CONFIRMED_PROCESS_PATHS.es}>
      <PageHero
        eyebrow="This door · What's On · Confirmed"
        title="Every major sport is live on our screens — every row says Confirmed."
        lead="Owner decision, 26 November 2026: at this door on Espoz y Mina 7 we show every major sport live — football, rugby, NFL and basketball included. Every What's On row is marked Confirmed, in Madrid time. There is no pending label any more."
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
      <Section title="What Confirmed means now">
        <p>
          Since 26 November 2026 the owner&apos;s rule is simple: every major
          sport goes on our screens live in this Irish pub near Sol — football,
          rugby, NFL and basketball, plus Formula 1, tennis and more. Every row
          on What&apos;s On carries <strong className="text-cream">Confirmed</strong>;
          the old pending label is gone. When kickoffs overlap, the
          staff pick what goes on which screen that night.
        </p>
        <p>
          The only limit is the clock on the door: a game that kicks off less
          than an hour before closing time does not appear on the list. Match
          pages follow What&apos;s On — the same rule as{" "}
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
