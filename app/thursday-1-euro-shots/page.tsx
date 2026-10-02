import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Thursday €1 shots near Sol",
  description:
    "Thursday €1 shots at O'Connell St Madrid — Erasmus, internationals and friends near Sol. €1 every Thursday.",
  path: "/thursday-1-euro-shots",
});

export default function ThursdayShotsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/thursday-1-euro-shots">
      <PageHero
        eyebrow="Thursday · €1"
        title="Thursday · €1 shots"
        lead={`At ${SITE_NAME}, Thursday means €1 shots — a clear plan near Sol for Erasmus, internationals and whoever you're out with.`}
      />
      <Section title="Why Thursday">
        <p>
          €1 shots and a short walk from Sol — a lively Irish-pub night for
          flatmates, hostel friends, or whoever you&apos;re out with in Madrid.
        </p>
        <p>
          Thursdays only — there is no €1 shots promo on other weeknights.
        </p>
      </Section>
      <Section title="Good to know">
        <ul className="list-disc space-y-2 pl-5">
          <li>Near Sol — straightforward for groups and travellers.</li>
          <li>Ask at the bar for what is pouring that night.</li>
          <li>
            Pair it with a match from{" "}
            <Link href="/whats-on" className="text-gold underline">
              What&apos;s On
            </Link>
            .
          </li>
        </ul>
        <p>
          Questions?{" "}
          <Link href="/contact" className="text-gold underline">
            Contact us
          </Link>
          .{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Directions
          </a>
          {" · "}
          <Link href="/location" className="text-gold underline">
            Location
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
