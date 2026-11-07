/**
 * 4 Bars / One Fan Weekend — Sat 7 & Sun 8 Nov 2026 (Europe/Madrid).
 * Hours and Maps from live sister sites + verified GBP CIDs. Do not invent
 * broadcasts, discounts, or Four Corner NFL listings.
 */

export const FAN_WEEKEND = {
  sloganEn: "4 BARS. ONE FAN WEEKEND.",
  sloganEs: "CUATRO BARES. UN GRAN PUNTO DE ENCUENTRO.",
  dublinersHubEn: "https://dublinersmadrid.es/4-bars-one-fan-weekend/",
  dublinersHubEs: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/",
} as const;

/** This weekend only — does not rewrite GBP usual hours in venue.ts. */
export const WEEKEND_HOURS = {
  satOpen: "15:00",
  satClose: "03:30",
  sunUsualOpen: "14:00",
  sunUsualClose: "03:00",
  sun8NovOpen: "12:00",
  sun8NovNoteEn:
    "Exception Sunday 8 Nov: open from 12:00 (usual Sundays from 14:00).",
  sun8NovNoteEs:
    "Excepción domingo 8 nov: abrimos desde las 12:00 (los domingos habituales, desde las 14:00).",
} as const;

export type SisterBar = {
  id: "oconnells" | "dubliners" | "oreillys" | "four-corner";
  name: string;
  address: string;
  mapsUrl: string;
  webUrl?: string;
  hoursEn: string;
  hoursEs: string;
  blurbEn: string;
  blurbEs: string;
  saturdayOpen: boolean;
};

export const SISTER_BARS: SisterBar[] = [
  {
    id: "oconnells",
    name: "O'Connell's",
    address: "Calle de Espoz y Mina 7, 28012 Madrid",
    mapsUrl: "https://www.google.com/maps?cid=10697659365903665225",
    webUrl: "/",
    hoursEn:
      "Sat 7 Nov 15:00–03:30 · Sun 8 Nov from 12:00 (usual Sunday 14:00–03:00)",
    hoursEs:
      "Sáb 7 nov 15:00–03:30 · Dom 8 nov desde las 12:00 (domingo habitual 14:00–03:00)",
    blurbEn:
      "This pub — Irish room, big screens, international crowd. Listed on Maps as O'Connell St.",
    blurbEs:
      "Este pub — sala irlandesa, pantallas grandes, ambiente internacional. En Maps aparece como O'Connell St.",
    saturdayOpen: true,
  },
  {
    id: "dubliners",
    name: "Dubliners",
    address: "Calle de Espoz y Mina 7, 28012 Madrid",
    mapsUrl: "https://www.google.com/maps?cid=4384002297188950803",
    webUrl: "https://dublinersmadrid.es/",
    hoursEn: "Sat 7 Nov 12:00–02:30 · Sun 8 Nov 12:00–02:00",
    hoursEs: "Sáb 7 nov 12:00–02:30 · Dom 8 nov 12:00–02:00",
    blurbEn: "Irish pub on the same street / building as O'Connell's.",
    blurbEs: "Pub irlandés en la misma calle / edificio que O'Connell's.",
    saturdayOpen: true,
  },
  {
    id: "oreillys",
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu 4, 28012 Madrid",
    mapsUrl: "https://www.google.com/maps?cid=9285869778750479445",
    hoursEn: "Daily 11:30–01:30 (restaurant-bar, terrace, screens)",
    hoursEs: "Todos los días 11:30–01:30 (restaurante-bar, terraza, pantallas)",
    blurbEn:
      "The restaurant-bar stop a short walk from Sol — kitchen and terrace, already open from 11:30 on Saturday.",
    blurbEs:
      "El restaurante-bar a un paso de Sol — cocina y terraza, ya abre desde las 11:30 el sábado.",
    saturdayOpen: true,
  },
  {
    id: "four-corner",
    name: "Four Corner",
    address: "Calle de la Victoria 6, 28012 Madrid",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Calle+de+la+Victoria+6+28012+Madrid",
    hoursEn: "Sunday 8 Nov from 14:00 until late",
    hoursEs: "Domingo 8 nov desde las 14:00 hasta la madrugada",
    blurbEn:
      "Same fan meeting point near Sol. Sunday from 14:00 until late. We do not list which games are on there.",
    blurbEs:
      "El mismo punto de encuentro junto a Sol. Domingo desde las 14:00 hasta la madrugada. No listamos qué partidos hay allí.",
    saturdayOpen: false,
  },
];

export const PATHS = {
  hubEn: "/4-bars-one-fan-weekend",
  hubEs: "/es/cuatro-bares-fin-de-semana",
  saturdayEn: "/nfl-fans-saturday-oconnells",
  saturdayEs: "/es/fin-de-semana-nfl-oconnells",
  sundayEn: "/nfl-sunday-8-nov-oconnells",
  sundayEs: "/es/nfl-domingo-8-nov-oconnells",
} as const;
