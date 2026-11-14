import { Section } from "@/components/Prose";

type Locale = "en" | "es";

const COPY = {
  en: {
    title: "NFL Week 10 — Sunday 15 November 2026 (Madrid time)",
    lead:
      "Kickoffs per nfl.com. No Spanish TV channel is listed on this page — ask at the bar which game is on before you sit down.",
    slots: [
      { time: "15:30", games: ["Patriots at Lions"] },
      {
        time: "19:00",
        games: [
          "Falcons at Chiefs",
          "Browns at Texans",
          "Packers at Vikings",
          "Titans at Jaguars",
          "Colts at Dolphins",
          "Saints at Panthers",
          "Jets at Bills",
        ],
      },
      {
        time: "22:05",
        games: ["Seahawks at Raiders", "Cardinals at Rams"],
      },
      { time: "22:25", games: ["49ers at Cowboys"] },
    ],
    doors: "Sundays from 14:00. The same rows appear in Today and the next 7 days below when they pass the Confirmed rules.",
  },
  es: {
    title: "NFL semana 10 — domingo 15 de noviembre de 2026 (hora de Madrid)",
    lead:
      "Saques según nfl.com. En esta página no figura canal de TV en España — pregunta en la barra qué partido echan antes de sentarte.",
    slots: [
      { time: "15:30", games: ["Patriots en Lions"] },
      {
        time: "19:00",
        games: [
          "Falcons en Chiefs",
          "Browns en Texans",
          "Packers en Vikings",
          "Titans en Jaguars",
          "Colts en Dolphins",
          "Saints en Panthers",
          "Jets en Bills",
        ],
      },
      {
        time: "22:05",
        games: ["Seahawks en Raiders", "Cardinals en Rams"],
      },
      { time: "22:25", games: ["49ers en Cowboys"] },
    ],
    doors:
      "Domingos desde las 14:00. Las mismas filas salen abajo en Hoy y los próximos 7 días cuando cumplen las reglas de Confirmado.",
  },
} as const;

export function NflSunday15NovWhatsOn({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <Section title={c.title}>
      <p>{c.lead}</p>
      <ul className="list-none space-y-3 pl-0 text-cream">
        {c.slots.map((slot) => (
          <li key={slot.time}>
            <span className="font-semibold text-gold">{slot.time}</span>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              {slot.games.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-cream-muted">{c.doors}</p>
    </Section>
  );
}
