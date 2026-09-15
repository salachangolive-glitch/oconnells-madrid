import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { FACTS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Madrid — football, NFL & NBA near Sol",
  description:
    "O'Connell St sports bar near Puerta del Sol: Premier League, Champions League, LaLiga on screens; NFL and NBA when shown. Irish pub in Madrid Centro.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Sports bar · Madrid Centro"
        title={`Watch sport at ${SITE_NAME}`}
        lead="Big screens for Premier League, Champions League and LaLiga — plus NFL and NBA when those fixtures are on — a short walk from Puerta del Sol."
      />
      <VenueHero className="mb-10" aspect="video" caption="Screens · pints · Sol" />
      <Section title="Football">
        <p>
          Travellers searching for somewhere to watch football in Madrid Centro
          land here for {FACTS.football.join(", ")}. Match days fill early —
          grab a pint and a good seat while you still can.
        </p>
        <p>
          <Link href="/watch-football-madrid" className="text-cream underline">
            Watch football in Madrid
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
      <Section title="NFL & NBA">
        <p>
          {FACTS.otherSports.join(" and ")} appear when those games are shown —
          ask at the bar for the night&apos;s lineup.
        </p>
      </Section>
      <Section title="Irish pub atmosphere">
        <p>
          An Irish sports pub near Sol built around the screens and the crowd —
          easy for groups, internationals and anyone who wants the match without
          leaving Madrid Centro.
        </p>
      </Section>
    </PageShell>
  );
}
