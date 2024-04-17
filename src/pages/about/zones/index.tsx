"use client";

import Zone from "../../../assets/zone1.jpg";

import dynamic from "next/dynamic";

const BusinessZonesOverview = dynamic(() => import("@/components/about/BusinessZonesOverview"));
const HeroBanner = dynamic(() => import("@/components/common/Banner/HeroBanner"));
const BusinessPromotionBanner = dynamic(() => import("@/components/common/BusinessPromotionBanner"));

const page = () => {
  return (
    <>
      <HeroBanner
        image={Zone}
        title="Serv Corps Companies House Zones"
        subTitle="SPECIALISED ZONES TAILORED TO YOUR SPECIFIC NEEDS"
      />

      <BusinessZonesOverview />

      <BusinessPromotionBanner />
    </>
  );
};

export default page;
