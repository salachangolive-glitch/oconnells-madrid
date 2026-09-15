import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Location — Calle de Espoz y Mina 7, near Sol",
  description:
    "Find O'Connell St at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. Google Maps directions. Phone +34 915 32 79 56. No terrace.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <PageShell locale="en" altLangHref="/es/location">
      <PageHero
        eyebrow="Location"
        title={`How to find ${SITE_NAME}`}
        lead={`${ADDRESS.full} — a short walk from Puerta del Sol.`}
      />
      <PhotoPlaceholder
        label="Street / entrance — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Address & contact">
        <p>{ADDRESS.full}</p>
        <p>
          Phone:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            Open in Google Maps
          </a>
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina. The pub
          is indoors only — there is no terrace. For match nights and Thursday
          €1 shots, see{" "}
          <Link href="/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
