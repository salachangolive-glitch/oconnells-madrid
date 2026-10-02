import Link from "next/link";

type Locale = "en" | "es";

/** Compact Thursday mention for Home and Erasmus. */
export function ThursdayFeature({ locale = "en" }: { locale?: Locale }) {
  const href =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";
  const isEs = locale === "es";

  return (
    <section className="mb-12">
      <div className="pub-rule mb-5" />
      <h2 className="mt-2 font-serif text-2xl font-bold text-cream sm:text-3xl">
        {isEs ? "Jueves · chupitos a 1 €" : "Thursday · €1 shots"}
      </h2>
      <p className="mt-3 max-w-lg text-cream-muted">
        {isEs
          ? "Todos los jueves: chupitos a 1 € en el pub. Pregunta en la barra para más información."
          : "Every Thursday: €1 shots at the pub. Ask at the bar when you arrive."}
      </p>
      <p className="mt-5">
        <Link href={href} className="text-sm text-gold hover:text-cream">
          {isEs ? "Más sobre el jueves →" : "More about Thursday →"}
        </Link>
      </p>
    </section>
  );
}
