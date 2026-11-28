import { ADDRESS } from "@/lib/venue";

/**
 * Real Madrid v FC Bayern München, EuroLeague R17 (E2026_166) — Tue 15 Dec 2026, 20:45, Movistar Arena.
 * Angle: Sol → Goya and back on match day (Metro line 2, no change; walking option along
 * Calle de Alcalá) and regrouping at O'Connell St after the buzzer — for German fans.
 * Transport facts reused from the Žalgiris after-game guide (25 Nov) and the Bayern guide (26 Nov).
 * Tip-off/venue: Movistar Arena event page + EuroLeague (Radar re-verified 27 Nov 2026).
 * Owner 26 Nov 11:13: all major sports incl. basketball live on our screens; no channel named.
 * Published 28 Nov 2026 by the "OC eventos importantes con antelación" routine (T-17).
 */
export const BAYERN_SOL_GOYA_AND_BACK = {
  paths: {
    en: "/news/real-madrid-bayern-sol-goya-and-back",
    de: "/de/real-madrid-bayern-hin-und-zurueck-sol-goya",
  },
  published: "2026-11-28T10:30:00+01:00",
  start: "2026-12-15T20:45:00+01:00",
  arenaUrl:
    "https://www.movistararena.es/en/programacion/evento/real-madrid-vs-fc-bayern-munchen-jornada-17-euroliga-26-27/15-12-2026/20:45",
  euroleagueUrl: "https://www.euroleaguebasketball.net/euroleague/",
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Route",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute on foot from Puerta del Sol. Tuesday 15 December: open 18:00–03:00.",
      extraLang: {
        lang: "de",
        text: "Treffpunkt vor der Fahrt nach Goya und nach dem Spiel: O'Connell St, weniger als eine Minute von der Puerta del Sol.",
      },
    },
    de: {
      address: ADDRESS.full,
      mapsLabel: "Route öffnen",
      fcfs: "Keine Reservierung — Reihenfolge nach Ankunft.",
      solProximity: "Weniger als eine Minute zu Fuß von der Puerta del Sol. Dienstag, 15. Dezember: geöffnet 18:00–03:00 Uhr.",
      extraLang: {
        lang: "de",
        text: "Treffpunkt vor der Fahrt nach Goya und wieder nach dem Spiel — dieselbe Tür.",
      },
    },
  },
  copy: {
    en: {
      title: "Real Madrid v Bayern: Sol to Movistar Arena and back",
      description:
        "Tue 15 Dec 2026, 20:45, Movistar Arena: how Bayern fans get from Sol to Goya on Metro line 2 and back after the game. Meeting point at O'Connell St, Espoz y Mina 7, open until 03:00.",
      eyebrow: "Real Madrid v FC Bayern · EuroLeague · Tue 15 Dec 2026 · 20:45 · there and back",
      h1: "Real Madrid v Bayern: from Sol to the Movistar Arena and back on match night",
      lead:
        "Tip-off at the Movistar Arena (formerly WiZink Center) is 20:45 Madrid time on Tuesday 15 December. From Puerta del Sol it is one Metro line, no change: line 2 to Goya. O'Connell St, Calle de Espoz y Mina 7, is less than a minute from Sol — the Bayern fans' meeting point before you head east and again when you come back.",
      screeningName: "Bayern fans meeting point at O'Connell St, Real Madrid v Bayern live on our screens",
      sections: [
        {
          title: "The game",
          list: [
            "Real Madrid v FC Bayern München, EuroLeague basketball, round 17",
            "Tuesday 15 December 2026, 20:45 Madrid time",
            "Movistar Arena, Avenida de Felipe II, Madrid (Goya metro)",
          ],
          note:
            "Tip-off and venue per EuroLeague game E2026_166 and the Movistar Arena listing. Times can move — check again before you leave.",
        },
        {
          title: "Before the game: Sol to Goya",
          paras: [
            "Meet at Calle de Espoz y Mina 7 — we open at 18:00 on Tuesday — then walk round to Sol station and take Metro line 2 towards Goya. It is five stops with no change: Sevilla, Banco de España, Retiro, Príncipe de Vergara, Goya.",
            "Goya station (lines 2 and 4) is right by the arena. With tip-off at 20:45, give yourselves a comfortable margin rather than leaving at the last minute.",
          ],
        },
        {
          title: "After the buzzer: Goya back to Sol",
          paras: [
            "Take line 2 from Goya towards Cuatro Caminos and get off at Sol. Platforms get busy straight after the game, so agree the meeting point before you go down and keep the group together. Metro de Madrid runs until about 01:30.",
            "At Sol, come up onto Puerta del Sol and walk round to Calle de Espoz y Mina 7: less than a minute.",
          ],
        },
        {
          title: "Prefer to walk?",
          paras: [
            "From the arena to Sol it is roughly 3 km, almost all of it straight along Calle de Alcalá, past the Puerta de Alcalá and Cibeles — Calle de Alcalá ends at Puerta del Sol. Allow around 35–40 minutes at an easy pace.",
          ],
        },
        {
          title: "Regroup at O'Connell St",
          paras: [
            "On Tuesday 15 December we are open from 18:00 until 03:00. If your group splits up — some with tickets, some without — the game is live on our screens here, and everyone meets at the same door after the buzzer.",
            "Real Madrid and Bayern shirts are both welcome. No reservations; first come, first served.",
          ],
        },
      ],
      find: "Getting here",
      dir: "Route",
      more: "More",
      links: [
        { href: "/news/movistar-arena-bayern-fans-bar", label: "Movistar Arena Bayern Fans Bar — Real Madrid v Bayern, 15 Dec" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours and location" },
        { href: "/de/real-madrid-bayern-hin-und-zurueck-sol-goya", label: "Hin und zurück: Sol – Goya (Deutsch)" },
      ],
      other: {
        href: "/de/real-madrid-bayern-hin-und-zurueck-sol-goya",
        label: "Auf Deutsch: Hin und zurück zwischen Sol und Movistar Arena",
        lang: "de",
      },
      alt: "Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol",
    },
    de: {
      title: "Real Madrid–Bayern: Von Sol zur Movistar Arena und zurück",
      description:
        "Di 15. Dez. 2026, 20:45, Movistar Arena: So kommen Bayern-Fans mit der Metro-Linie 2 von Sol nach Goya und nach dem Spiel zurück. Treffpunkt im O'Connell St, Espoz y Mina 7, bis 03:00 Uhr.",
      eyebrow: "Real Madrid v FC Bayern · EuroLeague · Di 15. Dez. 2026 · 20:45 · Hin- und Rückweg",
      h1: "Real Madrid–Bayern: Von der Puerta del Sol zur Movistar Arena und zurück",
      lead:
        "Anpfiff in der Movistar Arena (früher WiZink Center) ist am Dienstag, 15. Dezember, um 20:45 Uhr Madrider Zeit. Von der Puerta del Sol ist es eine einzige Metro-Linie ohne Umstieg: Linie 2 bis Goya. Das O'Connell St in der Calle de Espoz y Mina 7 liegt weniger als eine Minute von Sol entfernt — euer Treffpunkt vor der Fahrt nach Osten und wieder nach der Rückkehr.",
      screeningName: "Bayern-Fans Treffpunkt im O'Connell St, Real Madrid–Bayern live auf unseren Screens",
      sections: [
        {
          title: "Das Spiel",
          list: [
            "Real Madrid v FC Bayern München, EuroLeague-Basketball, Spieltag 17",
            "Dienstag, 15. Dezember 2026, 20:45 Uhr Madrider Zeit",
            "Movistar Arena, Avenida de Felipe II, Madrid (Metro Goya)",
          ],
          note:
            "Angaben laut EuroLeague-Spiel E2026_166 und Movistar Arena. Zeiten können sich ändern — prüft sie kurz vor der Abfahrt.",
        },
        {
          title: "Vor dem Spiel: von Sol nach Goya",
          paras: [
            "Trefft euch in der Calle de Espoz y Mina 7 — am Dienstag öffnen wir um 18:00 Uhr —, dann geht ihr zur Station Sol und nehmt die Metro-Linie 2 Richtung Goya. Fünf Stationen ohne Umstieg: Sevilla, Banco de España, Retiro, Príncipe de Vergara, Goya.",
            "Die Station Goya (Linien 2 und 4) liegt direkt an der Arena. Bei Anpfiff um 20:45 Uhr plant genug Puffer ein, statt in letzter Minute loszufahren.",
          ],
        },
        {
          title: "Nach der Schlusssirene: von Goya zurück nach Sol",
          paras: [
            "Nehmt in Goya die Linie 2 Richtung Cuatro Caminos und steigt in Sol aus. Direkt nach dem Spiel sind die Bahnsteige voll: Macht den Treffpunkt aus, bevor ihr hinuntergeht, und bleibt als Gruppe zusammen. Die Metro de Madrid fährt bis etwa 01:30 Uhr.",
            "In Sol hoch auf die Puerta del Sol und um die Ecke zur Calle de Espoz y Mina 7: weniger als eine Minute.",
          ],
        },
        {
          title: "Lieber zu Fuß?",
          paras: [
            "Von der Arena bis Sol sind es rund 3 km, fast alles geradeaus über die Calle de Alcalá, vorbei an der Puerta de Alcalá und Cibeles — die Calle de Alcalá endet an der Puerta del Sol. Rechnet mit etwa 35–40 Minuten in gemütlichem Tempo.",
          ],
        },
        {
          title: "Wiedersehen im O'Connell St",
          paras: [
            "Am Dienstag, 15. Dezember, haben wir von 18:00 bis 03:00 Uhr geöffnet. Wenn sich eure Gruppe aufteilt — manche mit Ticket, manche ohne —, läuft das Spiel hier live auf unseren Screens, und nach der Schlusssirene trefft ihr euch alle an derselben Tür.",
            "Trikots von Real Madrid und Bayern sind beide willkommen. Keine Reservierung; Reihenfolge nach Ankunft.",
          ],
        },
      ],
      find: "So findet ihr uns",
      dir: "Route öffnen",
      more: "Mehr",
      links: [
        { href: "/de/real-madrid-bayern-basketball-treffpunkt-sol", label: "Bayern Fans Madrid Treffpunkt — Real Madrid–Bayern, 15. Dez." },
        { href: "/de", label: "O'Connell St auf Deutsch" },
        { href: "/whats-on", label: "What's On (Englisch)" },
        { href: "/news/real-madrid-bayern-sol-goya-and-back", label: "Sol to Goya and back (English)" },
      ],
      other: {
        href: "/news/real-madrid-bayern-sol-goya-and-back",
        label: "In English: Sol to the Movistar Arena and back",
        lang: "en",
      },
      alt: "Zapfhähne an der Theke des Irish Pubs O'Connell St an der Puerta del Sol",
    },
  },
} as const;
