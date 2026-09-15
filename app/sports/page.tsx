import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { FACTS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar screens — football, NFL & NBA",
  description:
    "O'Connell St Madrid sports bar: Premier League, Champions League, LaLiga on screens; NFL and NBA when shown. Near Puerta del Sol.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Sports bar"
        title={`Watch sport at ${SITE_NAME}`}
        lead="Screens for the big football competitions — plus NFL and NBA when those fixtures are on."
      />
      <PhotoPlaceholder
        label="TV wall / match night crowd — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Football">
        <p>
          Regular football interest: {FACTS.football.join(", ")}. For
          match-day planning see{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Madrid
          </Link>
          ,{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          , and{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <Section title="NFL & NBA">
        <p>
          {FACTS.otherSports.join(" and ")} appear when those games are shown —
          ask at the bar for the night&apos;s lineup. We do not claim official
          team or league status.
        </p>
      </Section>
      <Section title="Match atmosphere">
        <p>
          Indoor sports bar near Sol — no terrace, no habitual live music. The
          focus is screens, pints, and the fixture.
        </p>
      </Section>
    </PageShell>
  );
}
