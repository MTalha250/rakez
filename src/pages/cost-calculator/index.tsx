"use client";
import dynamic from "next/dynamic";


import Cost from "@/assets/cost.jpg";
// import BussinessSetupCostNow from "@/components/Home/BussinessSetupCostNow";
// import HeroBanner from "@/components/common/Banner/HeroBanner";
// import UpperNavbar from "@/components/common/UpperNavbar";
// import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";

const HeroBanner = dynamic(() => import("@/components/common/Banner/HeroBanner"));
const BussinessSetupCostNow = dynamic(() => import("@/components/Home/BussinessSetupCostNow"));
const UpperNavbar = dynamic(() => import("@/components/common/UpperNavbar"));
const HomeUpperNavContent = dynamic(() => import("@/components/common/UpperNavbar/HomeUpperNavContent"));

const page = () => {
  return (
    <div className="mb-10">
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <HeroBanner
        image={Cost}
        title="Serv Corps Companies House Cost Calculator"
        subTitle="Calculate Your
        Business Setup Cost Now"
      />
      <BussinessSetupCostNow />
    </div>
  );
};

export default page;
