import { OKT_META, OKT_PATHS, OktoberfestSol, oktoberfestLive } from "@/components/OktoberfestSol";
import { buildMetadata } from "@/lib/seo";

const meta = oktoberfestLive() ? OKT_META.es.live : OKT_META.es.after;

export const metadata = buildMetadata({
  title: meta.title,
  description: meta.description,
  path: OKT_PATHS.es,
  locale: "es",
});

export default function EsOktoberfestSolPage() {
  return <OktoberfestSol locale="es" />;
}
