import Link from "next/link";
import { MenuView } from "@/components/MenuView";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Food & drinks menu – pub food near Sol, Madrid",
  description:
    "O'Connell St food menu with prices: rice dishes, raciones and tapas, burgers, pizza, Irish breakfast and more, at an Irish pub just off Puerta del Sol.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <PageShell locale="en" altLangHref="/es/menu">
      <PageHero
        eyebrow="Food & drinks · Menu"
        title="Pub food near Sol"
        lead="Tapas to share, rice dishes, burgers, pizza and an Irish breakfast, with the game on the big screen and 9 screens."
      />
      <Section title="Our menu">
        <p>
          Prices as on our printed menu. Ask at the bar about allergens and
          drinks.
        </p>
        <MenuView locale="en" />
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}, just off Puerta del Sol. {HOURS.summaryEn}. Matches
          with Madrid times are on{" "}
          <Link href="/whats-on" className="text-cream underline">What&apos;s On</Link>.
        </p>
      </Section>
    </PageShell>
  );
}
