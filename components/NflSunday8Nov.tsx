import Link from "next/link";
import { FIXTURES, type Fixture } from "@/lib/fixtures";

/**
 * Home + What's On block: NFL Sunday 8 November 2026 (owner order via DG,
 * 30 Oct 01:22–01:25, /workspace/nfl-8nov-portadas-2026-10-30/ORDEN.md).
 * Third block of the home (EN + ES). Games come from FIXTURES (same rows as
 * What's On), shown "Away vs Home" as in ORDEN.md; times Madrid (ESPN/nfl.com
 * ET+6). RedZone from 19:00 confirmed by the owner. Buccaneers–Bears (Mon 9,
 * 02:20) is not in FIXTURES (outside hours).
 * Gate: build-time (<= NFL8_LAST_DAY, gone from the 9 Nov 06:31 daily rebuild)
 * + inline clock that hides it from Mon 9 Nov 00:00 Madrid before that rebuild.
 */
export const NFL8_DAY = "2026-11-08";
export const NFL8_LAST_DAY = "2026-11-08";

const BERNABEU_ID = "2026-11-08-falcons-bengals";

function nick(team: string): string {
  const parts = team.trim().split(/\s+/);
  return parts[parts.length - 1];
}

/** Listing order inside a slot, as in ORDEN.md; unknown ids keep FIXTURES order at the end. */
const ORDER = [
  "2026-11-08-patriots-packers",
  "2026-11-08-49ers-raiders",
  "2026-11-08-seahawks-cardinals",
];
function order(id: string): number {
  const i = ORDER.indexOf(id);
  return i < 0 ? -1 : i;
}

function slots(): { time: string; games: Fixture[] }[] {
  const rows = FIXTURES.filter(
    (f) =>
      f.competition === "NFL" &&
      f.date === NFL8_DAY &&
      f.kickoffMadrid &&
      f.awayTeam.trim() !== "", // RedZone row (empty awayTeam) shown as its own line

  );
  const by = new Map<string, Fixture[]>();
  for (const f of rows) {
    const t = f.kickoffMadrid as string;
    by.set(t, [...(by.get(t) ?? []), f]);
  }
  return [...by.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([time, games]) => ({
      time,
      games: [...games].sort((a, b) => order(a.id) - order(b.id)),
    }));
}

const HIDE_SCRIPT = `(function(){try{var d=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());if(d>"${NFL8_LAST_DAY}"){var e=document.querySelectorAll("[data-nfl8]");for(var i=0;i<e.length;i++)e[i].style.display="none";}}catch(_){}})();`;

export function NflSunday8Nov({
  locale,
  today,
  context = "home",
}: {
  locale: "en" | "es";
  today: string;
  context?: "home" | "whats-on";
}) {
  if (today > NFL8_LAST_DAY) return null;
  const es = locale === "es";
  const list = slots();
  const label = (f: Fixture) => `${nick(f.awayTeam)} vs ${nick(f.homeTeam)}`;
  return (
    <section
      id="nfl-sunday-8-november"
      data-nfl8=""
      className="mb-12 max-w-2xl border-l-2 border-gold pl-4"
      aria-labelledby="nfl8-title"
    >
      <h2 id="nfl8-title" className="font-serif text-xl font-bold text-cream">
        {es
          ? "Domingo NFL en Madrid · domingo 8 de noviembre"
          : "NFL Sunday in Madrid · Sunday 8 November"}
      </h2>
      <div className="pub-rule my-3" />
      <p className="text-sm text-cream-muted sm:text-base">
        {es
          ? "La NFL juega en Madrid: Bengals vs Falcons en el Bernabéu, en directo en pantalla grande y con todo el ambiente desde las 15:30 en O'Connell St, junto a la Puerta del Sol, y después el resto de la jornada del domingo en nuestras pantallas. A partir de las 19:00, el pub es para cuando volváis del estadio. Horarios de Madrid."
          : "The NFL plays in Madrid: Bengals vs Falcons at the Bernabéu, live on the big screen with the match-day atmosphere from 15:30 at O'Connell St, just off Puerta del Sol, then the rest of Sunday's games on our screens. From 19:00, come back from the stadium to O'Connell St. All times are Madrid time."}
      </p>
      {context === "home" ? (
        <p data-oc-sat="" className="mt-3 text-sm text-cream-muted sm:text-base">
          {es
            ? "Sábado 7 de noviembre: O'Connell St está a pocos minutos a pie de la NFL House, en la Casa de las Alhajas (Plaza de San Martín), un evento de la NFL, no nuestro. Abrimos a las 15:00: pásate a tomar algo después de tu visita."
            : "Saturday 7 November: O'Connell St is a few minutes' walk from the NFL House at Casa de las Alhajas (Plaza de San Martín), an NFL event, not ours. We open at 15:00, so drop in for a drink after your visit."}
        </p>
      ) : null}
      <ul className="mt-4 space-y-2 text-sm text-cream sm:text-base">
        {list.map(({ time, games }) => (
          <li key={time}>
            <span className="font-semibold text-gold">{time}</span>{" "}
            {games.map((f, i) => (
              <span key={f.id}>
                {i > 0 ? " · " : null}
                {label(f)}
                {f.id === BERNABEU_ID ? " (Bernabéu, Madrid)" : null}
              </span>
            ))}
            {time === "19:00" ? (
              <span className="mt-1 block text-cream-muted">
                {es
                  ? "Desde las 19:00, NFL RedZone en directo."
                  : "From 19:00, NFL RedZone live."}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <Link href={es ? "/es/nfl-madrid" : "/nfl-madrid"} className="text-gold hover:text-cream">
          {es ? "Guía de la NFL en Madrid →" : "NFL in Madrid guide →"}
        </Link>
        {context === "home" ? (
          <>
            {" · "}
            <Link
              href={es ? "/es/nfl-madrid#esta-semana" : "/nfl-madrid#this-week"}
              className="text-gold hover:text-cream"
            >
              {es ? "Esta semana en Madrid →" : "This week in Madrid →"}
            </Link>
            {" · "}
            <Link
              href={es ? "/es/whats-on" : "/whats-on"}
              data-event="whats_on"
              className="text-gold hover:text-cream"
            >
              {es ? "Agenda →" : "What's On →"}
            </Link>
          </>
        ) : null}
      </p>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </section>
  );
}
