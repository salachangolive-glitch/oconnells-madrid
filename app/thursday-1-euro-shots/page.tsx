import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Thursday €1 shots near Puerta del Sol",
  description:
    "Thursday €1 shots at O'Connell St Madrid — Erasmus, internationals, tourists and friend groups near Sol. Wednesday €1 shots also on.",
  path: "/thursday-1-euro-shots",
});

export default function ThursdayShotsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/thursday-1-euro-shots">
      <PageHero
        eyebrow="Thursday · €1"
        title="Thursday · €1 shots"
        lead={`At ${SITE_NAME}, Thursday is the night for €1 shots — Erasmus students, internationals, tourists and anyone who wants an easy Madrid Centro night near Sol.`}
      />
      <Section title="Why Thursday">
        <p>
          €1 shots, a short walk from Puerta del Sol, Irish pub energy — it is
          the night groups actually show up for. Bring your Erasmus flatmates,
          your hostel friends, or the WhatsApp crew exploring Madrid.
        </p>
        <p>Wednesday €1 shots are on too. Thursday is the one everyone talks about.</p>
      </Section>
      <Section title="Good to know">
        <ul className="list-disc space-y-2 pl-5">
          <li>Near Puerta del Sol — easy for mixed groups and travellers.</li>
          <li>Ask at the bar for what is pouring that night.</li>
          <li>
            Pair it with a match from{" "}
            <Link href="/whats-on" className="text-gold underline">
              Fixtures
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
