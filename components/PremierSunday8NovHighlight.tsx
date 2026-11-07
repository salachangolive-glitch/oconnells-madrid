import Link from "next/link";
import { PL_KICKOFFS, PL_PATHS, PL_SUNDAY } from "@/lib/premier-sunday-8-nov";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";

/**
 * Unique home/sports highlight for Liverpool 15:00, Chelsea 15:00, United 17:30.
 * Does not overwrite TonightMeetupCta, NflSunday8Nov, nfl-madrid, or news.
 */
const HIDE_SCRIPT = `(function(){try{var d=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());if(d>"${PL_SUNDAY.lastDay}"){var e=document.querySelectorAll("[data-pl-sunday-8-nov]");for(var i=0;i<e.length;i++)e[i].style.display="none";}}catch(_){}})();`;

export function PremierSunday8NovHighlight({ locale }: { locale: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  if (today > PL_SUNDAY.lastDay) return null;
  const es = locale === "es";

  return (
    <section
      data-pl-sunday-8-nov=""
      className="mb-12 max-w-2xl border-l-2 border-gold pl-4"
      aria-labelledby="pl8-title"
    >
      <h2 id="pl8-title" className="font-serif text-xl font-bold text-cream">
        {es
          ? "Premier League domingo 8 nov — Liverpool, Chelsea, United"
          : "Premier League Sunday 8 Nov — Liverpool, Chelsea, United"}
      </h2>
      <div className="pub-rule my-3" />
      <p className="text-sm text-cream-muted sm:text-base">
        {es
          ? "El reloj inglés de este domingo cae sobre el cerrojo habitual de esta puerta. Liverpool a las 15:00 (Crystal Palace), Chelsea a las 15:00 (Sunderland), United a las 17:30 (Aston Villa), hora de Madrid. Preguntad qué partido hay. No prometemos un nombre en cada televisor."
          : "This Sunday's English clock lands on the hour this door usually unlocks. Liverpool 15:00 (Crystal Palace), Chelsea 15:00 (Sunderland), United 17:30 (Aston Villa), Madrid time. Ask which game is on. We do not promise a named match on every set."}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-cream sm:text-base">
        <li>
          <span className="font-semibold text-gold">{PL_KICKOFFS.palaceLiverpool.madrid}</span>{" "}
          {es ? "Crystal Palace–Liverpool" : "Crystal Palace vs Liverpool"}
        </li>
        <li>
          <span className="font-semibold text-gold">{PL_KICKOFFS.sunderlandChelsea.madrid}</span>{" "}
          {es ? "Sunderland–Chelsea" : "Sunderland vs Chelsea"}
        </li>
        <li>
          <span className="font-semibold text-gold">{PL_KICKOFFS.unitedVilla.madrid}</span>{" "}
          {es ? "Manchester United–Aston Villa" : "Manchester United vs Aston Villa"}
        </li>
      </ul>
      <p className="mt-3 text-sm text-cream-muted sm:text-base">
        {es
          ? "A la misma 15:00 también juegan Brighton–Brentford e Ipswich–Bournemouth. Four Corner abre a las 14:00 en Victoria 6, con pantallas de deporte."
          : "The same 15:00 also has Brighton vs Brentford and Ipswich vs Bournemouth. Four Corner opens 14:00 on Victoria 6, with sports screens."}
      </p>
      <p className="mt-4 text-sm">
        <Link href={es ? PL_PATHS.liverpoolEs : PL_PATHS.liverpoolEn} className="text-gold hover:text-cream">
          {es ? "Liverpool a las 15:00 →" : "Liverpool at 15:00 →"}
        </Link>
        {" · "}
        <Link href={es ? PL_PATHS.chelseaEs : PL_PATHS.chelseaEn} className="text-gold hover:text-cream">
          {es ? "Chelsea a las 15:00 →" : "Chelsea at 15:00 →"}
        </Link>
        {" · "}
        <Link href={es ? PL_PATHS.unitedEs : PL_PATHS.unitedEn} className="text-gold hover:text-cream">
          {es ? "United a las 17:30 →" : "United at 17:30 →"}
        </Link>
      </p>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </section>
  );
}
