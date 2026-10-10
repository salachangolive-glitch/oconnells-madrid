import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Erasmus and visitors near Sol",
  description:
    "O'Connell St, near Puerta del Sol: Irish pub for Erasmus students, tourists and an international crowd. Espoz y Mina 7.",
  path: "/erasmus",
});

export default function ErasmusPage() {
  return (
    <PageShell locale="en" altLangHref="/es/erasmus">
      <PageHero
        eyebrow="Erasmus · Visitors"
        title={`International crowd at ${SITE_NAME}`}
        lead="Erasmus students, tourists and people from all over meet at this Irish pub, a short walk from Puerta del Sol. It is a normal night at the bar, not a separate Erasmus party."
      />
      <ThursdayFeature locale="en" />
      <Section title="At the pub">
        <p>
          {SITE_NAME} is on Calle de Espoz y Mina 7. The crowd is international
          through the week. Confirmed sport is on the screens — see What’s On
          for times. On Thursdays, ask at the bar about €1 shots.
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
