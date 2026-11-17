import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { LangAttr } from "@/components/LangAttr";
import {
  PSV_CAMPAIGN,
  THREE_BARS_DATA,
  VIKING_CAMPAIGN,
} from "@/lib/fan-campaign-three-bars";
import { buildMetadata } from "@/lib/seo";

type CampaignId = "psv" | "viking";
type GuideLocale = "en" | "nl" | "no";

const NAMES: Record<string, Record<GuideLocale, string>> = {
  oconnells: { en: "O'Connell's", nl: "O'Connell's", no: "O'Connell's" },
  dubliners: { en: "Dubliners", nl: "Dubliners", no: "Dubliners" },
  oreillys: {
    en: "O'Reilly's Restaurant Bar",
    nl: "O'Reilly's Restaurant Bar",
    no: "O'Reilly's Restaurant Bar",
  },
};

const DIRECTIONS_LABEL: Record<GuideLocale, string> = {
  en: "GET DIRECTIONS",
  nl: "ROUTE (Google Maps)",
  no: "VEIVISER (Google Maps)",
};

function barHours(
  bar: (typeof THREE_BARS_DATA)[number],
  locale: GuideLocale,
): string {
  if (locale === "nl") return bar.hoursNl;
  if (locale === "no") return bar.hoursNo;
  return bar.hoursEn;
}

type Copy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  matchTitle: string;
  matchBullets: string[];
  matchNote: string;
  uefaLabel: string;
  threeBarsTitle: string;
  threeBarsIntro: string;
  stadiumTitle: string;
  stadiumParas: string[];
  fanLine?: { lang: string; text: string };
  relatedTitle: string;
  relatedP: string;
  relatedLinkLabel: string;
  relatedHref: string;
  findTitle: string;
  altLangHref: string;
  altLangLabel: string;
  screeningNote: string;
};

