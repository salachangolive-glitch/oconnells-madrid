import type { Metadata } from "next";
import {
  getSiteUrl,
  HREFLANG_GROUPS,
  HREFLANG_PAIRS,
  shouldNoindex,
  SITE_NAME,
} from "./venue";

type BuildMetaOpts = {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "es" | "de";
};

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === "/") return base.endsWith("/") ? base : `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Resolve en path key for a given page path (en, /es/…, or /de/…). */
function resolveEnKey(path: string): string | undefined {
  if (path.startsWith("/es")) {
    return Object.entries(HREFLANG_PAIRS).find(([, es]) => es === path)?.[0];
  }
  if (path === "/de" || path.startsWith("/de/")) {
    const group = Object.entries(HREFLANG_GROUPS).find(
      ([, g]) => g.de === path,
    );
    return group?.[0];
  }
  return path;
}

function buildLanguages(path: string): Record<string, string> | undefined {
  const enKey = resolveEnKey(path);
  if (!enKey) {
    /** German-only pages (no EN/ES twin, e.g. OC-29/OC-30): self hreflang de. */
    if (path.startsWith("/de/")) return { de: absoluteUrl(path) };
    return undefined;
  }

  const group = HREFLANG_GROUPS[enKey];
  if (group) {
    const languages: Record<string, string> = {
      en: absoluteUrl(group.en),
      "x-default": absoluteUrl(group.en),
    };
    if (group.es) languages.es = absoluteUrl(group.es);
    if (group.de) languages.de = absoluteUrl(group.de);
    return languages;
  }

  const esPath = HREFLANG_PAIRS[enKey];
  if (!esPath) return undefined;
  return {
    en: absoluteUrl(enKey),
    es: absoluteUrl(esPath),
    "x-default": absoluteUrl(enKey),
  };
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
}: BuildMetaOpts): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle =
    title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME} Madrid`;
  const preview = shouldNoindex();
  const languages = buildLanguages(path);

  const ogLocale =
    locale === "es" ? "es_ES" : locale === "de" ? "de_DE" : "en_GB";

  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      canonical,
      ...(languages ? { languages } : undefined),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: `${SITE_NAME} Madrid`,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "O'Connell St Irish Pub Madrid",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.jpg"],
    },
    robots: preview
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
