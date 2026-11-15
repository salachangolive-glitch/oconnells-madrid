import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Liverpool v Manchester United, Premier League MW11 (15 Nov 2026 article,
 * routine "eventos importantes", Radar 15 Nov: OC).
 * footballapi.pulselive.com (premierleague.com) read 15 Nov 2026: Sun 22 Nov
 * 2026 16:30 GMT = 17:30 Madrid, Anfield. lib/fixtures row
 * 2026-11-22-liverpool-manchesterunited (DAZN). Sunday doors 14:00.
 */
export const LIVERPOOL_MANUNITED: MatchArticleData = {
  paths: {
    en: "/news/liverpool-manchester-united-sunday-sol",
    es: "/es/noticias/liverpool-manchester-united-domingo-sol",
  },
  published: "2026-11-15T10:00:00+01:00",
  startDate: "2026-11-22T17:30:00+01:00",
  sport: "Football",
  sportsEventName: "Liverpool v Manchester United (Premier League)",
  homeTeam: "Liverpool",
  awayTeam: "Manchester United",
  venue: "Anfield",
  venueLocality: "Liverpool",
  copy: {
    en: {
      title:
        "Liverpool v Man United, Sun 22 Nov 17:30: Premier League at an Irish pub near Sol",
      description:
        "Liverpool v Manchester United, Premier League matchweek 11, Sunday 22 November 2026, 17:30 Madrid time at Anfield. Watch it on DAZN at O'Connell St, Espoz y Mina 7, next to Puerta del Sol.",
      eyebrow: "Premier League · Sunday 22 November 2026 · 17:30",
      h1: "Liverpool v Manchester United: Sunday afternoon from Anfield, near Sol",
      lead:
        "Liverpool and Manchester United meet at Anfield on Sunday 22 November, 17:30 Madrid time. If you are in Madrid that weekend — on a city break, studying here or living in the centre — O'Connell St, the Irish pub at Espoz y Mina 7 a couple of minutes from Puerta del Sol, has it on the screens: a fans meeting point near Sol for Reds and United supporters alike.",
      screeningName: "Liverpool v Manchester United live on screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Liverpool v Manchester United, Premier League, matchweek 11",
            "Sunday 22 November 2026, 17:30 Madrid time (16:30 UK time)",
            "Anfield, Liverpool",
            "On DAZN",
          ],
          note: "Kick-off as published by the Premier League. Premier League times can move, so check again on the day.",
        },
        {
          title: "Getting to O'Connell St",
          paras: [
            "We are at Calle de Espoz y Mina 7, a short walk from Puerta del Sol. Sol station (Metro and Cercanías) comes out right on the square; from there head for Calle de Espoz y Mina and look for number 7, a red facade with gold O'CONNELL ST. lettering above the door. The directions link below opens the Maps pin for this pub — two Irish pub listings can share number 7, so follow the O'Connell St one.",
            "On Sundays O'Connell St opens at 14:00 and stays open until 03:00, so there is time for lunch in the centre before kick-off and the evening LaLiga games afterwards. If other matches overlap, ask at the bar which screen has Anfield.",
          ],
        },
        {
          title: "The rest of the weekend",
          paras: [
            "Saturday 21 November has Newcastle v Arsenal at 18:30 and Real Madrid v Celta at the Bernabéu at 21:00 — the guides are in the links below if you are planning a full football weekend in Sol.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        {
          href: "/news/newcastle-arsenal-saturday-night-sol",
          label: "Newcastle v Arsenal, Saturday 21 Nov",
        },
        {
          href: "/news/real-madrid-celta-saturday-night-sol",
          label: "Real Madrid v Celta, Saturday 21 Nov",
        },
        { href: "/premier-league", label: "Premier League in Madrid" },
        { href: "/whats-on", label: "What's On" },
      ],
      other: {
        href: "/es/noticias/liverpool-manchester-united-domingo-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Sports screens inside O'Connell St Irish pub near Puerta del Sol",
    },
    es: {
      title:
        "Liverpool–Manchester United, dom 22 nov 17:30: Premier en pub junto a Sol",
      description:
        "Liverpool–Manchester United, Premier League jornada 11, domingo 22 de noviembre de 2026, 17:30 hora de Madrid en Anfield. En DAZN en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol.",
      eyebrow: "Premier League · domingo 22 de noviembre de 2026 · 17:30",
      h1: "Liverpool–Manchester United: domingo por la tarde desde Anfield, junto a Sol",
      lead:
        "El Liverpool y el Manchester United se enfrentan en Anfield el domingo 22 de noviembre a las 17:30 hora de Madrid. Si ese fin de semana estás en Madrid, O'Connell St, el pub irlandés de Espoz y Mina 7 a un par de minutos de Puerta del Sol, lo pone en pantalla: punto de encuentro junto a Sol para aficionados de los dos equipos.",
      screeningName:
        "Liverpool–Manchester United en directo en pantalla en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Liverpool–Manchester United, Premier League, jornada 11",
            "Domingo 22 de noviembre de 2026, 17:30 hora de Madrid (16:30 en Reino Unido)",
            "Anfield, Liverpool",
            "En DAZN",
          ],
          note: "Hora publicada por la Premier League. Los horarios de la Premier pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Cómo llegar a O'Connell St",
          paras: [
            "Estamos en la calle de Espoz y Mina 7, a pocos pasos de Puerta del Sol. La estación de Sol (Metro y Cercanías) sale a la misma plaza; desde ahí ve a la calle de Espoz y Mina y busca el número 7: fachada roja con letras doradas O'CONNELL ST. sobre la puerta.",
            "Los domingos O'Connell St abre a las 14:00 y cierra a las 03:00. Si coinciden varios partidos, pregunta en barra qué pantalla tiene el de Anfield.",
          ],
        },
        {
          title: "El resto del fin de semana",
          paras: [
            "El sábado 21 de noviembre hay Newcastle–Arsenal a las 18:30 y Real Madrid–Celta en el Bernabéu a las 21:00: tienes las guías en los enlaces.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        {
          href: "/es/noticias/newcastle-arsenal-sabado-sol",
          label: "Newcastle–Arsenal, sábado 21 nov",
        },
        { href: "/es/premier-league", label: "Premier League en Madrid" },
        { href: "/es/whats-on", label: "Agenda" },
      ],
      other: {
        href: "/news/liverpool-manchester-united-sunday-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Pantallas deportivas en O'Connell St, pub irlandés junto a Puerta del Sol",
    },
  },
};
