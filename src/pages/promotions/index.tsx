"use client";

import React from "react";

import Offer from "@/assets/offer.jpg";
import dynamic from "next/dynamic";

// Dynamic import
const HeroBanner = dynamic(
  () => import("@/components/common/Banner/HeroBanner")
);
const UpperNavbar = dynamic(() => import("@/components/common/UpperNavbar"));
const HomeUpperNavContent = dynamic(
  () => import("@/components/common/UpperNavbar/HomeUpperNavContent")
);
const PromotionsSection = dynamic(
  () => import("@/components/promotions/PromotionsSection")
);

const promotions = () => {
  return (
    <div className="mb-10">
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <HeroBanner
        image={Offer}
        title="Unlock Your Business Potential in Dubai"
        subTitle="Explore Exclusive Offers for Medyan Free Zone, Dubai Mainland, and Banking Services"
      />

      <PromotionsSection />
    </div>
  );
};

export default promotions;
