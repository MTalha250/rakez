import { variants } from "@/constants";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import Working from "@/assets/working.jpg";

const DIFTHeroLeft = () => {
  return (
    <div className={`flex h-full flex-col relative`}>
      <div className="w-full h-full absolute">
        <img
          src={Working}
          className="h-full w-full object-cover"
          alt="no-image"
        />
      </div>

      {/* Overlay of hero section */}
      <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

      {/* Content of hero */}
      <div className="flex justify-start container max-sm:max-w-[300px] mt-16">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col h-[85vh] w-[50%] items-center justify-center"
        >
          <h1
            className={`text-3xl sm:text-5xl text-green font-semibold drop-shadow-2xl mb-5 text-center`}
          >
            Transforming Ideas into Reality
          </h1>

          <h3
            className={`mb-5 text-lg md:text-xl font-medium text-neutral-100 text-center z-50`}
          >
            Accelerating Growth Through DIFC's Tech Start-up Package
          </h3>
          <div className="z-50">
            <FaChevronDown className="text-green text-[35px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DIFTHeroLeft;
