import { ga4Enabled } from "@/lib/analytics";
import { CookieBanner } from "./CookieBanner";
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
            ? "mx-auto w-full max-w-5xl flex-1 px-4 pt-6 pb-8 sm:pt-10"
            : "mx-auto w-full max-w-5xl flex-1 px-4 pt-8 pb-8 sm:pt-12"
        }
      >
        {children}
      </main>
      <SiteFooter locale={locale} />
      <StickyCta locale={locale} />
      {ga4Enabled() ? <CookieBanner locale={locale} /> : null}
    </>
  );
}
