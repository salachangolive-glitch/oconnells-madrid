import { BAYERN_MP_META, BAYERN_MP_PATHS, BayernMeetingPointArticle } from "@/components/BayernMeetingPointArticle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: BAYERN_MP_META.en.title,
  description: BAYERN_MP_META.en.description,
  path: BAYERN_MP_PATHS.en,
  locale: "en",
});

export default function Page() {
  return <BayernMeetingPointArticle locale="en" />;
}
