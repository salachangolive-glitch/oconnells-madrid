import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League on screens in Madrid near Sol",
  description:
    "Watch Premier League football at O'Connell St near Sol. PL screens for travellers and locals in central Madrid.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid"
        title={`PL screens at ${SITE_NAME}`}
        lead="Premier League afternoons and nights on the big screens — pints ready, a short walk from Sol."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Pub corridor with screens showing football — Premier League viewing at O'Connell St"
        position="object-[center_40%]"
      />
      <Section title="Planning a PL afternoon or night">
        <p>
          Busy Saturday and Sunday cards fill early. If your group cares about a
          specific kick-off, check{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          or ask at the bar. Pair match day with{" "}
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
