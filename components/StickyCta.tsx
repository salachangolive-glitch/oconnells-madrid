import Link from "next/link";
import { PHONE_TEL } from "@/lib/venue";

type Locale = "en" | "es";

const labels = {
  en: {
    call: "Call",
    whatsOn: "What's on",
    thursday: "Thursday €1",
  },
  es: {
    call: "Llamar",
    whatsOn: "Agenda",
    thursday: "Jueves €1",
  },
} as const;

export function StickyCta({ locale = "en" }: { locale?: Locale }) {
  const t = labels[locale];
  const thursdayHref =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-pub-burgundy-deep/95 backdrop-blur-md safe-bottom"
      aria-label={locale === "es" ? "Acciones rápidas" : "Quick actions"}
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-3 gap-1 px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-cream sm:text-xs">
        <li>
          <a
            href={PHONE_TEL}
            className="flex min-h-12 flex-col items-center justify-center rounded-sm px-1 py-1 hover:bg-cream/10"
          >
            <span aria-hidden>📞</span>
            {t.call}
          </a>
        </li>
        <li>
          <Link
            href="/whats-on"
            className="flex min-h-12 flex-col items-center justify-center rounded-sm px-1 py-1 hover:bg-cream/10"
          >
            <span aria-hidden>📅</span>
            {t.whatsOn}
          </Link>
        </li>
        <li>
          <Link
            href={thursdayHref}
            className="flex min-h-12 flex-col items-center justify-center rounded-sm bg-gold/20 px-1 py-1 text-gold hover:bg-gold/30"
          >
            <span aria-hidden>🍻</span>
            {t.thursday}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
