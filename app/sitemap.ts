import type { MetadataRoute } from "next";
import { ALL_CONTENT_PATHS, getSiteUrl } from "@/lib/venue";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return ALL_CONTENT_PATHS.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/es" ? "weekly" : "monthly",
    priority: path === "/" || path === "/es" ? 1 : path.includes("thursday") ? 0.9 : 0.7,
  }));
}
