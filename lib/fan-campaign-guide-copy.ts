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
    threeBarsTitle: "Four bars — equal meeting points near Sol",
    threeBarsIntro:
      "Dubliners, O'Connell's, O'Reilly's and Four Corner are four sibling Irish pubs the same distance from Sol. Confirmed on the screens at all four for Real Madrid–PSV on Tuesday 24 November. Pick one door for your group.",
    threeBarsIntroViking:
      "Dubliners, O'Connell's, O'Reilly's and Four Corner are four sibling Irish pubs the same distance from Sol. Confirmed on the screens at all four for Atlético–Viking FK on Wednesday 25 November. Viking FK from Stavanger, not the NFL Minnesota Vikings.",
    threeBarsIntroZalgiris:
      "Dubliners, O'Connell's, O'Reilly's and Four Corner are four sibling Irish pubs the same walk from Puerta del Sol. Live on our screens at all four for Real Madrid v Žalgiris Kaunas on Wednesday 25 November. Pick one door for your group.",
    screening:
      "The match is on the screens at this venue for this fixture. Ask at the bar which feed is on.",
    dublinersFoot:
      "From Puerta del Sol, walk to Calle de Espoz y Mina 7 — about two minutes. Look for the Dubliners entrance on the same building as O'Connell's.",
    oconnellsFoot:
      "From Puerta del Sol, walk to Calle de Espoz y Mina 7 — about two minutes. Red facade, gold O'Connell St lettering.",
    oreillysFoot:
      "From Puerta del Sol, walk east to Pasaje de Matheu 4 — covered arcade, about three minutes on foot.",
    fourcornerFoot:
      "From Puerta del Sol, walk to Calle de la Victoria 6 — about three minutes. Four Corner is a sibling meeting point near Sol.",
    beforePsv:
      "Share this address on your group chat and meet here before you leave for the Bernabéu. Dubliners opens from 12:00, O'Connell's from 18:00, O'Reilly's from 11:30 on match Tuesday.",
    beforeViking:
      "Share this address on your group chat and meet here before you leave for the Metropolitano. Dubliners from 12:00, O'Connell's from 18:00, O'Reilly's from 11:30 on match Wednesday.",
    afterPsv:
      "After the final whistle, take Metro line 10 back toward the centre and walk to the bar you chose. O'Connell's stays open until 03:00 on Tue–Thu; Dubliners until 02:00 Tue night; O'Reilly's until 01:30.",
    afterViking:
      "After the final whistle, return to the centre and walk to the bar you chose. O'Connell's until 03:00 Wed night; Dubliners until 02:00; O'Reilly's until 01:30.",
    psvMetro: [
      "From Sol station: Metro line 1 to Tribunal, then line 10 to Nuevos Ministerios — the open Line 10 stop closest to the stadium while Santiago Bernabéu station stays closed for renovation. Walk about 10–15 minutes up Paseo de la Castellana to the ground, or take the free S10 replacement bus between Nuevos Ministerios and Cuzco (see metromadrid.es).",
      "Leave in good time to be inside before 21:00.",
    ],
    vikingMetro: [
      "From Sol: line 2 to Las Rosas, then about 15 minutes on foot to the stadium (Atlético wayfinding). Line 7 serves Estadio Metropolitano next to the ground.",
      "On match nights EMT bus SE721 runs Canillejas (line 5) ↔ stadium from two hours before kick-off.",
    ],
    beforeZalgiris:
      "Share this address on your group chat and meet here before you leave for the Movistar Arena. Dubliners from 12:00, O'Connell's from 18:00, O'Reilly's from 11:30 on match Wednesday. Doors at the arena from 19:45 for a 20:45 tip-off.",
    afterZalgiris:
      "After the final buzzer, take Metro line 2 back to Sol and walk to the bar you chose. O'Connell's stays open until 03:00 Wed night; Dubliners until 02:00; O'Reilly's until 01:30.",
    zalgirisMetro: [
      "From Sol station: Metro line 2 direct to Goya — stop beside Movistar Arena (see metromadrid.es).",
      "Leave the centre in good time for 19:45 doors and 20:45 tip-off.",
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
    threeBarsTitle: "Vier bars — gelijke ontmoetingspunten bij Sol",
    threeBarsIntro:
      "Dubliners, O'Connell's, O'Reilly's en Four Corner zijn vier zuster-Irish pubs op dezelfde afstand van Sol. Bevestigd op de schermen bij alle vier voor Real Madrid–PSV op dinsdag 24 november.",
    threeBarsIntroViking: "",
    screening:
      "De wedstrijd staat op de schermen in deze zaal. Vraag aan de bar welke zender erop staat.",
    dublinersFoot:
      "Vanaf Puerta del Sol loop je naar Calle de Espoz y Mina 7 — ongeveer twee minuten. Dubliners-deur in hetzelfde gebouw als O'Connell's.",
    oconnellsFoot:
      "Vanaf Puerta del Sol naar Calle de Espoz y Mina 7 — ongeveer twee minuten. Rode gevel, gouden O'Connell St-opschrift.",
    oreillysFoot:
      "Vanaf Puerta del Sol naar Pasaje de Matheu 4 — overdekte passage, ongeveer drie minuten lopen.",
    fourcornerFoot:
      "Vanaf Puerta del Sol naar Calle de la Victoria 6 — ongeveer drie minuten. Four Corner is een zuster-ontmoetingspunt bij Sol.",
    beforePsv:
      "Deel dit adres in je groepschat en spreek hier af vóór je naar het Bernabéu gaat. Dubliners open vanaf 12:00, O'Connell's vanaf 18:00, O'Reilly's vanaf 11:30 op wedstrijddinsdag.",
    beforeViking: "",
    afterPsv:
      "Na het laatste fluitsignaal: metro lijn 10 terug naar het centrum en loop naar de bar die je koos. O'Connell's tot 03:00 di–do; Dubliners tot 02:00 dinsdag; O'Reilly's tot 01:30.",
    afterViking: "",
    psvMetro: [
      "Vanaf metrostation Sol: metrolijn 1 naar Tribunal, dan lijn 10 naar Nuevos Ministerios — de open lijn-10-halte het dichtst bij het stadion terwijl station Santiago Bernabéu gesloten blijft voor renovatie. Loop circa 10–15 minuten over de Paseo de la Castellana naar het stadion, of neem de gratis S10-vervangbus tussen Nuevos Ministerios en Cuzco (metromadrid.es).",
      "Vertrek op tijd om vóór 21:00 binnen te zijn.",
    ],
    vikingMetro: [],
    beforeZalgiris: "",
    afterZalgiris: "",
    zalgirisMetro: [],
    threeBarsIntroZalgiris: "",
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
    threeBarsTitle: "Fire barer — like møtesteder ved Sol",
    threeBarsIntro: "",
    threeBarsIntroViking:
      "Dubliners, O'Connell's, O'Reilly's og Four Corner er fire søster-puber like langt fra Sol. Bekreftet på skjermene hos alle fire for Atlético–Viking FK onsdag 25. november. Viking FK fra Stavanger, ikke NFLs Minnesota Vikings.",
    screening:
      "Kampen går på skjermene her. Spør i baren hvilken feed som vises.",
    dublinersFoot:
      "Fra Puerta del Sol går du til Calle de Espoz y Mina 7 — ca. to minutter. Dubliners-inngang i samme bygg som O'Connell's.",
    oconnellsFoot:
      "Fra Puerta del Sol til Calle de Espoz y Mina 7 — ca. to minutter. Rød fasade, gullskrift O'Connell St.",
    oreillysFoot:
      "Fra Puerta del Sol østover til Pasaje de Matheu 4 — overbygget passasje, ca. tre minutter.",
    fourcornerFoot:
      "Fra Puerta del Sol til Calle de la Victoria 6 — ca. tre minutter. Four Corner er et søster-møtested ved Sol.",
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
    beforeZalgiris: "",
    afterZalgiris: "",
    zalgirisMetro: [],
    threeBarsIntroZalgiris: "",
  },
  lt: {
    address: "Adresas",
    hours: "Darbo laikas",
    map: "Atidaryti Google Maps",
    phone: "Telefonas",
    website: "Svetainė",
    footSol: "Pėsčiomis nuo Puerta del Sol",
    metroStadium: "Metro nuo Sol iki arenos",
    metroLink: "Metro de Madrido linijos ir laikai",
    before: "Susitikimo vieta prieš rungtynes",
    after: "Susitikimo vieta po rungtynių",
    threeBarsTitle: "Keturi barai — vienodos susitikimo vietos prie Sol",
    threeBarsIntro: "",
    threeBarsIntroViking: "",
    threeBarsIntroZalgiris:
      "Dubliners, O'Connell's, O'Reilly's ir Four Corner — keturi seserų airiški barai vienodu atstumu nuo Puerta del Sol. Real Madrid–Žalgiris Kaunas trečiadienį, lapkričio 25 d., vaizdas gyvai mūsų ekranuose visuose keturiuose. Pasirinkite vieną adresą grupei.",
    screening:
      "Rungtynės rodomos gyvai mūsų ekranuose. Pasiteiraukite bare, kuris transliacijos signalas rodomas.",
    dublinersFoot:
      "Nuo Puerta del Sol eikite į Calle de Espoz y Mina 7 — apie dvi minutes. Dubliners įėjimas tame pačiame pastate kaip O'Connell's.",
    oconnellsFoot:
      "Nuo Puerta del Sol į Calle de Espoz y Mina 7 — apie dvi minutes. Raudonas fasadas, auksinis O'Connell St užrašas.",
    oreillysFoot:
      "Nuo Puerta del Sol į rytus iki Pasaje de Matheu 4 — dengtas praėjimas, apie tris minutes pėsčiomis.",
    fourcornerFoot:
      "Nuo Puerta del Sol iki Calle de la Victoria 6 — apie tris minutes. Four Corner — seserų susitikimo vieta prie Sol.",
    beforePsv: "",
    beforeViking: "",
    afterPsv: "",
    afterViking: "",
    beforeZalgiris:
      "Pasidalykite šiuo adresu grupės pokalbyje ir susitikite čia prieš kelionę į Movistar Arena. Dubliners nuo 12:00, O'Connell's nuo 18:00, O'Reilly's nuo 11:30 rungtynių trečiadienį. Arenos durys atidaromos 19:45, startas 20:45.",
    afterZalgiris:
      "Po paskutinio švilpuko — metro 2 linija atgal į Sol ir eikite į pasirinktą barą. O'Connell's iki 03:00 trečiadienio naktį; Dubliners iki 02:00; O'Reilly's iki 01:30.",
    psvMetro: [],
    vikingMetro: [],
    zalgirisMetro: [
      "Nuo Sol stoties: metro 2 linija tiesiai iki Goya — stotelė šalia Movistar Arena (žr. metromadrid.es).",
      "Išvykite iš centro laiku — durys 19:45, startas 20:45.",
    ],
  },
} as const;

