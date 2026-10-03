import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Watch football in Madrid near Sol",
  description:
    "Watch confirmed football at O'Connell St, Calle de Espoz y Mina 7, near Sol. Hours, directions and What's On.",
  path: "/watch-football-madrid",
});

export default function WatchFootballPage() {
  return (
    <PageShell locale="en" altLangHref="/es/watch-football-madrid">
      <PageHero
        eyebrow="Watch football · Madrid"
        title="Football at a pub near Sol"
        lead={`${SITE_NAME} is at ${ADDRESS.street}, a short walk from Puerta del Sol. Confirmed football screenings are listed on What's On.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Barrel seating and sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="Confirmed matches">
        <p>
          A match is shown as confirmed only when the pub is screening it.
          Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for confirmed matches, or ask at the bar if one game matters most.
        </p>
        <p>
          {HOURS.summaryEn}. No table reservations — walk in, first come, first
          served. Sol is the landmark: Espoz y Mina 7 is a few minutes on foot.
          We only call a match confirmed when it is on at the pub.
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Open directions
          </a>
          .
        </p>
        <p>
          Pages for{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>{" "}
          and{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          , plus other sport on{" "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
          .
        </p>
      </Section>
      <Section title="Hours and how to get here">
        <p>{ADDRESS.full}. {HOURS.summaryEn}.</p>
        <p>
          From Metro Sol, walk to Calle de Espoz y Mina. The pub has a red
          facade and gold lettering. No table reservations — first come, first
          served.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Directions
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
