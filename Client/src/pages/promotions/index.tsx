import Offer from "@/assets/offer.jpg";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import PromotionsSection from "@/components/promotions/PromotionsSection";
import { useEffect } from "react";
const promotions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-10">
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <HeroBanner
        image={Offer}
        title="Unlock Your Business Potential in Dubai"
        subTitle="Explore Exclusive Offers for Medyan Free Zone, Dubai Mainland, and Banking Services"
        bannerClasses="h-[40vh]"
      />

      <PromotionsSection />
    </div>
  );
};

export default promotions;
