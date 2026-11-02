import { BAYERN_MP_PATHS } from "@/components/BayernMeetingPointArticle";
import { MAPS_URL } from "@/lib/venue";

/**
 * Home featured block: Atlético–Bayern, UEFA Champions League, Tue 3 Nov 2026
 * 21:00 Madrid, Metropolitano (owner order via DG, Mon 2 Nov 09:44). Broadcast
 * confirmed: /workspace/bayern-gbp-2026/oconnell/EMISION-CONFIRMADA.md
 * (lib/fixtures.ts row 2026-11-03-atletico-bayern = Confirmed).
 * Placed right after the hero/CTA band on / and /es; NFL 8 Nov block follows.
 * German + English on both homes, Spanish too on /es. Hours from lib/venue
 * (Mon–Thu 18:00–03:00, so Mon 2 and Tue 3 Nov open 18:00).
 * Gate: build-time (<= BAYERN3_LAST_DAY, gone from the 4 Nov 06:31 daily
 * rebuild) + inline clock that hides it from Wed 4 Nov 00:00 Madrid.
 * Main link per language: the meeting point article (owner via DG 2 Nov 09:46,
 * «Treffpunkt» / «meeting point» / «punto de encuentro» allowed for this campaign only).
 * Links are final URLs (no 301): main DE article moved 27 Oct from
 * /de/bayern-fans-madrid-treffpunkt to /de/bayern-fans-madrid-sol.
 */
export const BAYERN3_LAST_DAY = "2026-11-03";

const DE_LINKS = [
  { href: "/de/bayern-fans-madrid-sol", label: "Bayern-Fans in Madrid: der Abend an der Sol" },
  { href: "/de/sports-bar-sol", label: "Atlético – Bayern live an der Puerta del Sol" },
  { href: "/de/bayern-fans-madrid-uhrzeiten", label: "Uhrzeiten für den Spieltag" },
  { href: "/de/spanisch-fuer-bayern-fans", label: "Spanisch für Bayern Fans: zehn Sätze" },
  { href: "/de", label: "Alle deutschen Seiten" },
];

const EN_LINKS = [
  { href: "/news/bayern-fans-madrid-sol-pre-match", label: "Bayern fans in Madrid: the evening near Sol" },
  { href: "/news/bayern-fans-madrid-timing", label: "Match-day timings" },
  { href: "/news/spanish-phrases-football-fans", label: "Ten Spanish phrases for the bar and the street" },
  { href: "/news/bayern-fans-things-to-do-near-sol", label: "Things to do near Sol" },
];

const HIDE_SCRIPT = `(function(){try{var d=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());if(d>"${BAYERN3_LAST_DAY}"){var e=document.querySelectorAll("[data-bayern3]");for(var i=0;i<e.length;i++)e[i].style.display="none";}}catch(_){}})();`;

function MainCta({ href, label, lang }: { href: string; label: string; lang: string }) {
  return (
    <p className="mt-4">
      <a
        href={href}
        hrefLang={lang}
        data-event="bayern_article"
        className="inline-block bg-gold px-4 py-2 text-sm font-semibold text-pub-burgundy-deep transition hover:bg-cream"
      >
        {label} →
      </a>
    </p>
  );
}

function LinkList({ items, lang }: { items: { href: string; label: string }[]; lang: string }) {
  return (
    <ul className="mt-3 space-y-1 text-sm sm:text-base" lang={lang}>
      {items.map((l) => (
        <li key={l.href}>
          <a href={l.href} hrefLang={lang} className="text-gold underline hover:text-cream">
            {l.label} →
          </a>
        </li>
      ))}
    </ul>
  );
}

