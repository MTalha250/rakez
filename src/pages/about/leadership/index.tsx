"use client";

import Zone from "../../../assets/zone1.jpg";

import dynamic from "next/dynamic";

const LeadershipTeamSection = dynamic(() => import("@/components/about/LeadershipTeamSection"));
const HeroBanner = dynamic(() => import("@/components/common/Banner/HeroBanner"));
const BusinessPromotionBanner = dynamic(() => import("@/components/common/BusinessPromotionBanner"));

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
