import {
  agendaBuildNow,
  displayCompetition,
  fixtureDataAttrs,
  fixtureMatchLabel,
  formatFixtureDay,
  getAgendaCandidates,
  isOnNow,
  isTodaySlot,
  isWeekSlot,
  madridTodayYmd,
  screenPolicyLine,
  type Fixture,
} from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";
import { Section } from "@/components/Prose";

type Locale = "en" | "es";

const EMPTY = {
  today: {
    en: "Nothing confirmed is still to come today. If you want a specific game, ask at the bar.",
    es: "Hoy no queda nada confirmado por empezar. Si buscas un partido concreto, pregunta en la barra.",
  },
  week: {
    en: "No other confirmed screenings in the next 7 days. Ask at the bar if you want a specific game.",
    es: "No hay más emisiones confirmadas en los próximos 7 días. Pregunta en la barra si buscas un partido concreto.",
  },
} as const;

type RowProps = { f: Fixture; locale: Locale; visible: boolean; onNow: boolean };

export function OnNowBadge({ locale, onNow }: { locale: Locale; onNow: boolean }) {
  return (
    <span
      data-fx-on=""
      data-fx-off={!onNow ? "" : undefined}
      className="ml-2 rounded-sm bg-gold px-1.5 py-0.5 text-[10px] font-bold tracking-[0.12em] text-black"
    >
      {locale === "es" ? "En juego" : "On now"}
    </span>
  );
}

function FixtureDetail({ f, locale, visible, onNow }: RowProps) {
  const isEs = locale === "es";
  const competition = displayCompetition(f.competition);
  return (
    <li
      data-fx-key={`list:today:${f.id}`}
      data-fx-slot="today"
      {...fixtureDataAttrs(f)}
      data-fx-off={!visible ? "" : undefined}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {competition}
        {f.kickoffMadrid ? (
          <span className="ml-2 tracking-[0.12em] text-cream-muted">
            · {isEs ? "Confirmado" : "Confirmed"}
          </span>
        ) : null}
        <OnNowBadge locale={locale} onNow={onNow} />
      </p>
      <p className="mt-1 font-serif text-2xl font-bold text-cream">
        {fixtureMatchLabel(f, locale)}
      </p>
      <p className="mt-2 text-cream-muted">
        {formatFixtureDay(f.date, locale)}
        {f.kickoffMadrid
          ? ` · ${f.kickoffMadrid} ${isEs ? "hora Madrid" : "Madrid"}`
          : null}
      </p>
      {f.kickoffMadrid ? (
        <p className="mt-2 text-sm text-cream-muted">{screenPolicyLine(locale)}</p>
      ) : null}
      {f.line?.[locale] ? (
        <p className="mt-2 text-sm text-cream">{f.line[locale]}</p>
      ) : null}
      <p className="mt-4">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          className="text-sm text-gold hover:text-cream"
        >
          {isEs ? "Cómo llegar →" : "Directions →"}
        </a>
      </p>
    </li>
  );
}

function ComingUpRow({ f, locale, visible }: RowProps) {
  const isEs = locale === "es";
  return (
    <li
      data-fx-key={`list:week:${f.id}`}
      data-fx-slot="week"
      {...fixtureDataAttrs(f)}
      data-fx-off={!visible ? "" : undefined}
    >
      <strong className="text-cream">{displayCompetition(f.competition)}</strong>
      {f.kickoffMadrid ? (
        <span className="ml-2 text-xs uppercase tracking-[0.14em] text-gold">
          {isEs ? "Confirmado" : "Confirmed"}
        </span>
      ) : null}
      {" — "}
      {fixtureMatchLabel(f, locale)}
      {" · "}
      {formatFixtureDay(f.date, locale)}
      {f.kickoffMadrid ? ` · ${f.kickoffMadrid}` : null}
      {f.kickoffMadrid ? (
        <span className="mt-1 block text-sm text-cream-muted">
          {screenPolicyLine(locale)}
        </span>
      ) : null}
      {f.line?.[locale] ? (
        <span className="mt-1 block text-sm text-cream">{f.line[locale]}</span>
      ) : null}
    </li>
  );
}

/**
 * Today / Next 7 days, EN and ES from the same FIXTURES list and the same rules
 * (lib/fixtures.ts). Static HTML is cut with the build clock in Europe/Madrid;
 * every not-finished row is in the markup (hidden when out of its slot) and
 * AgendaClock re-applies the rules in the browser with the real Madrid time.
 */
export function FixtureList({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const now = agendaBuildNow();
  const today = madridTodayYmd(now);
  const rows = getAgendaCandidates(now);
  const todayCount = rows.filter((f) => isTodaySlot(f, today, now)).length;
  const weekCount = rows.filter((f) => isWeekSlot(f, today, now)).length;

  const weekTitle = isEs ? "Próximos 7 días" : "Next 7 days";

  return (
    <div data-fx-root="list">
      <Section title={isEs ? "Hoy" : "Today"}>
        <ul className="flex flex-col gap-6">
          {rows.map((f) => (
            <FixtureDetail
              key={f.id}
              f={f}
              locale={locale}
              visible={isTodaySlot(f, today, now)}
              onNow={isOnNow(f, now)}
            />
          ))}
        </ul>
        <p
          className="text-cream-muted"
          data-fx-empty="today"
          data-fx-empty-id="list:today"
          data-fx-off={todayCount > 0 ? "" : undefined}
        >
          {EMPTY.today[locale]}
        </p>
      </Section>

      <Section title={weekTitle}>
        <ul className="flex flex-col gap-4">
          {rows.map((f) => (
            <ComingUpRow
              key={f.id}
              f={f}
              locale={locale}
              visible={isWeekSlot(f, today, now)}
              onNow={false}
            />
          ))}
        </ul>
        <p
          className="text-cream-muted"
          data-fx-empty="week"
          data-fx-empty-id="list:week"
          data-fx-off={weekCount > 0 ? "" : undefined}
        >
          {EMPTY.week[locale]}
        </p>
      </Section>
    </div>
  );
}
