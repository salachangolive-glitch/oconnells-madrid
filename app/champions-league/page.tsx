import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League nights in central Madrid",
  description:
    "Champions League at O'Connell St near Sol when the screening is confirmed. Hours, directions and What's On.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Champions League at ${SITE_NAME}`}
        lead="Champions League goes on the screens when that screening is confirmed. This week's times are on What's On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St near Sol"
        position="object-[center_45%]"
      />
      <Section title="Before you come">
        <p>
          Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          if your night depends on one tie. If it is not listed as confirmed,
          ask at the bar.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}. Walk from Puerta del Sol to Calle
          de Espoz y Mina. No table reservations.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Directions
          </a>
          .
        </p>
        <p>
          We are at Calle de Espoz y Mina 7, beside Puerta del Sol.{" "}
          {HOURS.summaryEn}. No table reservations — walk in, first come, first
          served. Come for the tie that is actually on our screens, not every
          European game on television. What&apos;s On is the list; we do not
          invent kick-offs here.
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
