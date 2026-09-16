import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League nights in central Madrid",
  description:
    "UEFA Champions League on the screens at O'Connell St near Sol. Irish sports bar for midweek European nights in Madrid.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`UCL nights at ${SITE_NAME}`}
        lead="Midweek European football on the big screens. Join the crowd at this Irish sports pub near Sol for Champions League nights."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Wide aisle with multiple big screens ready for Champions League nights"
        position="object-[center_45%]"
      />
      <Section title="Before you come">
        <p>
          Confirm tonight&apos;s ties on{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          if your night depends on one match. We&apos;re a short walk from Sol —
          handy for travellers and locals heading in for kick-off.
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
