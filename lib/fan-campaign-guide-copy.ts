import type { BarId, CampaignId, GuideLocale } from "@/lib/fan-campaign-three-bars";

const UI = {
  en: {
    address: "Address",
    hours: "Opening hours",
    map: "Open in Google Maps",
    phone: "Phone",
    website: "Website",
    footSol: "On foot from Puerta del Sol",
    metroStadium: "Metro from Sol toward the stadium",
    metroLink: "Metro de Madrid lines and times",
    before: "Meeting point before the match",
    after: "Meeting point after the match",
    threeBarsTitle: "Three bars — equal meeting points near Sol",
    threeBarsIntro:
      "Dubliners, O'Connell's and O'Reilly's are three independent Irish venues the same distance from Sol. The owner confirms Real Madrid–PSV on the screens at all three on Tuesday 24 November. Pick one door for your group.",
    threeBarsIntroViking:
      "Dubliners, O'Connell's and O'Reilly's are three independent Irish venues the same distance from Sol. The owner confirms Atlético–Viking FK on the screens at all three on Wednesday 25 November. Viking FK from Stavanger, not the NFL Minnesota Vikings.",
    screening:
      "The match is on the screens at this venue for this fixture. Ask at the bar which feed is on.",
    dublinersFoot:
      "From Puerta del Sol, walk to Calle de Espoz y Mina 7 — about two minutes. Look for the Dubliners entrance on the same building as O'Connell's.",
    oconnellsFoot:
      "From Puerta del Sol, walk to Calle de Espoz y Mina 7 — about two minutes. Red facade, gold O'Connell St lettering.",
    oreillysFoot:
      "From Puerta del Sol, walk east to Pasaje de Matheu 4 — covered arcade, about three minutes on foot.",
    beforePsv:
      "Share this address on your group chat and meet here before you leave for the Bernabéu. Dubliners opens from 12:00, O'Connell's from 18:00, O'Reilly's from 11:30 on match Tuesday.",
    beforeViking:
      "Share this address on your group chat and meet here before you leave for the Metropolitano. Dubliners from 12:00, O'Connell's from 18:00, O'Reilly's from 11:30 on match Wednesday.",
    afterPsv:
      "After the final whistle, take Metro line 10 back toward the centre and walk to the bar you chose. O'Connell's stays open until 03:00 on Tue–Thu; Dubliners until 02:00 Tue night; O'Reilly's until 01:30.",
    afterViking:
      "After the final whistle, return to the centre and walk to the bar you chose. O'Connell's until 03:00 Wed night; Dubliners until 02:00; O'Reilly's until 01:30.",
    psvMetro: [
      "From Sol station: line 1 to Tribunal, change to line 10 to Santiago Bernabéu — station beside the ground (see metromadrid.es).",
      "Leave in good time to be inside before 21:00.",
    ],
    vikingMetro: [
      "From Sol: line 2 to Las Rosas, then about 15 minutes on foot to the stadium (Atlético wayfinding). Line 7 serves Estadio Metropolitano next to the ground.",
      "On match nights EMT bus SE721 runs Canillejas (line 5) ↔ stadium from two hours before kick-off.",
    ],
  },
  nl: {
    address: "Adres",
    hours: "Openingstijden",
    map: "Open in Google Maps",
    phone: "Telefoon",
    website: "Website",
    footSol: "Te voet vanaf Puerta del Sol",
    metroStadium: "Metro vanaf Sol naar het stadion",
    metroLink: "Metro de Madrid lijnen en tijden",
    before: "Ontmoetingspunt vóór de wedstrijd",
    after: "Ontmoetingspunt na de wedstrijd",
    threeBarsTitle: "Drie bars — gelijke ontmoetingspunten bij Sol",
    threeBarsIntro:
      "Dubliners, O'Connell's en O'Reilly's zijn drie onafhankelijke Irish pubs op dezelfde afstand van Sol. De eigenaar bevestigt Real Madrid–PSV op de schermen in alle drie op dinsdag 24 november.",
    threeBarsIntroViking: "",
    screening:
      "De wedstrijd staat op de schermen in deze zaal. Vraag aan de bar welke zender erop staat.",
    dublinersFoot:
      "Vanaf Puerta del Sol loop je naar Calle de Espoz y Mina 7 — ongeveer twee minuten. Dubliners-deur in hetzelfde gebouw als O'Connell's.",
    oconnellsFoot:
      "Vanaf Puerta del Sol naar Calle de Espoz y Mina 7 — ongeveer twee minuten. Rode gevel, gouden O'Connell St-opschrift.",
    oreillysFoot:
      "Vanaf Puerta del Sol naar Pasaje de Matheu 4 — overdekte passage, ongeveer drie minuten lopen.",
    beforePsv:
      "Deel dit adres in je groepschat en spreek hier af vóór je naar het Bernabéu gaat. Dubliners open vanaf 12:00, O'Connell's vanaf 18:00, O'Reilly's vanaf 11:30 op wedstrijddinsdag.",
    beforeViking: "",
    afterPsv:
      "Na het laatste fluitsignaal: metro lijn 10 terug naar het centrum en loop naar de bar die je koos. O'Connell's tot 03:00 di–do; Dubliners tot 02:00 dinsdag; O'Reilly's tot 01:30.",
    afterViking: "",
    psvMetro: [
      "Vanaf metrostation Sol: lijn 1 naar Tribunal, overstap op lijn 10 naar Santiago Bernabéu — naast het stadion (metromadrid.es).",
      "Vertrek op tijd om vóór 21:00 binnen te zijn.",
    ],
    vikingMetro: [],
  },
  no: {
    address: "Adresse",
    hours: "Åpningstider",
    map: "Åpne i Google Maps",
    phone: "Telefon",
    website: "Nettsted",
    footSol: "Til fots fra Puerta del Sol",
    metroStadium: "T-bane fra Sol mot stadion",
    metroLink: "Metro de Madrid linjer og tider",
    before: "Møtested før kampen",
    after: "Møtested etter kampen",
    threeBarsTitle: "Tre barer — like møtesteder ved Sol",
    threeBarsIntro: "",
    threeBarsIntroViking:
      "Dubliners, O'Connell's og O'Reilly's er tre uavhengige irske puber like langt fra Sol. Eieren bekrefter Atlético–Viking FK på skjermene i alle tre onsdag 25. november. Viking FK fra Stavanger, ikke NFLs Minnesota Vikings.",
    screening:
      "Kampen går på skjermene her. Spør i baren hvilken feed som vises.",
    dublinersFoot:
      "Fra Puerta del Sol går du til Calle de Espoz y Mina 7 — ca. to minutter. Dubliners-inngang i samme bygg som O'Connell's.",
    oconnellsFoot:
      "Fra Puerta del Sol til Calle de Espoz y Mina 7 — ca. to minutter. Rød fasade, gullskrift O'Connell St.",
    oreillysFoot:
      "Fra Puerta del Sol østover til Pasaje de Matheu 4 — overbygget passasje, ca. tre minutter.",
    beforePsv: "",
    beforeViking:
      "Del denne adressen i gruppechatten og møt her før du drar til Metropolitano. Dubliners fra 12:00, O'Connell's fra 18:00, O'Reilly's fra 11:30 på kampdagen.",
    afterPsv: "",
    afterViking:
      "Etter sluttfløyte: tilbake til sentrum og gå til baren du valgte. O'Connell's til 03:00 onsdag; Dubliners til 02:00; O'Reilly's til 01:30.",
    psvMetro: [],
    vikingMetro: [
      "Fra Sol: linje 2 til Las Rosas, deretter ca. 15 minutter til fots (Atléticos veivisning). Linje 7 stopper ved Estadio Metropolitano.",
      "Kampdager: EMT-buss SE721 Canillejas (linje 5) ↔ stadion fra to timer før avspark.",
    ],
  },
} as const;

