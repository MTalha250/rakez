import { variants } from "@/constants";
import { motion } from "framer-motion";
import Worker from "../../../assets/worker.jpg";
import { Heading1 } from "../Headings/Headings";

const BusinessPromotionBanner = () => {
  return (
    <div className="h-[60vh] flex flex-col relative">
      <img src={Worker} className="absolute w-full h-full object-cover" />
      <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

      <div className="flex items-center justify-center h-full">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="px-5 sm:px-10 xl:px-24 md:px-16 flex flex-col h-full w-full items-center justify-center"
        >
          <Heading1
            title="A WORLD-CLASS BUSINESS AND INDUSTRIAL HUB"
            classes="text-center text-white text-2xl max-w-[430px]"
          />

          <button className="p-2 bg-green rounded text-white z-10">
            Start Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessPromotionBanner;
