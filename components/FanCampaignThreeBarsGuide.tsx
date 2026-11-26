import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { LangAttr } from "@/components/LangAttr";
import {
  barName,
  footFromSol,
  meetingAfter,
  meetingBefore,
  stadiumMetroLines,
  threeBarsIntro as threeBarsIntroText,
  uiLabels,
} from "@/lib/fan-campaign-guide-copy";
import {
  ACCESS_PHRASE,
  METRO_MADRID_LINES,
  PSV_CAMPAIGN,
  THREE_BARS_DATA,
  THREE_BARS_ORDER,
  VIKING_CAMPAIGN,
  ZALGIRIS_CAMPAIGN,
  type BarId,
  type CampaignId,
  type GuideLocale,
} from "@/lib/fan-campaign-three-bars";
import { ownerPhotoAlt, OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";
import { buildMetadata } from "@/lib/seo";

function barHours(
  bar: (typeof THREE_BARS_DATA)[BarId],
  locale: GuideLocale,
): string {
  if (locale === "nl") return bar.hoursNl;
  if (locale === "no") return bar.hoursNo;
  if (locale === "lt") return bar.hoursLt;
  return bar.hoursEn;
}

function eventUrl(campaign: CampaignId): string {
  if (campaign === "psv") return PSV_CAMPAIGN.uefaUrl;
  if (campaign === "viking") return VIKING_CAMPAIGN.uefaUrl;
  return ZALGIRIS_CAMPAIGN.eventUrl;
}

function BarVenueSection({
  barId,
  locale,
  campaign,
}: {
  barId: BarId;
  locale: GuideLocale;
  campaign: CampaignId;
}) {
  const bar = THREE_BARS_DATA[barId];
  const labels = uiLabels(locale);
  const metroLines = stadiumMetroLines(campaign, locale);

  return (
    <Section id={barId} title={barName(barId, locale)}>
      <p>
        <span className="font-semibold text-cream">{labels.address}: </span>
        {bar.address}
      </p>
      <p className="mt-2">
        <span className="font-semibold text-cream">{labels.hours}: </span>
        {barHours(bar, locale)}
      </p>
      <p className="mt-2 text-sm text-cream-muted">{ACCESS_PHRASE[locale]}</p>
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
        <a
          href={bar.maps}
          target="_blank"
          rel="noopener noreferrer"
          data-event={`directions_${barId}`}
          className="text-cream underline"
        >
          {labels.map}
        </a>
        <a
          href={bar.tel}
          data-event={`tel_${barId}`}
          className="text-cream underline"
        >
          {labels.phone}: {bar.phone}
        </a>
        <a
          href={bar.web}
          target="_blank"
          rel="noopener noreferrer"
          data-event={`link_${barId}`}
          className="text-gold underline"
        >
          {labels.website}
        </a>
      </p>
      <p className="mt-4">
        <span className="font-semibold text-cream">{labels.footSol}</span>
        <br />
        {footFromSol(barId, locale)}
      </p>
      <p className="mt-4">
        <span className="font-semibold text-cream">{labels.metroStadium}</span>
      </p>
      <ul className="mt-1 list-disc space-y-1 pl-5">
        {metroLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="mt-2 text-sm">
        <a
          href={METRO_MADRID_LINES}
          target="_blank"
          rel="noopener noreferrer"
          data-event={`howto_${barId}`}
          className="text-gold underline"
        >
          {labels.metroLink}
        </a>
      </p>
      <p className="mt-4">
        <span className="font-semibold text-cream">{labels.before}</span>
        <br />
        {meetingBefore(campaign, locale)}
      </p>
      <p className="mt-4">
        <span className="font-semibold text-cream">{labels.after}</span>
        <br />
        {meetingAfter(campaign, locale)}
      </p>
      <p className="mt-4 text-sm text-cream-muted">{labels.screening}</p>
      {barId === "oconnells" ? (
        <div className="mt-6">
          <InteriorPhoto
            src={OWNER_PHOTOS_17NOV.pantallasFutbol.src}
            alt={ownerPhotoAlt(
              "pantallasFutbol",
              locale === "en" ? "en" : "es",
            )}
            position={OWNER_PHOTOS_17NOV.pantallasFutbol.position}
          />
        </div>
      ) : null}
    </Section>
  );
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
  eventLabel: string;
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
        "Updated Friday 20 November 2026 (four days before kick-off). Real Madrid host PSV on Tuesday 24 November at 21:00 at the Santiago Bernabéu. Live on our screens at Dubliners, O'Connell's and O'Reilly's — three sibling Irish pubs a short walk from Puerta del Sol. Pick one pin, meet your group, then head to the stadium. First come, first served; no reservations.",
      matchTitle: "The match",
      matchBullets: [
        "Real Madrid v PSV, UEFA Champions League, league phase, matchday 5",
        "Tuesday 24 November 2026, 21:00 Europe/Madrid",
        "Estadio Santiago Bernabéu, Avenida de Concha Espina 1",
      ],
      matchNote:
        "Kick-off and venue per UEFA. Times can change — check on the day.",
      eventLabel: "UEFA Champions League match page",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
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
        "The match is live on our screens at all three venues for this fixture.",
    },
    nl: {
      title:
        "PSV-fans bij Sol: drie Irish pubs voor Real Madrid–PSV, di 24 nov",
      description:
        "Real Madrid–PSV, dinsdag 24 november 2026, 21:00 in het Bernabéu. Dubliners, O'Connell's en O'Reilly's bij de Puerta del Sol — ontmoetingspunten. Vol = vol; geen reserveringen.",
      eyebrow: "UEFA Champions League · dinsdag 24 november 2026 · 21:00",
      h1: "PSV in Madrid: drie ontmoetingspunten bij Sol",
      lead:
        "Bijgewerkt vrijdag 20 november 2026 (vier dagen voor aanvang). Real Madrid ontvangt PSV op dinsdag 24 november om 21:00 in het Santiago Bernabéu. Live op onze schermen bij Dubliners, O'Connell's en O'Reilly's — drie zuster-Irish pubs op loopafstand van de Puerta del Sol. Kies één adres, spreek af met je groep en ga daarna naar het stadion. Vol = vol; geen reserveringen.",
      matchTitle: "De wedstrijd",
      matchBullets: [
        "Real Madrid–PSV, UEFA Champions League, competitiefase, speeldag 5",
        "Dinsdag 24 november 2026, 21:00 Europe/Madrid",
        "Estadio Santiago Bernabéu, Avenida de Concha Espina 1",
      ],
      matchNote:
        "Datum en aanvang volgens UEFA. Tijden kunnen wijzigen — controleer op de dag zelf.",
      eventLabel: "UEFA Champions League wedstrijdpagina",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
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
        "De wedstrijd staat live op onze schermen in alle drie de zalen voor deze wedstrijd.",
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
      eventLabel: "",
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
    lt: {
      title: "",
      description: "",
      eyebrow: "",
      h1: "",
      lead: "",
      matchTitle: "",
      matchBullets: [],
      matchNote: "",
      eventLabel: "",
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
        "Updated Saturday 21 November 2026 (four days before kick-off). Atlético host Viking FK on Wednesday 25 November at 21:00 at the Riyadh Air Metropolitano. Live on our screens at Dubliners, O'Connell's and O'Reilly's near Puerta del Sol — three meeting points before you take the metro east. First come, first served; no reservations. This is Viking FK from Stavanger, not the NFL Minnesota Vikings.",
      matchTitle: "The match",
      matchBullets: [
        "Atlético de Madrid v Viking FK, UEFA Champions League, league phase, matchday 5",
        "Wednesday 25 November 2026, 21:00 Europe/Madrid",
        "Riyadh Air Metropolitano, Madrid",
      ],
      matchNote:
        "Kick-off and venue per UEFA. Times can change — check on the day.",
      eventLabel: "UEFA Champions League match page",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
      fanLine: undefined,
      relatedTitle: "O'Connell's only",
      relatedP: "For O'Connell St only:",
      relatedLinkLabel: "Atlético v Viking: Wednesday night near Sol",
      relatedHref: VIKING_CAMPAIGN.oconnellSoloEn,
      findTitle: "More",
      altLangHref: VIKING_CAMPAIGN.paths.no,
      altLangLabel: "Norsk",
      screeningNote:
        "The match is live on our screens at all three venues for this fixture.",
    },
    no: {
      title:
        "Viking FK-fans ved Sol: tre irske puber før Atlético–Viking, ons 25. nov",
      description:
        "Atlético–Viking FK, onsdag 25. november 2026, 21:00 på Metropolitano. Dubliners, O'Connell's og O'Reilly's ved Puerta del Sol — møtesteder. Førstemann til mølla; ingen reservasjoner.",
      eyebrow: "UEFA Champions League · onsdag 25. november 2026 · 21:00",
      h1: "Viking FK i Madrid: tre møtesteder ved Sol",
      lead:
        "Oppdatert lørdag 21. november 2026 (fire dager før avspark). Atlético tar imot Viking FK onsdag 25. november kl. 21:00 på Riyadh Air Metropolitano. Live på våre skjermer hos Dubliners, O'Connell's og O'Reilly's ved Puerta del Sol — tre søster-puber i gangavstand fra torget. Velg ett sted, møt gruppen, ta metro østover. Førstemann til mølla; ingen reservasjoner. Dette er Viking FK fra Stavanger, ikke NFLs Minnesota Vikings.",
      matchTitle: "Kampen",
      matchBullets: [
        "Atlético–Viking FK, UEFA Champions League, ligafase, runde 5",
        "Onsdag 25. november 2026, 21:00 Europe/Madrid",
        "Riyadh Air Metropolitano, Madrid",
      ],
      matchNote:
        "Dato og avspark ifølge UEFA. Tider kan endres — sjekk på kampdagen.",
      eventLabel: "UEFA Champions League kamp-side",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
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
        "Kampen står live på våre skjermer i alle tre lokaler for denne kampen.",
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
      eventLabel: "",
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
    lt: {
      title: "",
      description: "",
      eyebrow: "",
      h1: "",
      lead: "",
      matchTitle: "",
      matchBullets: [],
      matchNote: "",
      eventLabel: "",
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
  zalgiris: {
    en: {
      title:
        "Žalgiris fans near Sol: three Irish pubs for Real Madrid–Žalgiris, Wed 25 Nov",
      description:
        "Real Madrid v Žalgiris Kaunas, Wednesday 25 November 2026, 20:45 at Movistar Arena. Dubliners, O'Connell's and O'Reilly's near Puerta del Sol — meeting points. Live on our screens. No reservations; first come, first served.",
      eyebrow: "EuroLeague · Wednesday 25 November 2026 · 20:45",
      h1: "Žalgiris in Madrid: three meeting points near Sol",
      lead:
        "Real Madrid host Žalgiris Kaunas on Wednesday 25 November at 20:45 at the Movistar Arena. Live on our screens at Dubliners, O'Connell's and O'Reilly's — three sibling Irish pubs a short walk from Puerta del Sol. Share one pin before the metro ride to Goya, then pick the same door after the game. No reservations; first come, first served.",
      matchTitle: "The game",
      matchBullets: [
        "Real Madrid v Žalgiris Kaunas, EuroLeague, round 14",
        "Wednesday 25 November 2026, 20:45 Europe/Madrid",
        "Movistar Arena, Avenida de Felipe II, Madrid (doors from 19:45)",
      ],
      matchNote:
        "Tip-off and venue per Movistar Arena and EuroLeague game E2026. Times can change — check on the day. We do not name a TV channel on this page.",
      eventLabel: "Movistar Arena event page",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
      fanLine: undefined,
      relatedTitle: "O'Connell's only",
      relatedP:
        "This page covers all three bars. For O'Connell St only (meeting point copy):",
      relatedLinkLabel: "Real Madrid v Žalgiris: Wednesday night near Sol",
      relatedHref: ZALGIRIS_CAMPAIGN.oconnellSoloEn,
      findTitle: "More",
      altLangHref: ZALGIRIS_CAMPAIGN.paths.lt,
      altLangLabel: "Lietuvių",
      screeningNote:
        "The game is live on our screens at all three venues for this fixture.",
    },
    lt: {
      title:
        "Žalgirio aistruoliai prie Sol: trys barai prieš Real Madrid–Žalgiris, lapk. 25 d.",
      description:
        "Real Madrid–Žalgiris Kaunas, 2026 m. lapkričio 25 d., 20:45, Movistar Arena. Dubliners, O'Connell's ir O'Reilly's prie Puerta del Sol — susitikimo vietos. Vaizdas gyvai mūsų ekranuose. Be rezervacijų.",
      eyebrow: "Eurolyga · 2026 m. lapkričio 25 d., trečiadienis · 20:45",
      h1: "Žalgiris Madride: trys susitikimo vietos prie Sol",
      lead:
        "Real Madrid lapkričio 25 d., trečiadienį, 20:45 priima Žalgirį Kaunas Movistar Arenoje. Vaizdas gyvai mūsų ekranuose Dubliners, O'Connell's ir O'Reilly's — trys seserų airiški barai kelios minutės nuo Puerta del Sol. Pasidalykite vienu adresu prieš metro kelionę į Goya ir susitikite po rungtynių tame pačiame bare. Be rezervacijų; pirmas atvykęs — pirmas aptarnaujamas.",
      matchTitle: "Rungtynės",
      matchBullets: [
        "Real Madrid–Žalgiris Kaunas, Eurolyga, 14-as turas",
        "2026 m. lapkričio 25 d., trečiadienis, 20:45 (Madridas)",
        "Movistar Arena, Avenida de Felipe II, Madridas (durys nuo 19:45)",
      ],
      matchNote:
        "Data ir laikas pagal Movistar Arena ir Eurolygos E2026. Laikas gali keistis — patikrinkite rungtynių dieną. Čia neįvardijame TV kanalo.",
      eventLabel: "Movistar Arena renginio puslapis",
      threeBarsTitle: "",
      threeBarsIntro: "",
      stadiumTitle: "",
      stadiumParas: [],
      fanLine: {
        lang: "lt",
        text: "Sveiki atvykę į Madridą, Žalgirio aistruoliai! Dubliners, O'Connell's ir O'Reilly's prie Sol — susitikimo vieta prieš Real Madrid–Žalgiris.",
      },
      relatedTitle: "Tik O'Connell's",
      relatedP: "Šiame puslapyje — visi trys barai. Tik O'Connell St:",
      relatedLinkLabel: "Real Madrid–Žalgiris: trečiadienio vakaras prie Sol",
      relatedHref: ZALGIRIS_CAMPAIGN.oconnellSoloLt,
      findTitle: "Daugiau",
      altLangHref: ZALGIRIS_CAMPAIGN.paths.en,
      altLangLabel: "English",
      screeningNote:
        "Rungtynės rodomos gyvai mūsų ekranuose visuose trijuose baruose šiam susitikimui.",
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
      eventLabel: "",
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
    no: {
      title: "",
      description: "",
      eyebrow: "",
      h1: "",
      lead: "",
      matchTitle: "",
      matchBullets: [],
      matchNote: "",
      eventLabel: "",
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
  opts?: { noindex?: boolean },
) {
  const c = COPY[campaign][locale];
  const htmlLocale =
    locale === "nl" || locale === "no" || locale === "lt" ? "en" : locale;
  return buildMetadata({
    title: c.title,
    description: c.description,
    path,
    locale: htmlLocale,
    noindex: opts?.noindex,
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
  const labels = uiLabels(locale);
  const threeBarsTitle = labels.threeBarsTitle;
  const threeBarsIntro = threeBarsIntroText(campaign, locale);
  const matchEventUrl = eventUrl(campaign);
  const shellLocale =
    locale === "no" || locale === "nl" || locale === "lt" ? "en" : locale;

  return (
  <>
    {locale === "nl" || locale === "no" || locale === "lt" ? (
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
            href={matchEventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            {c.eventLabel}
          </a>
          . {c.matchNote}
        </p>
        <p className="mt-2 text-sm text-cream-muted">{c.screeningNote}</p>
      </Section>
      <Section title={threeBarsTitle}>
        <p>{threeBarsIntro}</p>
      </Section>
      {THREE_BARS_ORDER.map((barId) => (
        <BarVenueSection
          key={barId}
          barId={barId}
          locale={locale}
          campaign={campaign}
        />
      ))}
      {c.fanLine ? (
        <p className="mb-8 text-sm text-cream-muted" lang={c.fanLine.lang}>
          {c.fanLine.text}
        </p>
      ) : null}
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