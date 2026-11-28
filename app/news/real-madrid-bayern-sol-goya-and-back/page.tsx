import { BayernBasketMovistarArticle } from "@/components/BayernBasketMovistarArticle";
import { BAYERN_SOL_GOYA_AND_BACK } from "@/lib/articles/real-madrid-bayern-sol-goya-and-back";
import { buildMetadata } from "@/lib/seo";

const { paths, copy } = BAYERN_SOL_GOYA_AND_BACK;
const c = copy.en;

export const metadata = buildMetadata({
  title: c.title,
  description: c.description,
  path: paths.en,
});

export default function RealMadridBayernSolGoyaAndBackPage() {
  return <BayernBasketMovistarArticle locale="en" data={BAYERN_SOL_GOYA_AND_BACK} />;
}
