/**
 * After Real Madrid v Žalgiris Kaunas (EuroLeague R14) — Wed 25 Nov 2026, 20:45, Movistar Arena.
 * Angle: after the buzzer, Goya → Sol (Metro line 2, no change) and regroup at O'Connell St.
 * Basketball screening NOT confirmed by the owner: no "live" / "watch here" wording, meeting point only.
 * Sources: movistararena.es event page + EuroLeague feed E2026_139 (Radar, FUENTES-PARTIDOS-COMPARTIDAS).
 * Published 25 Nov 2026 by the "OC eventos importantes con antelación" routine.
 */
export type AfterGameCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: { title: string; paras?: string[]; list?: string[]; note?: string; extra?: { lang: string; text: string } }[];
  links: { href: string; label: string }[];
  more: string;
  find: string;
  dir: string;
  other: { href: string; label: string; lang: string };
  alt: string;
  arenaLabel: string;
};

export const AFTER_RM_ZALGIRIS = {
  paths: {
    en: "/news/after-real-madrid-zalgiris-goya-to-sol",
    es: "/es/noticias/despues-real-madrid-zalgiris-goya-a-sol",
  },
  published: "2026-11-25T17:30:00+01:00",
  start: "2026-11-25T20:45:00+01:00",
  arenaUrl:
    "https://www.movistararena.es/en/programacion/evento/real-madrid-vs-zalgiris-kaunas-jornada-14-euroliga-26-27/25-11-2026/20:45",
  copy: {
    en: {
      title: "After Real Madrid v Žalgiris: Goya to Sol tonight",
      description:
        "Wed 25 Nov 2026, after Real Madrid v Žalgiris at the Movistar Arena: Metro line 2 from Goya to Sol, then O'Connell St, Espoz y Mina 7. Open until 03:00.",
      eyebrow: "EuroLeague · Real Madrid v Žalgiris · after the game · Wed 25 Nov 2026",
      h1: "After Real Madrid v Žalgiris: from Goya back to Sol tonight",
      lead:
        "Tip-off at the Movistar Arena (formerly WiZink Center) is 20:45 Madrid time tonight. When the final buzzer goes, the simple way back to the centre is Metro line 2 from Goya to Sol, with no change. O'Connell St, Calle de Espoz y Mina 7, is less than a minute from Sol — a fans meeting point to regroup after the game, open until 03:00.",
      sections: [
        {
          title: "The game tonight",
          list: [
            "Real Madrid v Žalgiris Kaunas, EuroLeague, round 14",
            "Wednesday 25 November 2026, 20:45 Madrid time",
            "Movistar Arena, Avenida de Felipe II, Madrid (Goya metro)",
          ],
          note:
            "Tip-off and venue per the Movistar Arena event page and EuroLeague game E2026 / 139. Times can move — check before you go.",
        },
        {
          title: "Goya to Sol on Metro line 2",
          paras: [
            "Goya station (lines 2 and 4) is right by the arena. Take line 2 towards Cuatro Caminos: Príncipe de Vergara, Retiro, Banco de España, Sevilla, then Sol — five stops, no change.",
            "Platforms get busy straight after the game, so keep your group together and agree the meeting point before you go down. Metro de Madrid runs until about 01:30.",
            "At Sol, come up onto Puerta del Sol and walk round to Calle de Espoz y Mina 7: less than a minute.",
          ],
        },
        {
          title: "Prefer to walk?",
          paras: [
            "It is roughly 3 km from the arena to Sol, almost all of it straight along Calle de Alcalá, past the Puerta de Alcalá and Cibeles — Calle de Alcalá ends at Puerta del Sol. Allow around 35–40 minutes at an easy pace.",
          ],
        },
        {
          title: "Regroup here after the game",
          paras: [
            "O'Connell St opened at 18:00 today and stays open until 03:00 (Monday to Thursday, 18:00–03:00). If you met at our door before tip-off, the same pin works on the way back.",
            "Real Madrid and Žalgiris shirts are both welcome: a meeting point for fans who travelled from Kaunas and for locals heading back into the centre. No reservations; first come, first served.",
          ],
          extra: {
            lang: "lt",
            text: "Po rungtynių: metro 2 linija iš Goya stoties iki Sol, tada O'Connell St, Calle de Espoz y Mina 7 — mažiau nei minutė nuo Sol. Šiandien dirbame iki 03:00.",
          },
        },
      ],
      links: [
        { href: "/news/real-madrid-zalgiris-wednesday-night-sol", label: "Before the game: Real Madrid v Žalgiris, Wednesday night near Sol" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours" },
      ],
      more: "More",
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      other: { href: "/es/noticias/despues-real-madrid-zalgiris-goya-a-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol",
      arenaLabel: "Movistar Arena event page",
    },
    es: {
      title: "Después del Real Madrid–Žalgiris: de Goya a Sol",
      description:
        "Mié 25 nov 2026, tras el Real Madrid–Žalgiris en el Movistar Arena: línea 2 de Metro de Goya a Sol y O'Connell St, Espoz y Mina 7. Abierto hasta las 03:00.",
      eyebrow: "Euroliga · Real Madrid–Žalgiris · después del partido · mié 25 nov 2026",
      h1: "Después del Real Madrid–Žalgiris: de Goya a Sol esta noche",
      lead:
        "El salto inicial en el Movistar Arena (antes WiZink Center) es a las 20:45, hora de Madrid. Al acabar el partido, la forma más sencilla de volver al centro es la línea 2 de Metro de Goya a Sol, sin transbordo. O'Connell St, Calle de Espoz y Mina 7, está a menos de un minuto de Sol: punto de encuentro para reagruparse después del partido, abierto hasta las 03:00.",
      sections: [
        {
          title: "El partido de esta noche",
          list: [
            "Real Madrid–Žalgiris Kaunas, Euroliga, jornada 14",
            "Miércoles 25 de noviembre de 2026, 20:45, hora de Madrid",
            "Movistar Arena, Avenida de Felipe II, Madrid (metro Goya)",
          ],
          note:
            "Hora y sede según la página del evento del Movistar Arena y el partido E2026 / 139 de la Euroliga. Pueden cambiar: compruébalo antes de salir.",
        },
        {
          title: "De Goya a Sol en la línea 2",
          paras: [
            "La estación de Goya (líneas 2 y 4) está junto al pabellón. Toma la línea 2 en dirección Cuatro Caminos: Príncipe de Vergara, Retiro, Banco de España, Sevilla y Sol — cinco paradas, sin transbordo.",
            "Al terminar el partido los andenes se llenan: mantened el grupo junto y acordad el punto de encuentro antes de bajar. El Metro de Madrid funciona hasta aproximadamente la 01:30.",
            "En Sol, sube a la Puerta del Sol y gira hacia la Calle de Espoz y Mina 7: menos de un minuto.",
          ],
        },
        {
          title: "¿Prefieres ir andando?",
          paras: [
            "Del pabellón a Sol hay unos 3 km, casi todo en línea recta por la Calle de Alcalá, pasando por la Puerta de Alcalá y Cibeles — la Calle de Alcalá termina en la Puerta del Sol. Calcula unos 35–40 minutos a paso tranquilo.",
          ],
        },
        {
          title: "Reagrúpate aquí después del partido",
          paras: [
            "O'Connell St abrió hoy a las 18:00 y cierra a las 03:00 (de lunes a jueves, 18:00–03:00). Si quedasteis en nuestra puerta antes del partido, la misma dirección sirve para la vuelta.",
            "Camisetas del Real Madrid y del Žalgiris, todas bienvenidas: punto de encuentro para la afición que ha viajado desde Kaunas y para quien vuelve al centro. Sin reservas; por orden de llegada.",
          ],
          extra: {
            lang: "lt",
            text: "Po rungtynių: metro 2 linija iš Goya stoties iki Sol, tada O'Connell St, Calle de Espoz y Mina 7 — mažiau nei minutė nuo Sol. Šiandien dirbame iki 03:00.",
          },
        },
      ],
      links: [
        { href: "/news/real-madrid-zalgiris-wednesday-night-sol", label: "Antes del partido: Real Madrid–Žalgiris junto a Sol (en inglés)" },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario" },
      ],
      more: "Más",
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      other: { href: "/news/after-real-madrid-zalgiris-goya-to-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a Puerta del Sol",
      arenaLabel: "Página del evento en el Movistar Arena",
    },
  } satisfies Record<"en" | "es", AfterGameCopy>,
} as const;
