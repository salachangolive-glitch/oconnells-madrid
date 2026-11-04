import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Real Madrid v Crvena Zvezda Meridianbet Belgrade, EuroLeague round 11
 * (DG 4 Nov 2026 via parent: visiting Crvena Zvezda fans).
 * Facts (read 4 Nov 2026):
 *  - api-live.euroleague.net v2 E2026 games (teamCode MAD): round 11,
 *    2026-11-12T20:00Z = 21:00 CET, Movistar Arena.
 *  - realmadrid.com tickets page: «Thursday, Nov 12, 9:00 PM», Movistar Arena, Matchday 11.
 *  - movistararena.es event page: Thu 12 Nov 2026, doors 20:00, start 21:00, Av. de Felipe II.
 *  - Not a UEFA competition (EuroLeague basketball): no UEFA.com source exists.
 *  - Live at O'Connell St per owner rule 2026-10-13 «all sport live» (FIXTURES row).
 *  - TV channel never named. No prices, no fan numbers. Thursday 18:00–03:00.
 *  - No Serbian line (not verified by a native speaker).
 */
export const MADRID_CRVENA_ZVEZDA: MatchArticleData = {
  paths: {
    en: "/news/real-madrid-crvena-zvezda-thursday-sol",
    es: "/es/noticias/real-madrid-crvena-zvezda-jueves-sol",
  },
  published: "2026-11-04T19:00:00+01:00",
  startDate: "2026-11-12T21:00:00+01:00",
  sport: "Basketball",
  sportsEventName: "Real Madrid v Crvena Zvezda Meridianbet Belgrade (EuroLeague)",
  homeTeam: "Real Madrid",
  awayTeam: "Crvena Zvezda Meridianbet Belgrade",
  venue: "Movistar Arena",
  copy: {
    en: {
      title: "Real Madrid v Crvena Zvezda, Thu 12 Nov 21:00: EuroLeague night near Sol",
      description:
        "Real Madrid v Crvena Zvezda, EuroLeague round 11, Thursday 12 November 2026, 21:00 Madrid time at the Movistar Arena. Before or after the game, O'Connell St is an Irish pub at Espoz y Mina 7, next to Puerta del Sol, open 18:00–03:00.",
      eyebrow: "EuroLeague · Thursday 12 November 2026 · 21:00",
      h1: "Crvena Zvezda in Madrid: a Thursday EuroLeague night near Sol",
      lead: "Real Madrid host Crvena Zvezda Meridianbet Belgrade at the Movistar Arena on Thursday 12 November, round 11 of the EuroLeague. Coming over from Belgrade, or living in Madrid? O'Connell St, an Irish pub at Espoz y Mina 7, next to Puerta del Sol, opens at 18:00 and stays open until 03:00.",
      screeningName: "Real Madrid v Crvena Zvezda live at O'Connell St",
      sections: [
        {
          title: "The game",
          list: [
            "Real Madrid v Crvena Zvezda Meridianbet Belgrade, EuroLeague, round 11",
            "Thursday 12 November 2026, 21:00 Madrid time (the same time in Belgrade)",
            "Movistar Arena, Avenida de Felipe II, Madrid. The arena lists doors at 20:00",
          ],
          note: "Date, tip-off and venue as listed by the EuroLeague, Real Madrid and the Movistar Arena. Times can move, so check again on the day.",
        },
        {
          title: "No ticket? Watch it near Sol",
          paras: [
            "The game is on our screens at O'Connell St, an Irish pub a couple of minutes from Puerta del Sol. Beer on tap, food from the kitchen and a proper pub atmosphere. Crvena Zvezda supporters and Real Madrid supporters, all welcome.",
            "It's a big sports night: England v Croatia and Czechia v Spain in the UEFA Nations League also start at 20:45 Madrid time, both on our What's On list. There are no reservations: it's first come, first served, so it pays to arrive early.",
          ],
        },
        {
          title: "Before and after the game",
          paras: [
            "On Thursdays we open at 18:00, so there's time for a drink in the centre before heading to the arena. After the final buzzer, come back to Sol: O'Connell St is open until 03:00.",
          ],
        },
        {
          title: "Opening hours",
          list: [
            "Monday to Thursday: 18:00–03:00",
            "Friday: from 16:00",
            "Saturday: from 15:00",
            "Sunday: from 14:00",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/sports", label: "Live sport at O'Connell St" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/real-madrid-crvena-zvezda-jueves-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Real Madrid–Crvena Zvezda, jue 12 nov 21:00: noche de Euroliga junto a Sol",
      description:
        "Real Madrid–Crvena Zvezda, jornada 11 de la Euroliga, jueves 12 de noviembre de 2026, 21:00 (hora de Madrid), en el Movistar Arena. Antes o después, O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol, abre de 18:00 a 03:00.",
      eyebrow: "Euroliga · jueves 12 de noviembre de 2026 · 21:00",
      h1: "Real Madrid–Crvena Zvezda: jueves de Euroliga en Sol",
      lead: "El Real Madrid recibe al Crvena Zvezda Meridianbet Belgrade en el Movistar Arena el jueves 12 de noviembre, jornada 11 de la Euroliga. O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol, abre a las 18:00 y cierra a las 03:00.",
      screeningName: "Real Madrid–Crvena Zvezda en directo en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Real Madrid–Crvena Zvezda Meridianbet Belgrade, Euroliga, jornada 11",
            "Jueves 12 de noviembre de 2026, 21:00 (hora de Madrid)",
            "Movistar Arena, Avenida de Felipe II, Madrid. Puertas a las 20:00, según el recinto",
          ],
          note: "Fecha, hora y pabellón según la Euroliga, el Real Madrid y el Movistar Arena. Los horarios pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Sin entrada: en directo cerca de Sol",
          paras: [
            "El partido sale en nuestras pantallas, en un pub irlandés a un par de minutos de la Puerta del Sol: cerveza de grifo, comida de cocina y ambiente de pub. Aficionados del Real Madrid y del Crvena Zvezda, todos bienvenidos.",
            "Esa noche también hay Liga de Naciones a las 20:45: Inglaterra–Croacia y Chequia–España, los dos en la Agenda. No hay reservas: por orden de llegada.",
          ],
        },
        {
          title: "Antes y después",
          paras: [
            "Los jueves abrimos a las 18:00: hay tiempo para tomar algo en el centro antes de ir al pabellón. Al terminar, vuelve a Sol: O'Connell St abre hasta las 03:00.",
          ],
        },
        {
          title: "Horario",
          list: [
            "De lunes a jueves: 18:00–03:00",
            "Viernes: desde las 16:00",
            "Sábado: desde las 15:00",
            "Domingo: desde las 14:00",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/sports", label: "Deporte en directo" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/real-madrid-crvena-zvezda-thursday-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
