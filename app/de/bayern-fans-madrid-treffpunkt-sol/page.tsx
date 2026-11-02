import { BAYERN_MP_META, BAYERN_MP_PATHS, BayernMeetingPointArticle } from "@/components/BayernMeetingPointArticle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: BAYERN_MP_META.de.title,
  description: BAYERN_MP_META.de.description,
  path: BAYERN_MP_PATHS.de,
  locale: "de",
});

export default function Page() {
  return <BayernMeetingPointArticle locale="de" />;
}
