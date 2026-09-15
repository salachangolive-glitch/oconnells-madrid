import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "What's on — sport & Thursday €1 shots",
  description:
    "What's on at O'Connell St Madrid: football screens (PL/UCL/LaLiga), NFL/NBA when shown, Thursday €1 shots for Erasmus. No habitual live music.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="What's on"
        title={`This week at ${SITE_NAME}`}
        lead="We keep this page factual: recurring sport and Thursday €1 shots. There is no dated fixture list here — confirm screens on arrival, and follow the Google Business Profile for short updates."
      />
      <PhotoPlaceholder
        label="Night in the pub — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Tonight's screens">
        <p>
          No dated kick-off list on this site. If a specific match matters,
          confirm the screens when you arrive, or call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          . For short-notice posts, follow the{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Google Business Profile
          </a>{" "}
          listing — we do not invent fixtures here.
        </p>
      </Section>
      <Section title="Recurring">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-cream">Football</strong> — Premier League,
            Champions League, LaLiga interest on screens.{" "}
            <Link href="/sports" className="text-cream underline">
              Sports
            </Link>
          </li>
          <li>
            <strong className="text-cream">NFL / NBA</strong> — when those games
            are shown.
          </li>
          <li>
            <strong className="text-cream">Thursday €1 shots</strong> —
            commercial priority for Erasmus.{" "}
            <Link
              href="/thursday-1-euro-shots"
              className="text-cream underline"
            >
              Details
            </Link>
          </li>
          <li>
            <strong className="text-cream">Wednesday €1 shots</strong> — also
            run; Thursday remains the priority night.
          </li>
        </ul>
      </Section>
      <Section title="Not on the calendar">
        <p>
          No habitual live music. No terrace events. For a specific fixture,
          call{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </Section>
    </PageShell>
  );
}