export function BayernMatchFeature({ locale, today }: { locale: "en" | "es"; today: string }) {
  if (today > BAYERN3_LAST_DAY) return null;
  const es = locale === "es";
  return (
    <section
      id="atletico-bayern-3-november"
      data-bayern3=""
      className="mb-12 max-w-2xl border-2 border-gold/60 bg-pub-burgundy-deep/60 p-5 sm:p-6"
      aria-labelledby="bayern3-title"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        UEFA Champions League · {es ? "mar 3 nov · 21:00" : "Tue 3 Nov · 21:00"}
      </p>

      {/* Deutsch */}
      <div lang="de">
        <h2 id="bayern3-title" className="mt-2 font-serif text-2xl font-bold text-cream">
          Atlético – Bayern: euer Treffpunkt an der Sol, live auf der Großleinwand
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          Bayern-Fans in Madrid: Am Dienstag, 3. November, um 21:00 Uhr (Madrider Zeit) läuft
          Atlético – Bayern aus dem Metropolitano live auf der Großleinwand im O&apos;Connell St,
          einem Irish Pub in der Calle de Espoz y Mina 7, direkt neben der Puerta del Sol. Bier,
          Essen und Stimmung mitten im Zentrum – euer Treffpunkt vor und nach dem Spiel. Montag und Dienstag geöffnet von 18:00 bis 03:00 Uhr.
        </p>
        <MainCta href={BAYERN_MP_PATHS.de} lang="de" label="Treffpunkt an der Sol: Spiel, Metro zum Stadion, zurück bis 03:00" />
        <LinkList items={DE_LINKS} lang="de" />
      </div>

      {/* English */}
      <div lang="en" className="mt-6 border-t border-gold/20 pt-5">
        <h3 className="font-serif text-lg font-bold text-cream">
          Atlético v Bayern: your meeting point at Sol, live on the big screen
        </h3>
        <p className="mt-2 text-sm text-cream-muted sm:text-base">
          Bayern fans in Madrid: Atlético v Bayern kicks off at the Metropolitano on Tuesday
          3 November at 21:00 Madrid time, and it&apos;s live on the big screen at O&apos;Connell St,
          an Irish pub at Calle de Espoz y Mina 7, right next to Puerta del Sol. Beer, food and a
          match-night atmosphere in the city centre — your meeting point before and after the match. Open Monday and Tuesday from 18:00 to 03:00.
        </p>
        <MainCta href={BAYERN_MP_PATHS.en} lang="en" label="Meeting point at Sol: the match, the metro to the stadium, back until 03:00" />
        <LinkList items={EN_LINKS} lang="en" />
      </div>

      {es ? (
        <div lang="es" className="mt-6 border-t border-gold/20 pt-5">
          <h3 className="font-serif text-lg font-bold text-cream">
            Atlético–Bayern: tu punto de encuentro en Sol, en directo en pantalla grande
          </h3>
          <p className="mt-2 text-sm text-cream-muted sm:text-base">
            El martes 3 de noviembre a las 21:00, el Atlético–Bayern de Champions desde el
            Metropolitano, en directo en pantalla grande en O&apos;Connell St, pub irlandés en la
            Calle de Espoz y Mina 7, junto a la Puerta del Sol. Cerveza, comida y ambiente de
            partido en pleno centro: tu punto de encuentro antes y después del partido. Lunes y martes abrimos de 18:00 a 03:00.
          </p>
          <MainCta href={BAYERN_MP_PATHS.es} lang="es" label="Punto de encuentro en Sol: el partido, el metro al estadio y vuelta hasta las 03:00" />
        </div>
      ) : null}

      <p className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          className="border border-gold px-4 py-2 text-gold transition hover:bg-gold hover:text-pub-burgundy-deep"
        >
          {es ? "Cómo llegar · Wegbeschreibung" : "Directions · Wegbeschreibung"}
        </a>
        <a
          href={es ? "/es/whats-on" : "/whats-on"}
          data-event="whats_on"
          className="border border-gold/40 px-4 py-2 text-cream-muted transition hover:text-gold"
        >
          {es ? "Agenda" : "What's On"}
        </a>
      </p>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </section>
  );
}