export function footFromSol(barId: BarId, locale: GuideLocale): string {
  const key = `${barId === "fourcorner" ? "fourcorner" : barId}Foot` as
    | "dublinersFoot"
    | "oconnellsFoot"
    | "oreillysFoot"
    | "fourcornerFoot";
  return UI[locale][key];
}

export function stadiumMetroLines(
  campaign: CampaignId,
  locale: GuideLocale,
): string[] {
  if (campaign === "psv") return [...UI[locale].psvMetro];
  if (campaign === "viking") return [...UI[locale].vikingMetro];
  return [...UI[locale].zalgirisMetro];
}

export function meetingBefore(campaign: CampaignId, locale: GuideLocale): string {
  if (campaign === "psv") return UI[locale].beforePsv;
  if (campaign === "viking") return UI[locale].beforeViking;
  return UI[locale].beforeZalgiris;
}

export function meetingAfter(campaign: CampaignId, locale: GuideLocale): string {
  if (campaign === "psv") return UI[locale].afterPsv;
  if (campaign === "viking") return UI[locale].afterViking;
  return UI[locale].afterZalgiris;
}

export function threeBarsIntro(campaign: CampaignId, locale: GuideLocale): string {
  if (campaign === "psv") return UI[locale].threeBarsIntro;
  if (campaign === "viking") return UI[locale].threeBarsIntroViking;
  return UI[locale].threeBarsIntroZalgiris;
}

export function uiLabels(locale: GuideLocale) {
  return UI[locale];
}

const NAMES: Record<BarId, Record<GuideLocale, string>> = {
  dubliners: {
    en: "Dubliners",
    nl: "Dubliners",
    no: "Dubliners",
    lt: "Dubliners",
  },
  oconnells: {
    en: "O'Connell's",
    nl: "O'Connell's",
    no: "O'Connell's",
    lt: "O'Connell's",
  },
  oreillys: {
    en: "O'Reilly's Restaurant Bar",
    nl: "O'Reilly's Restaurant Bar",
    no: "O'Reilly's Restaurant Bar",
    lt: "O'Reilly's Restaurant Bar",
  },
  fourcorner: {
    en: "Four Corner",
    nl: "Four Corner",
    no: "Four Corner",
    lt: "Four Corner",
  },
};

export function barName(barId: BarId, locale: GuideLocale): string {
  return NAMES[barId][locale];
}