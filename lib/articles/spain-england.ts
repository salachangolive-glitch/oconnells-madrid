import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Spain v England, UEFA Nations League, League A Group 3, last league-phase
 * matchday (DG 2 Nov 2026, Radar 2026-11-02-profundo + fichas-5bis/2026-11-15).
 * Facts:
 *  - match.uefa.com/v5 comp 2014 id 2047904: 2026-11-15T19:45Z = 20:45 CET,
 *    Estadio Metropolitano, Group A3 (re-read 2 Nov 2026).
 *  - rfef.es: Riyadh Air Metropolitano; tickets.rfef.es «Domingo, 15 de noviembre / 20:45».
 *  - englandfootball.com: 19:45 UK.
 *  - Metro: atleticodemadrid.com (L7 Estadio Metropolitano next to the stadium;
 *    Las Rosas L2 about a quarter of an hour on foot); riyadhairmetropolitano.com
 *    (metro until about 01:30); EMT SE721 Canillejas–Estadio Metropolitano on
 *    match days, from 2 h before (emtmadrid.es, Oct 2026 notices).
 *  - TV channel: not named (DG 4 Nov 2026: rtve.es only says RTVE shows Spain's
 *    "two November matches", never this match by date on La 1/RTVE Play).
 *  - No fan numbers. Sunday hours 14:00–03:00 (owner confirmed 22 and 24 Oct; DG 4 Nov 2026).
 */
