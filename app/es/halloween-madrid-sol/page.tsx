import { HALLOWEEN_META, HALLOWEEN_PATHS, HalloweenSol } from "@/components/HalloweenSol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: HALLOWEEN_META.es.title,
  description: HALLOWEEN_META.es.description,
  path: HALLOWEEN_PATHS.es,
  locale: "es",
});

export default function HalloweenSolPageEs() {
  return <HalloweenSol locale="es" />;
}
