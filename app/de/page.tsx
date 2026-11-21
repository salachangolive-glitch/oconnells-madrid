import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/venue";

/**
 * German index /de (DG order 27 Oct 2026; Oktoberfest copy retired 16 Nov 2026,
 * owner order 20 Oct via DG: references come down after 15 Nov).
 * Bayern pages (Atlético–Bayern 3 Nov) retired 4 Nov 2026, 301 in public/_redirects.
 * To add OC-29 / OC-30 once Radar assigns them and the pages exist: append { href, title, text } to DE_UPCOMING,
 * add the path to DE_PATHS in lib/venue.ts, done.
 */
type DeItem = { href: string; title: string; text: string };

/** Next German pieces (OC-29, OC-30): add here when the pages are live. */
const DE_UPCOMING: DeItem[] = [];

export const metadata = buildMetadata({
  title: "O'Connell St Madrid auf Deutsch: Irish Pub an der Puerta del Sol",
  description:
    "Irish Pub in der Calle de Espoz y Mina 7, gleich an der Puerta del Sol: Bundesliga, Champions League und Nations League live, Bier und Gäste aus aller Welt.",
  path: "/de",
  locale: "de",
});

function ItemList({ items }: { items: DeItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} hrefLang="de" className="text-cream underline">
            {it.title}
          </Link>
          <p className="mt-1">{it.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function DeIndexPage() {
  return (
    <PageShell locale="de" altLangHref="/">
      <PageHero
        eyebrow="Auf Deutsch · Madrid"
        title="O'Connell St auf Deutsch: Irish Pub an der Puerta del Sol"
        lead="O'Connell St ist ein Irish Pub in der Calle de Espoz y Mina 7, gleich an der Puerta del Sol. Bei uns laufen Bundesliga, Champions League und Nations League auf den Screens, und ihr trefft Gäste aus aller Welt."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <Link href="/" hrefLang="en" lang="en" className="text-gold underline">
          English
        </Link>
        {" · "}
        <Link href="/es" hrefLang="es" lang="es" className="text-gold underline">
          Español
        </Link>
      </p>
      <Section title="Live-Sport an der Puerta del Sol">
        <p>
          Fußball aus der Bundesliga, der Champions League und der Nations League
          läuft bei uns in der Madrider Zeit. Welche Spiele diese Woche auf den
          Screens stehen, findet ihr in der Agenda, auf Englisch und auf Spanisch,
          jeweils mit dem Vermerk Confirmed.
        </p>
        <p>
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            What&apos;s On (Englisch)
          </Link>
          {" · "}
          <Link href="/es/whats-on" hrefLang="es" className="text-cream underline">
            Agenda (Español)
          </Link>
        </p>
      </Section>
      {DE_UPCOMING.length > 0 ? (
        <Section title="Neu auf Deutsch">
          <ItemList items={DE_UPCOMING} />
        </Section>
      ) : null}
      <Section title="So findet ihr uns">
        <p>
          {ADDRESS.full}, gleich an der Puerta del Sol. Öffnungszeiten:{" "}
          {HOURS.summaryDe}.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Route öffnen
          </a>
          {" · "}
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            What&apos;s On (Englisch)
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
