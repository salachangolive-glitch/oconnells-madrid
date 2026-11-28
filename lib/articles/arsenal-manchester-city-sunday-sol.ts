import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Arsenal v Manchester City, Premier League MW12 (17 Nov 2026 article,
 * routine "eventos importantes", Radar 16 Nov §7: los 3 pubs, OC angle Premier).
 * footballapi.pulselive.com (premierleague.com) compSeason 841, fixture 129033,
 * read 17 Nov 2026: Sun 29 Nov 2026 16:30 GMT = 17:30 Madrid, Emirates Stadium.
 * Premier League on DAZN (owner rule). Sunday doors 14:00.
 */
export const ARSENAL_MANCITY: MatchArticleData = {
  paths: {
    en: "/news/arsenal-manchester-city-sunday-sol",
    es: "/es/noticias/arsenal-manchester-city-domingo-sol",
  },
  published: "2026-11-17T10:00:00+01:00",
  startDate: "2026-11-29T17:30:00+01:00",
  sport: "Football",
  sportsEventName: "Arsenal v Manchester City (Premier League)",
  homeTeam: "Arsenal",
  awayTeam: "Manchester City",
  venue: "Emirates Stadium",
  venueLocality: "London",
  copy: {
    en: {
      title:
        "Arsenal v Man City, Sun 29 Nov 17:30: Premier League at an Irish pub near Sol",
      description:
        "Arsenal v Manchester City, Premier League matchweek 12, Sunday 29 November 2026, 17:30 Madrid time at the Emirates. Watch it on DAZN at O'Connell St, Espoz y Mina 7, next to Puerta del Sol.",
      eyebrow: "Premier League · Sunday 29 November 2026 · 17:30",
      h1: "Arsenal v Manchester City: Sunday afternoon from the Emirates, near Sol",
      lead:
        "Arsenal host Manchester City at the Emirates Stadium on Sunday 29 November, 17:30 Madrid time. If you are in Madrid that weekend — visiting for a few days, studying here or living in the centre — O'Connell St, the Irish pub at Espoz y Mina 7 a couple of minutes from Puerta del Sol, has it on the screens: a fans meeting point near Sol for Gunners and City supporters alike.",
      screeningName: "Arsenal v Manchester City live on screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Arsenal v Manchester City, Premier League, matchweek 12",
            "Sunday 29 November 2026, 17:30 Madrid time (16:30 UK time)",
            "Emirates Stadium, London",
            "On DAZN",
          ],
          note: "Kick-off as published by the Premier League. Premier League times can move, so check again on the day.",
        },
        {
          title: "Getting to O'Connell St",
          paras: [
            "We are at Calle de Espoz y Mina 7, a short walk from Puerta del Sol. Sol station (Metro and Cercanías) comes out right on the square; from there head for Calle de Espoz y Mina and look for number 7, a red facade with gold O'CONNELL ST. lettering above the door. The directions link below opens the Maps pin for this pub — two Irish pub listings can share number 7, so follow the O'Connell St one.",
            "On Sundays O'Connell St opens at 14:00 and stays open until 03:00, so there is time for lunch in the centre before kick-off and the evening LaLiga games afterwards.",
          ],
        },
        {
          title: "A busy Sunday on the screens",
          paras: [
            "That Sunday afternoon is a crowded one for sport: other football and rugby fixtures fall around the same time. If several games overlap, ask at the bar which screen has the Emirates.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/premier-league", label: "Premier League in Madrid" },
        { href: "/whats-on", label: "What's On" },
        { href: "/news", label: "News" },
      ],
      other: {
        href: "/es/noticias/arsenal-manchester-city-domingo-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Sports screens inside O'Connell St Irish pub near Puerta del Sol",
    },
    es: {
      title:
        "Arsenal–Manchester City, dom 29 nov 17:30: Premier en pub junto a Sol",
      description:
        "Arsenal–Manchester City, Premier League jornada 12, domingo 29 de noviembre de 2026, 17:30 hora de Madrid en el Emirates. En DAZN en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol.",
      eyebrow: "Premier League · domingo 29 de noviembre de 2026 · 17:30",
      h1: "Arsenal–Manchester City: domingo por la tarde desde el Emirates, junto a Sol",
      lead:
        "El Arsenal recibe al Manchester City en el Emirates Stadium el domingo 29 de noviembre a las 17:30 hora de Madrid. Si ese fin de semana estás en Madrid, O'Connell St, el pub irlandés de Espoz y Mina 7 a un par de minutos de Puerta del Sol, lo pone en pantalla: punto de encuentro junto a Sol para aficionados de los dos equipos.",
      screeningName:
        "Arsenal–Manchester City en directo en pantalla en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Arsenal–Manchester City, Premier League, jornada 12",
            "Domingo 29 de noviembre de 2026, 17:30 hora de Madrid (16:30 en Reino Unido)",
            "Emirates Stadium, Londres",
            "En DAZN",
          ],
          note: "Hora publicada por la Premier League. Los horarios de la Premier pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Cómo llegar a O'Connell St",
          paras: [
            "Estamos en la calle de Espoz y Mina 7, a pocos pasos de Puerta del Sol. La estación de Sol (Metro y Cercanías) sale a la misma plaza; desde ahí ve a la calle de Espoz y Mina y busca el número 7: fachada roja con letras doradas O'CONNELL ST. sobre la puerta.",
            "Los domingos O'Connell St abre a las 14:00 y cierra a las 03:00. Si coinciden varios partidos, pregunta en barra qué pantalla tiene el del Emirates.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/premier-league", label: "Premier League en Madrid" },
        { href: "/es/whats-on", label: "Agenda" },
      ],
      other: {
        href: "/news/arsenal-manchester-city-sunday-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Pantallas deportivas en O'Connell St, pub irlandés junto a Puerta del Sol",
    },
  },
};
