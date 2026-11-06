import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Sunday 8 Nov stack at O'Connell St: open 12:00 → Bengals at Falcons 15:30 →
 * NFL from 19:00 → Atlético–Barça 21:00 (ciclo 4).
 * Facts: venue hours exception; nfl.com REG 9 15:30; laliga.com J12 21:00.
 * Ask which game is on; no promise every game on every screen.
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
  copy: {
    en: {
      title: "Sunday football near Sol, 8 November",
      description:
        "Sunday 8 Nov near Sol: open 12:00, Bengals at Falcons 15:30, more NFL from 19:00, Atlético v Barcelona 21:00. Ask which game is on.",
      eyebrow: "Sunday 8 November 2026 · from 12:00 · Sol",
      h1: "Sunday football near Sol: 8 November from midday",
      lead: "Sunday 8 November at O'Connell St, Espoz y Mina 7, next to Puerta del Sol: we open from 12:00, Bengals at Falcons is at 15:30, more NFL from 19:00, and Atlético v Barcelona at 21:00. Ask which game is on.",
      screeningName: "Sunday football at O'Connell St, 8 November",
      sections: [
        {
          title: "The Sunday stack",
          list: [
            "12:00 — doors open (one-day exception; usual Sundays from 14:00)",
            "15:30 — Bengals at Falcons, NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "19:00+ — more Sunday NFL on the screens",
            "21:00 — Atlético Madrid v Barcelona, LaLiga, live near Sol when we are showing it",
          ],
          note: "We do not promise every game on every screen. Ask at the bar which game is on. First come, first served.",
        },
        {
          title: "One room, a long Sunday",
          paras: [
            "O'Connell St is an independent Irish pub a couple of minutes from Puerta del Sol. NFL Sunday and LaLiga share the same room. Screens and slots are shared across the afternoon and night — if you are looking for a particular game, ask which one is up.",
            "Hours cover the late kickoff: we stay open until 03:00. Confirmed times are on What's On; the NFL Sunday plan is on NFL in Madrid.",
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
        { href: "/news/atletico-barcelona-sunday-night-sol", label: "Atlético v Barcelona, Sunday night in Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/futbol-domingo-sol-8-nov", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Fútbol domingo en Sol, 8 nov",
      description:
        "Domingo 8 nov junto a Sol: abrimos 12:00, Bengals–Falcons 15:30, más NFL desde las 19:00, Atlético–Barcelona 21:00. Pregunta qué partido echan.",
      eyebrow: "Domingo 8 de noviembre de 2026 · desde las 12:00 · Sol",
      h1: "Fútbol domingo junto a Sol: 8 de noviembre desde mediodía",
      lead: "El domingo 8 de noviembre en O'Connell St, Espoz y Mina 7, junto a la Puerta del Sol: abrimos desde las 12:00, Bengals–Falcons a las 15:30, más NFL desde las 19:00, y Atlético–Barcelona a las 21:00. Pregunta qué partido echan.",
      screeningName: "Fútbol domingo en O'Connell St, 8 de noviembre",
      sections: [
        {
          title: "El domingo, en orden",
          list: [
            "12:00 — abrimos (excepción de un solo día; los domingos habituales, desde las 14:00)",
            "15:30 — Bengals–Falcons, partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "19:00+ — más NFL del domingo en las pantallas",
            "21:00 — Atlético de Madrid–Barcelona, LaLiga, en directo junto a Sol cuando lo estemos emitiendo",
          ],
          note: "No prometemos todos los partidos en todas las pantallas. Pregunta en la barra qué hay puesto. Por orden de llegada.",
        },
        {
          title: "Una sala, un domingo largo",
          paras: [
            "O'Connell St es un pub irlandés independiente a un par de minutos de la Puerta del Sol. El domingo NFL y LaLiga comparten la misma sala. Las pantallas y las franjas se reparten por la tarde y la noche: si buscas un partido concreto, pregunta cuál echan.",
            "El horario cubre el inicio tardío: abrimos hasta las 03:00. Los horarios confirmados están en la Agenda; el plan NFL del domingo, en NFL en Madrid.",
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
