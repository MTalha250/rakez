import Zone1 from "@/assets/zone1.webp";
import Zone2 from "@/assets/zone2.jpg";
import Zone3 from "@/assets/zone3.jpg";
import Zone4 from "@/assets/zone4.jpg";
import Zone5 from "@/assets/zone5.jpg";
import Zone6 from "@/assets/zone6.jpg";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import FeaturedContentCard from "@/components/common/FeaturedZoneContentCard";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import { variants } from "@/constants";
import { motion } from "framer-motion";

const BusinessZonesOverview = () => {
  return (
    <div className="bg-gradient-to-r from-c_blue/50 via-violet-50 to-c_blue py-14 md:py-20">
      <ContainerWrapper>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex w-full flex-col"
        >
          <Heading1 title="OUR ZONES" classes="text-center" />
          <NormalParagraph
            text="The Perfect Environment for Your Business"
            clasess="text-center"
          />
          <NormalParagraph
            text="We have six dedicated zones catering to all business requirements."
            clasess="text-center"
          />
        </motion.div>

        <div className="mt-10">
          <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeaturedContentCard
              image={Zone1}
              title="AL GHAIL INDUSTRIAL ZONE"
              subTitle="Ideal choice for establishing large-scale industrial manufacturing enterprises"
            />
            <FeaturedContentCard
              image={Zone2}
              title="AL HAMRA INDUSTRIAL ZONE"
              subTitle="A modern magnate for light industries as well as heavy industry projects"
            />
            <FeaturedContentCard
              image={Zone3}
              title="Serv Corps Companies House ACADEMIC ZONE"
              subTitle="Home of qualified international educational institutions and service providers"
            />
            <FeaturedContentCard
              image={Zone4}
              title="AL HULAILA INDUSTRIAL ZONE"
              subTitle="For businesses that are more on the heavier side of industrial manufacturing"
            />
            <FeaturedContentCard
              image={Zone5}
              title="AL NAKHEEL BUSINESS ZONE"
              subTitle="A modern zone for SMEs and freelancers comprising of first-class business centres"
            />
            <FeaturedContentCard
              image={Zone6}
              title="AL HAMRA BUSINESS ZONE"
              subTitle="Perfectly located between the city centre and
              neighbouring emirates
              
              "
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default BusinessZonesOverview;
