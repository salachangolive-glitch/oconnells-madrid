import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League pub in Madrid, by Puerta del Sol",
  description:
    "Champions League pub by Sol at Espoz y Mina 7. Named UCL ties only when What's On marks Confirmed. Madrid time. GET DIRECTIONS.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="Champions League pub Madrid · UEFA nights"
        title={`Champions League pub near Sol: ${SITE_NAME}`}
        lead={`Champions League nights at ${ADDRESS.full}, a short walk from Puerta del Sol. We name a UCL tie only when What’s On marks it Confirmed — Madrid time on every row. Ask which game is on.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St near Sol"
        position="object-[center_45%]"
      />
      <Section title="Champions League at this door" featured>
        <p>
          This Irish pub near Sol puts UEFA Champions League on the screens when
          the screening is confirmed — not every European night on every wall.
          Tuesday and Wednesday habits at this address:{" "}
          <Link
            href="/tuesday-wednesday-european-nights-this-door"
            className="text-cream underline"
          >
            European nights at this door
          </Link>
          . Broader football:{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Madrid
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          .
        </p>
      </Section>
      <Section title="Named Champions fixtures (Confirmed, Madrid time)">
        <p>
          Rows below are pulled from the same confirmed agenda as{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . If your tie is not listed, ask at the bar before you sit down.
        </p>
        <PremierLeagueLines locale="en" competition="ucl" windowOnly />
        <p className="mt-4 text-sm text-cream-muted">
          Only UCL ties marked Confirmed appear here. Times update when the
          agenda rebuilds — Madrid clocks, not a UK graphic read twice.
        </p>
      </Section>
      <Section title="GET DIRECTIONS — this Maps pin">
        <p>
          Champions League pub Madrid searches should land on this listing at
          Espoz y Mina 7, not a neighbouring door. CID 10697659365903665225.
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
