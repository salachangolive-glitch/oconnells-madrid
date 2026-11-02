import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { absoluteUrl } from "@/lib/seo";
import { ADDRESS, MAPS_URL, SITE_NAME } from "@/lib/venue";

/**
 * Generic EN/ES match article (DG 2 Nov 2026): NewsArticle + Event (screening
 * at O'Connell St) + SportsEvent JSON-LD, same pattern as the Bayern article.
 * Copy lives in the per-match data module; facts only from verified sources.
 */
export type MatchLocale = "en" | "es";

export type MatchCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: { title: string; paras?: string[]; list?: string[]; note?: string; extra?: { lang: string; text: string } }[];
  links: { href: string; label: string }[];
  more: string;
  find: string;
  dir: string;
  other: { href: string; label: string; lang: string };
  alt: string;
  screeningName: string;
};

export type MatchArticleData = {
  paths: Record<MatchLocale, string>;
  published: string;
  startDate: string;
  sport: string;
  sportsEventName: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  copy: Record<MatchLocale, MatchCopy>;
};

const PUB = {
  "@type": "BarOrPub",
  "@id": "https://oconnellsmadrid.es/#pub",
  name: SITE_NAME,
  url: "https://oconnellsmadrid.es/",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    addressLocality: ADDRESS.city,
    addressCountry: ADDRESS.country,
  },
};

function jsonLd(d: MatchArticleData, l: MatchLocale) {
  const url = absoluteUrl(d.paths[l]);
  const c = d.copy[l];
  const org = { "@type": "Organization", name: SITE_NAME, url: "https://oconnellsmadrid.es/" };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: c.h1,
        description: c.description,
        inLanguage: l,
        url,
        mainEntityOfPage: url,
        datePublished: d.published,
        dateModified: d.published,
        image: [absoluteUrl("/og.jpg")],
        author: org,
        publisher: org,
        about: { "@id": `${url}#screening` },
      },
      {
        "@type": "Event",
        "@id": `${url}#screening`,
        name: c.screeningName,
        description: c.description,
        inLanguage: l,
        url,
        startDate: d.startDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: PUB,
        organizer: org,
        about: {
          "@type": "SportsEvent",
          name: d.sportsEventName,
          startDate: d.startDate,
          sport: d.sport,
          homeTeam: { "@type": "SportsTeam", name: d.homeTeam },
          awayTeam: { "@type": "SportsTeam", name: d.awayTeam },
          location: {
            "@type": "StadiumOrArena",
            name: d.venue,
            address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
          },
        },
      },
    ],
  };
}

export function MatchNewsArticle({ data, locale }: { data: MatchArticleData; locale: MatchLocale }) {
  const c = data.copy[locale];
  return (
    <PageShell locale={locale} altLangHref={c.other.href}>
      <JsonLd data={jsonLd(data, locale)} />
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <InteriorPhoto src="/images/interior/bar-taps.webp" alt={c.alt} position="object-[center_40%]" />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={c.other.href} hrefLang={c.other.lang} lang={c.other.lang} className="text-gold underline">
          {c.other.label}
        </a>
      </p>
      {c.sections.map((s) => (
        <Section key={s.title} title={s.title}>
          {s.paras?.map((p) => <p key={p}>{p}</p>)}
          {s.list ? (
            <ul className="list-disc space-y-1 pl-5">
              {s.list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : null}
          {s.extra ? <p lang={s.extra.lang}>{s.extra.text}</p> : null}
          {s.note ? <p className="text-sm text-cream-muted">{s.note}</p> : null}
        </Section>
      ))}
      <Section title={c.find}>
        <p>
          {ADDRESS.full} ·{" "}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-event="directions" className="text-cream underline">
            {c.dir}
          </a>
        </p>
      </Section>
      <Section title={c.more}>
        <ul className="space-y-1">
          {c.links.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className="text-cream underline">
                {x.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
