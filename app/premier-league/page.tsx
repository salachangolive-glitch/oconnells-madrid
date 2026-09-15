import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League on screens in Madrid",
  description:
    "Watch Premier League football at O'Connell St Irish sports bar near Puerta del Sol. Screens for PL fixtures — not an official club partner.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League"
        title={`PL screens at ${SITE_NAME}`}
        lead="English football is a regular ask at this Sol-area Irish sports pub. We put Premier League fixtures on the screens — without claiming official club or league status."
      />
      <PhotoPlaceholder
        label="PL match on screen — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Planning a PL afternoon or night">
        <p>
          Big Saturday and Sunday cards fill the centre early. If your group
          cares about a specific kick-off, call the bar to confirm it&apos;s on.
          Pair match day with{" "}
          <Link href="/location" className="text-cream underline">
            directions from Sol
          </Link>{" "}
          or browse{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
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
