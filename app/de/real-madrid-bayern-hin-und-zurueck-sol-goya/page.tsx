import { BayernBasketMovistarArticle } from "@/components/BayernBasketMovistarArticle";
import { BAYERN_SOL_GOYA_AND_BACK } from "@/lib/articles/real-madrid-bayern-sol-goya-and-back";
import { buildMetadata } from "@/lib/seo";

const { paths, copy } = BAYERN_SOL_GOYA_AND_BACK;
const c = copy.de;

export const metadata = buildMetadata({
  title: c.title,
  description: c.description,
  path: paths.de,
  locale: "de",
});

export default function DeRealMadridBayernHinUndZurueckPage() {
  return <BayernBasketMovistarArticle locale="de" data={BAYERN_SOL_GOYA_AND_BACK} />;
}
