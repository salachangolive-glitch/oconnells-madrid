import Link from "next/link";
import { MAPS_URL, PHONE_TEL } from "@/lib/venue";

type Locale = "en" | "es";

const labels = {
  en: {
    directions: "Directions",
    call: "Call",
    whatsOn: "What's on",
    thursday: "Thursday €1",
  },
  es: {
    directions: "Cómo llegar",
    call: "Llamar",
    whatsOn: "Agenda",
    thursday: "Jueves €1",
  },
} as const;

export function StickyCta({ locale = "en" }: { locale?: Locale }) {
  const t = labels[locale];
  const whatsOnHref = "/whats-on";
  const thursdayHref =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/15 bg-pub-green/95 backdrop-blur-md safe-bottom"
      aria-label={locale === "es" ? "Acciones rápidas" : "Quick actions"}
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-4 gap-1 px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-cream sm:text-xs">
        <li>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 flex-col items-center justify-center rounded-md px-1 py-1 hover:bg-cream/10"
          >
            <span aria-hidden>📍</span>
            {t.directions}
          </a>
        </li>
        <li>
          <a
            href={PHONE_TEL}
            className="flex min-h-12 flex-col items-center justify-center rounded-md px-1 py-1 hover:bg-cream/10"
          >
            <span aria-hidden>📞</span>
            {t.call}
          </a>
        </li>
        <li>
          <Link
            href={whatsOnHref}
            className="flex min-h-12 flex-col items-center justify-center rounded-md px-1 py-1 hover:bg-cream/10"
          >
            <span aria-hidden>📅</span>
            {t.whatsOn}
          </Link>
        </li>
        <li>
          <Link
            href={thursdayHref}
            className="flex min-h-12 flex-col items-center justify-center rounded-md bg-cream/15 px-1 py-1 text-cream hover:bg-cream/25"
          >
            <span aria-hidden>🍻</span>
            {t.thursday}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
