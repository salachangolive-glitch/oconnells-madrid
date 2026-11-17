import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { PSV_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "psv",
  "en",
  PSV_CAMPAIGN.paths.en,
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="psv"
      locale="en"
      path={PSV_CAMPAIGN.paths.en}
    />
  );
}