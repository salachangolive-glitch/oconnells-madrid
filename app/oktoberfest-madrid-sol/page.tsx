import { OKT_META, OKT_PATHS, OktoberfestSol, oktoberfestLive } from "@/components/OktoberfestSol";
import { buildMetadata } from "@/lib/seo";

const meta = oktoberfestLive() ? OKT_META.en.live : OKT_META.en.after;

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: OKT_PATHS.en,
  locale: "en",
});

export default function OktoberfestSolPage() {
  return <OktoberfestSol locale="en" />;
}
