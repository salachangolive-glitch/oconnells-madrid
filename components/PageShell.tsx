import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StickyCta } from "./StickyCta";

type Locale = "en" | "es";

export function PageShell({
  children,
  locale = "en",
  altLangHref,
  cover,
}: {
  children: React.ReactNode;
  locale?: Locale;
  altLangHref?: string;
  /** Optional full-bleed block under header (Home: photo + CTA band). */
  cover?: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader locale={locale} altLangHref={altLangHref} />
      {cover}
      <main
        className={
          cover
            ? "mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:py-10"
            : "mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:py-12"
        }
      >
        {children}
      </main>
      <SiteFooter locale={locale} />
      <StickyCta locale={locale} />
    </>
  );
}
