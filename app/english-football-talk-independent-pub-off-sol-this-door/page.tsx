import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ENGLISH_FOOTBALL_TALK_PATHS } from "@/lib/english-football-talk-off-sol";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "English football talk off Sol | O'Connell St",
  description:
    "Independent Irish pub at Espoz y Mina 7: Premier and European football when Confirmed. English match talk, not a student bar script. Ask which game. GET DIRECTIONS.",
  path: ENGLISH_FOOTBALL_TALK_PATHS.en,
});

export default function EnglishFootballTalkPage() {
  return (
    <PageShell locale="en" altLangHref={ENGLISH_FOOTBALL_TALK_PATHS.es}>
      <PageHero
        eyebrow="This door · English football · independent Irish pub"
        title="English football talk off Sol — the match, not the nightlife pitch."
        lead="Plenty of doors near Puerta del Sol sell you a generic night out. This independent Irish pub on Espoz y Mina 7 sells something narrower: confirmed European football on the screens, bar-stool argument about the lineup, and an honest answer when you ask which game is on. It is not an Erasmus tour stop and not a promises-every-kickoff billboard."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at O'Connell St Irish pub near Sol"
        position="object-[center_50%]"
      />
      <Section title="Premier and Europe, when Confirmed" featured>
        <p>
          {ADDRESS.full}. English-speaking regulars and visiting fans use this
          room for Saturday and Sunday Premier League when{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          marks a screening Confirmed — Madrid time, not a UK graphic read twice.
          Midweek Champions nights sit on the same honest rule. Depth on the
          competition pages:{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League near Sol
          </Link>
          .
        </p>
        <p>
          We do not script your evening. We do not guarantee every English club
          on every wall. For what Confirmed means on the list, see{" "}
          <Link
            href="/how-whats-on-marks-confirmed-this-door"
            className="text-cream underline"
          >
            how What&apos;s On marks Confirmed
          </Link>
          . For how we talk when two games clash, see{" "}
          <Link
            href="/overlapping-kickoffs-shared-screens-this-door"
            className="text-cream underline"
          >
            overlapping kickoffs
          </Link>
          .
        </p>
      </Section>
      <Section title="Ask which game — that is the conversation">
        <p>
          The useful question at the bar is still “which game is on?” — not
          whether this facade looks good on a social reel. NFL and other sport
          share the room when we are showing them; football leads the calendar.
          Broader context on{" "}
          <Link href="/about" className="text-cream underline">
            About
          </Link>{" "}
          and{" "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          .
        </p>
      </Section>
      <Section title="GET DIRECTIONS to this pin">
        <p>
          This listing, CID 10697659365903665225. From the square:{" "}
          <Link
            href="/last-metres-sol-clock-to-gold-lettering-this-door"
            className="text-cream underline"
          >
            last metres from the Sol clock
          </Link>
          .
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
