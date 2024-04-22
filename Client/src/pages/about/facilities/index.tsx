import Work from "@/assets/work.jpg";
import FacilitiesOverviewSection from "@/components/about/FacilitiesOverviewSection";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessPromotionBanner from "@/components/common/BusinessPromotionBanner";

const page = () => {
  return (
    <div className="mb-10">
      <HeroBanner
        image={Work}
        title="SERV CORPS FACILITIES"
        subTitle="SPACES DESIGNED TO HELP YOU THRIVE"
      />

      <FacilitiesOverviewSection />

      <BusinessPromotionBanner />
    </div>
  );
};

export default page;
