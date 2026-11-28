import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { VIKING_CAMPAIGN } from "@/lib/fan-campaign-three-bars";
import { ADDRESS } from "@/lib/venue";

/**
 * Atlético v Viking FK, UCL MD5 — Wed 25 Nov 2026, 21:00 Metropolitano.
 * Viking FK (Stavanger) — not Minnesota Vikings. Meeting point; no broadcaster.
 * Owner 25 Nov 2026 08:00 match day in-situ.
 */
export const ATLETICO_VIKING_WEDNESDAY: MatchArticleData = {
  paths: {
    en: "/news/atletico-viking-wednesday-night-sol",
    es: "/es/noticias/atletico-viking-miercoles-sol",
  },
  published: "2026-11-25T08:00:00+01:00",
  startDate: "2026-11-25T21:00:00+01:00",
  sport: "Football",
  sportsEventName: "Atlético de Madrid v Viking FK (UEFA Champions League)",
  homeTeam: "Atlético de Madrid",
  awayTeam: "Viking FK",
  venue: "Riyadh Air Metropolitano",
  venueLocality: "Madrid",
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Open directions (Google Maps)",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute on foot from Puerta del Sol.",
      extraLang: {
        lang: "no",
        text: "Ingen reservasjoner — først til mølla.",
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
      title: "Atlético v Viking, Wed 25 Nov 21:00: Irish pub near Sol",
      description:
        "Viking FK fans in Madrid: Atlético v Viking, Wed 25 Nov 2026, 21:00, Metropolitano. O'Connell St at Espoz y Mina 7 by Sol — meeting point, metro east from Sol, open until 03:00 on match night.",
      eyebrow:
        "Atlético v Viking FK · UEFA Champions League · Wed 25 Nov 2026 · 21:00 · match day Wed 25 Nov",
      h1: "Atlético v Viking FK, Wednesday 25 November, 21:00",
      lead:
        "Champions League tonight at the Riyadh Air Metropolitano, kick-off 21:00 Madrid time. O'Connell St is your meeting point in the centre — less than a minute from Puerta del Sol — before you head east, and again after full time. Viking FK from Stavanger, not the NFL Minnesota Vikings.",
      screeningName:
        "Viking FK fans meeting point at O'Connell St near Puerta del Sol",
      sections: [
        {
          title: "The match",
          list: [
            "Atlético de Madrid v Viking FK, UEFA Champions League, league phase, matchday 5",
            "Wednesday 25 November 2026, 21:00 Madrid time",
            "Riyadh Air Metropolitano, Madrid",
          ],
          note:
            "Kick-off and venue as on the UEFA match page (uefa.com/uefachampionsleague/match/2049636/). Times can move — check again before you leave.",
        },
        {
          title: "From Puerta del Sol to the Metropolitano",
          paras: [
            "O'Connell St is at Calle de Espoz y Mina 7, about two minutes on foot from Puerta del Sol. Share that pin before anyone heads east.",
            "From Sol: Metro line 2 to Las Rosas — Atlético list roughly fifteen minutes on foot from there. Line 7 stops at Estadio Metropolitano beside the ground. On match days EMT runs shuttle SE721 from Canillejas (line 5) from two hours before kick-off. For 21:00, leave the centre with margin.",
            "After the match, head back west on metro or shuttle and walk round to Espoz y Mina 7. Monday to Thursday we stay open until 03:00.",
          ],
        },
        {
          title: "Hours and atmosphere",
          paras: [
            "Today, Wednesday 25 November, we open at 18:00 for a meet-up before kick-off at 21:00. After the match we stay open until 03:00 — same door when you come back from the Metropolitano.",
            "Expect a mixed room: locals, visitors and Norwegian accents. We do not name a TV channel on this page. This door is a meeting point — not a seat reservation.",
          ],
        },
        {
          title: "Three bars near Sol (match on the screens)",
          paras: [
            "Some Viking groups split between Dubliners, O'Connell's and O'Reilly's — three Irish venues the same walk from Sol, with the match live on our screens at all three for this fixture. Pick one address for the night.",
          ],
        },
        {
          title: "Velkommen",
          extra: {
            lang: "no",
            text: "Velkommen til Madrid! O'Connell St ved Puerta del Sol er et møtested før kampen på Metropolitano.",
          },
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More for Viking FK fans",
      links: [
        {
          href: VIKING_CAMPAIGN.paths.en,
          label: "Viking FK fans: three bars near Sol (Wed 25 Nov)",
        },
        { href: VIKING_CAMPAIGN.paths.no, label: "Norsk — tre barer ved Sol" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours and location" },
        { href: "/champions-league", label: "Champions League near Sol" },
      ],
      other: {
        href: "/es/noticias/atletico-viking-miercoles-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol",
    },
    es: {
      title: "Atlético–Viking, mié 25 nov 21:00: pub irlandés junto a Sol",
      description:
        "Afición del Viking FK en Madrid: Atlético–Viking, mié 25 nov 2026, 21:00, Metropolitano. O'Connell St, Espoz y Mina 7 junto a Sol — punto de encuentro, metro al este, abierto hasta las 03:00 la noche del partido.",
      eyebrow:
        "Atlético–Viking FK · UEFA Champions League · mié 25 nov 2026 · 21:00 · día de partido mié 25 nov",
      h1: "Atlético–Viking FK, miércoles 25 de noviembre, 21:00",
      lead:
        "Champions esta noche en el Riyadh Air Metropolitano, saque a las 21:00, hora de Madrid. O'Connell St es tu punto de encuentro en el centro — a menos de un minuto de Puerta del Sol — antes de ir al este y después del pitido final. Viking FK de Stavanger, no los Minnesota Vikings de la NFL.",
      screeningName:
        "Afición del Viking FK: punto de encuentro en O'Connell St junto a Puerta del Sol",
      sections: [
        {
          title: "El partido",
          list: [
            "Atlético de Madrid–Viking FK, UEFA Champions League, fase de liga, jornada 5",
            "Miércoles 25 de noviembre de 2026, 21:00 hora de Madrid",
            "Riyadh Air Metropolitano, Madrid",
          ],
          note:
            "Fecha, hora y estadio según UEFA (uefa.com/uefachampionsleague/match/2049636/). Los horarios pueden cambiar — compruébalo antes de salir.",
        },
        {
          title: "De Puerta del Sol al Metropolitano",
          paras: [
            "O'Connell St está en Calle de Espoz y Mina 7, a dos minutos a pie de Puerta del Sol. Comparte ese pin antes de que alguien salga hacia el este.",
            "Desde Sol: línea 2 hasta Las Rosas — el Atlético indica unos quince minutos a pie. La línea 7 para en Estadio Metropolitano junto al campo. Los días de partido la EMT opera el SE721 desde Canillejas (línea 5) desde dos horas antes del saque.",
            "Después del partido, vuelve al centro en metro y camina hasta Espoz y Mina 7. De lunes a jueves seguimos abiertos hasta las 03:00.",
          ],
        },
        {
          title: "Horario y ambiente",
          paras: [
            "Hoy, miércoles 25 de noviembre, abrimos a las 18:00 para quedar antes del saque a las 21:00. Después del partido seguimos abiertos hasta las 03:00 — misma puerta cuando vuelvas del Metropolitano.",
            "Ambiente mixto: locales, visitantes y acentos noruegos. No citamos cadena en esta página. Punto de encuentro, sin reservas; por orden de llegada.",
          ],
        },
        {
          title: "Tres pubs junto a Sol (partido en pantalla)",
          paras: [
            "Algunos grupos reparten entre Dubliners, O'Connell's y O'Reilly's — tres locales irlandeses a la misma distancia de Sol, con el partido en directo en nuestras pantallas en los tres para este encuentro. Elige un solo pin.",
          ],
        },
        {
          title: "Velkommen",
          extra: {
            lang: "no",
            text: "Velkommen til Madrid! O'Connell St ved Puerta del Sol er et møtested før kampen på Metropolitano.",
          },
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más para aficionados del Viking FK",
      links: [
        {
          href: VIKING_CAMPAIGN.paths.en,
          label: "Viking FK: tres pubs junto a Sol (mié 25 nov)",
        },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario y ubicación" },
        { href: "/es/champions-league", label: "Champions junto a Sol" },
      ],
      other: {
        href: "/news/atletico-viking-wednesday-night-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Grifos de cerveza en el pub irlandés O'Connell St junto a Puerta del Sol",
    },
  },
};

/** @deprecated Use ATLETICO_VIKING_WEDNESDAY — kept for imports of paths/uefaUrl */
export const ATLETICO_VIKING_NEWS = {
  paths: ATLETICO_VIKING_WEDNESDAY.paths,
  published: ATLETICO_VIKING_WEDNESDAY.published,
  start: ATLETICO_VIKING_WEDNESDAY.startDate,
  uefaUrl: "https://www.uefa.com/uefachampionsleague/match/2049636/",
} as const;