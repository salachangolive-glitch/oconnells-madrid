import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus nights near Puerta del Sol",
  description:
    "Erasmus-friendly Irish pub near Sol: Thursday €1 shots are the priority night; Wednesday €1 shots also run. O'Connell St, Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Madrid"
        title={`Student & international nights at ${SITE_NAME}`}
        lead="Central, English-friendly Irish pub energy — with Thursday €1 shots as the night we push for Erasmus crowds."
      />
      <PhotoPlaceholder
        label="Erasmus night / bar crowd — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Thursday first">
        <p>
          Thursday €1 shots are the commercial priority for Erasmus. Wednesday
          €1 shots exist too, but if you are picking one weekly meetup night,
          make it Thursday.
        </p>
        <p>
          <Link
            href="/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Thursday €1 shots
          </Link>
        </p>
      </Section>
      <Section title="Why Sol works">
        <p>
          A short walk from Puerta del Sol keeps groups easy to assemble. No
          terrace and no habitual live music — expect an indoor pub/sports-bar
          night.
        </p>
      </Section>
    </PageShell>
  );
}
