import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SPAIN_CHILE_RUGBY } from "@/lib/articles/spain-chile-rugby-saturday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SPAIN_CHILE_RUGBY.copy.es.title,
  description: SPAIN_CHILE_RUGBY.copy.es.description,
  path: SPAIN_CHILE_RUGBY.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={SPAIN_CHILE_RUGBY} locale="es" />;
}
