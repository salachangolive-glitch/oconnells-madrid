import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { PSV_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

/**
 * Real Madrid v PSV, UCL MD5 — Tue 24 Nov 2026, 21:00 Bernabéu.
 * O'Connell St angle: Dutch/PSV fans, meeting point + metro from Sol.
 * Updated Friday 20 Nov 2026 (T−4). No broadcaster named.
 */
export const RM_PSV_TUESDAY: MatchArticleData = {
  paths: {
    en: "/news/real-madrid-psv-tuesday-night-sol",
    es: "/es/noticias/real-madrid-psv-martes-sol",
  },
  published: "2026-11-20T08:00:00+01:00",
  startDate: "2026-11-24T21:00:00+01:00",
  sport: "Football",
  sportsEventName: "Real Madrid v PSV (UEFA Champions League)",
  homeTeam: "Real Madrid",
  awayTeam: "PSV",
  venue: "Estadio Santiago Bernabéu",
  venueLocality: "Madrid",
  copy: {
    en: {
      title: "Real Madrid v PSV, Tue 24 Nov 21:00: an Irish pub near Sol",
      description:
        "PSV fans in Madrid: Real Madrid v PSV, Tue 24 Nov 2026, 21:00, Bernabéu. O'Connell St at Espoz y Mina 7 by Sol — meeting point, metro to the stadium, open until 03:00 on match night.",
      eyebrow:
        "UEFA Champions League · Tuesday 24 November 2026 · 21:00 · updated Fri 20 Nov",
      h1: "PSV in Madrid: a Tuesday Champions League night that starts at Sol",
      lead:
        "Real Madrid host PSV at the Santiago Bernabéu on Tuesday 24 November, league-phase matchday 5. Four days out on Friday 20 November, groups travelling from Eindhoven or already in Madrid often pin one address in the centre first — then share the metro ride to the Bernabéu and come back to the same door after the match.",
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
          title: "From Puerta del Sol to the Bernabéu",
          paras: [
            "O'Connell St sits at Calle de Espoz y Mina 7, about two minutes on foot from Puerta del Sol. Share that pin in the group chat before anyone heads north.",
            "From Sol station: Metro line 1 to Tribunal, change to line 10 to Santiago Bernabéu — the stop is beside the stadium (see Metro de Madrid for line maps and times). On a 21:00 kick-off, leave the centre with enough time to clear the turnstiles.",
            "After the match, line 10 runs back to the centre; walk round to Espoz y Mina 7. Monday to Thursday we stay open until 03:00 — time for a pint and the post-match debrief without rushing.",
          ],
        },
        {
          title: "Hours and atmosphere",
          paras: [
            "Match Tuesday we open at 18:00, so you can meet at the bar before you go to the stadium. Tonight Friday 20 November we open at 16:00 until 03:30 if your group wants a quiet pint in Sol while the week builds.",
            "Expect a mixed room on Tuesday: locals, visitors and Dutch accents once the evening kicks in. We do not name a TV channel on this page; if your friends are staying in the centre, this door is the meeting point — not a seat reservation. First come, first served.",
          ],
        },
        {
          title: "Three bars near Sol (match on the screens)",
          paras: [
            "Some groups split between Dubliners, O'Connell's and O'Reilly's — three Irish venues the same walk from Sol, with the match live on our screens at all three for this fixture. Pick one address and stick to it for the night.",
          ],
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More for PSV fans",
      links: [
        {
          href: PSV_CAMPAIGN.paths.en,
          label: "PSV fans: three bars near Sol (Tue 24 Nov)",
        },
        { href: PSV_CAMPAIGN.paths.nl, label: "Nederlands — drie bars bij Sol" },
        { href: "/whats-on", label: "What's On" },
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
      title: "Real Madrid–PSV, mar 24 nov 21:00: pub irlandés junto a Sol",
      description:
        "Afición del PSV en Madrid: Real Madrid–PSV, mar 24 nov 2026, 21:00, Bernabéu. O'Connell St, Espoz y Mina 7 junto a Sol — punto de encuentro, metro al estadio, abierto hasta las 03:00 la noche del partido.",
      eyebrow:
        "UEFA Champions League · martes 24 de noviembre de 2026 · 21:00 · actualizado vie 20 nov",
      h1: "PSV en Madrid: un martes de Champions que empieza en Sol",
      lead:
        "El Real Madrid recibe al PSV en el Santiago Bernabéu el martes 24 de noviembre, jornada 5 de la fase de liga. A cuatro días del partido, el viernes 20 de noviembre, muchos grupos fijan primero un pin en el centro — luego comparten el metro hasta el Bernabéu y vuelven a la misma puerta después del pitido.",
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
          title: "De Puerta del Sol al Bernabéu",
          paras: [
            "O'Connell St está en Calle de Espoz y Mina 7, a dos minutos a pie de Puerta del Sol. Comparte ese pin en el grupo antes de que alguien salga hacia el norte.",
            "Desde la estación Sol: línea 1 hasta Tribunal, cambio a la línea 10 hasta Santiago Bernabéu — la parada queda junto al estadio (consulta Metro de Madrid). Con saque a las 21:00, sal del centro con margen para pasar el control.",
            "Después del partido, la línea 10 vuelve al centro; camina hasta Espoz y Mina 7. De lunes a jueves seguimos abiertos hasta las 03:00.",
          ],
        },
        {
          title: "Horario y ambiente",
          paras: [
            "El martes del partido abrimos a las 18:00 para quedar antes del estadio. Este viernes 20 de noviembre abrimos a las 16:00 hasta las 03:30 si el grupo quiere una pinta tranquila en Sol.",
            "El martes suele mezclarse gente local, visitantes y acentos neerlandeses. No citamos cadena en esta página. Punto de encuentro, sin reservas; por orden de llegada.",
          ],
        },
        {
          title: "Tres pubs junto a Sol (partido en pantalla)",
          paras: [
            "Algunos grupos reparten entre Dubliners, O'Connell's y O'Reilly's — tres locales irlandeses a la misma distancia de Sol, con el partido confirmado en pantalla en los tres. Elige un solo pin para la noche.",
          ],
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más para aficionados del PSV",
      links: [
        {
          href: PSV_CAMPAIGN.paths.en,
          label: "PSV: tres pubs junto a Sol (mar 24 nov)",
        },
        { href: "/es/whats-on", label: "Agenda" },
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