const COPY: Record<CampaignId, Record<GuideLocale, Copy>> = {
  psv: {
    en: {
      title:
        "PSV fans near Sol: three Irish pubs for Real Madrid–PSV, Tue 24 Nov",
      description:
        "Real Madrid–PSV, Tuesday 24 November 2026, 21:00 at the Bernabéu. Dubliners, O'Connell's and O'Reilly's near Puerta del Sol — meeting points. First come, first served; no reservations.",
      eyebrow: "UEFA Champions League · Tuesday 24 November 2026 · 21:00",
      h1: "PSV in Madrid: three meeting points near Sol",
      lead:
        "Real Madrid host PSV on Tuesday 24 November at 21:00 at the Santiago Bernabéu. The owner confirms the match on the screens at Dubliners, O'Connell's and O'Reilly's — three independent Irish venues a short walk from Puerta del Sol. Pick one pin, meet your group, then head to the stadium. First come, first served; no reservations.",
      matchTitle: "The match",
      matchBullets: [
        "Real Madrid v PSV, UEFA Champions League, league phase, matchday 5",
        "Tuesday 24 November 2026, 21:00 Europe/Madrid",
        "Estadio Santiago Bernabéu, Avenida de Concha Espina 1",
      ],
      matchNote:
        "Kick-off and venue per UEFA. Times can change — check on the day.",
      uefaLabel: "UEFA Champions League match page",
      threeBarsTitle: "Three bars — address, Maps and hours",
      threeBarsIntro:
        "Dubliners and O'Connell's share Calle de Espoz y Mina 7 (different doors). O'Reilly's is in Pasaje de Matheu 4. Ask at the bar which feed is on. Not every screen shows every match at once.",
      stadiumTitle: "From Sol toward the Bernabéu (Metro de Madrid)",
      stadiumParas: [
        "From Puerta del Sol station: Metro line 1 to Tribunal, then line 10 to Santiago Bernabéu — next to the stadium (see metromadrid.es line maps).",
        "Allow time for security and finding your seat before 21:00.",
      ],
      fanLine: undefined,
      relatedTitle: "O'Connell's only",
      relatedP:
        "This page covers all three bars. For O'Connell St only (meeting point copy):",
      relatedLinkLabel: "Real Madrid v PSV: Tuesday night near Sol",
      relatedHref: PSV_CAMPAIGN.oconnellSoloEn,
      findTitle: "Getting here",
      altLangHref: PSV_CAMPAIGN.paths.nl,
      altLangLabel: "Nederlands",
      screeningNote:
        "The match is confirmed on the screens at all three venues for this fixture.",
    },
    nl: {
      title:
        "PSV-fans bij Sol: drie Irish pubs voor Real Madrid–PSV, di 24 nov",
      description:
        "Real Madrid–PSV, dinsdag 24 november 2026, 21:00 in het Bernabéu. Dubliners, O'Connell's en O'Reilly's bij de Puerta del Sol — ontmoetingspunten. Vol = vol; geen reserveringen.",
      eyebrow: "UEFA Champions League · dinsdag 24 november 2026 · 21:00",
      h1: "PSV in Madrid: drie ontmoetingspunten bij Sol",
      lead:
        "Real Madrid ontvangt PSV op dinsdag 24 november om 21:00 in het Santiago Bernabéu. De eigenaar bevestigt de wedstrijd op de schermen bij Dubliners, O'Connell's en O'Reilly's — drie onafhankelijke Irish pubs op loopafstand van de Puerta del Sol. Kies één adres, spreek af met je groep en ga daarna naar het stadion. Vol = vol; geen reserveringen.",
      matchTitle: "De wedstrijd",
      matchBullets: [
        "Real Madrid–PSV, UEFA Champions League, competitiefase, speeldag 5",
        "Dinsdag 24 november 2026, 21:00 Europe/Madrid",
        "Estadio Santiago Bernabéu, Avenida de Concha Espina 1",
      ],
      matchNote:
        "Datum en aanvang volgens UEFA. Tijden kunnen wijzigen — controleer op de dag zelf.",
      uefaLabel: "UEFA Champions League wedstrijdpagina",
      threeBarsTitle: "Drie bars — adres, Maps en openingstijden",
      threeBarsIntro:
        "Dubliners en O'Connell's zitten op Calle de Espoz y Mina 7 (andere deuren). O'Reilly's staat in Pasaje de Matheu 4. Vraag aan de bar welke zender erop staat.",
      stadiumTitle: "Van Sol naar het Bernabéu (Metro de Madrid)",
      stadiumParas: [
        "Vanaf metrostation Sol: lijn 1 naar Tribunal, daarna lijn 10 naar Santiago Bernabéu — naast het stadion (zie metromadrid.es).",
        "Reken op tijd voor de controle en je plaats vóór 21:00.",
      ],
      fanLine: {
        lang: "nl",
        text: "Welkom in Madrid, PSV-fans! Drie Irish pubs bij Sol — Dubliners, O'Connell's en O'Reilly's — als ontmoetingspunt vóór Real Madrid–PSV.",
      },
      relatedTitle: "Alleen O'Connell's",
      relatedP:
        "Op deze pagina staan alle drie de bars. Alleen O'Connell St:",
      relatedLinkLabel: "Real Madrid–PSV: dinsdagavond bij Sol",
      relatedHref: PSV_CAMPAIGN.oconnellSoloNl,
      findTitle: "Adres",
      altLangHref: PSV_CAMPAIGN.paths.en,
      altLangLabel: "English",
      screeningNote:
        "De wedstrijd staat bevestigd op de schermen in alle drie de zalen voor deze wedstrijd.",
    },
    no: {
      title: "",
      description: "",
      eyebrow: "",
      h1: "",
      lead: "",
      matchTitle: "",
      matchBullets: [],
      matchNote: "",
      uefaLabel: "",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
      relatedTitle: "",
      relatedP: "",
      relatedLinkLabel: "",
      relatedHref: "",
      findTitle: "",
      altLangHref: "",
      altLangLabel: "",
      screeningNote: "",
    },
  },
  viking: {
    en: {
      title:
        "Viking FK fans near Sol: three Irish pubs for Atlético–Viking, Wed 25 Nov",
      description:
        "Atlético de Madrid v Viking FK, Wednesday 25 November 2026, 21:00 at the Metropolitano. Dubliners, O'Connell's and O'Reilly's near Puerta del Sol — meeting points. First come, first served.",
      eyebrow: "UEFA Champions League · Wednesday 25 November 2026 · 21:00",
      h1: "Viking FK in Madrid: three meeting points near Sol",
      lead:
        "Atlético host Viking FK on Wednesday 25 November at 21:00 at the Riyadh Air Metropolitano. The owner confirms the match on the screens at Dubliners, O'Connell's and O'Reilly's near Puerta del Sol — three meeting points before you take the metro east. First come, first served; no reservations. This is Viking FK from Stavanger, not the NFL Minnesota Vikings.",
      matchTitle: "The match",
      matchBullets: [
        "Atlético de Madrid v Viking FK, UEFA Champions League, league phase, matchday 5",
        "Wednesday 25 November 2026, 21:00 Europe/Madrid",
        "Riyadh Air Metropolitano, Madrid",
      ],
      matchNote:
        "Kick-off and venue per UEFA. Times can change — check on the day.",
      uefaLabel: "UEFA Champions League match page",
      threeBarsTitle: "Three bars — address, Maps and hours",
      threeBarsIntro:
        "Same street: Dubliners and O'Connell's at Espoz y Mina 7. O'Reilly's at Pasaje de Matheu 4. Ask which feed is on.",
      stadiumTitle: "From Sol toward the Metropolitano (Metro de Madrid)",
      stadiumParas: [
        "From Sol: metro line 2 to Las Rosas, then about 15 minutes on foot to the stadium (Atlético club wayfinding). Line 7 serves Estadio Metropolitano station beside the ground (metromadrid.es).",
        "On match nights EMT bus SE721 links Canillejas (metro line 5) with the stadium from two hours before kick-off.",
      ],
      fanLine: undefined,
      relatedTitle: "O'Connell's only",
      relatedP: "For O'Connell St only:",
      relatedLinkLabel: "Atlético v Viking: Wednesday night near Sol",
      relatedHref: VIKING_CAMPAIGN.oconnellSoloEn,
      findTitle: "More",
      altLangHref: VIKING_CAMPAIGN.paths.no,
      altLangLabel: "Norsk",
      screeningNote:
        "The match is confirmed on the screens at all three venues for this fixture.",
    },
    no: {
      title:
        "Viking FK-fans ved Sol: tre irske puber før Atlético–Viking, ons 25. nov",
      description:
        "Atlético–Viking FK, onsdag 25. november 2026, 21:00 på Metropolitano. Dubliners, O'Connell's og O'Reilly's ved Puerta del Sol — møtesteder. Førstemann til mølla; ingen reservasjoner.",
      eyebrow: "UEFA Champions League · onsdag 25. november 2026 · 21:00",
      h1: "Viking FK i Madrid: tre møtesteder ved Sol",
      lead:
        "Atlético tar imot Viking FK onsdag 25. november kl. 21:00 på Riyadh Air Metropolitano. Eieren bekrefter kampen på skjermene i Dubliners, O'Connell's og O'Reilly's ved Puerta del Sol — tre uavhengige irske puber i gangavstand fra torget. Velg ett sted, møt gruppen, ta metro østover. Førstemann til mølla; ingen reservasjoner. Dette er Viking FK fra Stavanger, ikke NFLs Minnesota Vikings.",
      matchTitle: "Kampen",
      matchBullets: [
        "Atlético–Viking FK, UEFA Champions League, ligafase, runde 5",
        "Onsdag 25. november 2026, 21:00 Europe/Madrid",
        "Riyadh Air Metropolitano, Madrid",
      ],
      matchNote:
        "Dato og avspark ifølge UEFA. Tider kan endres — sjekk på kampdagen.",
      uefaLabel: "UEFA Champions League kamp-side",
      threeBarsTitle: "Tre barer — adresse, Maps og åpningstider",
      threeBarsIntro:
        "Dubliners og O'Connell's i Calle de Espoz y Mina 7. O'Reilly's i Pasaje de Matheu 4. Spør i baren hvilken feed som går.",
      stadiumTitle: "Fra Sol til Metropolitano (Metro de Madrid)",
      stadiumParas: [
        "Fra Sol: T-banelinje 2 til Las Rosas, deretter ca. 15 minutter til fots (Atléticos veibeskrivelse). Linje 7 stopper ved Estadio Metropolitano ved stadion (metromadrid.es).",
        "Kampdager: EMT-buss SE721 mellom Canillejas (linje 5) og stadion fra to timer før avspark.",
      ],
      fanLine: {
        lang: "no",
        text: "Velkommen til Madrid! Dubliners, O'Connell's og O'Reilly's ved Puerta del Sol er møtesteder før Atlético–Viking FK.",
      },
      relatedTitle: "Kun O'Connell's",
      relatedP: "Kun O'Connell St (engelsk/spansk side):",
      relatedLinkLabel: "Atlético–Viking ved Sol",
      relatedHref: VIKING_CAMPAIGN.oconnellSoloEn,
      findTitle: "Mer",
      altLangHref: VIKING_CAMPAIGN.paths.en,
      altLangLabel: "English",
      screeningNote:
        "Kampen er bekreftet på skjermene i alle tre lokaler for denne kampen.",
    },
    nl: {
      title: "",
      description: "",
      eyebrow: "",
      h1: "",
      lead: "",
      matchTitle: "",
      matchBullets: [],
      matchNote: "",
      uefaLabel: "",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
      relatedTitle: "",
      relatedP: "",
      relatedLinkLabel: "",
      relatedHref: "",
      findTitle: "",
      altLangHref: "",
      altLangLabel: "",
      screeningNote: "",
    },
  },
};

