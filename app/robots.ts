import type { MetadataRoute } from "next";
import { ALL_CONTENT_PATHS, getSiteUrl, shouldNoindex } from "@/lib/venue";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  // Preview hosts, and the custom domain until QA go-live, must not be indexed.
  // Sitemap URL still uses getSiteUrl() (custom domain when NEXT_PUBLIC_SITE_URL is set).
  if (shouldNoindex(base)) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: `${base}/sitemap.xml`,
    };
  }

  const allow = ["/", ...ALL_CONTENT_PATHS.filter((p) => p !== "/")];

  return {
    rules: [
      {
        userAgent: "*",
        allow,
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
