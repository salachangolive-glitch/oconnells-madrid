import type { MatchMeetingFold } from "@/components/MatchNewsArticle";
import { ADDRESS } from "@/lib/venue";

/**
 * Real Madrid v FC Bayern München, EuroLeague R17 (E2026_166):
 * Tue 15 Dec 2026, 20:45 Madrid, Movistar Arena.
 * Owner 24 Nov 2026: match on screens at all three bars (O'Connell's, Dubliners, O'Reilly's).
 * Owner 26 Nov 2026 T52: EN «Movistar Arena Bayern Fans Bar» + DE Treffpunkt; Mon 14 + Tue 15 meeting.
 * Dubliners covers the eve before — OC copy stays match-day + Movistar Arena.
 */
export const BAYERN_BASKET_DEC15 = {
  paths: {
    en: "/news/movistar-arena-bayern-fans-bar",
    de: "/de/real-madrid-bayern-basketball-treffpunkt-sol",
  },
  published: "2026-11-26T02:46:00+01:00",
  start: "2026-12-15T20:45:00+01:00",
  arenaUrl:
    "https://www.movistararena.es/en/programacion/evento/real-madrid-vs-fc-bayern-munchen-jornada-17-euroliga-26-27/15-12-2026/20:45",
  euroleagueUrl: "https://www.euroleaguebasketball.net/euroleague/",
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Route",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute on foot from Puerta del Sol.",
      extraLang: {
        lang: "de",
        text:
          "Treffpunkt Montag, 14. Dezember, und Dienstag, 15. Dezember — vor und nach dem Spiel im Movistar Arena.",
      },
    } satisfies MatchMeetingFold,
    de: {
      address: ADDRESS.full,
      mapsLabel: "Route öffnen",
      fcfs: "Keine Reservierung — Reihenfolge nach Ankunft.",
      solProximity: "Weniger als eine Minute zu Fuß von der Puerta del Sol.",
      extraLang: {
        lang: "de",
        text:
          "Treffpunkt am Montag, 14. Dezember, und am Dienstag, 15. Dezember — vor und nach dem Spiel in der Movistar Arena.",
      },
    } satisfies MatchMeetingFold,
  },
  copy: {
    en: {
      title: "Movistar Arena Bayern Fans Bar — Real Madrid v Bayern, 15 Dec",
      description:
        "Bayern fans in Madrid: Real Madrid v FC Bayern München, EuroLeague, Tuesday 15 December 2026, 20:45, Movistar Arena. Meeting point at O'Connell St — Mon 14 and Tue 15, before and after. Live on our screens at all three Irish bars near Sol. First come, first served.",
      eyebrow:
        "Real Madrid v FC Bayern · EuroLeague · Tue 15 Dec 2026 · 20:45 · match day Tue 15 Dec",
      h1: "Real Madrid v FC Bayern München, Tuesday 15 December, 20:45",
      lead:
        "EuroLeague at the Movistar Arena, tip-off 20:45 Madrid time. O'Connell St is your meeting point in the centre — before Metro line 2 to Goya, and again after the buzzer. We also welcome groups on Monday 14 December, the day before tip-off.",
      screeningName:
        "Bayern fans meeting point at O'Connell St for Movistar Arena EuroLeague",
      sections: [
        {
          title: "The game",
          list: [
            "Real Madrid v FC Bayern München, EuroLeague basketball, round 17",
            "Tuesday 15 December 2026, 20:45 Madrid time",
            "Movistar Arena, Avenida de Felipe II, Madrid",
          ],
          note:
            "Tip-off and venue per EuroLeague game E2026_166 and Movistar Arena listings. Times can move — check again before you leave.",
        },
        {
          title: "From Puerta del Sol to the Movistar Arena",
          paras: [
            "O'Connell St is at Calle de Espoz y Mina 7, about two minutes on foot from Puerta del Sol. Share that pin before anyone heads east.",
            "From Sol station: Metro line 2 runs direct to Goya — the stop at the Movistar Arena — with no change. With tip-off at 20:45, leave the centre in good time on Tuesday 15 December.",
            "After the game, take line 2 back to Sol and walk round to Espoz y Mina 7. Monday to Thursday we stay open until 03:00.",
          ],
        },
        {
          title: "Monday 14 and Tuesday 15 December",
          paras: [
            "This page is for Bayern groups heading to the Movistar Arena on match week — meeting before you go east and when you come back. Share one Maps pin for the night you pick.",
            "If your group lands earlier in the week, Dubliners (Calle de Espoz y Mina 7) and O'Reilly's (Pasaje de Matheu 4) are sibling meeting points the same short walk from Sol for the night before — this page is O'Connell St only. O'Connell St is open for Treffpunkt on Monday 14 and Tuesday 15, before and after the arena run.",
          ],
        },
        {
          title: "Three bars near Sol (game on the screens)",
          paras: [
            "Real Madrid v Bayern München is live on our screens at Dubliners, O'Connell's and O'Reilly's — three Irish venues the same short walk from Sol. Pick one address for the night; first come, first served at each door.",
          ],
        },
        {
          title: "Hours and atmosphere",
          paras: [
            "Tuesday 15 December we open at 18:00 for a meet-up before tip-off at 20:45. After the game we stay open until 03:00 — same door when you come back from the Movistar Arena.",
            "Monday 14 December we follow our usual Monday hours from 18:00 — a centre pin if your group is already in town before the arena trip.",
            "We do not name a TV channel on this page. Expect a mixed room: locals, visitors and German accents.",
          ],
        },
      ],
      find: "Getting here",
      dir: "Route",
      more: "More",
      links: [
        { href: "/whats-on", label: "What's On — Real Madrid v Bayern listed" },
        { href: "/location", label: "Opening hours and location" },
        {
          href: "/de/real-madrid-bayern-basketball-treffpunkt-sol",
          label: "Bayern Fans Madrid Treffpunkt (Deutsch)",
        },
      ],
      other: {
        href: "/de/real-madrid-bayern-basketball-treffpunkt-sol",
        label: "Auf Deutsch: Bayern Fans Madrid Treffpunkt",
        lang: "de",
      },
      alt: "Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol",
    },
    de: {
      title: "Bayern Fans Madrid Treffpunkt — Real Madrid–Bayern, 15. Dez.",
      description:
        "Bayern-Fans in Madrid: Real Madrid v FC Bayern München, EuroLeague, Dienstag 15. Dezember 2026, 20:45, Movistar Arena. Treffpunkt im O'Connell St — Mo 14. und Di 15., vor und nach dem Spiel. Live auf unseren Screens in allen drei Irish Pubs nahe Sol.",
      eyebrow:
        "Real Madrid v FC Bayern · EuroLeague · Di 15. Dez. 2026 · 20:45 · Spieltag Di 15. Dez.",
      h1: "Bayern-Fans in Madrid: Treffpunkt für das EuroLeague-Spiel in der Movistar Arena",
      lead:
        "EuroLeague in der Movistar Arena, Anpfiff 20:45 Madrider Zeit. Das O'Connell St ist euer Treffpunkt im Zentrum — vor der Metro-Linie 2 Richtung Goya und nach dem Buzzer. Auch am Montag, 14. Dezember, am Vortag, könnt ihr euch hier treffen.",
      screeningName:
        "Bayern-Fans Treffpunkt im O'Connell St für EuroLeague Movistar Arena",
      sections: [
        {
          title: "Das Spiel",
          list: [
            "Real Madrid v FC Bayern München, EuroLeague-Basketball, Spieltag 17",
            "Dienstag, 15. Dezember 2026, 20:45 Uhr Madrider Zeit",
            "Movistar Arena, Avenida de Felipe II, Madrid",
          ],
          note:
            "Angaben laut EuroLeague-Spiel E2026_166 und Movistar Arena. Zeiten können sich ändern — prüft sie kurz vor dem Spieltag.",
        },
        {
          title: "Von der Puerta del Sol zur Movistar Arena",
          paras: [
            "Das O'Connell St liegt in der Calle de Espoz y Mina 7, etwa zwei Minuten zu Fuß von der Puerta del Sol. Teilt diesen Pin, bevor jemand Richtung Osten losgeht.",
            "Ab Station Sol: Metro-Linie 2 fährt ohne Umstieg bis Goya — die Haltestelle an der Movistar Arena. Bei Anpfiff 20:45 am Dienstag, 15. Dezember, plant die Fahrt mit Reserve ein.",
            "Nach dem Spiel mit Linie 2 zurück bis Sol und zu Fuß zur Espoz y Mina 7. Montag bis Donnerstag haben wir bis 03:00 Uhr geöffnet.",
          ],
        },
        {
          title: "Montag, 14., und Dienstag, 15. Dezember",
          paras: [
            "Diese Seite richtet sich an Bayern-Gruppen auf dem Weg zur Movistar Arena — Treffpunkt vor der Fahrt und nach der Rückkehr. Ein Maps-Pin für die Nacht, die ihr wählt.",
            "Wer schon früher in der Woche landet, trifft sich am Vorabend bei Dubliners (Calle de Espoz y Mina 7) oder O'Reilly's (Pasaje de Matheu 4) — Irish Pubs im gleichen kurzen Weg von Sol; diese Seite ist nur O'Connell St. Das O'Connell St steht für Treffpunkt am Montag, 14., und Dienstag, 15., vor und nach dem Arena-Besuch.",
          ],
        },
        {
          title: "Drei Pubs nahe Sol (Spiel auf den Screens)",
          paras: [
            "Real Madrid v Bayern München läuft live auf unseren Screens bei Dubliners, O'Connell's und O'Reilly's — drei Irish Pubs im gleichen kurzen Weg von Sol. Wählt eine Adresse für die Nacht; Reihenfolge nach Ankunft an jeder Tür.",
          ],
        },
        {
          title: "Öffnungszeiten und Stimmung",
          paras: [
            "Am Dienstag, 15. Dezember, öffnen wir um 18:00 Uhr zum Treffen vor Anpfiff um 20:45. Nach dem Spiel bleiben wir bis 03:00 Uhr offen — dieselbe Tür nach der Movistar Arena.",
            "Am Montag, 14. Dezember, gelten unsere üblichen Montagszeiten ab 18:00 Uhr — ein Pin im Zentrum, wenn eure Gruppe schon vor dem Arena-Tag in Madrid ist.",
            "Wir nennen auf dieser Seite keinen TV-Sender. Erwarten Sie eine bunte Mischung: Einheimische, Besucher und bayrische Akzente.",
          ],
        },
      ],
      find: "So findet ihr uns",
      dir: "Route öffnen",
      more: "Mehr",
      links: [
        { href: "/whats-on", label: "What's On (Englisch)" },
        { href: "/de", label: "O'Connell St auf Deutsch" },
        {
          href: "/news/movistar-arena-bayern-fans-bar",
          label: "Movistar Arena Bayern Fans Bar (English)",
        },
      ],
      other: {
        href: "/news/movistar-arena-bayern-fans-bar",
        label: "In English: Movistar Arena Bayern Fans Bar",
        lang: "en",
      },
      alt: "Zapfhähne an der Theke des Irish Pubs O'Connell St an der Puerta del Sol",
    },
  },
} as const;