import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { ADDRESS } from "@/lib/venue";

const CRTM_L10_AVISO =
  "https://crtm.es/comunicacion/actualidad-del-servicio/avisos/19032026-alternativas-de-transporte-suspension-l10-metro-cuzco-nuevos-ministerios/";

/**
 * Real Madrid v PSV, UCL MD5 — Tue 24 Nov 2026, 21:00 Bernabéu.
 * O'Connell St only. Owner 23 Nov 2026 19:00 Madrid. No broadcaster named.
 */
export const RM_PSV_TUESDAY: MatchArticleData = {
  paths: {
    en: "/news/real-madrid-psv-tuesday-night-sol",
    es: "/es/noticias/real-madrid-psv-martes-sol",
  },
  published: "2026-11-23T19:00:00+01:00",
  startDate: "2026-11-24T21:00:00+01:00",
  sport: "Football",
  sportsEventName: "Real Madrid v PSV (UEFA Champions League)",
  homeTeam: "Real Madrid",
  awayTeam: "PSV",
  venue: "Estadio Santiago Bernabéu",
  venueLocality: "Madrid",
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Open directions (Google Maps)",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute on foot from Puerta del Sol.",
      extraLang: {
        lang: "nl",
        text: "Geen reserveringen: volgorde van aankomst.",
      },
    },
    es: {
      address: ADDRESS.full,
      mapsLabel: "Cómo llegar",
      fcfs: "Por orden de llegada. Sin reservas.",
      solProximity: "A menos de un minuto de Sol (Puerta del Sol).",
    },
  },
  copy: {
    en: {
      title: "Real Madrid v PSV, Tue 24 Nov 21:00 — meeting point near Sol",
      description:
        "Real Madrid v PSV, UEFA Champions League, Tuesday 24 November 2026, 21:00 Bernabéu. O'Connell St at Espoz y Mina 7 — less than a minute from Sol. Meeting point before and after; first come, first served.",
      eyebrow:
        "Real Madrid v PSV · UEFA Champions League · Tue 24 Nov 2026 · 21:00 · updated Mon 23 Nov",
      h1: "Real Madrid v PSV, Tuesday 24 November, 21:00",
      lead:
        "Champions League at the Santiago Bernabéu on Tuesday 24 November at 21:00 Madrid time. O'Connell St is your meeting point in the centre — less than a minute from Puerta del Sol — before the metro north and again after full time.",
      screeningName: "PSV fans meeting point at O'Connell St near Puerta del Sol",
      sections: [
        {
          title: "The match",
          list: [
            "Real Madrid v PSV, UEFA Champions League, league phase, matchday 5",
            "Tuesday 24 November 2026, 21:00 Madrid time",
            "Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid",
          ],
          note:
            "Kick-off and venue as on the UEFA match page (uefa.com/uefachampionsleague/match/2049625/). Times can move — check again on Tuesday.",
        },
        {
          title: "From Puerta del Sol toward the Bernabéu",
          paras: [
            "O'Connell St is at Calle de Espoz y Mina 7, less than a minute on foot from Puerta del Sol. Share that pin before anyone heads north.",
            `From Sol: Metro line 1 to Tribunal, then line 10 to Nuevos Ministerios — the open Line 10 stop closest to the stadium while Santiago Bernabéu station stays closed for renovation (CRTM service notice, read 23 November 2026: ${CRTM_L10_AVISO}). Walk about 10–15 minutes up Paseo de la Castellana to the ground, or take the free S10 replacement bus between Nuevos Ministerios and Cuzco, which stops near Plaza de Lima by the stadium.`,
            "After the match, head back south on Metro or bus and walk to Espoz y Mina 7. Monday to Thursday we stay open until 03:00.",
          ],
        },
        {
          title: "Hours and atmosphere",
          paras: [
            "Match Tuesday we open at 18:00 for a meet-up before you leave for the Bernabéu. Tonight Monday 23 November we open at 18:00 until 03:00 — agree the pin and the route from Sol before kick-off night.",
            "Expect a mixed room: locals, visitors and Dutch accents. We do not name a TV channel on this page. This door is a meeting point — not a seat reservation.",
          ],
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More",
      links: [
        { href: "/whats-on", label: "What's On — Real Madrid v PSV listed" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: {
        href: "/es/noticias/real-madrid-psv-martes-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol",
    },
    es: {
      title: "Real Madrid–PSV, mar 24 nov 21:00 — punto de encuentro junto a Sol",
      description:
        "Real Madrid–PSV, Champions, martes 24 de noviembre de 2026, 21:00 Bernabéu. O'Connell St, Espoz y Mina 7 — a menos de un minuto de Sol. Punto de encuentro antes y después; entrada por orden de llegada.",
      eyebrow:
        "Real Madrid–PSV · UEFA Champions League · mar 24 nov 2026 · 21:00 · actualizado lun 23 nov",
      h1: "Real Madrid–PSV, martes 24 de noviembre, 21:00",
      lead:
        "Champions en el Santiago Bernabéu el martes 24 de noviembre a las 21:00, hora de Madrid. O'Connell St es tu punto de encuentro en el centro — a menos de un minuto de Puerta del Sol — antes del metro hacia el norte y después del pitido final.",
      screeningName:
        "Afición del PSV: punto de encuentro en O'Connell St junto a Puerta del Sol",
      sections: [
        {
          title: "El partido",
          list: [
            "Real Madrid–PSV, UEFA Champions League, fase de liga, jornada 5",
            "Martes 24 de noviembre de 2026, 21:00 hora de Madrid",
            "Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid",
          ],
          note: "Fecha, hora y estadio según la ficha UEFA. Los horarios pueden cambiar — compruébalo el martes.",
        },
        {
          title: "De Puerta del Sol hacia el Bernabéu",
          paras: [
            "O'Connell St está en Calle de Espoz y Mina 7, a menos de un minuto a pie de Puerta del Sol. Comparte ese pin antes de que alguien salga hacia el norte.",
            `Desde Sol: Metro línea 1 hasta Tribunal, luego línea 10 hasta Nuevos Ministerios — la parada abierta de la línea 10 más cercana al estadio mientras la estación Santiago Bernabéu sigue cerrada por obras (aviso CRTM, lectura 23 nov 2026: ${CRTM_L10_AVISO}). Unos 10–15 minutos a pie por el Paseo de la Castellana hasta el campo, o el autobús sustitutivo gratuito S10 entre Nuevos Ministerios y Cuzco, con parada en la zona de Plaza de Lima junto al estadio.`,
            "Después del partido, vuelve al sur en Metro o bus y camina hasta Espoz y Mina 7. De lunes a jueves abrimos hasta las 03:00.",
          ],
        },
        {
          title: "Horario y ambiente",
          paras: [
            "El martes del partido abrimos a las 18:00 para quedar antes del Bernabéu. Hoy lunes 23 de noviembre abrimos a las 18:00 hasta las 03:00 — fija el pin y la ruta desde Sol antes de la noche del partido.",
            "Suele mezclarse gente local, visitantes y acentos neerlandeses. No citamos cadena en esta página. Esta puerta es punto de encuentro, no reserva de sitio.",
          ],
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más",
      links: [
        { href: "/es/whats-on", label: "Agenda — Real Madrid–PSV" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: {
        href: "/news/real-madrid-psv-tuesday-night-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Grifos de cerveza en el pub irlandés O'Connell St junto a Puerta del Sol",
    },
  },
};