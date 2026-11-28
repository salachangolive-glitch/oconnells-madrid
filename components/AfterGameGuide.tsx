import Link from "next/link";
import { DirectionsButton, HowToGetHere } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { AFTER_RM_ZALGIRIS } from "@/lib/articles/after-real-madrid-zalgiris-goya-to-sol";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { ADDRESS, MAPS_URL } from "@/lib/venue";

/**
 * After-the-game guide (meeting point only; no screening claim).
 * NewsArticle + SportsEvent JSON-LD (the game at the arena), no pub screening Event.
 */
export function AfterRmZalgirisGuide({ locale }: { locale: "en" | "es" }) {
  const d = AFTER_RM_ZALGIRIS;
  const c = d.copy[locale];
  const path = d.paths[locale];
  return (
    <PageShell locale={locale} altLangHref={c.other.href}>
      <JsonLd
        data={visitingFansNewsJsonLd({
          path,
          headline: c.h1,
          description: c.description,
          datePublished: d.published,
          sportsEventName: "Real Madrid v Žalgiris Kaunas (EuroLeague)",
          startDate: d.start,
          sport: "Basketball",
          homeTeam: "Real Madrid",
          awayTeam: "Žalgiris Kaunas",
          venue: "Movistar Arena",
          venueStreet: "Avenida de Felipe II",
          inLanguage: locale,
        })}
      />
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <InteriorPhoto src="/images/interior/bar-taps.webp" alt={c.alt} position="object-[center_40%]" />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={c.other.href} hrefLang={c.other.lang} lang={c.other.lang} className="text-gold underline">
          {c.other.label}
        </a>
      </p>
      <p className="mb-8">
        <DirectionsButton locale={locale} />
      </p>
      {c.sections.map((s, i) => (
        <Section key={s.title} title={s.title}>
          {"paras" in s && s.paras ? s.paras.map((p) => <p key={p}>{p}</p>) : null}
          {"list" in s && s.list ? (
            <ul className="list-disc space-y-1 pl-5">
              {s.list.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : null}
          {"extra" in s && s.extra ? <p lang={s.extra.lang}>{s.extra.text}</p> : null}
          {"note" in s && s.note ? (
            <p className="text-sm text-cream-muted">
              {s.note}
              {i === 0 ? (
                <>
                  {" "}
                  <a href={d.arenaUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                    {c.arenaLabel}
                  </a>
                  .
                </>
              ) : null}
            </p>
          ) : null}
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
      <HowToGetHere locale={locale} />
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
