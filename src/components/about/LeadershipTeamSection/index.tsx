import Man from "@/assets/man.jpg";
import Man1 from "@/assets/man1.jpg";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import PersonPortfolioCard from "@/components/common/PersonPortfolioCard";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

const LeadershipTeamSection = () => {
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
          <Heading1 title="LEADERSHIP TEAM" classes="text-center" />
          <NormalParagraph
            text="Welcome to Ras Al Khaimah Economic Zone's (Serv Corps Companies House) website! I am
            pleased to have you here."
            clasess="text-center"
          />
          <NormalParagraph
            text="We carefully designed this interactive medium to provide a
          user-friendly platform where you can connect with us and learn more
          about the wide-ranging solutions that we offer to global investors. At
          Serv Corps Companies House, we welcome free zone and non-free zone businesses to our
          supportive environment. Whether you are a startup or a large
          enterprise, we can cater to the specific needs of your company."
            clasess="text-center"
          />
          <NormalParagraph
            text="We have filled our website with a wealth of information to guide you
          with everything you may need – from finding out about us and the steps
          to set up your business to the licenses, facilities and services we
          have on offer, as well as the list of company formation requirements."
            clasess="text-center"
          />
          <NormalParagraph
            text="Feel free to explore each page, and get in touch with us so we can guide
          you better. We have a team of business development experts who are ready
          to assist you every step of the way."
          />
          <NormalParagraph
            text="I invite you to be part of our journey and discover why multinational
          companies choose Serv Corps Companies House as their launch pad to success."
          />
        </motion.div>

        <div className="mt-10">
          <div className="grid justify-center md:justify-start md:grid-cols-2 lg:grid-cols-3 gap-10">
            <PersonPortfolioCard
              image={Man}
              title="Sheikh Mohammed bin Humaid Al Qasimi"
              subTitle="Managing Director"
            />
            <PersonPortfolioCard
              image={Man1}
              title="Ramy Jallad"
              subTitle="Group Chief Executive Officer"
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default LeadershipTeamSection;
