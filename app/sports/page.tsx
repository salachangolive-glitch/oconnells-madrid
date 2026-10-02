import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Live sports Madrid — Irish pub near Sol",
  description:
    "O'Connell St near Sol: live sports on the screens — football, NFL, NBA, rugby, F1, tennis and more when confirmed.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Screens · pints · Sol"
        title={`Live sports at ${SITE_NAME}`}
        lead="Football nights when they matter, plus NFL, NBA, rugby, F1, tennis and other big events when they’re confirmed — a short walk from Sol. We don’t promise everything every night: check What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" />
      <Section title="What we put on">
        <p>
          The pub fills around the screens. Grab a pint, find a seat, and settle
          in — football most weekends and European nights, and other sports when
          a big match is confirmed for the bar.
        </p>
        <p>
          For the diary, see{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . If you want a deeper dive into football:{" "}
          <Link href="/watch-football-madrid" className="text-gold underline">
            Watch football in Madrid
          </Link>
          , including{" "}
          <Link href="/premier-league" className="text-gold underline">
            Premier League
          </Link>{" "}
          and{" "}
          <Link href="/champions-league" className="text-gold underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Interior with F1 and sports on the TVs at O'Connell St"
        position="object-[center_25%]"
      />
      <Section title="Beyond football">
        <p>
          NFL and NBA when those games are showing; rugby, F1 and tennis when a
          big night is confirmed. Ask at the bar for tonight&apos;s lineup — or
          check{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
