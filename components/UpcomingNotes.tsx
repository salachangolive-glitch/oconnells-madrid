import Link from "next/link";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";

/** Internal links to upcoming match/event notes; each drops after its day. */
const NOTES: { day: string; en?: [string, string]; es?: [string, string] }[] = [
  { day: "2026-11-05", en: ["/news/getafe-brighton-thursday-night-sol", "Getafe v Brighton · Thu 5 Nov"], es: ["/es/noticias/getafe-brighton-jueves-sol", "Getafe–Brighton · jue 5 nov"] },
  { day: "2026-11-06", en: ["/news/duran-duran-madrid-gig-night-sol", "Duran Duran gig night · Fri 6 Nov"] },
  { day: "2026-11-08", en: ["/news/where-to-watch-nfl-madrid-sol", "Where to watch NFL · Sun 8 Nov"], es: ["/es/noticias/donde-ver-nfl-madrid-sol", "Dónde ver la NFL · dom 8 nov"] },
  { day: "2026-11-08", en: ["/news/nfl-meeting-point-sol", "NFL meeting point near Sol · Sun 8 Nov"], es: ["/es/noticias/punto-encuentro-nfl-sol", "Punto de encuentro NFL · dom 8 nov"] },
  { day: "2026-11-08", en: ["/news/before-after-bernabeu-nfl-sol", "Before/after Bernabéu NFL · Sun 8 Nov"], es: ["/es/noticias/antes-despues-bernabeu-nfl-sol", "Antes y después NFL Bernabéu · dom 8 nov"] },
  { day: "2026-11-08", en: ["/news/sunday-football-sol-8-nov", "Sunday football near Sol · 8 Nov"], es: ["/es/noticias/futbol-domingo-sol-8-nov", "Fútbol domingo en Sol · 8 nov"] },
  { day: "2026-11-08", en: ["/news/atletico-barcelona-sunday-night-sol", "Atlético v Barcelona · Sun 8 Nov"] },
  { day: "2026-11-10", en: ["/news/bryan-adams-madrid-gig-night-sol", "Bryan Adams gig night · Tue 10 Nov"] },
  { day: "2026-11-12", en: ["/news/england-croatia-thursday-night-sol", "England v Croatia · Thu 12 Nov"] },
  { day: "2026-11-12", en: ["/news/real-madrid-crvena-zvezda-thursday-sol", "Real Madrid v Crvena Zvezda · Thu 12 Nov"], es: ["/es/noticias/real-madrid-crvena-zvezda-jueves-sol", "Real Madrid–Crvena Zvezda · jue 12 nov"] },
  { day: "2026-11-13", en: ["/news/serbia-germany-friday-night-sol", "Serbia v Germany · Fri 13 Nov"] },
  { day: "2026-11-15", en: ["/news/spain-england-sunday-night-sol", "Spain v England · Sun 15 Nov"], es: ["/es/noticias/espana-inglaterra-domingo-sol", "España–Inglaterra · dom 15 nov"] },
  { day: "2026-11-15", en: ["/oktoberfest-madrid-sol", "Oktoberfest Madrid · until 15 Nov"], es: ["/es/oktoberfest-madrid-sol", "Oktoberfest Madrid · hasta el 15 nov"] },
  { day: "2026-11-16", en: ["/news/germany-netherlands-monday-night-sol", "Germany v Netherlands · Mon 16 Nov"] },
  { day: "2026-11-18", en: ["/news/real-madrid-inter-womens-champions-league-sol", "Real Madrid v Inter (women) · Wed 18 Nov"], es: ["/es/noticias/real-madrid-inter-champions-femenina-sol", "Real Madrid–Inter femenino · mié 18 nov"] },
];

export function UpcomingNotes({ locale = "en" }: { locale?: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  const items = NOTES.filter((n) => n.day >= today)
    .map((n) => (locale === "es" ? n.es : n.en))
    .filter((x): x is [string, string] => Boolean(x));
  if (!items.length) return null;
  return (
    <section className="mb-12 max-w-2xl">
      <h2 className="font-serif text-xl font-bold text-cream">
        {locale === "es" ? "Próximas notas de partido" : "Upcoming match notes"}
      </h2>
      <div className="pub-rule my-3" />
      <ul className="space-y-1 text-sm sm:text-base">
        {items.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="text-gold underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
