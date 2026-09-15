import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Thursday €1 shots near Puerta del Sol",
  description:
    "Thursday €1 shots at O'Connell St Madrid — Erasmus, internationals, tourists and friend groups near Sol. Wednesday €1 shots also on. Call +34 915 32 79 56.",
  path: "/thursday-1-euro-shots",
});

export default function ThursdayShotsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/thursday-1-euro-shots">
      <PageHero
        eyebrow="€1 shots · Thursday"
        title="Thursday €1 shots"
        lead={`At ${SITE_NAME}, Thursday is the night for €1 shots — Erasmus students, internationals, tourists and anyone who wants an easy, loud Madrid Centro night near Sol.`}
      />
      <VenueHero className="mb-10" aspect="video" caption="Thursday €1 · Erasmus" />
      <Section title="Why Thursday" featured>
        <p>
          €1 shots, a short walk from Puerta del Sol, Irish pub energy — it is
          the night groups actually show up for. Bring your Erasmus flatmates,
          your hostel friends, or the WhatsApp crew exploring Madrid.
        </p>
        <p>
          Wednesday €1 shots are on too. Thursday is the hero night.
        </p>
      </Section>
      <Section title="Good to know">
        <ul className="list-disc space-y-2 pl-5">
          <li>Near Puerta del Sol — easy for mixed groups and travellers.</li>
          <li>Ask at the bar for what is pouring that night.</li>
          <li>
            Pair it with a match from{" "}
            <Link href="/whats-on" className="text-cream underline">
              what&apos;s on
            </Link>
            .
          </li>
        </ul>
        <p>
          Questions? Call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          .{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Directions
          </a>
          {" · "}
          <Link href="/erasmus" className="text-cream underline">
            Erasmus
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
