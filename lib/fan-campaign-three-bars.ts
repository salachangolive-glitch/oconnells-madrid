import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { HOURS } from "@/lib/venue";

/** Equal presentation order on all campaign pages. */
export const THREE_BARS_ORDER = ["dubliners", "oconnells", "oreillys"] as const;

export type BarId = (typeof THREE_BARS_ORDER)[number];

/** Owner campaign 17 Nov 2026 — three bars only (no Four Corner). */
export const THREE_BARS_DATA: Record<
  BarId,
  {
    maps: string;
    phone: string;
    tel: string;
    web: string;
    address: string;
    hoursEn: string;
    hoursNl: string;
    hoursNo: string;
    hoursLt: string;
  }
> = {
  dubliners: {
    maps: BAR_MAPS.dubliners,
    phone: "+34 915 32 79 56",
    tel: "tel:+34915327956",
    web: "https://dublinersmadrid.es/",
    address: "Calle de Espoz y Mina 7, 28012 Madrid",
    hoursEn: "Tue: 12:00–02:00 · Wed: 12:00–02:00 (per Dubliners listing, Europe/Madrid)",
    hoursNl: "Di: 12:00–02:00 · wo: 12:00–02:00 (volgens Dubliners, Europe/Madrid)",
    hoursNo: "Tir: 12:00–02:00 · ons: 12:00–02:00 (ifølge Dubliners, Europe/Madrid)",
    hoursLt: "An: 12:00–02:00 · treč: 12:00–02:00 (pagal Dubliners, Europe/Madrid)",
  },
  oconnells: {
    maps: BAR_MAPS.oconnells,
    phone: "+34 915 32 79 56",
    tel: "tel:+34915327956",
    web: "https://oconnellsmadrid.es/",
    address: "Calle de Espoz y Mina 7, 28012 Madrid (Google Maps: O'Connell St)",
    hoursEn: `Tue–Thu: ${HOURS.monThu.open}–${HOURS.monThu.close}`,
    hoursNl: `Di–do: ${HOURS.monThu.open}–${HOURS.monThu.close}`,
    hoursNo: `Tir–tor: ${HOURS.monThu.open}–${HOURS.monThu.close}`,
    hoursLt: `Pir–ket: ${HOURS.monThu.open}–${HOURS.monThu.close}`,
  },
  oreillys: {
    maps: BAR_MAPS.oreillys,
    phone: "+34 915 21 29 58",
    tel: "tel:+34915212958",
    web: "https://oreillys-restaurant-bar.localo.site/",
    address: "Pasaje de Matheu 4, 28012 Madrid",
    hoursEn: "Every day 11:30–01:30 (per O'Reilly's listing)",
    hoursNl: "Elke dag 11:30–01:30 (volgens O'Reilly's)",
    hoursNo: "Hver dag 11:30–01:30 (ifølge O'Reilly's)",
    hoursLt: "Kasdien 11:30–01:30 (pagal O'Reilly's)",
  },
};

export const ACCESS_PHRASE = {
  en: "No reservations; first come, first served.",
  nl: "Geen reserveringen; toegang op volgorde van binnenkomst.",
  no: "Ingen reservasjon; førstemann til mølla.",
  lt: "Be rezervacijų; pirmas atvykęs — pirmas aptarnaujamas.",
} as const;

export const METRO_MADRID_LINES =
  "https://www.metromadrid.es/en/travel-in-the-metro/lines-and-horarios/";

export const PSV_CAMPAIGN = {
  paths: {
    en: "/news/psv-fans-three-bars-sol",
    nl: "/news/psv-fans-drie-bars-sol",
  },
  hreflangKey: "/news/psv-fans-three-bars-sol",
  eventDay: "2026-11-24",
  kickoff: "21:00",
  uefaUrl: "https://www.uefa.com/uefachampionsleague/match/2049625/",
  oconnellSoloEn: "/news/real-madrid-psv-tuesday-night-sol",
  oconnellSoloNl: "/news/real-madrid-psv-tuesday-night-sol",
} as const;

/** PREPARADA (noindex) until go-live — Thu 20 Nov 2026 owner window. */
export const ZALGIRIS_CAMPAIGN = {
  paths: {
    en: "/news/zalgiris-fans-three-bars-sol",
    lt: "/news/zalgiris-fans-trys-barai-sol",
  },
  hreflangKey: "/news/zalgiris-fans-three-bars-sol",
  preparada: true as const,
  eventDay: "2026-11-25",
  kickoff: "20:45",
  eventUrl:
    "https://www.movistararena.es/en/programacion/evento/real-madrid-vs-zalgiris-kaunas-jornada-14-euroliga-26-27/25-11-2026/20:45",
  oconnellSoloEn: "/news/real-madrid-zalgiris-wednesday-night-sol",
  oconnellSoloLt: "/news/real-madrid-zalgiris-wednesday-night-sol",
} as const;

export const VIKING_CAMPAIGN = {
  paths: {
    en: "/news/viking-fans-three-bars-sol",
    no: "/news/viking-fans-tre-barer-sol",
  },
  hreflangKey: "/news/viking-fans-three-bars-sol",
  eventDay: "2026-11-25",
  kickoff: "21:00",
  uefaUrl: "https://www.uefa.com/uefachampionsleague/match/2049636/",
  oconnellSoloEn: "/news/atletico-viking-wednesday-night-sol",
  oconnellSoloNo: "/news/atletico-viking-wednesday-night-sol",
} as const;

export type CampaignId = "psv" | "viking" | "zalgiris";
export type GuideLocale = "en" | "nl" | "no" | "lt";

/** Guides held as PREPARADA (200 + noindex; not in sitemap/hubs until go-live). */
export const PREPARADA_CAMPAIGN_PATHS = new Set<string>([
  ZALGIRIS_CAMPAIGN.paths.en,
  ZALGIRIS_CAMPAIGN.paths.lt,
]);