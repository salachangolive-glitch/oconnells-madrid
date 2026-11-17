/**
 * Sports event campaigns — single registry (O'Connell St).
 * Register once; drives home promo, agenda helpers, and generated fan/meetup pages.
 *
 * pageMode:
 * - `external` — indexable URLs already in app (paths.*); no duplicate page build.
 * - `generated` — Next route /campaign/[id] builds the page from this record.
 */

export type SportsEventLanguage = "en" | "es";

export type SportsEventCampaign = {
  id: string;
  sport: "football" | "rugby" | "basketball" | "nfl" | "other";
  competition: string;
  competitionEs?: string;
  teamsEn: string;
  teamsEs: string;
  /** Madrid calendar day YYYY-MM-DD */
  madridDateKey: string;
  /** HH:mm Europe/Madrid */
  madridTime: string;
  /** ISO start for JSON-LD */
  startIso: string;
  fanOrigin?: { city?: string; country: string; labelEn?: string; labelEs?: string };
  languages: SportsEventLanguage[];
  paths: Partial<Record<SportsEventLanguage, string>> & { en: string; es: string };
  /** Higher = earlier on home when several promos overlap */
  priority: number;
  broadcastConfirmed: boolean;
  /** Home highlight visible from this Madrid date (inclusive) */
  promoStart: string;
  /** Home highlight hidden after this Madrid date (inclusive); page URLs stay */
  homeTakeDown: string;
  pageMode: "external" | "generated";
  homeTitleEn?: string;
  homeTitleEs?: string;
  homeLeadEn?: string;
  homeLeadEs?: string;
  ctaEn?: string;
  ctaEs?: string;
  includeInAgenda?: boolean;
  whenLabelEn?: string;
  whenLabelEs?: string;
};

/** Add campaigns here; distinct copy from Dubliners — O'Connell St voice only. */
export const SPORTS_EVENT_REGISTRY: SportsEventCampaign[] = [
  {
    id: "zalgiris-euroleague-2026-11-25",
    sport: "basketball",
    competition: "EuroLeague",
    competitionEs: "Euroliga",
    teamsEn: "Real Madrid vs Žalgiris Kaunas",
    teamsEs: "Real Madrid vs Žalgiris Kaunas",
    madridDateKey: "2026-11-25",
    madridTime: "20:45",
    startIso: "2026-11-25T20:45:00+01:00",
    fanOrigin: {
      city: "Kaunas",
      country: "Lithuania",
      labelEn: "Žalgiris supporters in Madrid",
      labelEs: "Aficionados del Žalgiris en Madrid",
    },
    languages: ["en"],
    paths: {
      en: "/news/real-madrid-zalgiris-wednesday-night-sol",
      es: "/news/real-madrid-zalgiris-wednesday-night-sol",
    },
    priority: 25,
    broadcastConfirmed: false,
    promoStart: "2026-11-17",
    homeTakeDown: "2026-11-25",
    pageMode: "external",
    homeTitleEn: "Žalgiris trip night — Wednesday 25 November",
    homeTitleEs: "Noche EuroLeague Žalgiris — miércoles 25 de noviembre",
    homeLeadEn:
      "Fans meeting point at this Irish pub by Sol before or after Movistar Arena — no TV listing for the arena game on this page.",
    homeLeadEs:
      "Punto de encuentro en este pub irlandés junto a Sol antes o después del Movistar Arena — no listamos TV del partido en esta página.",
    ctaEn: "Žalgiris fans guide",
    ctaEs: "Guía aficionados Žalgiris",
    includeInAgenda: true,
    whenLabelEn: "Wed 25 Nov",
    whenLabelEs: "Mié 25 nov",
  },
  {
    id: "portugal-nations-league-meetup-2026-11-20",
    sport: "football",
    competition: "UEFA Nations League",
    competitionEs: "UEFA Nations League",
    teamsEn: "Portugal vs Armenia (pre-kickoff meetup)",
    teamsEs: "Portugal vs Armenia (quedada previa)",
    madridDateKey: "2026-11-20",
    madridTime: "20:45",
    startIso: "2026-11-20T20:45:00+01:00",
    fanOrigin: {
      country: "Portugal",
      labelEn: "Portuguese supporters near Sol",
      labelEs: "Afición portuguesa junto a Sol",
    },
    languages: ["en", "es"],
    paths: {
      en: "/campaign/portugal-nations-league-meetup-2026-11-20",
      es: "/es/campaign/portugal-nations-league-meetup-2026-11-20",
    },
    priority: 15,
    broadcastConfirmed: false,
    promoStart: "2026-11-17",
    homeTakeDown: "2026-11-20",
    pageMode: "generated",
    homeTitleEn: "Portuguese football — Thursday 20 November",
    homeTitleEs: "Fútbol portugués — jueves 20 de noviembre",
    homeLeadEn:
      "Meeting point at O'Connell St, Espoz y Mina 7, before kick-off. We do not promise this match on our screens until it is on What's On.",
    homeLeadEs:
      "Punto de encuentro en O'Connell St, Espoz y Mina 7, antes del saque. No prometemos este partido en pantalla hasta que figure en Partidos.",
    ctaEn: "Meeting point at this door",
    ctaEs: "Punto de encuentro en esta puerta",
    includeInAgenda: true,
    whenLabelEn: "Thu 20 Nov",
    whenLabelEs: "Jue 20 nov",
  },
];

export function campaignById(id: string): SportsEventCampaign | undefined {
  return SPORTS_EVENT_REGISTRY.find((c) => c.id === id);
}

export function generatedCampaigns(): SportsEventCampaign[] {
  return SPORTS_EVENT_REGISTRY.filter((c) => c.pageMode === "generated");
}