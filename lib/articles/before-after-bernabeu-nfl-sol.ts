import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Before/after Bengals–Falcons at the Bernabéu, from O'Connell St (ciclo 3).
 * Facts:
 *  - Sunday 8 Nov open from 12:00 (habitual Sunday 14:00).
 *  - Bengals at Falcons 15:30 Madrid, Bernabéu; ES channel DAZN · Cuatro.
 *  - NFL Experience Plaza de España and NFL House Palacio de las Alhajas are
 *    city context only — O'Connell St is an independent Irish pub, not the
 *    event organiser.
 * Banned in copy: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const BEFORE_AFTER_BERNABEU_NFL: MatchArticleData = {
  paths: {
    en: "/news/before-after-bernabeu-nfl-sol",
    es: "/es/noticias/antes-despues-bernabeu-nfl-sol",
  },
  published: "2026-11-06T16:40:00+01:00",
  startDate: "2026-11-08T15:30:00+01:00",
  sport: "American football",
  sportsEventName: "Bengals at Falcons (NFL Madrid Game)",
  homeTeam: "Atlanta Falcons",
  awayTeam: "Cincinnati Bengals",
  venue: "Santiago Bernabéu",
  fourBars: true,
  copy: {
    en: {
      title: "Before and after Bernabéu NFL, near Sol",
      description:
        "Before or after Bengals at Falcons at the Bernabéu: O'Connell St, Espoz y Mina 7, Sunday from 12:00. Independent Irish pub — not the organiser of those events.",
      eyebrow: "NFL Madrid · Sunday 8 November 2026 · before and after the Bernabéu",
      h1: "Before and after Bengals at Falcons: Irish pub near Sol",
      lead: "Bengals at Falcons kicks off at 15:30 at the Bernabéu. Four sibling bars sit around Puerta del Sol — O'Reilly's, Dubliners, O'Connell's and Four Corner. O'Connell's, Espoz y Mina 7, opens from 12:00 on Sunday 8 November: a stop before the stadium, and a place to come back to after.",
      screeningName: "Before and after Bengals at Falcons at O'Connell St",
      sections: [
        {
          title: "Before the kickoff",
          list: [
            "Open from 12:00 on Sunday 8 November (usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time, at the Bernabéu",
            "No stadium ticket? The game is on our screens from 15:30 (DAZN · Cuatro)",
          ],
          note: "First come, first served. We do not promise every kickoff on every screen.",
        },
        {
          title: "After the game: from 19:00",
          paras: [
            "From 19:00, O'Connell St is for when you come back from the stadium. More Sunday NFL goes on the screens — ask which game is on. The pub stays open until 03:00.",
          ],
        },
        {
          title: "NFL events in the city — not at our pub",
          paras: [
            "NFL Experience at Plaza de España and NFL House at Palacio de las Alhajas are city events this weekend. They are context for a trip to Madrid, not something we run.",
            "O'Connell St is an independent Irish pub near Sol. We are not the organiser of those events. Drop in for a pint before or after — Espoz y Mina 7, a short walk from Puerta del Sol.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/nfl-madrid", label: "NFL in Madrid" },
        { href: "/news/nfl-meeting-point-sol", label: "NFL meeting point near Sol" },
        { href: "/news/where-to-watch-nfl-madrid-sol", label: "Where to watch NFL this weekend near Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/antes-despues-bernabeu-nfl-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Antes y después NFL Bernabéu, Sol",
      description:
        "Antes o después de Bengals–Falcons en el Bernabéu: O'Connell St, Espoz y Mina 7, domingo desde las 12:00. Pub irlandés independiente, no organizamos el evento.",
      eyebrow: "NFL Madrid · domingo 8 de noviembre de 2026 · antes y después del Bernabéu",
      h1: "Antes y después de Bengals–Falcons: pub irlandés junto a Sol",
      lead: "Bengals–Falcons empieza a las 15:30 en el Bernabéu. Cuatro bares hermanos alrededor de la Puerta del Sol: O'Reilly's, Dubliners, O'Connell's y Four Corner. O'Connell's, Espoz y Mina 7, abre desde las 12:00 el domingo 8 de noviembre: una parada antes del estadio, y un sitio al que volver después.",
      screeningName: "Antes y después de Bengals–Falcons en O'Connell St",
      sections: [
        {
          title: "Antes del partido",
          list: [
            "Abrimos desde las 12:00 el domingo 8 de noviembre (los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid, en el Bernabéu",
            "¿Sin entrada? El partido está en nuestras pantallas desde las 15:30 (DAZN · Cuatro)",
          ],
          note: "Por orden de llegada. No prometemos todos los partidos en todas las pantallas.",
        },
        {
          title: "Después del partido: desde las 19:00",
          paras: [
            "A partir de las 19:00, O'Connell St es para cuando volváis del estadio. Hay más NFL del domingo en las pantallas — pregunta qué partido echan. El pub abre hasta las 03:00.",
          ],
        },
        {
          title: "Eventos NFL en la ciudad — no en nuestro pub",
          paras: [
            "NFL Experience en Plaza de España y NFL House en el Palacio de las Alhajas son eventos de la ciudad este fin de semana. Sirven de contexto para un viaje a Madrid; no los organizamos nosotros.",
            "O'Connell St es un pub irlandés independiente junto a Sol. No somos el organizador de esos eventos. Pásate a tomar una cerveza antes o después — Espoz y Mina 7, a un paso de la Puerta del Sol.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/nfl-madrid", label: "NFL en Madrid" },
        { href: "/es/noticias/punto-encuentro-nfl-sol", label: "Punto de encuentro NFL junto a Sol" },
        { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Dónde ver la NFL este finde junto a Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/before-after-bernabeu-nfl-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
