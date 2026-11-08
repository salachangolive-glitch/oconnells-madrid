import Link from "next/link";
import { AFTER_GAME_PATHS, AFTER_GAME_SUNDAY } from "@/lib/after-game-sunday-8-nov";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";

/**
 * Unique home/sports highlight for after-Bernabéu this door + evening NFL then Atleti 21:00.
 * Does not overwrite TonightMeetupCta, NflSunday8Nov, PremierSunday8NovHighlight, nfl-madrid, or news.
 */
const HIDE_SCRIPT = `(function(){try{var d=new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());if(d>"${AFTER_GAME_SUNDAY.lastDay}"){var e=document.querySelectorAll("[data-after-game-sunday-8-nov]");for(var i=0;i<e.length;i++)e[i].style.display="none";}}catch(_){}})();`;

export function AfterGameSundayHighlight({ locale }: { locale: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  if (today > AFTER_GAME_SUNDAY.lastDay) return null;
  const es = locale === "es";

  return (
    <section
      data-after-game-sunday-8-nov=""
      className="mb-12 max-w-2xl border-l-2 border-gold pl-4"
      aria-labelledby="after-game-8-title"
    >
      <h2 id="after-game-8-title" className="font-serif text-xl font-bold text-cream">
        {es
          ? "Después del Bernabéu — esta puerta, luego las hermanas"
          : "After the Bernabéu — this door, then the sister doors"}
      </h2>
      <div className="pub-rule my-3" />
      <p className="text-sm text-cream-muted sm:text-base">
        {es
          ? "Salís del Madrid Game y esta calle es Espoz y Mina 7: fachada roja, rótulo dorado. Four Corner ya está abierto en Victoria 6 desde las 14:00, con pantallas de deporte. Por la noche, NFL RedZone desde las 19:00 y Atlético–Barcelona a las 21:00. Preguntad qué partido hay."
          : "You leave the Madrid Game and this street is Espoz y Mina 7: red facade, gold lettering. Four Corner is already open on Victoria 6 from 14:00, with sports screens. Evening: NFL RedZone from 19:00, then Atlético vs Barcelona at 21:00. Ask which game is on."}
      </p>
      <p className="mt-4 text-sm">
        <Link href={es ? AFTER_GAME_PATHS.bernabeuEs : AFTER_GAME_PATHS.bernabeuEn} className="text-gold hover:text-cream">
          {es ? "Esta puerta después del Bernabéu →" : "This door after the Bernabéu →"}
        </Link>
        {" · "}
        <Link href={es ? AFTER_GAME_PATHS.eveningEs : AFTER_GAME_PATHS.eveningEn} className="text-gold hover:text-cream">
          {es ? "NFL noche y Atleti 21:00 →" : "Evening NFL then Atleti 21:00 →"}
        </Link>
      </p>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </section>
  );
}
