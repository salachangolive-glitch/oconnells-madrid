import type { Fixture } from "@/lib/fixtures";
import type { SportsEventCampaign } from "@/lib/sports-event-registry";
import { SPORTS_EVENT_REGISTRY } from "@/lib/sports-event-registry";
import { absoluteUrl } from "@/lib/seo";
import { ADDRESS, GBP_MAPS_CID_URL, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const SPORTS_EVENT_BAR = "oconnells" as const;

export function madridDateKeyFrom(d: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

/** Campaigns whose home strip should render at build time. */
export function activeHomeCampaigns(todayKey: string): SportsEventCampaign[] {
  return SPORTS_EVENT_REGISTRY.filter(
    (c) => c.promoStart <= todayKey && todayKey <= c.homeTakeDown,
  ).sort((a, b) => b.priority - a.priority);
}

export type CampaignLocale = "en" | "es";

export function campaignPagePath(c: SportsEventCampaign, locale: CampaignLocale): string {
  if (locale === "es") return c.paths.es || c.paths.en;
  return c.paths.en;
}

export function campaignPathForLocale(
  c: SportsEventCampaign,
  locale: CampaignLocale,
): string {
  return campaignPagePath(c, locale);
}

export function screensLead(c: SportsEventCampaign, locale: CampaignLocale): string {
  if (locale === "en" && c.homeLeadEn) return c.homeLeadEn;
  if (locale === "es" && c.homeLeadEs) return c.homeLeadEs;
  if (c.broadcastConfirmed) {
    return locale === "es"
      ? "En directo en nuestras pantallas (hora Madrid)."
      : "Live on our screens (Madrid time).";
  }
  return locale === "es"
    ? "Punto de encuentro junto a Puerta del Sol. Sin promesa de pantalla hasta confirmación en Partidos."
    : "Meeting point near Puerta del Sol. No screens promise until confirmed on What's On.";
}

export function homeTitle(c: SportsEventCampaign, locale: CampaignLocale): string {
  if (locale === "es") return c.homeTitleEs || c.teamsEs;
  return c.homeTitleEn || c.teamsEn;
}

export function ctaLabel(c: SportsEventCampaign, locale: CampaignLocale): string {
  if (locale === "es") return c.ctaEs || "Ver guía del evento";
  return c.ctaEn || "View event guide";
}

/** Agenda row shape — merge into lib/fixtures.ts FIXTURES when includeInAgenda is true. */
export function campaignToFixtureRow(c: SportsEventCampaign): Fixture {
  return {
    id: `campaign-${c.id}`,
    competition: c.competition,
    homeTeam: c.teamsEn.replace(/\s*\(.*\)\s*$/, "").split(" vs ")[0] ?? c.teamsEn,
    awayTeam: c.teamsEn.replace(/\s*\(.*\)\s*$/, "").split(" vs ")[1] ?? "",
    date: c.madridDateKey,
    kickoffMadrid: c.madridTime,
    tbc: !c.broadcastConfirmed,
    line: {
      en: c.broadcastConfirmed
        ? `${c.teamsEn} — live on our screens near Sol.`
        : `${c.teamsEn} — meeting point near Sol (see campaign page).`,
      es: c.broadcastConfirmed
        ? `${c.teamsEs} — en directo en pantalla junto a Sol.`
        : `${c.teamsEs} — punto de encuentro junto a Sol (ver guía).`,
    },
    note: `Sports-event registry ${c.id}; broadcastConfirmed=${c.broadcastConfirmed}`,
  };
}

function hoursForDateKey(dateKey: string): {
  opens: string;
  closes: string;
  dayEn: string;
  dayEs: string;
} {
  const d = new Date(`${dateKey}T12:00:00+01:00`);
  const wd = d.getUTCDay();
  const map: Record<number, keyof typeof HOURS & string> = {
    0: "sun",
    1: "monThu",
    2: "monThu",
    3: "monThu",
    4: "monThu",
    5: "fri",
    6: "sat",
  };
  const key = map[wd] ?? "monThu";
  const row =
    key === "sun"
      ? HOURS.sun
      : key === "fri"
        ? HOURS.fri
        : key === "sat"
          ? HOURS.sat
          : HOURS.monThu;
  const dayNames: Record<number, { en: string; es: string }> = {
    0: { en: "Sunday", es: "domingo" },
    1: { en: "Monday", es: "lunes" },
    2: { en: "Tuesday", es: "martes" },
    3: { en: "Wednesday", es: "miércoles" },
    4: { en: "Thursday", es: "jueves" },
    5: { en: "Friday", es: "viernes" },
    6: { en: "Saturday", es: "sábado" },
  };
  const names = dayNames[wd] ?? dayNames[4];
  return { opens: row.open, closes: row.close, dayEn: names.en, dayEs: names.es };
}

export function campaignVenueHours(dateKey: string) {
  return hoursForDateKey(dateKey);
}

export function campaignSportsEventJsonLd(
  c: SportsEventCampaign,
  locale: CampaignLocale,
) {
  const path = campaignPagePath(c, locale);
  const desc = c.broadcastConfirmed
    ? locale === "es"
      ? `${c.teamsEs} (${c.competition}) en las pantallas de ${SITE_NAME}, ${ADDRESS.street}, junto a Puerta del Sol, Madrid.`
      : `${c.teamsEn} (${c.competition}) on the screens at ${SITE_NAME}, ${ADDRESS.street}, by Puerta del Sol, Madrid.`
    : locale === "es"
      ? `${c.teamsEs} — punto de encuentro en ${SITE_NAME}, ${ADDRESS.street}, junto a Puerta del Sol, Madrid.`
      : `${c.teamsEn} — meeting point at ${SITE_NAME}, ${ADDRESS.street}, by Puerta del Sol, Madrid.`;

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: locale === "es" ? `${c.teamsEs} — ${c.competition}` : `${c.teamsEn} — ${c.competition}`,
    description: desc,
    startDate: c.startIso,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "BarOrPub",
      name: SITE_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      hasMap: GBP_MAPS_CID_URL,
    },
    organizer: { "@type": "BarOrPub", name: SITE_NAME, url: absoluteUrl("/") },
    url: absoluteUrl(path),
  };
}

export { MAPS_URL };