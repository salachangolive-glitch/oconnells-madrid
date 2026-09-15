import type { MetadataRoute } from "next";
import { ALL_CONTENT_PATHS, getSiteUrl } from "@/lib/venue";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  // Allow all content paths explicitly — never Disallow /sports etc.
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
