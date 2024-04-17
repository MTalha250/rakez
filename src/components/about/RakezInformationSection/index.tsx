// import ContainerWrapper from "@/components/common/ContainerWrapper";
// import { Heading1 } from "@/components/common/Headings/Headings";
// import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
// import { variants } from "@/constants";
// import VideoPlayer from "@/hooks/VideoPlayer";
// import { motion } from "framer-motion";
// import React from "react";

// const RakezInformationSection = () => {
//   return (
//     <div className="bg-gray-800/10 py-14 md:py-20">
//       <ContainerWrapper>
//         <motion.div
//           variants={variants}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="flex items-center justify-center w-full flex-col"
//         >
//           <Heading1
//             title="RAS AL KHAIMAH ECONOMIC ZONE"
//             classes="text-center"
//           />
//           <NormalParagraph
//             text="Situated in the heart of Ras Al Khaimah, RAKEZ is a powerhouse
//             business and industrial hub in the UAE that uniquely offers
//             customisable solutions to free zone and non-free zone businesses.
//             From freelancers and startups to SMEs and industrialists, our
//             multinational community is flourishing in over 50 industries."
//           />
//         </motion.div>

//         <VideoPlayer videoUrl="https://youtu.be/g38Xp_jLQVE?si=IiPIKFKmCke8BN2n" />

//         <motion.div
//           variants={variants}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="py-10  flex items-center justify-center w-full flex-col"
//         >
//           <NormalParagraph
//             text="We always place our clients at the heart of everything that we do,
//           providing them with cost-effective set-up packages, modern
//           facilities and first-class services to help them reach their full
//           potential. Blessed with a strategic location, we connect investors
//           to growing markets in the Middle East, North Africa, Europe as well
//           as South and Central Asia."
//           />
//           <NormalParagraph
//             text="We are a gateway to international trade where companies undertake
//           activities in a safe and responsible manner, consistent with all
//           applicable laws and international best practice. We developed an
//           effective compliance framework that benefits our clients"
//           />
//           <button className="p-2 bg-green rounded text-white">
//             Getting Started
//           </button>
//         </motion.div>
//       </ContainerWrapper>
//     </div>
//   );
// };

// export default RakezInformationSection;

import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import { variants } from "@/constants";
import VideoPlayer from "@/hooks/VideoPlayer";
import { motion } from "framer-motion";
import React from "react";

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
          <Heading1 title="Welcome to Serv Corps Companies House" classes="text-center mb-4" />
          <NormalParagraph
            text="Unlock Your Business Potential with Serv Corps Companies House, Your Gateway to Success."
          />
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
              <p>Explore customisable packages designed to suit your business needs.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Global Connectivity</h2>
              <p>Tap into international markets with our strategic location and network.</p>
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

