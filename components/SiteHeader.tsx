import Link from "next/link";
import { SITE_NAME } from "@/lib/venue";

type Locale = "en" | "es";

const nav = {
  en: [
    { href: "/sports", label: "Sports" },
    { href: "/watch-football-madrid", label: "Football" },
    { href: "/erasmus", label: "Erasmus" },
    { href: "/thursday-1-euro-shots", label: "€1 shots" },
    { href: "/whats-on", label: "What's on" },
    { href: "/location", label: "Location" },
    { href: "/about", label: "About" },
  ],
  es: [
    { href: "/es/sports", label: "Deportes" },
    { href: "/es/watch-football-madrid", label: "Fútbol" },
    { href: "/es/erasmus", label: "Erasmus" },
    { href: "/es/thursday-1-euro-shots", label: "Chupitos €1" },
    { href: "/es/location", label: "Ubicación" },
    { href: "/es/about", label: "Sobre nosotros" },
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
  const switchHref =
    altLangHref || (locale === "es" ? "/" : "/es");

  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href={home}
          className="shrink-0 font-serif text-lg font-bold tracking-tight text-cream sm:text-xl"
        >
          {SITE_NAME}
          <span className="ml-1 text-sm font-sans font-normal text-cream/60">
            Madrid
          </span>
        </Link>
        <nav
          className="hidden items-center gap-4 text-sm text-cream/80 md:flex"
          aria-label="Primary"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={switchHref}
          className="rounded border border-cream/30 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-cream hover:bg-cream/10"
          hrefLang={locale === "es" ? "en" : "es"}
        >
          {switchLabel}
        </Link>
      </div>
      <nav
        className="flex flex-wrap gap-x-3 gap-y-2 border-t border-cream/5 px-4 py-2 text-xs text-cream/75 md:hidden"
        aria-label="Mobile primary"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap hover:text-cream"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
