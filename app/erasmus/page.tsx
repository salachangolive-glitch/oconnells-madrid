import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus nights near Sol",
  description:
    "Erasmus-friendly Irish pub near Sol: Thursday €1 shots, football on the screens, easy meetups. O'Connell St, Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Internationals"
        title={`Your night at ${SITE_NAME}`}
        lead="Meet near Sol, watch the football, stay for Thursday €1 shots — a proper Irish pub with an international crowd."
      />
      <ThursdayFeature locale="en" />
      <Section title="Why it works">
        <p>
          Central enough that everyone finds the door. English-friendly at the
          bar. Screens on for the big games. Thursday €1 shots give the night a
          clear plan.
        </p>
        <p>
          <Link href="/sports" className="text-gold underline">
            Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-gold underline">
            Location
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-gold underline">
            Fixtures
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
