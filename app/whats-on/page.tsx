import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import {
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  RECURRING,
} from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Fixtures — football & Thursday €1 shots",
  description:
    "Fixtures at O'Connell St Madrid near Sol: confirmed football matches, Premier League / Champions League / LaLiga screens, Thursday €1 shots.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  const tonight = getTonightFixtures();
  const upcoming = getUpcomingFixtures();

  return (
    <PageShell locale="en" altLangHref="/es/whats-on">
      <PageHero
        eyebrow="Fixtures"
        title={`This week at ${SITE_NAME}`}
        lead="Confirmed matches when we have them, plus the weekly nights that keep the pub busy."
      />

      <Section title="Tonight">
        {tonight.length > 0 ? (
          <ul className="space-y-6">
            {tonight.map((f) => (
              <li key={f.id}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {f.competition}
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-cream">
                  {f.homeTeam} vs {f.awayTeam}
                </p>
                <p className="mt-2 text-cream-muted">
                  {formatFixtureDay(f.date, "en")}
                  {f.kickoffMadrid ? ` · ${f.kickoffMadrid} Madrid` : null}
                </p>
                <p className="mt-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-cream"
                  >
                    Directions →
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            No dated fixture listed for tonight yet.{" "}
            <Link href="/contact" className="text-gold underline">
              Contact us
            </Link>{" "}
            if you need a specific match confirmed.
          </p>
        )}
      </Section>

      {upcoming.length > tonight.length ? (
        <Section title="Coming up">
          <ul className="space-y-4">
            {upcoming
              .filter((f) => !tonight.some((t) => t.id === f.id))
              .map((f) => (
                <li key={f.id}>
                  <strong className="text-cream">{f.competition}</strong>
                  {" — "}
                  {f.homeTeam} vs {f.awayTeam}
                  {" · "}
                  {formatFixtureDay(f.date, "en")}
                  {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : null}
                </li>
              ))}
          </ul>
        </Section>
      ) : null}

      <Section title="Every week">
        <ul className="list-disc space-y-2 pl-5">
          <li>{RECURRING.football.en}</li>
          <li>
            {RECURRING.thursdayShots.en} —{" "}
            <Link href="/thursday-1-euro-shots" className="text-gold underline">
              Thursday €1 shots
            </Link>
          </li>
          <li>{RECURRING.wednesdayShots.en}</li>
        </ul>
      </Section>
    </PageShell>
  );
}
