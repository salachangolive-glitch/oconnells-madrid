import Link from "next/link";
import { SITE_NAME } from "@/lib/venue";

type Locale = "en" | "es";

const nav = {
  en: [
    { href: "/sports", label: "Sports" },
    { href: "/whats-on", label: "Fixtures" },
    { href: "/thursday-1-euro-shots", label: "Thursday €1" },
    { href: "/erasmus", label: "Erasmus" },
    { href: "/location", label: "Location" },
    { href: "/watch-football-madrid", label: "Football" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  es: [
    { href: "/es/sports", label: "Deportes" },
    { href: "/es/whats-on", label: "Partidos" },
    { href: "/es/thursday-1-euro-shots", label: "Jueves 1 €" },
    { href: "/es/erasmus", label: "Erasmus" },
    { href: "/es/location", label: "Ubicación" },
    { href: "/es/watch-football-madrid", label: "Fútbol" },
    { href: "/es/about", label: "Sobre nosotros" },
    { href: "/es/contact", label: "Contacto" },
  ],
} as const;

export function SiteHeader({
  locale = "en",
  altLangHref,
}: {
  locale?: Locale;
  altLangHref?: string;
}) {
  const items = nav[locale];
  const home = locale === "es" ? "/es" : "/";
  const switchLabel = locale === "es" ? "EN" : "ES";
  const switchHref = altLangHref || (locale === "es" ? "/" : "/es");

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href={home} className="shrink-0 leading-tight">
          <span className="font-serif text-lg font-bold tracking-tight text-cream sm:text-xl">
            {SITE_NAME}
          </span>
          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
            Madrid
          </span>
        </Link>
        <nav
          className="hidden items-center gap-5 text-sm text-cream-muted lg:flex"
          aria-label="Primary"
        >
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={switchHref}
          className="rounded-sm border border-gold/40 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold/10"
          hrefLang={locale === "es" ? "en" : "es"}
        >
          {switchLabel}
        </Link>
      </div>
      <nav
        className="flex flex-wrap gap-x-3 gap-y-1.5 border-t border-cream/5 px-4 py-1.5 text-xs text-cream-muted lg:hidden"
        aria-label="Mobile primary"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap hover:text-gold"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
