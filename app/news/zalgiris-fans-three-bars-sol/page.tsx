import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { ZALGIRIS_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "zalgiris",
  "en",
  ZALGIRIS_CAMPAIGN.paths.en,
  { noindex: true },
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="zalgiris"
      locale="en"
      path={ZALGIRIS_CAMPAIGN.paths.en}
    />
  );
}