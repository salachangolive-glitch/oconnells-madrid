import { HALLOWEEN_META, HALLOWEEN_PATHS, HalloweenSol } from "@/components/HalloweenSol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: HALLOWEEN_META.en.title,
  description: HALLOWEEN_META.en.description,
  path: HALLOWEEN_PATHS.en,
  locale: "en",
});

export default function HalloweenSolPage() {
  return <HalloweenSol locale="en" />;
}
