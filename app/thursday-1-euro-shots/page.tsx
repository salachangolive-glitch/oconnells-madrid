import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Thursday €1 shots near Sol",
  description:
    "€1 shots every Thursday at O'Connell St, Calle de Espoz y Mina 7, near Sol. Ask at the bar for that night’s selection.",
  path: "/thursday-1-euro-shots",
});

export default function ThursdayShotsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/thursday-1-euro-shots">
      <PageHero
        eyebrow="Thursday · €1"
        title="Thursday · €1 shots"
        lead="€1 shots every Thursday. Ask at the bar for that night’s selection."
      />
      <Section title="Thursday at the pub">
        <p>
          €1 shots every Thursday. Ask at the bar for that night’s selection.
        </p>
        <p>
          {SITE_NAME} is at Calle de Espoz y Mina 7, a short walk from Puerta
          del Sol. No table reservations — walk in, first come, first served.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Thursdays only.</li>
          <li>
            Confirmed sport is on{" "}
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
            data-event="directions"
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
