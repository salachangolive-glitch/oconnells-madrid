import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { EUROPEAN_NIGHT_PATHS } from "@/lib/european-nights-weeknight-door";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "European nights: this weeknight door | O'Connell St",
  description:
    "Tue/Wed European football at Espoz y Mina 7: this door unlocks 18:00 Mon–Thu. Confirmed Champions nights in Madrid time on What's On. GET DIRECTIONS.",
  path: EUROPEAN_NIGHT_PATHS.en,
});

export default function EuropeanNightsWeeknightDoorPage() {
  return (
    <PageShell locale="en" altLangHref={EUROPEAN_NIGHT_PATHS.es}>
      <PageHero
        eyebrow="This door · Tuesday and Wednesday · European nights"
        title="European nights land after this weeknight lock, not at lunch."
        lead="Tourist Sol still thinks Irish pubs open at noon. This door on Espoz y Mina 7 turns the key at 18:00 Monday to Thursday — the published weeknight line — so a 21:00 Madrid Champions kickoff is three hours into the room, not a shuttered facade."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_45%]"
      />
      <Section title="18:00 is the weeknight lock, not a new hour" featured>
        <p>
          {ADDRESS.full}. Monday to Thursday we open at {HOURS.monThu.open} and
          close at {HOURS.monThu.close}. That is the chalkboard already on this
          site. We are not moving it. Continental midweek football in Madrid
          usually sits at 21:00. You walk in after work, not before lunch.
        </p>
        <p>
          A 18:45 Madrid midweek slot, when What’s On lists one, also falls
          after this lock. An early-afternoon kickoff on a Tuesday is not this
          door’s story. Do not invent a screening for a match that kicks off
          while the gold lettering is still dark.
        </p>
      </Section>
      <Section title="Confirmed ties only — Madrid clocks">
        <p>
          We name a Champions League, Europa League or Conference League night
          only when{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          marks it Confirmed, in Madrid time. Ask which game is on. The
          competition landing — fixtures, not this door-clock — is{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League pub near Sol
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
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live sports
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
