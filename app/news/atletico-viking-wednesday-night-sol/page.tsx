import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { ATLETICO_VIKING_WEDNESDAY } from "@/lib/articles/atletico-viking-wednesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ATLETICO_VIKING_WEDNESDAY.copy.en.title,
  description: ATLETICO_VIKING_WEDNESDAY.copy.en.description,
  path: ATLETICO_VIKING_WEDNESDAY.paths.en,
  locale: "en",
});

export default function NewsAtleticoVikingWednesdayNightPage() {
  return <MatchNewsArticle data={ATLETICO_VIKING_WEDNESDAY} locale="en" />;
}