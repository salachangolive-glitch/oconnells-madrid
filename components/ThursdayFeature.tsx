import Link from "next/link";

type Locale = "en" | "es";

export function ThursdayFeature({ locale = "en" }: { locale?: Locale }) {
  const href =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";
  const kicker = locale === "es" ? "La noche de la semana" : "The night of the week";
  const title = locale === "es" ? "Jueves chupitos" : "Thursday shots";
  const body =
    locale === "es"
      ? "Erasmus, internacionales y grupos cerca de Sol. El €1 es la excusa; el ambiente es O’Connell’s."
      : "Erasmus, internationals and friend groups near Sol. The €1 is the excuse — the room is pure O’Connell’s.";
  const cta = locale === "es" ? "Ver el jueves" : "See Thursday night";

  return (
    <section className="relative mb-12 overflow-hidden border border-gold/35 bg-gradient-to-br from-pub-burgundy via-pub-burgundy-deep to-pub-green p-6 sm:p-8">
      <div className="absolute -right-2 top-2 select-none font-serif text-[7rem] font-bold leading-none text-gold/15 sm:text-[9rem]">
        €1
      </div>
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        {kicker}
      </p>
      <h2 className="relative mt-2 font-serif text-3xl font-bold text-cream sm:text-4xl">
        {title}
      </h2>
      <p className="relative mt-3 max-w-lg text-cream/85">{body}</p>
      <p className="relative mt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 border border-gold bg-gold/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-pub-burgundy-deep"
        >
          {cta}
        </Link>
      </p>
    </section>
  );
}
