import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus nights near Sol",
  description:
    "Erasmus-friendly Irish pub near Sol: Thursday €1 shots, live sports on the screens, easy meetups. O'Connell St, Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Internationals"
        title={`Your night at ${SITE_NAME}`}
        lead="O’Connell St is just a short walk from Puerta del Sol and welcomes an international crowd throughout the week."
      />
      <ThursdayFeature locale="en" />
      <Section title="Why it works">
        <p>
          Central enough that everyone finds the door. A welcoming bar. Screens on
          for the big games. Thursday €1 shots give the night a
          clear plan.
        </p>
        <p>
          <Link href="/sports" className="text-gold underline">
            Live Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-gold underline">
            Location
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
