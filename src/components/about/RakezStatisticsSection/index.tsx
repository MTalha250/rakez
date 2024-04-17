import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import {
  Statistics,
  StatisticsHorizontal,
} from "@/components/common/Statistics";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { FaBuilding, FaCity, FaMapMarkedAlt } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";

const RakezStatisticsSection = () => {
  return (
    <div className="bg-secondary min-h-[500px] py-14 md:py-20">
      <ContainerWrapper>
        <div className="flex gap-12  flex-wrap justify-center md:justify-between text-white">
          <Statistics
            icon={<FaBuilding size={50} />}
            title="+21K"
            subTitle="COMPANIES"
            boxBorderClasses="border border-white"
          />
          <Statistics
            icon={<FaCity size={50} />}
            title="+100"
            subTitle="COUNTRIES"
            boxBorderClasses="border border-white"
          />
          <Statistics
            icon={<LiaIndustrySolid size={50} />}
            title="+50"
            subTitle="INDUSTRIES"
            boxBorderClasses="border border-white"
          />
          <Statistics
            icon={<FaMapMarkedAlt size={50} />}
            title="+5"
            subTitle="ZONES"
            boxBorderClasses="border border-white"
          />
        </div>

        <div className="py-7 sm:py-10">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="  flex items-center justify-center w-full flex-col"
          >
            <Heading1
              title="SHAPING OUR TODAY AND FUTURE"
              classes="text-center mt-5"
            />
            <NormalParagraph
              text="Serv Corps Companies House is committed to its promise of empowering clients and
                investors by offering a cost-effective and world-class economic
                zone with customisable packages and services as well as
                state-of-the-art facilities. Blessed with a strategic location,
                Serv Corps Companies House connects investors to growing markets of the Middle East,
                North Africa, Europe as well as South and Central Asia."
              clasess="text-white"
            />
          </motion.div>
        </div>

        <div className="flex gap-16 flex-wrap justify-center items-start text-white">
          <StatisticsHorizontal
            icon={<FaBuilding className="text-[30px] sm:text-[50px]" />}
            title="VISION"
            subTitle="To become a leading global investment destination"
            boxBorderClasses="border border-white"
          />
          <StatisticsHorizontal
            icon={<FaCity className="text-[30px] sm:text-[50px]" />}
            title="MISSION"
            subTitle="Develop fit-for-purpose infrastructure and smart customer-centric business solutions enabling a comprehensive commercial, trade and manufacturing hub that helps our customers grow and attract diversified investments"
            boxBorderClasses="border border-white"
          />
          <StatisticsHorizontal
            icon={<LiaIndustrySolid className="text-[30px] sm:text-[50px]" />}
            title="GUIDING PRINCIPLE"
            subTitle="The customer comes first through empowering the front line"
            boxBorderClasses="border border-white"
          />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default RakezStatisticsSection;
