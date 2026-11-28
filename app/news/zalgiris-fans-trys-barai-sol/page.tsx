import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { ZALGIRIS_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "zalgiris",
  "lt",
  ZALGIRIS_CAMPAIGN.paths.lt,
  { noindex: true },
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="zalgiris"
      locale="lt"
      path={ZALGIRIS_CAMPAIGN.paths.lt}
    />
  );
}