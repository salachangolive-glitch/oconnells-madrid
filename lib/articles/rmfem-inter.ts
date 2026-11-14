import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Real Madrid v Inter, UEFA Women's Champions League, league phase MD5
 * (DG 2 Nov 2026; Radar 2026-11-02-profundo §2, fichas-5bis/2026-11-18).
 * Facts: match.uefa.com/v5 comp 28 id 2050566: 2026-11-18T17:45Z = 18:45 CET,
 * Estadio Alfredo Di Stéfano (re-read 2 Nov 2026); realmadrid.com tickets page
 * (mié 18 nov 18:45). TV channel NOT verified → «TV channel TBC» /
 * «Canal por confirmar». No fan numbers. Wednesday hours 18:00–03:00.
 */
export const RMFEM_INTER: MatchArticleData = {
  paths: {
    en: "/news/real-madrid-inter-womens-champions-league-sol",
    es: "/es/noticias/real-madrid-inter-champions-femenina-sol",
  },
  published: "2026-11-02T11:00:00+01:00",
  startDate: "2026-11-18T18:45:00+01:00",
  sport: "Football",
  sportsEventName: "Real Madrid v Inter (UEFA Women's Champions League)",
  homeTeam: "Real Madrid",
  awayTeam: "Inter",
  venue: "Estadio Alfredo Di Stéfano",
  copy: {
    en: {
      title: "Real Madrid v Inter, Wed 18 Nov 18:45: Women's Champions League near Sol",
      description:
        "Real Madrid v Inter, UEFA Women's Champions League league phase, Wednesday 18 November 2026, 18:45 Madrid time at the Estadio Alfredo Di Stéfano. Watch it live at O'Connell St, an Irish pub at Espoz y Mina 7, next to Puerta del Sol.",
      eyebrow: "UEFA Women's Champions League · Wednesday 18 November 2026 · 18:45",
      h1: "Real Madrid v Inter: a Women's Champions League evening in Sol",
      lead: "Real Madrid host Inter at the Estadio Alfredo Di Stéfano on Wednesday 18 November. O'Connell St, an Irish pub at Espoz y Mina 7, next to Puerta del Sol, shows the match live on the screens.",
      screeningName: "Real Madrid v Inter live on the screens at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Real Madrid v Inter, UEFA Women's Champions League, league phase, matchday 5",
            "Wednesday 18 November 2026, 18:45 Madrid time",
            "Estadio Alfredo Di Stéfano, Valdebebas (Madrid)",
            "TV channel TBC",
          ],
          note: "Date, kick-off and venue as listed by UEFA and Real Madrid. Kick-off times can move, so check again on the day.",
        },
        {
          title: "Live at O'Connell St",
          paras: [
            "On Wednesdays O'Connell St opens at 18:00, so you can be at the bar with a pint before kick-off, and we stay open until 03:00 for the rest of the evening.",
            "Beer on tap, food and the match on the screens, a couple of minutes from Puerta del Sol. First come, first served.",
          ],
          extra: { lang: "it", text: "Tifosi dell'Inter a Madrid: la partita è in diretta da O'Connell St, pub irlandese vicino a Puerta del Sol." },
        },
        {
          title: "More Women's Champions League in Madrid",
          paras: [
            "A week earlier, on Tuesday 10 November at 18:45, Real Madrid play Paris FC at the Di Stéfano. Both matches are on our What's On page.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/champions-league", label: "Champions League in Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/real-madrid-inter-champions-femenina-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Real Madrid–Inter, mié 18 nov 18:45: Champions femenina junto a Sol",
      description:
        "Real Madrid–Inter, fase de liga de la Liga de Campeones femenina de la UEFA, miércoles 18 de noviembre de 2026, 18:45 (hora de Madrid), en el Estadio Alfredo Di Stéfano. En directo en O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol.",
      eyebrow: "Champions femenina · miércoles 18 de noviembre de 2026 · 18:45",
      h1: "Real Madrid–Inter: noche de Champions femenina en Sol",
      lead: "El Real Madrid recibe al Inter en el Estadio Alfredo Di Stéfano el miércoles 18 de noviembre. O'Connell St, pub irlandés en Espoz y Mina 7, junto a la Puerta del Sol, lo pone en directo en sus pantallas.",
      screeningName: "Real Madrid–Inter en directo en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Real Madrid–Inter, Liga de Campeones femenina de la UEFA, fase de liga, jornada 5",
            "Miércoles 18 de noviembre de 2026, 18:45 (hora de Madrid)",
            "Estadio Alfredo Di Stéfano, Valdebebas (Madrid)",
            "Canal por confirmar",
          ],
          note: "Fecha, hora y estadio según la UEFA y el Real Madrid. Los horarios pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "En directo en O'Connell St",
          paras: [
            "Los miércoles O'Connell St abre a las 18:00: hay tiempo para pedir una cerveza antes del inicio, y seguimos abiertos hasta las 03:00.",
            "Cerveza de grifo, comida y el partido en pantalla, a un par de minutos de la Puerta del Sol. Por orden de llegada.",
          ],
          extra: { lang: "it", text: "Tifosi dell'Inter a Madrid: la partita è in diretta da O'Connell St, pub irlandese vicino a Puerta del Sol." },
        },
        {
          title: "Más Champions femenina en Madrid",
          paras: [
            "Una semana antes, el martes 10 de noviembre a las 18:45, el Real Madrid juega contra el Paris FC en el Di Stéfano. Los dos partidos están en la Agenda.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/champions-league", label: "Champions en Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/real-madrid-inter-womens-champions-league-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
