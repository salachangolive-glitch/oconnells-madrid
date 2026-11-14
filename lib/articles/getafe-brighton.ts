import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Getafe v Brighton & Hove Albion, UEFA Conference League league phase MD3
 * (owner standing order 4 Nov 2026 18:21 via DG: travelling fans, D-1).
 * Facts (read 4 Nov 2026):
 *  - match.uefa.com/v5/matches/2050352: 2026-11-05T20:00Z = 21:00 CET, Coliseum, Getafe.
 *  - getafecf.com/en/news/getafe-cf-schedule-for-the-uefa-conference-league: 5 Nov 21:00, Coliseum.
 *  - brightonandhovealbion.com ticket news (8pm UK) + "Information for fans travelling
 *    to Getafe" (3 Nov): train to El Bercial, turnstiles open 90 min before kick-off,
 *    no alcohol sold in the stadium, 20–30 min hold-back after the match.
 *  - TV channel in Spain: not confirmed → never named. No fan numbers, no prices.
 *  - Thursday hours 18:00–03:00 (lib/venue HOURS).
 */
export const GETAFE_BRIGHTON: MatchArticleData = {
  paths: {
    en: "/news/getafe-brighton-thursday-night-sol",
    es: "/es/noticias/getafe-brighton-jueves-sol",
  },
  published: "2026-11-04T19:00:00+01:00",
  startDate: "2026-11-05T21:00:00+01:00",
  sport: "Football",
  sportsEventName: "Getafe v Brighton & Hove Albion (UEFA Conference League)",
  homeTeam: "Getafe CF",
  awayTeam: "Brighton & Hove Albion",
  venue: "Coliseum",
  venueLocality: "Getafe",
  copy: {
    en: {
      title: "Getafe v Brighton, Thu 5 Nov 21:00: Brighton fans in Madrid, Irish pub near Sol",
      description:
        "Getafe v Brighton, UEFA Conference League, Thursday 5 November 2026, 21:00 Madrid time (20:00 UK) at the Coliseum in Getafe. Watch it live on the big screen at O'Connell St, Espoz y Mina 7, next to Puerta del Sol. Open from 18:00.",
      eyebrow: "UEFA Conference League · Thursday 5 November 2026 · 21:00",
      h1: "Brighton fans in Madrid: Getafe v Brighton, live near Sol",
      lead: "Albion play Getafe at the Coliseum on Thursday 5 November, matchday 3 of the UEFA Conference League league phase. Staying in central Madrid? O'Connell St, an Irish pub at Espoz y Mina 7, next to Puerta del Sol, shows the match live on the big screen, and stays open until 03:00 for the rest of the night.",
      screeningName: "Getafe v Brighton live on the big screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Getafe v Brighton & Hove Albion, UEFA Conference League, league phase, matchday 3",
            "Thursday 5 November 2026, 21:00 Madrid time (20:00 in the UK)",
            "Coliseum, Getafe: a separate town to the south of Madrid, not in the city centre",
            "TV channel in Spain: to be confirmed",
          ],
          note: "Date, kick-off and venue as listed by UEFA, Getafe CF and Brighton & Hove Albion. Kick-off times can move, so check again on the day.",
        },
        {
          title: "Going to the Coliseum? Read the club's guide first",
          paras: [
            "Getafe is outside Madrid, so the trip out takes time. Brighton & Hove Albion has published a guide for supporters travelling to this match. Among other things, the club advises taking the train to El Bercial if you use public transport, says the turnstiles open 90 minutes before kick-off and that no alcohol is sold inside the stadium, and warns that away supporters will be held back for around 20 to 30 minutes after the final whistle.",
            "Follow the club's advice and its updates on the day. The guide may be updated the evening before the match.",
          ],
          note: "Source: brightonandhovealbion.com, «Information for fans travelling to Getafe» (3 November 2026).",
        },
        {
          title: "No ticket? Watch it live in Sol",
          paras: [
            "On Thursdays O'Connell St opens at 18:00, three hours before kick-off. That leaves time for a pint and something to eat in the centre of Madrid, then the match live on the big screen from 21:00.",
            "Irish pub atmosphere a couple of minutes from Puerta del Sol: beer on tap, food from the kitchen and the football on the big screen. Albion supporters and Getafe supporters, all welcome. There are no reservations: it's first come, first served, so on a European night it pays to arrive early.",
          ],
        },
        {
          title: "After the match: back to the centre",
          paras: [
            "If you're at the Coliseum, allow for the hold-back and the journey back from Getafe. O'Connell St is open until 03:00 on Thursday night, so there's no rush to get back to Sol.",
          ],
        },
        {
          title: "Staying for the weekend?",
          paras: [
            "Brighton v Brentford in the Premier League is on our screens on Sunday 8 November at 15:00 Madrid time, the same day as the NFL Madrid Game at the Bernabéu. The full schedule, with Madrid times, is on our What's On page.",
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
        { href: "/watch-football-madrid", label: "Watch football in Sol" },
        { href: "/premier-league", label: "Premier League in Madrid" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/getafe-brighton-jueves-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Getafe–Brighton, jue 5 nov 21:00: en directo en un pub irlandés junto a Sol",
      description:
        "Getafe–Brighton, UEFA Conference League, jueves 5 de noviembre de 2026, 21:00 (hora de Madrid), en el Coliseum de Getafe. En directo en pantalla grande en O'Connell St, Espoz y Mina 7, junto a la Puerta del Sol. Abrimos a las 18:00.",
      eyebrow: "UEFA Conference League · jueves 5 de noviembre de 2026 · 21:00",
      h1: "Getafe–Brighton: noche de Conference League en Sol",
      lead: "El Getafe recibe al Brighton & Hove Albion en el Coliseum el jueves 5 de noviembre, jornada 3 de la fase de liga de la UEFA Conference League. ¿Estás en el centro de Madrid? O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol, pone el partido en directo en pantalla grande y abre hasta las 03:00.",
      screeningName: "Getafe–Brighton en directo en pantalla grande en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Getafe–Brighton & Hove Albion, UEFA Conference League, fase de liga, jornada 3",
            "Jueves 5 de noviembre de 2026, 21:00 (hora de Madrid; 20:00 en el Reino Unido)",
            "Coliseum, Getafe: al sur de Madrid, fuera del centro",
            "Canal en España: por confirmar",
          ],
          note: "Fecha, hora y estadio según la UEFA, el Getafe CF y el Brighton & Hove Albion. Los horarios pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Si vas al Coliseum",
          paras: [
            "Getafe está fuera de Madrid y el viaje lleva su tiempo. El Brighton ha publicado una guía para sus aficionados: recomienda el tren hasta El Bercial en transporte público, indica que los tornos abren 90 minutos antes del inicio y que en el estadio no se vende alcohol, y avisa de que la afición visitante esperará unos 20 o 30 minutos dentro del estadio al acabar el partido.",
          ],
          note: "Fuente: brightonandhovealbion.com, «Information for fans travelling to Getafe» (3 de noviembre de 2026).",
        },
        {
          title: "Sin entrada: en directo en Sol",
          paras: [
            "Los jueves O'Connell St abre a las 18:00, tres horas antes del partido: hay tiempo para una cerveza y algo de comer en el centro, y a las 21:00 el partido en pantalla grande.",
            "Ambiente de pub irlandés a un par de minutos de la Puerta del Sol: cerveza de grifo, comida de cocina y el fútbol en pantalla grande. Aficionados del Getafe y del Brighton, todos bienvenidos. No hay reservas: por orden de llegada, así que en las noches europeas conviene venir pronto.",
          ],
        },
        {
          title: "Después del partido",
          paras: [
            "O'Connell St abre el jueves hasta las 03:00: no hay prisa por volver a Sol desde Getafe.",
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
        { href: "/es/watch-football-madrid", label: "Ver fútbol en Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/getafe-brighton-thursday-night-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
