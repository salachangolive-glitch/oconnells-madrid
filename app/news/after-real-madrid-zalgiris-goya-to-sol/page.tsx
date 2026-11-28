import { AfterRmZalgirisGuide } from "@/components/AfterGameGuide";
import { AFTER_RM_ZALGIRIS } from "@/lib/articles/after-real-madrid-zalgiris-goya-to-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: AFTER_RM_ZALGIRIS.copy.en.title,
  description: AFTER_RM_ZALGIRIS.copy.en.description,
  path: AFTER_RM_ZALGIRIS.paths.en,
  locale: "en",
});

export default function AfterRealMadridZalgirisPage() {
  return <AfterRmZalgirisGuide locale="en" />;
}
