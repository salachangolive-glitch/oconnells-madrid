import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Watch football in Madrid near Sol",
  description:
    "Watch Premier League, Champions League and LaLiga at O'Connell St, Calle de Espoz y Mina 7, near Sol. Central Irish sports pub in Madrid.",
  path: "/watch-football-madrid",
});

export default function WatchFootballPage() {
  return (
    <PageShell locale="en" altLangHref="/es/watch-football-madrid">
      <PageHero
        eyebrow="Watch football · Madrid"
        title="A central Irish pub for the big match"
        lead={`${SITE_NAME} sits at ${ADDRESS.street}, a short walk from Sol — Premier League, Champions League or LaLiga on the screens without leaving the centre.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Seating area with wooden tables and a large screen for live sports at O'Connell St"
        position="object-[center_20%]"
      />
      <Section title="What gets shown">
        <p>
          Premier League weekends, Champions League nights, and LaLiga on the
          screens — a central spot for the match.
        </p>
        <p>
          See{" "}
          <Link href="/whats-on" className="text-cream underline">
            fixtures
          </Link>{" "}
          for confirmed matches, or ask at the bar if one game matters most.
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Open directions
          </a>
          .
        </p>
        <p>
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
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
