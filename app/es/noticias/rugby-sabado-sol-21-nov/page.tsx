import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { RUGBY_SATURDAY_SOL_21_NOV } from "@/lib/articles/rugby-saturday-sol-21-nov";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: RUGBY_SATURDAY_SOL_21_NOV.copy.es.title,
  description: RUGBY_SATURDAY_SOL_21_NOV.copy.es.description,
  path: RUGBY_SATURDAY_SOL_21_NOV.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={RUGBY_SATURDAY_SOL_21_NOV} locale="es" />;
}