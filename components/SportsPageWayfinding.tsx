import Link from "next/link";
import { Section } from "@/components/Prose";

type Locale = "en" | "es";

const COPY = {
  en: {
    title: "Sports pages on this site",
    lead:
      "Several URLs talk about sport at this door — each with a different job. All stay live with their own address; pick the page that matches what you searched for.",
    items: [
      {
        href: "/sports",
        label: "Live sports & sports bar Sol Madrid",
        note: "Main hub — named fixtures on What's On",
      },
      {
        href: "/watch-football-madrid",
        label: "Watch football in Sol",
        note: "Football-first — LaLiga, Premier, Champions when Confirmed",
      },
      {
        href: "/premier-league",
        label: "Premier League pub Madrid",
        note: "English weekends at this Irish pub near Sol",
      },
      {
        href: "/champions-league",
        label: "Champions League near Sol",
        note: "UEFA nights — Confirmed rows only",
      },
      {
        href: "/nfl-madrid",
        label: "NFL in Madrid",
        note: "American football when marked Confirmed",
      },
      {
        href: "/sports-bar-sol",
        label: "Sports bar Sol Madrid",
        note: "Keyword page for the square; fixture list lives on Live sports",
      },
    ],
  },
  es: {
    title: "Páginas de deporte en esta web",
    lead:
      "Varias URLs hablan del deporte en esta puerta — cada una con un trabajo distinto. Siguen vivas con su propia dirección; elige la que encaje con tu búsqueda.",
    items: [
      {
        href: "/es/sports",
        label: "Deportes en directo y bar deportivo Sol Madrid",
        note: "Hub principal — cruces nombrados en la Agenda",
      },
      {
        href: "/es/watch-football-madrid",
        label: "Ver fútbol en Sol",
        note: "Fútbol primero — LaLiga, Premier, Champions si Confirmado",
      },
      {
        href: "/es/premier-league",
        label: "Pub de Premier League en Madrid",
        note: "Fines de semana ingleses en este pub irlandés junto a Sol",
      },
      {
        href: "/es/champions-league",
        label: "Champions League junto a Sol",
        note: "Noches UEFA — solo filas Confirmado",
      },
      {
        href: "/es/nfl-madrid",
        label: "NFL en Madrid",
        note: "Fútbol americano cuando la Agenda marca Confirmado",
      },
      {
        href: "/es/sports-bar-sol",
        label: "Bar deportivo Sol Madrid",
        note: "Página para la plaza; la lista completa está en Deportes en directo",
      },
    ],
  },
} as const;

export function SportsPageWayfinding({
  locale,
  currentPath,
}: {
  locale: Locale;
  currentPath: string;
}) {
  const c = COPY[locale];
  return (
    <Section title={c.title}>
      <p>{c.lead}</p>
      <ul className="list-disc space-y-2 pl-5 text-cream">
        {c.items.map((item) => (
          <li key={item.href}>
            {item.href === currentPath ? (
              <span className="text-gold">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-gold underline">
                {item.label}
              </Link>
            )}
            {" — "}
            {item.note}
          </li>
        ))}
      </ul>
    </Section>
  );
}