export function fanCampaignMetadata(
  campaign: CampaignId,
  locale: GuideLocale,
  path: string,
) {
  const c = COPY[campaign][locale];
  return buildMetadata({
    title: c.title,
    description: c.description,
    path,
    locale: locale === "nl" || locale === "no" ? "en" : locale,
  });
}

export function FanCampaignThreeBarsGuide({
  campaign,
  locale,
  path,
}: {
  campaign: CampaignId;
  locale: GuideLocale;
  path: string;
}) {
  const c = COPY[campaign][locale];
  const uefaUrl =
    campaign === "psv" ? PSV_CAMPAIGN.uefaUrl : VIKING_CAMPAIGN.uefaUrl;
  const shellLocale = locale === "no" || locale === "nl" ? "en" : locale;

  return (
  <>
    {locale === "nl" || locale === "no" ? (
      <LangAttr lang={locale} />
    ) : null}
    <PageShell locale={shellLocale as "en"} altLangHref={c.altLangHref}>
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="O'Connell St Irish pub near Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title={c.matchTitle}>
        <ul className="list-disc space-y-1 pl-5">
          {c.matchBullets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <a
            href={uefaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            {c.uefaLabel}
          </a>
          . {c.matchNote}
        </p>
        <p className="mt-2 text-sm text-cream-muted">{c.screeningNote}</p>
      </Section>
      <Section title={c.threeBarsTitle}>
        <p>{c.threeBarsIntro}</p>
        <ul className="mt-3 space-y-4">
          {THREE_BARS_DATA.map((bar) => (
            <li key={bar.id} className="border-l border-gold/40 pl-3">
              <p className="font-semibold text-cream">{NAMES[bar.id][locale]}</p>
              <p className="text-sm text-cream-muted">{bar.address}</p>
              <p className="text-sm text-cream-muted">{barHours(bar, locale)}</p>
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <a
                  href={bar.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event={`directions_${bar.id}`}
                  className="text-cream underline"
                >
                  {DIRECTIONS_LABEL[locale]}
                </a>
                <a
                  href={bar.tel}
                  data-event={`tel_${bar.id}`}
                  className="text-cream underline"
                >
                  {bar.phone}
                </a>
                <a
                  href={bar.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event={`link_${bar.id}`}
                  className="text-gold underline"
                >
                  {bar.web.replace(/^https:\/\//, "")}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>
      {c.fanLine ? (
        <p className="mb-8 text-sm text-cream-muted" lang={c.fanLine.lang}>
          {c.fanLine.text}
        </p>
      ) : null}
      <Section title={c.stadiumTitle}>
        {c.stadiumParas.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="text-sm text-cream-muted">
          <a
            href="https://www.metromadrid.es/en/travel-in-the-metro/lines-and-horarios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            metromadrid.es
          </a>
        </p>
      </Section>
      <Section title={c.relatedTitle}>
        <p>
          {c.relatedP}{" "}
          <Link href={c.relatedHref} className="text-gold underline">
            {c.relatedLinkLabel}
          </Link>
          .
        </p>
      </Section>
      <Section title={c.findTitle}>
        <p>
          <Link href={c.altLangHref} className="text-cream underline">
            {c.altLangLabel}
          </Link>
          {" · "}
          <Link href={shellLocale === "en" ? "/whats-on" : "/es/whats-on"} className="text-gold underline">
            {locale === "nl" ? "What's On" : locale === "no" ? "What's On" : "What's On"}
          </Link>
        </p>
      </Section>
    </PageShell>
  </>
  );
}