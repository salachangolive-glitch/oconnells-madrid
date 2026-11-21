import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

/**
 * Zurückgezogene Oktoberfest-Madrid-2026-Seite (endet am 15. Nov. 2026).
 * Anweisung des Inhabers vom 20. Okt. über den DG: Verweise nach dem 15. Nov. entfernen.
 * Bleibt als noindex-Stub, damit die URL nicht 404 liefert; public/_redirects 301! nach /de.
 */
export const metadata = buildMetadata({
  title: "Irish Pub an der Puerta del Sol",
  description:
    "O'Connell St, Calle de Espoz y Mina 7, gleich an der Puerta del Sol: Irish Pub mit Live-Sport. Die aktuelle Übersicht findet ihr auf der deutschen Startseite.",
  path: "/de/oktoberfest-madrid-sol",
  locale: "de",
  noindex: true,
  canonicalPath: "/de",
});

export default function DeRetiredSolGuideStubPage() {
  return (
    <PageShell locale="de" altLangHref="/">
      <PageHero
        eyebrow="O'Connell St · Madrid"
        title="Irish Pub an der Puerta del Sol"
        lead="Diese Seite ist umgezogen. O'Connell St auf Deutsch und der Live-Sport an der Puerta del Sol stehen auf der deutschen Startseite."
      />
      <p>
        <Link href="/de" hrefLang="de" className="text-gold underline">
          Zur deutschen Startseite
        </Link>
      </p>
    </PageShell>
  );
}
