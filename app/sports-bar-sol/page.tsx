import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar in Sol, Madrid — football nights",
  description:
    "Sports bar just off Puerta del Sol at Calle de Espoz y Mina 7: football on the screens and a meeting point before and after the match. Walk in; kickoff times on What's On.",
  path: "/sports-bar-sol",
});

export default function SportsBarSolPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports-bar-sol">
      <PageHero
        eyebrow="Sports pub · Puerta del Sol"
        title="A sports bar in Sol for football nights"
        lead={`${SITE_NAME} sits on Calle de Espoz y Mina 7, just off Puerta del Sol — a central Madrid meeting point for football, pre-match drinks and post-match talk.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sports screens at O'Connell St Irish pub near Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Champions League in the centre">
        <p>
          When a Champions League night is on, Sol is where many fans gather
          before heading to the stadium and where they come back afterwards.
          O&apos;Connell St is an Irish sports pub in that same stretch of the
          centre: walk in, grab a screen, and use it as your meeting point for
          the evening.
        </p>
        <p>
          Confirmed kickoff times for Madrid are always on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . Food is on the{" "}
          <Link href="/menu" className="text-cream underline">
            menu
          </Link>
          .
        </p>
      </Section>
      <Section title="Atlético Madrid v Bayern Munich · Tue 3 November, 21:00">
        <p>
          Matchday night at the Metropolitano. We are showing Atlético Madrid
          against Bayern Munich live at 21:00 Madrid time. Meet your group in
          Sol before you head out, or come back to the centre afterwards to
          talk the game through. Walk in — first come, first served.
        </p>
      </Section>
      <Section title="Also on the calendar">
        <p>
          On Sunday 8 November we are showing every NFL game of the day live.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}, just off Puerta del Sol. {HOURS.summaryEn}. No table
          reservations — walk in, first come, first served.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Directions from Sol
          </a>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
        </p>
        <p>
          <Link
            href="/de/sports-bar-sol"
            hrefLang="de"
            lang="de"
            className="text-cream underline"
          >
            Auf Deutsch: Sports Pub an der Puerta del Sol
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
