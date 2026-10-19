import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League pub in Madrid, by Puerta del Sol",
  description:
    "Champions League pub by Puerta del Sol: confirmed Champions League nights at O'Connell St, with Madrid kickoff times on What's On. Walk in, no booking.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Champions League pub near Sol: ${SITE_NAME}`}
        lead="Champions League nights at O'Connell St, Calle de Espoz y Mina 7. Confirmed ties and Madrid times are on What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St near Sol"
        position="object-[center_45%]"
      />
      <Section title="Real Madrid v RB Leipzig · Wed 21 October, 21:00">
        <p>
          Meeting up for the match? O&apos;Connell St is just off Puerta del Sol:
          meet your friends in the centre before heading to the stadium, and come
          back afterwards to talk it over. We&apos;re also showing it live. Walk
          in, no booking needed.
        </p>
      </Section>
      <Section title="Atlético Madrid v Bayern Munich · Tue 3 November, 21:00">
        <p>
          Bayern or Atleti, meet in the centre: O&apos;Connell St is just off
          Puerta del Sol, a meeting point before you head to the Metropolitano
          and a place to talk it over after. We&apos;re showing it live. Walk in,
          no booking needed.
        </p>
      </Section>
      <Section title="Before you come">
        <p>
          Check{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the tie and the Madrid time. If it is not listed, ask at the bar
          before you come.
        </p>
        <PremierLeagueLines locale="en" competition="ucl" />
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
