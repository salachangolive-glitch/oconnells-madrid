import Link from "next/link";
import { BAYERN_BASKET_DEC15 } from "@/lib/articles/bayern-basket-movistar-dec15";
import { HowToGetHere } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { ADDRESS, MAPS_URL } from "@/lib/venue";

type GuideLocale = "en" | "de";

export function BayernBasketMovistarArticle({ locale }: { locale: GuideLocale }) {
  const d = BAYERN_BASKET_DEC15;
  const path = d.paths[locale];
  const c = d.copy[locale];
  const fold = d.meetingFold[locale];
  const shellLocale = locale === "de" ? "de" : "en";

  return (
    <PageShell locale={shellLocale} altLangHref={c.other.href}>
      <JsonLd
        data={visitingFansNewsJsonLd({
          path,
          headline: c.h1,
          description: c.description,
          datePublished: d.published,
          sportsEventName: "Real Madrid v FC Bayern München (EuroLeague)",
          startDate: d.start,
          sport: "Basketball",
          homeTeam: "Real Madrid",
          awayTeam: "FC Bayern München",
          venue: "Movistar Arena",
          venueStreet: "Avenida de Felipe II",
          inLanguage: locale,
        })}
      />
      <section
        className="mb-6 rounded-lg border border-gold/40 bg-pub-burgundy-deep/90 p-4 sm:mb-8 sm:p-5"
        aria-label={fold.mapsLabel}
      >
        <p className="text-base font-semibold text-cream">{fold.address}</p>
        <p className="mt-1 text-sm text-cream-muted">{fold.solProximity}</p>
        <p className="mt-2 text-sm text-cream-muted">{fold.fcfs}</p>
        <p className="mt-1 text-sm text-cream-muted" lang={fold.extraLang.lang}>
          {fold.extraLang.text}
        </p>
        <p className="mt-4">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            data-oc-directions="button"
            className="inline-flex items-center rounded-md bg-pub-green px-5 py-2.5 text-sm font-semibold text-cream hover:bg-pub-green-light"
          >
            {fold.mapsLabel}
          </a>
        </p>
      </section>
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <p className="mb-8 text-sm text-cream-muted">
        <a
          href={c.other.href}
          hrefLang={c.other.lang}
          lang={c.other.lang}
          className="text-gold underline"
        >
          {c.other.label}
        </a>
      </p>
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt={c.alt}
        position="object-[center_40%]"
      />
      {c.sections.map((s) => (
        <Section key={s.title} title={s.title}>
          {"paras" in s &&
            s.paras.map((p: string) => (
              <p key={p}>{p}</p>
            ))}
          {"list" in s ? (
            <ul className="list-disc space-y-1 pl-5">
              {s.list.map((x: string) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          ) : null}
          {"note" in s && s.note ? (
            <p className="text-sm text-cream-muted">
              {s.note}{" "}
              <a
                href={d.arenaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                {locale === "de" ? "Movistar Arena" : "Movistar Arena event page"}
              </a>
              {" · "}
              <a
                href={d.euroleagueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                EuroLeague
              </a>
              .
            </p>
          ) : null}
        </Section>
      ))}
      <Section title={c.find}>
        <p>
          {ADDRESS.full} ·{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            {c.dir}
          </a>
        </p>
      </Section>
      {locale === "en" ? <HowToGetHere locale="en" /> : null}
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