import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League nights in central Madrid",
  description:
    "UEFA Champions League on the screens at O'Connell St near Puerta del Sol. Irish sports bar in Madrid Centro for midweek European nights.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`UCL nights at ${SITE_NAME}`}
        lead="Midweek European football belongs on the big screens. Join the crowd at this Irish sports pub near Puerta del Sol for Champions League nights in Madrid Centro."
      />
      <VenueHero variant="secondary" className="mb-10" />
      <Section title="Before you come">
        <p>
          Confirm tonight&apos;s ties on{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          if your night depends on one match. We&apos;re a short walk from Sol —
          easy for travellers and locals heading into Madrid Centro for kick-off.
        </p>
        <p>
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Sports overview
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
