import Link from "next/link";

type Locale = "en" | "es";

/** Compact Thursday mention for inner pages — Home uses HomeCtaBand only. */
export function ThursdayFeature({ locale = "en" }: { locale?: Locale }) {
  const href =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";
  const isEs = locale === "es";

  return (
    <section className="mb-12">
      <div className="pub-rule mb-5" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        {isEs ? "La noche de la semana" : "The night of the week"}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-bold text-cream sm:text-3xl">
        {isEs ? "Jueves · chupitos a 1 €" : "Thursday · €1 shots"}
      </h2>
      <p className="mt-3 max-w-lg text-cream-muted">
        {isEs
          ? "Erasmus, internacionales y amigos cerca de Sol. El 1 € es la excusa; el sitio es O’Connell’s."
          : "Erasmus, internationals and friends near Sol. The €1 is the excuse — the pub is O’Connell’s."}
      </p>
      <p className="mt-5">
        <Link href={href} className="text-sm text-gold hover:text-cream">
          {isEs ? "Más sobre el jueves →" : "More about Thursday →"}
        </Link>
      </p>
    </section>
  );
}
