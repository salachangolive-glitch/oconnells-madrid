import { BayernBasketMovistarArticle } from "@/components/BayernBasketMovistarArticle";
import { BAYERN_BASKET_DEC15 } from "@/lib/articles/bayern-basket-movistar-dec15";
import { buildMetadata } from "@/lib/seo";

const { paths, copy } = BAYERN_BASKET_DEC15;
const c = copy.de;

export const metadata = buildMetadata({
  title: c.title,
  description: c.description,
  path: paths.de,
  locale: "de",
});

export default function DeRealMadridBayernBasketballPage() {
  return <BayernBasketMovistarArticle locale="de" />;
}