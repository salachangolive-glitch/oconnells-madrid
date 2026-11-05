import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus in Madrid: Thursday nights by Sol | O'Connell St",
  description:
    "Erasmus students in Madrid: Thursday nights at O'Connell St, an Irish pub next to Puerta del Sol with live sport, beer and pub food. Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Thursday · Sol"
        title="Erasmus in Madrid: Thursday nights next to Sol"
        lead="Erasmus students, visitors and people from all over end up at this Irish pub, a short walk from Puerta del Sol. Thursday is the night the international crowd fills the bar."
      />
      <Section title="Thursday nights">
        <p>
          On Thursdays {SITE_NAME} opens at {HOURS.monThu.open} and stays open
          until {HOURS.monThu.close}. Live sport is on the big screens when it is
          confirmed, there is beer at the bar and pub food from the kitchen. It is
          a normal night at the pub with an international crowd, not a separate
          party.
        </p>
      </Section>
      <Section title="Where we are">
        <p>
          {ADDRESS.full}, next to Puerta del Sol in Madrid centre: easy to find
          for a group that has just arrived in the city.
        </p>
        <p>Opening hours: {HOURS.summaryEn}.</p>
        <p>
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/sports" className="text-gold underline">
            Live Sports
          </Link>
          {" · "}
          <Link href="/menu" className="text-gold underline">
            Food & drinks
          </Link>
          {" · "}
          <Link href="/location" className="text-gold underline">
            Location
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
