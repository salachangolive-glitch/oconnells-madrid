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
        {isEs
          ? "Chupitos a 1 euro los jueves en Madrid, junto a Sol"
          : "Thursday shots near Sol · €1 + live sport"}
      </h2>
      <p className="mt-3 max-w-lg text-cream-muted">
        {isEs
          ? "Cada jueves, chupitos a 1 € y deporte en directo en las pantallas, a un paso de Puerta del Sol. Con Movistar tenemos prácticamente todos los deportes. Pregunta en la barra por la selección de esa noche."
          : "Every Thursday it’s €1 shots and live sport on the screens, a short walk from Puerta del Sol. With Movistar we show practically every sport. Ask at the bar for that night’s selection."}
      </p>
      <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        <Link href={href} className="text-sm text-gold hover:text-cream">
          {isEs ? "Más sobre el jueves →" : "More about Thursday →"}
        </Link>
        <Link
          href={isEs ? "/es/whats-on" : "/whats-on"}
          className="text-sm text-gold hover:text-cream"
        >
          {isEs ? "Partidos de esta semana →" : "This week’s matches →"}
        </Link>
      </p>
    </section>
  );
}
