import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages free static hosting — no Workers / OpenNext.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
