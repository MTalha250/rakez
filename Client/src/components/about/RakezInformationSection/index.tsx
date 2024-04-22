import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import { variants } from "@/constants";
import VideoPlayer from "@/hooks/VideoPlayer";
import { motion } from "framer-motion";

const RakezInformationSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-violet-50 to-slate-50 py-14 md:py-20">
      <ContainerWrapper>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full flex-col text-black"
        >
          <Heading1
            title="Welcome to Serv Corps Companies House"
            classes="text-center mb-4"
          />
          <NormalParagraph text="Unlock Your Business Potential with Serv Corps Companies House, Your Gateway to Success." />
        </motion.div>

        {/* Interactive Video Player */}
        <div className="my-8">
          <VideoPlayer videoUrl="https://youtu.be/g38Xp_jLQVE?si=IiPIKFKmCke8BN2n" />
        </div>

        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center w-full text-black"
        >
          <NormalParagraph
            text="Experience unparalleled support and connectivity at Serv Corps Companies House, where your business dreams come to life."
            clasess="text-center mb-6"
          />
          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Tailored Solutions</h2>
              <p>
                Explore customisable packages designed to suit your business
                needs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">
                Global Connectivity
              </h2>
              <p>
                Tap into international markets with our strategic location and
                network.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="bg-slate-800 hover:bg-green text-white font-semibold py-3 px-8 rounded-full mt-12 transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started Now
          </button>
        </motion.div>
      </ContainerWrapper>
    </div>
  );
};

export default RakezInformationSection;
