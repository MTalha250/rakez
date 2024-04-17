import Man from "@/assets/man.jpg";
import Man1 from "@/assets/man1.jpg";
import FeaturedContentCard from "@/components/common/FeaturedZoneContentCard";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import PersonPortfolioCard from "@/components/common/PersonPortfolioCard";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

import Animal from "@/assets/animal1.jpg";
import Book from "@/assets/book.png";
import City from "@/assets/city.jpg";
import FAQ from "@/assets/faq.png";
import Home from "@/assets/home.jpg";
import Space1 from "@/assets/space1.jpg";
import Space2 from "@/assets/space2.jpg";
import Space3 from "@/assets/space3.jpg";
import Space4 from "@/assets/space4.jpg";
import Space5 from "@/assets/space5.jpg";
import Space6 from "@/assets/space6.jpg";
import Worker from "@/assets/worker.jpg";
import ContainerWrapper from "@/components/common/ContainerWrapper";

const FacilitiesOverviewSection = () => {
  return (
    <div className="bg-gray-800/10 py-14 md:py-20">
      <ContainerWrapper>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full flex-col"
        >
          <Heading1 title="OUR FACILITIES" classes="text-center" />
          <NormalParagraph text="From co-working spaces to full-scale industrial facilities, we offer you the ideal facility at your stage of development" />
        </motion.div>

        <div className="mt-10">
          <div className="grid justify-center md:justify-start md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeaturedContentCard
              image={Space1}
              title="COWORKING SPACE"
              subTitle="Ideal for freelancers, startups and entrepreneurs, located in Compass Coworking Centre"
            />
            <FeaturedContentCard
              image={Space2}
              title="SERVICED OFFICES"
              subTitle="A new type of co-working space in premier business centres that offers permanence and privacy"
            />
            <FeaturedContentCard
              image={Space3}
              title="STANDARD OFFICES"
              subTitle="Cost-effective private office spaces for SMEs opting to build a strong market presence"
            />
            <FeaturedContentCard
              image={Space4}
              title="EXECUTIVE OFFICES"
              subTitle="Larger private office space for growing companies looking to accommodate a bigger team of people"
            />
            <FeaturedContentCard
              image={Space5}
              title="SHELL & CORE OFFICES"
              subTitle="Larger private office space for growing companies looking to accommodate a bigger team of people"
            />
            <FeaturedContentCard
              image={Space6}
              title="WAREHOUSES"
              subTitle="Customisable warehouses of various sizes in proximity to seaports and airports"
            />
           
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default FacilitiesOverviewSection;
