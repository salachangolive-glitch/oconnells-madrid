import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League on screens in Madrid near Sol",
  description:
    "Watch Premier League football at O'Connell St Irish sports bar near Puerta del Sol. PL screens for travellers and locals in Madrid Centro.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid Centro"
        title={`PL screens at ${SITE_NAME}`}
        lead="English football is a regular ask at this Sol-area Irish sports pub. Come for Premier League afternoons and nights on the big screens — pints ready, centre of Madrid."
      />
      <VenueHero variant="secondary" className="mb-10" />
      <Section title="Planning a PL afternoon or night">
        <p>
          Big Saturday and Sunday cards fill Madrid Centro early. If your group
          cares about a specific kick-off, check{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          or call the bar. Pair match day with{" "}
          <Link href="/location" className="text-cream underline">
            directions from Sol
          </Link>
          .
        </p>
        <p>
          Also see{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          and{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Madrid
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
