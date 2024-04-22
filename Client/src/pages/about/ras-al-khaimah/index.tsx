import City from "../../../assets/city.jpg";

import RasAlKhaimahCarouselSection from "@/components/about/RasAlKhaimahCarouselSection/RasAlKhaimahCarouselSection";
import RasAlKhaimahInformationSection from "@/components/about/RasAlKhaimahInformationSection";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessPromotionBanner from "@/components/common/BusinessPromotionBanner";
const page = () => {
  return (
    <>
      <HeroBanner
        image={City}
        title="RAS AL KHAIMAH"
        subTitle="IDEAL DESTINATION FOR BUSINESS AND QUALITY LIVING"
      />

      <RasAlKhaimahInformationSection />

      <RasAlKhaimahCarouselSection />

      <BusinessPromotionBanner />
    </>
  );
};

export default page;
