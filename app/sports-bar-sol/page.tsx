import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Sol Madrid — Irish pub near Sol",
  description:
    "Sports bar Sol Madrid at Calle de Espoz y Mina 7, just off Puerta del Sol: Irish pub with football and NFL on the screens. Kickoff times on What's On.",
  path: "/sports-bar-sol",
  canonicalPath: "/sports",
});

export default function SportsBarSolPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports-bar-sol">
      <PageHero
        eyebrow="Sports bar Sol Madrid · Irish pub"
        title="Sports bar Sol Madrid for football nights"
        lead={`${SITE_NAME} sits on Calle de Espoz y Mina 7, just off Puerta del Sol — an Irish pub and sports bar near Sol to meet up before the match, with football on the screens and post-match talk.`}
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
          O&apos;Connell St is an Irish pub and sports bar in that same stretch
          of the centre: come in, grab a screen, and make it the place to meet
          up before the game.
        </p>
        <p>
          Confirmed kickoff times for Madrid are always on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . To watch NFL Madrid at this NFL bar Madrid, see{" "}
          <Link href="/nfl-madrid" className="text-cream underline">
            NFL in Madrid
          </Link>
          . Food is on the{" "}
          <Link href="/menu" className="text-cream underline">
            menu
          </Link>
          . Four Corner on Victoria 6 is open from 14:00, with sports screens.
        </p>
      </Section>
      <SportsPageWayfinding locale="en" currentPath="/sports-bar-sol" />
      <LocaloFindUs locale="en" />
      <Section>
        <p>
          {ADDRESS.full}, just off Puerta del Sol. {HOURS.summaryEn}.
        </p>
        <p>
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