export const SPAIN_ENGLAND: MatchArticleData = {
  paths: {
    en: "/news/spain-england-sunday-night-sol",
    es: "/es/noticias/espana-inglaterra-domingo-sol",
  },
  published: "2026-11-02T11:00:00+01:00",
  startDate: "2026-11-15T20:45:00+01:00",
  sport: "Football",
  sportsEventName: "Spain v England (UEFA Nations League)",
  homeTeam: "Spain",
  awayTeam: "England",
  venue: "Riyadh Air Metropolitano",
  copy: {
    en: {
      title: "Spain v England, Sun 15 Nov 20:45: watch it in an Irish pub near Sol",
      description:
        "Spain v England, UEFA Nations League, Sunday 15 November 2026, 20:45 Madrid time (19:45 UK) at the Riyadh Air Metropolitano. Watch it live on the big screen at O'Connell St, Espoz y Mina 7, next to Puerta del Sol. Open until 03:00.",
      eyebrow: "UEFA Nations League · Sunday 15 November 2026 · 20:45",
      h1: "Spain v England: Sunday night football in Sol",
      lead: "Spain play England at the Riyadh Air Metropolitano on Sunday 15 November. In Madrid for the weekend, with or without a ticket? O'Connell St, an Irish pub at Espoz y Mina 7, next to Puerta del Sol, shows the match live on the big screen, and stays open until 03:00 for the rest of the night.",
      screeningName: "Spain v England live on the big screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Spain v England, UEFA Nations League, League A, Group 3, last matchday of the league phase",
            "Sunday 15 November 2026, 20:45 Madrid time (19:45 in the UK)",
            "Riyadh Air Metropolitano, Madrid",
          ],
          note: "Date, kick-off and venue as listed by UEFA and the Spanish FA (RFEF). Kick-off times can move, so check again on the day.",
        },
        {
          title: "Live on the big screen at O'Connell St",
          paras: [
            "O'Connell St is open on Sundays from 14:00, open until 03:00. Plenty of time for a late lunch and a pint in the centre before kick-off, and no rush once the final whistle goes.",
            "Irish pub atmosphere a couple of minutes from Puerta del Sol: beer on tap, food from the kitchen and the match on the big screen. Spain supporters and England supporters, all welcome. No reservations: it's first come, first served, so on a big night it pays to arrive early.",
          ],
        },
        {
          title: "Going to the Metropolitano",
          list: [
            "Estadio Metropolitano station, on Metro line 7, is right next to the stadium.",
            "From Sol, Metro line 2 runs to Las Rosas, the end of the line; Atlético de Madrid says the stadium is about a quarter of an hour on foot from there.",
            "On match days EMT runs the SE721 shuttle bus between Canillejas (Metro line 5) and the stadium, starting two hours before kick-off.",
            "The stadium says the metro runs until about 01:30.",
          ],
          note: "Sources: atleticodemadrid.com, riyadhairmetropolitano.com and emtmadrid.es. Check crtm.es and the EMT site for any match-day notices for 15 November.",
        },
        {
          title: "After the match: back to Sol",
          paras: [
            "Line 2 takes you from Las Rosas straight back to Sol. O'Connell St is open until 03:00 on Sunday, so the night doesn't have to end at the final whistle.",
          ],
        },
        {
          title: "A full week of Nations League",
          paras: [
            "England play Croatia at Wembley on Thursday 12 November, 20:45 Madrid time, the same night as Czechia v Spain in Prague. On Sunday 15, Croatia v Czechia kicks off at the same time as Spain v England. All of them are on our What's On page.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/news/england-croatia-thursday-night-sol", label: "England v Croatia, Thursday 12 November" },
        { href: "/whats-on", label: "What's On" },
        { href: "/watch-football-madrid", label: "Watch football in Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/espana-inglaterra-domingo-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "España–Inglaterra, dom 15 nov 20:45: en directo en un pub irlandés junto a Sol",
      description:
        "España–Inglaterra, Liga de Naciones de la UEFA, domingo 15 de noviembre de 2026, 20:45 (hora de Madrid), en el Riyadh Air Metropolitano. En directo en pantalla grande en O'Connell St, Espoz y Mina 7, junto a la Puerta del Sol. Abierto hasta las 03:00.",
      eyebrow: "Liga de Naciones · domingo 15 de noviembre de 2026 · 20:45",
      h1: "España–Inglaterra: domingo de fútbol en Sol",
      lead: "España recibe a Inglaterra en el Riyadh Air Metropolitano el domingo 15 de noviembre. ¿Estás en Madrid ese fin de semana, con entrada o sin ella? O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol, lo pone en directo en pantalla grande y abre hasta las 03:00 para seguir la noche.",
      screeningName: "España–Inglaterra en directo en pantalla grande en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "España–Inglaterra, Liga de Naciones de la UEFA, Liga A, Grupo 3, última jornada de la fase de liga",
            "Domingo 15 de noviembre de 2026, 20:45 (hora de Madrid)",
            "Riyadh Air Metropolitano, Madrid",
          ],
          note: "Fecha, hora y estadio según la UEFA y la RFEF. Los horarios pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "En directo en pantalla grande en O'Connell St",
          paras: [
            "O'Connell St abre los domingos desde las 14:00, abierto hasta las 03:00. Hay tiempo de sobra para comer tarde y tomar una cerveza en el centro antes del partido, y ninguna prisa al final.",
            "Ambiente de pub irlandés a un par de minutos de la Puerta del Sol: cerveza de grifo, comida de cocina y el partido en pantalla grande. Aficionados de España y de Inglaterra, todos bienvenidos. Por orden de llegada: en las noches grandes conviene venir pronto.",
          ],
        },
        {
          title: "Cómo ir al Metropolitano",
          list: [
            "La estación Estadio Metropolitano, de la línea 7 de Metro, está junto al estadio.",
            "Desde Sol, la línea 2 llega hasta Las Rosas, final de línea; según el Atlético de Madrid, desde allí hay un cuarto de hora a pie hasta el estadio.",
            "Los días de partido la EMT pone la lanzadera SE721 entre Canillejas (línea 5) y el estadio, desde dos horas antes del inicio.",
            "Según el estadio, el metro funciona hasta las 01:30 aproximadamente.",
          ],
          note: "Fuentes: atleticodemadrid.com, riyadhairmetropolitano.com y emtmadrid.es. Revisa crtm.es y la web de la EMT por si hay avisos para el 15 de noviembre.",
        },
        {
          title: "Después del partido: vuelta a Sol",
          paras: [
            "La línea 2 te deja de Las Rosas directamente en Sol. O'Connell St abre el domingo hasta las 03:00: la noche no tiene por qué acabar con el pitido final.",
          ],
        },
        {
          title: "Una semana de Liga de Naciones",
          paras: [
            "Inglaterra juega contra Croacia en Wembley el jueves 12 de noviembre a las 20:45 (hora de Madrid), la misma noche del Chequia–España en Praga. El domingo 15, el Croacia–Chequia empieza a la misma hora que el España–Inglaterra. Todos están en la Agenda.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/watch-football-madrid", label: "Ver fútbol en Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/spain-england-sunday-night-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
