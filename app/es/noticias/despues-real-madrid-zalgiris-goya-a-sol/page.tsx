import { AfterRmZalgirisGuide } from "@/components/AfterGameGuide";
import { AFTER_RM_ZALGIRIS } from "@/lib/articles/after-real-madrid-zalgiris-goya-to-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: AFTER_RM_ZALGIRIS.copy.es.title,
  description: AFTER_RM_ZALGIRIS.copy.es.description,
  path: AFTER_RM_ZALGIRIS.paths.es,
  locale: "es",
});

export default function EsDespuesRealMadridZalgirisPage() {
  return <AfterRmZalgirisGuide locale="es" />;
}
