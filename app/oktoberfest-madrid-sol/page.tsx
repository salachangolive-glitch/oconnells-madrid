import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

/**
 * Retired Oktoberfest Madrid 2026 guide (ended 15 Nov 2026).
 * Owner order 20 Oct via DG: references come down after 15 Nov.
 * Page kept as a noindex stub so the URL does not 404; public/_redirects 301! to /whats-on.
 */
export const metadata = buildMetadata({
  title: "What's On near Puerta del Sol",
  description:
    "Live sport at O'Connell St, an Irish pub at Calle de Espoz y Mina 7, just off Puerta del Sol. Confirmed fixtures in Madrid time are on What's On.",
  path: "/oktoberfest-madrid-sol",
  locale: "en",
  noindex: true,
  canonicalPath: "/whats-on",
});

export default function RetiredSolGuideStubPage() {
  return (
    <PageShell locale="en" altLangHref="/es/whats-on">
      <PageHero
        eyebrow="O'Connell St · Madrid"
        title="What's On near Puerta del Sol"
        lead="This page has moved. The week's confirmed live sport is on What's On, in Madrid time."
      />
      <p>
        <Link href="/whats-on" className="text-gold underline">
          See What&apos;s On
        </Link>
      </p>
    </PageShell>
  );
}
