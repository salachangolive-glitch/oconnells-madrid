import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import {
  formatFixtureDay,
  getTonightFixtures,
  getUpcomingFixtures,
  RECURRING,
} from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "What's on — football & Thursday €1 shots",
  description:
    "What's on at O'Connell St Madrid near Sol: confirmed football fixtures, Premier League / Champions League / LaLiga screens, Thursday €1 shots.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  const tonight = getTonightFixtures();
  const upcoming = getUpcomingFixtures();

  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="What's on"
        title={`This week at ${SITE_NAME}`}
        lead="Confirmed matches when we have them, plus the weekly nights that keep the pub busy — football screens and Thursday €1 shots near Puerta del Sol."
      />
      <VenueHero className="mb-10" aspect="wide" caption="Match nights · Sol" />

      <Section title="Tonight" featured>
        {tonight.length > 0 ? (
          <ul className="space-y-4">
            {tonight.map((f) => (
              <li
                key={f.id}
                className="rounded-lg border border-cream/20 bg-black/40 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-pub-green-light">
                  {f.competition}
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-cream">
                  {f.homeTeam} vs {f.awayTeam}
                </p>
                <p className="mt-2 text-cream/80">
                  {formatFixtureDay(f.date, "en")}
                  {f.kickoffMadrid ? ` · ${f.kickoffMadrid} Madrid time` : null}
                </p>
                <p className="mt-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-md bg-pub-green-light px-4 py-2 font-semibold text-cream hover:bg-pub-green"
                  >
                    Directions
                  </a>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            No dated fixture listed for tonight yet. Check back closer to
            kick-off, or call{" "}
            <a href={PHONE_TEL} className="text-cream underline">
              {PHONE_DISPLAY}
            </a>{" "}
            if you need a specific match confirmed.
          </p>
        )}
      </Section>

      {upcoming.length > tonight.length ? (
        <Section title="Coming up">
          <ul className="space-y-3">
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
            <Link
              href="/thursday-1-euro-shots"
              className="text-cream underline"
            >
              details
            </Link>
          </li>
          <li>{RECURRING.wednesdayShots.en}</li>
          <li>NFL & NBA when those games are shown</li>
        </ul>
      </Section>

      <Section title="Plan your visit">
        <p>
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Directions
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
