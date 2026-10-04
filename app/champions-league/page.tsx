import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League nights in central Madrid",
  description:
    "Champions League at O'Connell St near Sol when the screening is confirmed. Hours, walk-in, and What's On.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Champions League at ${SITE_NAME}`}
        lead="Champions League nights at O'Connell St, Calle de Espoz y Mina 7. Confirmed ties and Madrid times are on What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St near Sol"
        position="object-[center_45%]"
      />
      <Section title="Before you come">
        <p>
          Check{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the tie and the Madrid time. If it is not listed, ask at the bar
          before you come.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}. No table reservations — walk in,
          first come, first served.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Directions from Sol
          </a>
          .
        </p>
        <p>
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
