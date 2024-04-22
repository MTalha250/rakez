import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import { variants } from "@/constants";
import VideoPlayer from "@/hooks/VideoPlayer";
import { motion } from "framer-motion";

const RasAlKhaimahInformationSection = () => {
  return (
    <div className="bg-gradient-to-r from-c_blue/50 via-violet-50 to-c_blue py-14 md:py-20">
      <ContainerWrapper>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full flex-col text-black"
        >
          <Heading1
            title="Welcome to Ras Al Khaimah"
            classes="text-center mb-4"
          />
          <NormalParagraph text="Experience the Charm of Ras Al Khaimah, Where Business Meets Beauty." />
        </motion.div>

        {/* Interactive Video Player */}
        <div className="mt-8 mb-12">
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>

        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex items-center justify-center w-full flex-col text-black"
        >
          <NormalParagraph
            text="Discover a blend of modernity and tradition amidst picturesque landscapes and thriving business opportunities."
            clasess="text-center mb-6"
          />
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">
                Safe & Stable Environment
              </h2>
              <p>
                Enjoy peace of mind with Ras Al Khaimah's top-notch safety
                measures.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Scenic Beauty</h2>
              <p>
                Marvel at the breathtaking mountain vistas and serene seaside
                ambiance.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Quality Lifestyle</h2>
              <p>
                Experience affordable luxury with high-quality amenities and
                services.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="bg-slate-800 hover:bg-green text-white font-semibold py-3 px-8 rounded-full mt-12 transition-all duration-300 ease-in-out transform hover:scale-105">
            Explore Ras Al Khaimah
          </button>
        </motion.div>
      </ContainerWrapper>
    </div>
  );
};

export default RasAlKhaimahInformationSection;
