import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { PSV_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "psv",
  "nl",
  PSV_CAMPAIGN.paths.nl,
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="psv"
      locale="nl"
      path={PSV_CAMPAIGN.paths.nl}
    />
  );
}