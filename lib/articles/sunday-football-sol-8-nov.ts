import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Sunday 8 Nov stack at O'Connell St. Archived 9 Nov 2026: past event.
 * Banned: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const SUNDAY_FOOTBALL_SOL: MatchArticleData = {
  paths: {
    en: "/news/sunday-football-sol-8-nov",
    es: "/es/noticias/futbol-domingo-sol-8-nov",
  },
  published: "2026-11-06T16:50:00+01:00",
  startDate: "2026-11-08T15:30:00+01:00",
  sport: "American football",
  sportsEventName: "Bengals at Falcons (NFL Madrid Game)",
  homeTeam: "Atlanta Falcons",
  awayTeam: "Cincinnati Bengals",
  venue: "Santiago Bernabéu",
  fourBars: true,
  pastEvent: true,
  copy: {
    en: {
      title: "Sunday football near Sol, 8 Nov: past event",
      description:
        "Sunday 8 November 2026 near Sol: open 12:00, Bengals at Falcons 15:30, more NFL from 19:00, Atlético v Barcelona 21:00. See What's On for what's next.",
      eyebrow: "Past event · Sunday 8 November 2026 · Sol",
      h1: "Sunday football near Sol: 8 November from midday",
      lead: "Sunday 8 November 2026 around Puerta del Sol: four sibling bars — O'Reilly's, Dubliners, O'Connell's and Four Corner. At O'Connell's, Espoz y Mina 7, we opened from 12:00, Bengals at Falcons was at 15:30, more NFL from 19:00, and Atlético v Barcelona at 21:00.",
      screeningName: "Sunday football at O'Connell St, 8 November",
      sections: [
        {
          title: "The Sunday stack",
          list: [
            "12:00 — doors opened (one-day exception; usual Sundays from 14:00)",
            "15:30 — Bengals at Falcons, NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "19:00+ — more Sunday NFL on the screens",
            "21:00 — Atlético Madrid v Barcelona, LaLiga",
          ],
          note: "Usual Sundays open at 14:00. Confirmed times for what is next are on What's On.",
        },
        {
          title: "One room, a long Sunday",
          paras: [
            "O'Connell St is an independent Irish pub a couple of minutes from Puerta del Sol. That Sunday, NFL and LaLiga shared the same room until 03:00.",
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
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/futbol-domingo-sol-8-nov", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Fútbol domingo en Sol, 8 nov: evento pasado",
      description:
        "Domingo 8 de noviembre de 2026 junto a Sol: abrimos 12:00, Bengals–Falcons 15:30, más NFL desde las 19:00, Atlético–Barcelona 21:00. Consulta la Agenda para lo que viene.",
      eyebrow: "Evento pasado · domingo 8 de noviembre de 2026 · Sol",
      h1: "Fútbol domingo junto a Sol: 8 de noviembre desde mediodía",
      lead: "El domingo 8 de noviembre de 2026 alrededor de la Puerta del Sol: cuatro bares hermanos — O'Reilly's, Dubliners, O'Connell's y Four Corner. En O'Connell's, Espoz y Mina 7, abrimos desde las 12:00, Bengals–Falcons a las 15:30, más NFL desde las 19:00, y Atlético–Barcelona a las 21:00.",
      screeningName: "Fútbol domingo en O'Connell St, 8 de noviembre",
      sections: [
        {
          title: "El domingo, en orden",
          list: [
            "12:00 — abrimos (excepción de un solo día; los domingos habituales, desde las 14:00)",
            "15:30 — Bengals–Falcons, partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "19:00+ — más NFL del domingo en las pantallas",
            "21:00 — Atlético de Madrid–Barcelona, LaLiga",
          ],
          note: "Los domingos habituales abrimos a las 14:00. Lo que viene, con hora confirmada, está en la Agenda.",
        },
        {
          title: "Una sala, un domingo largo",
          paras: [
            "O'Connell St es un pub irlandés independiente a un par de minutos de la Puerta del Sol. Aquel domingo, la NFL y LaLiga compartieron la misma sala hasta las 03:00.",
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
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/sunday-football-sol-8-nov", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
