import type { Metadata } from "next";
import { getSiteUrl, HREFLANG_PAIRS, isPreviewHost, SITE_NAME } from "./venue";

type BuildMetaOpts = {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "es";
};

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
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
  const preview = isPreviewHost();

  const languages: Record<string, string> = {};
  const enPath =
    path.startsWith("/es")
      ? Object.entries(HREFLANG_PAIRS).find(([, es]) => es === path)?.[0]
      : path;
  const esPath = enPath ? HREFLANG_PAIRS[enPath] : undefined;

  if (enPath && esPath) {
    languages.en = absoluteUrl(enPath);
    languages.es = absoluteUrl(esPath);
    languages["x-default"] = absoluteUrl(enPath);
  }

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      ...(Object.keys(languages).length ? { languages } : undefined),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: `${SITE_NAME} Madrid`,
      locale: locale === "es" ? "es_ES" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    // Preview (*.vercel.app / *.pages.dev): noindex so it never consolidates as the permanent site.
    // Custom domain: index,follow.
    robots: preview
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
