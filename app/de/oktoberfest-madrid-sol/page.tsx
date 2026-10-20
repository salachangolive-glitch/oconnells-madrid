import { OKT_META, OKT_PATHS, OktoberfestSol, oktoberfestLive } from "@/components/OktoberfestSol";
import { buildMetadata } from "@/lib/seo";

const meta = oktoberfestLive() ? OKT_META.de.live : OKT_META.de.after;

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: OKT_PATHS.de,
  locale: "de",
});

export default function DeOktoberfestSolPage() {
  return <OktoberfestSol locale="de" />;
}
