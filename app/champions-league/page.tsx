import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League nights in central Madrid",
  description:
    "UEFA Champions League on the screens at O'Connell St, near Puerta del Sol. Indoor Irish sports bar — not an official UCL venue.",
  path: "/champions-league",
});

export default function ChampionsLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`UCL at ${SITE_NAME}`}
        lead="Midweek European nights are built for screens. We show Champions League interest when fixtures are on — as a pub, not as an official partner."
      />
      <PhotoPlaceholder
        label="UCL night atmosphere — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Before you come">
        <p>
          Confirm the match is being shown if your night depends on one tie.
          We&apos;re indoors near Sol, with no terrace and no habitual live
          music — the night is the game and the crowd.
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
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
