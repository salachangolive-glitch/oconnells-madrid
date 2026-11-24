import Link from "next/link";
import { DirectionsButton } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RM_BAYERN_BASKET } from "@/lib/articles/real-madrid-bayern-basketball-treffpunkt-sol";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const { path, published, start, arenaUrl } = RM_BAYERN_BASKET;
const c = RM_BAYERN_BASKET;

export const metadata = buildMetadata({
  title: c.title,
  description: c.description,
  path,
  locale: "de",
});

export default function DeRealMadridBayernBasketballPage() {
  return (
    <PageShell locale="de" altLangHref="/whats-on">
      <JsonLd
        data={visitingFansNewsJsonLd({
          path,
          headline: c.h1,
          description: c.description,
          datePublished: published,
          sportsEventName: "Real Madrid v FC Bayern München (EuroLeague)",
          startDate: start,
          sport: "Basketball",
          homeTeam: "Real Madrid",
          awayTeam: "FC Bayern München",
          venue: "Movistar Arena",
          venueStreet: "Avenida de Felipe II",
          inLanguage: "de",
        })}
      />
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <p className="mb-8">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          data-oc-directions="button"
          className="inline-flex items-center rounded-md bg-pub-green px-5 py-2.5 font-semibold text-cream hover:bg-pub-green-light"
        >
          Route öffnen
        </a>
      </p>
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Zapfhähne an der Theke des Irish Pubs O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title={c.game.title}>
        <ul className="list-disc space-y-1 pl-5">
          {c.game.bullets.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="text-sm text-cream-muted">
          {c.game.note}{" "}
          <a href={arenaUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline">
            EuroLeague: Spielplan
          </a>
          .
        </p>
      </Section>
      <Section title={c.meet.title}>
        {c.meet.paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>
      <Section title="So findet ihr uns">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · Madrid, weniger als eine Minute von der Puerta del Sol.{" "}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-event="directions" className="text-cream underline">
            Route öffnen
          </a>
          {" · "}
          <Link href="/de" hrefLang="de" className="text-cream underline">
            O&apos;Connell St auf Deutsch
          </Link>
          {" · "}
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            What&apos;s On (Englisch)
          </Link>
          {" · "}
          <Link href="/es/whats-on" hrefLang="es" className="text-cream underline">
            Agenda (Español)
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
