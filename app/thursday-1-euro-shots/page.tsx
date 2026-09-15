import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Thursday €1 shots — Erasmus priority night",
  description:
    "Thursday €1 shots at O'Connell St Madrid near Sol. Commercial priority for Erasmus; Wednesday €1 shots also exist. Call +34 915 32 79 56.",
  path: "/thursday-1-euro-shots",
});

export default function ThursdayShotsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/thursday-1-euro-shots">
      <PageHero
        eyebrow="€1 shots"
        title="Thursday €1 shots"
        lead={`At ${SITE_NAME}, Thursday is the night we prioritise for Erasmus — €1 shots, central location, indoor pub atmosphere.`}
      />
      <PhotoPlaceholder
        label="Thursday shots night — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Thursday vs Wednesday">
        <p>
          Wednesday €1 shots also run. Thursday remains the commercial priority
          for Erasmus and international student nights. We do not list a full
          shot menu or other prices here — ask at the bar for what is pouring
          that night.
        </p>
      </Section>
      <Section title="Good to know">
        <ul className="list-disc space-y-2 pl-5">
          <li>Near Puerta del Sol — easy for mixed groups.</li>
          <li>No terrace; nights are indoors.</li>
          <li>No habitual live music.</li>
        </ul>
        <p>
          Questions? Call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          . Also see{" "}
          <Link href="/erasmus" className="text-cream underline">
            Erasmus
          </Link>{" "}
          and{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
