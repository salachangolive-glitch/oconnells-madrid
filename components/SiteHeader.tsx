import Link from "next/link";
import { SITE_NAME } from "@/lib/venue";

type Locale = "en" | "es" | "de";

const nav = {
  en: [
    { href: "/whats-on", label: "What's On" },
    { href: "/sports", label: "Live Sports" },
    { href: "/menu", label: "Menu" },
    { href: "/thursday-1-euro-shots", label: "Thursday €1" },
    { href: "/location", label: "Location" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  es: [
    { href: "/es/whats-on", label: "Agenda" },
    { href: "/es/sports", label: "Deportes" },
    { href: "/es/menu", label: "Carta" },
    { href: "/es/thursday-1-euro-shots", label: "Jueves 1 €" },
    { href: "/es/location", label: "Ubicación" },
    { href: "/es/about", label: "Sobre nosotros" },
    { href: "/es/contact", label: "Contacto" },
  ],
  // DE site is article-only for now; chrome links to EN pages.
  de: [
    { href: "/whats-on", label: "What's On" },
    { href: "/sports", label: "Live Sports" },
    { href: "/menu", label: "Speisekarte" },
    { href: "/location", label: "Lage" },
    { href: "/about", label: "Über uns" },
    { href: "/contact", label: "Kontakt" },
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
  const home = locale === "es" ? "/es" : locale === "de" ? "/de" : "/";
  const switchLabel = locale === "es" || locale === "de" ? "EN" : "ES";
  const switchHref =
    altLangHref ||
    (locale === "es" ? "/" : locale === "de" ? "/sports-bar-sol" : "/es");
  const switchHrefLang =
    locale === "es" || locale === "de" ? "en" : "es";

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
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gold"
              data-event={
                item.href.includes("whats-on")
                  ? "whats_on"
                  : item.href.includes("/contact")
                    ? "contact"
                    : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={switchHref}
          className="rounded-sm border border-gold/40 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-gold hover:bg-gold/10"
          hrefLang={switchHrefLang}
        >
          {switchLabel}
        </Link>
      </div>
      <nav
        className="flex flex-nowrap gap-x-3 overflow-x-auto border-t border-cream/5 px-4 py-1.5 text-xs text-cream-muted lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Mobile primary"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 whitespace-nowrap hover:text-gold"
            data-event={
              item.href.includes("whats-on")
                ? "whats_on"
                : item.href.includes("/contact")
                  ? "contact"
                  : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
