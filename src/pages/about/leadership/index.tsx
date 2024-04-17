import Zone from "../../../assets/zone1.jpg";

import LeadershipTeamSection from "@/components/about/LeadershipTeamSection";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessPromotionBanner from "@/components/common/BusinessPromotionBanner";
const page = () => {
  return (
    <>
      <HeroBanner image={Zone} />
      <LeadershipTeamSection />
      <BusinessPromotionBanner />
    </>
  );
};

export default page;
