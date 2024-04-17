import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import {
  ExploreStatisticsHorizontal,
  Statistics,
  StatisticsHorizontal,
} from "@/components/common/Statistics";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { FaBuilding, FaCity } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";

const RakezExploreSection = () => {
  return (
    <div className="py-14 md:py-20">
      <ContainerWrapper>
        <div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-center w-full flex-col"
          >
            <Heading1 title="EXPLORE Serv Corps Companies House" classes="text-center" />
          </motion.div>
        </div>

        <div className="flex gap-28 flex-wrap justify-center text-green mt-10">
          <ExploreStatisticsHorizontal
            icon={<FaBuilding className="text-[30px] sm:text-[50px]" />}
            title="COMPANY SET-UP"
            subTitle="Set-up process that’s as easy as 1, 2, 3"
            boxBorderClasses="border border-green"
          >
            <button className="p-2 bg-green rounded text-white uppercase text-[12px] md:text-[16px]">
              Learn more
            </button>
          </ExploreStatisticsHorizontal>
          <ExploreStatisticsHorizontal
            icon={<FaCity className="text-[30px] sm:text-[50px]" />}
            title="FACILITIES"
            subTitle="Spaces designed to help you thrive"
            boxBorderClasses="border border-green"
          >
            <button className="p-2 bg-green rounded text-white uppercase text-[12px] md:text-[16px]">
              Learn more
            </button>
          </ExploreStatisticsHorizontal>
          <ExploreStatisticsHorizontal
            icon={<LiaIndustrySolid className="text-[30px] sm:text-[50px]" />}
            title="CLIENT SERVICES"
            subTitle="First-class services under one roof"
            boxBorderClasses="border border-green"
          >
            <button className="p-2 bg-green rounded text-white uppercase text-[12px] md:text-[16px]">
              Learn more
            </button>
          </ExploreStatisticsHorizontal>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default RakezExploreSection;
