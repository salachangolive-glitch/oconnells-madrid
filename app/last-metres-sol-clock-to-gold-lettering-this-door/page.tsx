import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SOL_CLOCK_WAYFIND_PATHS } from "@/lib/sol-clock-to-gold-lettering";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sol clock to gold lettering: this door | O'Connell St",
  description:
    "Last metres from Puerta del Sol clock to O'Connell St on Espoz y Mina 7. This Maps pin for confirmed football. GET DIRECTIONS — CID on file.",
  path: SOL_CLOCK_WAYFIND_PATHS.en,
});

export default function SolClockToGoldLetteringPage() {
  return (
    <PageShell locale="en" altLangHref={SOL_CLOCK_WAYFIND_PATHS.es}>
      <PageHero
        eyebrow="This door · Puerta del Sol · wayfinding"
        title="Last metres from the Sol clock to the gold lettering on this door."
        lead="You checked the kickoff on What's On in Madrid time. The last job is not another app — it is finding the red facade and gold lettering on Espoz y Mina 7 from the square everyone still calls Sol. This page is those last metres for football at this Irish pub, not a tour of the centro."
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Bar corner at O'Connell St Irish pub near Puerta del Sol"
        position="object-[center_35%]"
      />
      <Section title="Start at the clock, aim at the lettering" featured>
        <p>
          {ADDRESS.full}. From Puerta del Sol, walk into Calle de Espoz y Mina
          — the arcade that carries football fans off the square. You are
          looking for this listing&apos;s gold lettering on the red facade, not
          a generic Irish-pub sign in a photo gallery. When Google Maps opens,
          use{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>{" "}
          on CID 10697659365903665225 so the pin is this door.
        </p>
        <p>
          We do not invent walking minutes from the clock or from a stadium.
          Open Maps, walk the live route, and read the screen when you arrive.
          Full address context stays on{" "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          .
        </p>
      </Section>
      <Section title="Football at the door you found">
        <p>
          Confirmed kickoffs for this pub are on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . Ask which game is on when two leagues share a night —{" "}
          <Link
            href="/overlapping-kickoffs-shared-screens-this-door"
            className="text-cream underline"
          >
            overlapping kickoffs
          </Link>{" "}
          are one room, not two private boxes. Premier and Champions context:{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League near Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="GET DIRECTIONS to this pin">
        <p>This listing, not a neighbouring door on the same street number.</p>
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
          .
        </p>
      </Section>
    </PageShell>
  );
}
