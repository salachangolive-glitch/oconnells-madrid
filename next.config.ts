import type { NextConfig } from "next";

// One clock reading per build. Set on process.env first so build workers
// that load this config again reuse the same value, and the static HTML and
// the client bundle get an identical "now" (no hydration mismatch).
if (!process.env.OCONNELL_BUILD_MS) {
  process.env.OCONNELL_BUILD_MS = String(Date.now());
}

const nextConfig: NextConfig = {
  // Cloudflare Pages free static hosting — no Workers / OpenNext.
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    OCONNELL_BUILD_MS: process.env.OCONNELL_BUILD_MS,
  },
};

export default nextConfig;
