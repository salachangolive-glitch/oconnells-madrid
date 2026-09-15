import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus nights near Puerta del Sol",
  description:
    "Erasmus-friendly Irish pub near Sol: Thursday €1 shots, football screens, easy meetups in Madrid Centro. O'Connell St, Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Internationals · Madrid"
        title={`Student & international nights at ${SITE_NAME}`}
        lead="Central, English-friendly Irish pub energy — Thursday €1 shots, football on the screens, and a meetup spot everyone can find near Puerta del Sol."
      />
      <VenueHero className="mb-10" aspect="video" caption="Erasmus nights · Sol" />
      <Section title="Make Thursday your night" featured>
        <p>
          Thursday €1 shots are the easy weekly ritual for Erasmus students and
          internationals. Wednesday €1 shots exist too — Thursday is the one to
          put in the group chat.
        </p>
        <p>
          <Link
            href="/thursday-1-euro-shots"
            className="inline-flex rounded-md bg-cream px-4 py-2 font-semibold text-pub-green hover:bg-cream/90"
          >
            Thursday €1 shots
          </Link>
        </p>
      </Section>
      <Section title="Why Sol works">
        <p>
          A short walk from Puerta del Sol keeps groups easy to assemble —
          whether you are new to Madrid Centro or showing friends around. Catch
          Premier League, Champions League or LaLiga on the screens, then stay
          for the night.
        </p>
        <p>
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
