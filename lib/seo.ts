import type { Metadata } from "next";
import { getSiteUrl, HREFLANG_PAIRS, shouldNoindex, SITE_NAME } from "./venue";

type BuildMetaOpts = {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "es";
};

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === "/") return base.endsWith("/") ? base : `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
}: BuildMetaOpts): Metadata {
  const canonical = absoluteUrl(path);
  // Absolute title so root layout template never doubles the brand
  // (e.g. "O'Connell St Madrid | O'Connell St Madrid").
  const fullTitle =
    title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME} Madrid`;
  const preview = shouldNoindex();

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
    title: { absolute: fullTitle },
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
    // Preview hosts, or NEXT_PUBLIC_FORCE_NOINDEX not explicitly false: noindex.
    // Canonical/hreflang/OG still use getSiteUrl() (custom domain when set).
    // Go-live: NEXT_PUBLIC_FORCE_NOINDEX=false.
    robots: preview
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
