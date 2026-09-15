import type { MetadataRoute } from "next";
import { ALL_CONTENT_PATHS, getSiteUrl, isPreviewHost } from "@/lib/venue";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  // Preview hosts must not consolidate as the permanent site.
  if (isPreviewHost(base)) {
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
