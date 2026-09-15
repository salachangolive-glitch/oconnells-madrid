import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Watch football in Madrid near Puerta del Sol",
  description:
    "Watch Premier League, Champions League and LaLiga at O'Connell St, Calle de Espoz y Mina 7, near Puerta del Sol. Indoor Irish sports pub.",
  path: "/watch-football-madrid",
});

export default function WatchFootballPage() {
  return (
    <PageShell locale="en" altLangHref="/es/watch-football-madrid">
      <PageHero
        eyebrow="Football in Madrid"
        title="A central spot to watch the match"
        lead={`${SITE_NAME} sits at ${ADDRESS.street}, a short walk from Puerta del Sol — useful when you want screens without leaving the centre.`}
      />
      <PhotoPlaceholder
        label="Football screens — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="What gets shown">
        <p>
          Expect Premier League, UEFA Champions League, and LaLiga interest on
          the screens. Kick-off times vary; call ahead if a specific fixture
          matters to your group.
        </p>
      </Section>
      <Section title="Practical notes">
        <ul className="list-disc space-y-2 pl-5">
          <li>Indoors only — no terrace.</li>
          <li>Not a habitual live-music venue; match nights are about the TVs.</li>
          <li>
            Not an official club pub — we show football, we don&apos;t represent
            teams or leagues.
          </li>
        </ul>
        <p>
          <Link href="/premier-league" className="text-cream underline">
            Premier League page
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League page
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            All sports
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
