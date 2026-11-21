import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { NEWS_HUB_EN } from "@/lib/news-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "News and match notes near Sol | O'Connell St Madrid",
  description:
    "Match notes and fan guides from O'Connell St, the Irish pub at Espoz y Mina 7 by Puerta del Sol. Links to what's on and confirmed screens.",
  path: "/news",
});

export default function NewsIndexPage() {
  return (
    <PageShell locale="en" altLangHref="/es/noticias">
      <PageHero
        eyebrow="News"
        title="Match notes and fan guides"
        lead="Short reads for visitors near Puerta del Sol. For confirmed screens and kickoff times, use What's On — Madrid time only, and ask at the bar which game is on."
      />
      <Section title="Articles">
        <ul className="list-disc space-y-2 pl-5 text-cream">
          {NEWS_HUB_EN.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="text-gold underline hover:text-cream">
                {item.title}
              </Link>
              {item.esPath ? (
                <span className="ml-2 text-sm text-cream-muted">
                  ·{" "}
                  <Link href={item.esPath} className="text-cream-muted underline hover:text-gold">
                    En español
                  </Link>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Agenda">
        <p>
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>{" "}
          lists confirmed events for the next seven days.
        </p>
      </Section>
    </PageShell>
  );
}
