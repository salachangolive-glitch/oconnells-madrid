import Link from "next/link";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

const labels = {
  en: {
    whatsOn: "What's on",
    directions: "Directions",
    thursday: "Thursday €1",
  },
  es: {
    whatsOn: "What's on",
    directions: "Cómo llegar",
    thursday: "Jueves €1",
  },
} as const;

/** Conversion strip directly under the clean facade photo (Home only). */
export function HomeCtaBand({ locale = "en" }: { locale?: Locale }) {
  const t = labels[locale];
  const thursdayHref =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";

  return (
    <nav
      className="border-y border-cream/15 bg-pub-green/90"
      aria-label={locale === "es" ? "Acciones de portada" : "Home actions"}
    >
      <ul className="mx-auto flex max-w-5xl items-stretch justify-center divide-x divide-cream/20 text-center text-xs font-semibold uppercase tracking-[0.14em] text-cream sm:text-sm">
        <li className="flex-1">
          <Link
            href="/whats-on"
            className="flex min-h-11 items-center justify-center px-2 py-3 hover:bg-cream/10"
          >
            {t.whatsOn}
          </Link>
        </li>
        <li className="flex-1">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center px-2 py-3 hover:bg-cream/10"
          >
            {t.directions}
          </a>
        </li>
        <li className="flex-1">
          <Link
            href={thursdayHref}
            className="flex min-h-11 items-center justify-center bg-cream/10 px-2 py-3 hover:bg-cream/20"
          >
            {t.thursday}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