export function footFromSol(barId: BarId, locale: GuideLocale): string {
  const key = `${barId}Foot` as "dublinersFoot" | "oconnellsFoot" | "oreillysFoot";
  return UI[locale][key];
}

export function stadiumMetroLines(
  campaign: CampaignId,
  locale: GuideLocale,
): string[] {
  if (campaign === "psv") return [...UI[locale].psvMetro];
  return [...UI[locale].vikingMetro];
}

export function meetingBefore(campaign: CampaignId, locale: GuideLocale): string {
  return campaign === "psv" ? UI[locale].beforePsv : UI[locale].beforeViking;
}

export function meetingAfter(campaign: CampaignId, locale: GuideLocale): string {
  return campaign === "psv" ? UI[locale].afterPsv : UI[locale].afterViking;
}

export function uiLabels(locale: GuideLocale) {
  return UI[locale];
}

const NAMES: Record<BarId, Record<GuideLocale, string>> = {
  dubliners: { en: "Dubliners", nl: "Dubliners", no: "Dubliners" },
  oconnells: { en: "O'Connell's", nl: "O'Connell's", no: "O'Connell's" },
  oreillys: {
    en: "O'Reilly's Restaurant Bar",
    nl: "O'Reilly's Restaurant Bar",
    no: "O'Reilly's Restaurant Bar",
  },
};

export function barName(barId: BarId, locale: GuideLocale): string {
  return NAMES[barId][locale];
}