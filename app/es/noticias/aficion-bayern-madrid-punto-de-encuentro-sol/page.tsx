import { BAYERN_MP_META, BAYERN_MP_PATHS, BayernMeetingPointArticle } from "@/components/BayernMeetingPointArticle";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: BAYERN_MP_META.es.title,
  description: BAYERN_MP_META.es.description,
  path: BAYERN_MP_PATHS.es,
  locale: "es",
});

export default function Page() {
  return <BayernMeetingPointArticle locale="es" />;
}
