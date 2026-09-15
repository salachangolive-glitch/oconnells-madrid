import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { HighlightCards, PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Irish pub & sports bar near Puerta del Sol`,
  description:
    "O'Connell St: Irish sports pub at Calle de Espoz y Mina 7, Madrid Centro near Puerta del Sol. Watch Premier League, Champions League & LaLiga. Thursday €1 shots for Erasmus & travellers.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell locale="en" altLangHref="/es">
      <PageHero
        eyebrow="Espoz y Mina · Puerta del Sol"
        title="Irish pub & sports bar in Madrid Centro"
        lead="Big screens for the football. Thursday €1 shots. A short walk from Sol."
      />
      <VenueHero variant="hero" className="mb-8" />
      <HighlightCards
        items={[
          {
            href: "/sports",
            title: "Sports & screens",
            blurb: "PL, Champions League, LaLiga — NFL & NBA when shown.",
          },
          {
            href: "/whats-on",
            title: "What's on",
            blurb: "Tonight's confirmed fixtures and weekly nights.",
          },
          {
            href: "/thursday-1-euro-shots",
            title: "Thursday €1 shots",
            blurb: "The night for Erasmus, tourists and friend groups.",
          },
          {
            href: "/erasmus",
            title: "Erasmus & internationals",
            blurb: "Easy meetup near Sol — English-friendly pub energy.",
          },
          {
            href: "/location",
            title: "Location",
            blurb: "Calle de Espoz y Mina 7, 28012 Madrid.",
          },
          {
            href: MAPS_URL,
            title: "Directions",
            blurb: "Open Google Maps — short walk from Puerta del Sol.",
          },
        ]}
      />
      <Section title="Watch football in Madrid Centro">
        <p>
          Planning a trip and searching for somewhere to watch football near
          Sol? {SITE_NAME} is an Irish sports pub a short walk from Puerta del
          Sol — Premier League Saturdays, Champions League midweeks, and LaLiga
          nights on the screens, with NFL and NBA when those games are on.
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
        </p>
      </Section>
      <Section title="Thursday €1 shots" featured>
        <p>
          Thursdays mean €1 shots — the easy night out for Erasmus students,
          internationals and anyone exploring Madrid Centro. Wednesday €1 shots
          are on too; Thursday is the one everyone talks about.
        </p>
        <p>
          <Link
            href="/thursday-1-euro-shots"
            className="inline-flex rounded-md bg-cream px-4 py-2 font-semibold text-pub-green hover:bg-cream/90"
          >
            Thursday €1 details
          </Link>
        </p>
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}. Call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>{" "}
          or get{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            directions on Google Maps
          </a>
          . {HOURS.summaryEn}.
        </p>
        <p>
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
          {" · "}
          <Link href="/about" className="text-cream underline">
            About
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
