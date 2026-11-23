import { ADDRESS, MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

/**
 * Owner order 23 Nov 2026 (via DG): visible "Get directions / Cómo llegar"
 * button to the O'Connell St Maps listing (MAPS_URL = GBP place_id
 * ChIJLdKNhYAoQg0RSYjRwIO4dZQ, lib/venue.ts). Phones are not touched here.
 */
export function DirectionsButton({
  locale = "en",
  className = "",
}: {
  locale?: Locale;
  className?: string;
}) {
  const isEs = locale === "es";
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-event="directions"
      data-oc-directions="button"
      className={`inline-flex items-center rounded-md bg-pub-green px-5 py-2.5 font-semibold text-cream hover:bg-pub-green-light ${className}`}
    >
      {isEs ? "Cómo llegar" : "Get directions"}
    </a>
  );
}

/**
 * Short "How to get here" block. Facts only: the address (GBP), Sol station
 * (Metro L1, L2, L3 and Cercanías) exits onto Puerta del Sol, and Calle de
 * Espoz y Mina leaves the east end of Puerta del Sol running south
 * (OpenStreetMap geometry checked 23 Nov 2026). No walking minutes quoted.
 */
export function HowToGetHere({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  return (
    <section
      id={isEs ? "como-llegar" : "how-to-get-here"}
      data-oc-howto=""
      className="mb-12 max-w-2xl"
    >
      <h2 className="font-serif text-xl font-bold text-cream">
        {isEs ? "Cómo llegar" : "How to get here"}
      </h2>
      <div className="pub-rule my-3" />
      {isEs ? (
        <ul className="list-disc space-y-1 pl-5 text-sm text-cream-muted sm:text-base">
          <li>
            Dirección: {ADDRESS.full}, a pocos minutos a pie de la Puerta del
            Sol.
          </li>
          <li>
            En metro o tren: estación de Sol (Metro líneas 1, 2 y 3, y
            Cercanías). Sal a la Puerta del Sol.
          </li>
          <li>
            Desde la Puerta del Sol: busca la Calle de Espoz y Mina, que sale
            del extremo este de la plaza hacia el sur, y baja hasta el número 7:
            fachada roja con el rótulo dorado O&apos;CONNELL ST.
          </li>
        </ul>
      ) : (
        <ul className="list-disc space-y-1 pl-5 text-sm text-cream-muted sm:text-base">
          <li>
            Address: {ADDRESS.full}, a few minutes&apos; walk from Puerta del
            Sol.
          </li>
          <li>
            By metro or train: Sol station (Metro lines 1, 2 and 3, and
            Cercanías). Come up onto Puerta del Sol.
          </li>
          <li>
            From Puerta del Sol: find Calle de Espoz y Mina, which leaves the
            east end of the square heading south, and walk down to number 7: a
            red facade with gold O&apos;CONNELL ST. lettering.
          </li>
        </ul>
      )}
      <p className="mt-4">
        <DirectionsButton locale={locale} />
      </p>
    </section>
  );
}
