import { variants } from "@/constants";
import { motion } from "framer-motion";
import { TfiWrite } from "react-icons/tfi";
import ContainerWrapper from "../common/ContainerWrapper";
import { Heading1 } from "../common/Headings/Headings";
import NormalParagraph from "../common/Paragraphs/Paragraphs";

const BusinessSteps = () => {
  return (
    <div className="bg-c_blue/50 py-14 md:py-20">
      <ContainerWrapper>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full flex-col"
        >
          <Heading1
            title="STARTING YOUR BUSINESS IS AS EASY AS 1, 2, 3"
            classes="text-center"
          />
          <NormalParagraph
            text="We let you experience ease of doing business right from the start with our simplified business set-up process. In just three easy steps, you’ll have your licence in only a matter of days."
            clasess="text-center"
          />
        </motion.div>

        <div className="flex gap-2">
            <div>
                <div>Step</div>
                <div>1</div>
            </div>
            <div>
            <TfiWrite className="text-[40px] text-c_greenish" />

            </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default BusinessSteps;
