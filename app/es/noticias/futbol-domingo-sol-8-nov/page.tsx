import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SUNDAY_FOOTBALL_SOL } from "@/lib/articles/sunday-football-sol-8-nov";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SUNDAY_FOOTBALL_SOL.copy.es.title,
  description: SUNDAY_FOOTBALL_SOL.copy.es.description,
  path: SUNDAY_FOOTBALL_SOL.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={SUNDAY_FOOTBALL_SOL} locale="es" />;
}
