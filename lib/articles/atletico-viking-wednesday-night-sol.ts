import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { VIKING_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

/**
 * Atlético v Viking FK, UCL MD5 — Wed 25 Nov 2026, 21:00 Metropolitano.
 * Viking FK (Stavanger) — not Minnesota Vikings. Meeting point; no broadcaster.
 * Updated Saturday 21 Nov 2026 (T−4).
 */
export const ATLETICO_VIKING_WEDNESDAY: MatchArticleData = {
  paths: {
    en: "/news/atletico-viking-wednesday-night-sol",
    es: "/es/noticias/atletico-viking-miercoles-sol",
  },
  published: "2026-11-21T08:00:00+01:00",
  startDate: "2026-11-25T21:00:00+01:00",
  sport: "Football",
  sportsEventName: "Atlético de Madrid v Viking FK (UEFA Champions League)",
  homeTeam: "Atlético de Madrid",
  awayTeam: "Viking FK",
  venue: "Riyadh Air Metropolitano",
  venueLocality: "Madrid",
  copy: {
    en: {
      title: "Atlético v Viking, Wed 25 Nov 21:00: Irish pub near Sol",
      description:
        "Viking FK fans in Madrid: Atlético v Viking, Wed 25 Nov 2026, 21:00, Metropolitano. O'Connell St at Espoz y Mina 7 by Sol — meeting point, metro east from Sol, open until 03:00 on match night.",
      eyebrow:
        "UEFA Champions League · Wednesday 25 November 2026 · 21:00 · updated Sat 21 Nov",
      h1: "Viking FK in Madrid: a Wednesday Champions League night that starts at Sol",
      lead:
        "Atlético host Viking FK at the Riyadh Air Metropolitano on Wednesday 25 November, league-phase matchday 5. Four days out on Saturday 21 November, groups from Stavanger or already in Madrid often fix one pin at Puerta del Sol — metro east to the stadium, then the same door after full time. Viking FK from Norway, not the NFL Minnesota Vikings.",
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
            "Kick-off and venue as on the UEFA match page (uefa.com/uefachampionsleague/match/2049636/). Times can move — check again on Wednesday.",
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
            "Match Wednesday we open at 18:00 for a quiet meet-up before you go to the Metropolitano. Today Saturday 21 November we open at 15:00 until 03:30 — rugby and Premier League fill the afternoon screens; Wednesday night is about your group and the metro ride east.",
            "We do not name a TV channel on this page. If you stay in the centre on Wednesday, this door is your meeting point — not a seat reservation. First come, first served.",
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
        "UEFA Champions League · miércoles 25 de noviembre de 2026 · 21:00 · actualizado sáb 21 nov",
      h1: "Viking FK en Madrid: un miércoles de Champions que empieza en Sol",
      lead:
        "El Atlético recibe al Viking FK en el Riyadh Air Metropolitano el miércoles 25 de noviembre, jornada 5 de la fase de liga. A cuatro días, el sábado 21 de noviembre, muchos grupos fijan un pin en la Puerta del Sol — metro hacia el este y la misma puerta después del pitido final. Viking FK de Stavanger, no los Minnesota Vikings de la NFL.",
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
            "Fecha, hora y estadio según UEFA (uefa.com/uefachampionsleague/match/2049636/). Los horarios pueden cambiar — compruébalo el miércoles.",
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
            "El miércoles del partido abrimos a las 18:00 para quedar antes del estadio. Este sábado 21 de noviembre abrimos a las 15:00 hasta las 03:30.",
            "No citamos cadena en esta página. Punto de encuentro, sin reservas; por orden de llegada.",
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