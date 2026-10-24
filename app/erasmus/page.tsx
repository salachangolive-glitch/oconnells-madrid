import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "International crowd near Sol: students and visitors",
  description:
    "O'Connell St, just off Puerta del Sol: an Irish pub with European football on the screens and an international crowd of students and visitors. Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Visitors"
        title={`International crowd at ${SITE_NAME}`}
        lead="Erasmus students, tourists and people from all over meet at this Irish pub, just off Puerta del Sol. It is a normal night at the bar, not a separate Erasmus party."
      />
      <ThursdayFeature locale="en" />
      <Section title="At the pub">
        <p>
          {SITE_NAME} is on Calle de Espoz y Mina 7. The crowd is international
          through the week. Confirmed sport is on the screens — see What’s On
          for times. On Thursdays, ask at the bar about{" "}
          <Link href="/thursday-1-euro-shots" className="text-gold underline">
            €1 shots
          </Link>
          .
        </p>
        <p>
          <Link href="/sports" className="text-gold underline">
            Live Sports
          </Link>
          {" · "}
          <Link href="/location" className="text-gold underline">
            Location
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
