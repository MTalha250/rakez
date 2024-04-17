import img from "@/assets/hero.jpeg";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1, Heading3 } from "@/components/common/Headings/Headings";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import { GoArrowDownRight } from "react-icons/go";

import dubaiImage1 from "@/assets/dubaiImage1.jpg";
import dubaiImage2 from "@/assets/dubaiImage2.jpg";
import dubaiImage3 from "@/assets/dubaiImage3.jpg";
import { Link } from "react-router-dom";

const BusinessSetupCardsSection = () => {
  return (
    <div className={`flex flex-col relative min-h-[100vh]`}>
      <img
        src={img}
        alt="no-image"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay of hero section */}
      <div className="absolute w-full h-full bg-black/80 backdrop-blur-md"></div>

      {/* Content Part */}
      <ContainerWrapper classes="py-14 md:py-24">
        <div className="z-10 relative">
          <div className="flex flex-col items-center">
            <Heading3 title="Serv Corps Companies House Zone" />
            <Heading1 title="Business Setup in Dubai" classes="text-primary" />
            <NormalParagraph
              text="Discover streamlined processes and expert guidance for seamless business setup in the vibrant city of Dubai. Start your journey today!"
              clasess="text-white text-center"
            />
          </div>

          {/* Cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Link to={"/DIFC"}>
              <div>
                <div className="h-[300px] w-full relative rounded-md cursor-pointer group">
                  <div className="absolute w-full h-full bg-black/40 z-40 rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"></div>
                  <img
                    src={dubaiImage1}
                    alt="no-image"
                    className="absolute w-full h-full object-cover rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                  <div className="flex flex-col h-full  items-center justify-end border-4 z-50 p-5">
                    <h3 className="font-bold text-lg text-primary z-40 relative uppercase">
                      Medyan Freezone
                    </h3>
                    <NormalParagraph
                      text="Unlock the Benefits of Dubai Freezones, Start Your Business Today with Flexibility, Efficiency, and Growth Opportunities!"
                      clasess="text-white z-40 relative text-base"
                    />
                  </div>

                  <div className="z-40 absolute bottom-5 right-5">
                    <div className="flex justify-end">
                      <GoArrowDownRight className="text-primary text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/DIFC"}>
              <div>
                <div className="h-[300px] w-full relative rounded-md cursor-pointer group">
                  <div className="absolute w-full h-full bg-black/60 z-40 rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"></div>
                  <img
                    src={dubaiImage2}
                    alt="no-image"
                    className="absolute w-full h-full object-cover rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                  <div className="flex flex-col h-full  items-center justify-end border-4 z-50 p-5">
                    <h3 className="font-bold text-lg text-primary z-40 relative uppercase">
                      Dubai MainLand
                    </h3>
                    <NormalParagraph
                      text="Tap into the Vast Potential of Dubai Mainland, Establish Your Business with Accessibility, Networking, and Strategic Advantages!"
                      clasess="text-white z-40 relative text-base"
                    />
                  </div>

                  <div className="z-40 absolute bottom-5 right-5">
                    <div className="flex justify-end">
                      <GoArrowDownRight className="text-primary text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={"/banking"}>
              <div>
                <div className="h-[300px] w-full relative rounded-md cursor-pointer group">
                  <div className="absolute w-full h-full bg-black/40 z-40 rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"></div>
                  <img
                    src={dubaiImage3}
                    alt="no-image"
                    className="absolute w-full h-full object-cover rounded-md group-hover:scale-110 transition-all ease-in-out duration-500"
                  />
                  <div className="flex flex-col h-full  items-center justify-end border-4 z-50 p-5">
                    <h3 className="font-bold text-lg text-primary z-40 relative uppercase">
                      Serv corps companies house
                    </h3>
                    <NormalParagraph
                      text="Dive into Offshore Advantage, Establish Your Business in Dubai's Offshore Zones for Enhanced Privacy, Tax Benefits, and Global Reach!"
                      clasess="text-white z-40 relative text-base"
                    />
                  </div>

                  <div className="z-40 absolute bottom-5 right-5">
                    <div className="flex justify-end">
                      <GoArrowDownRight className="text-primary text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default BusinessSetupCardsSection;
