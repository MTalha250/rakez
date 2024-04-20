import Flag from "@/assets/flag.jpg";
import Working from "@/assets/working.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import AboutDIFC from "@/components/DIFC/AboutDIFC";
import ExploreDIFC from "@/components/DIFC/ExploreDIFC";
import DIFCRequirements from "@/components/DIFC/DIFCRequirements";
import DIFCBusinessActivities from "@/components/DIFC/DIFCBusinessActivities";
import FAQ from "@/components/Home/faq_new/FAQ";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";

const DIFC = () => {
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      {/* hero section  */}
      <div className="">
        <div className="">
          <div className="w-full h-full absolute">
            <img
              src={Working}
              className="w-full h-full object-cover"
              alt="no-image"
            />
          </div>

          {/* Overlay of hero section */}
          <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

          <div className=" h-full">
            <div className="flex flex-col lg:flex-row lg:items-center">
              {/* Left */}
              <div className={`flex h-full flex-col basis-[50%]`}>
                {/* Content of hero */}
                <div className="flex justify-start container max-sm:max-w-[300px] mt-16">
                  <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-col h-[85vh] items-center justify-center"
                  >
                    <h1
                      className={`text-3xl sm:text-5xl text-primary font-semibold drop-shadow-2xl mb-5 text-center`}
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

              {/* Right */}
              <div className="basis-[50%] mt-10 lg:mt-[200px] lg:z-10">
                <div className="bg-c_blue px-10 pb-10 pt-10 rounded-md mx-5 lg:w-[70%] lg:mx-auto">
                  <h2 className="font-bold text-[30px] text-center capitalize">
                    Looking to Setup a Business in the UAE?
                  </h2>
                  <h2 className="font-bold text-[30px] text-center capitalize text-c_orangish">
                    Get a Call Back within 1 Minute
                  </h2>

                  <form action="" className="mt-7">
                    <div className="flex flex-col gap-10">
                      <input
                        type="text"
                        placeholder="Type Full Name"
                        className="input input-bordered input-md w-full "
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Type Email"
                        className="input input-bordered input-md w-full "
                      />
                    </div>
                    <div className="mt-5">
                      <label className="input input-bordered flex items-center gap-2">
                        <div className="border-r pr-3 flex items-center gap-1">
                          <div className="w-[20px] h-[20px] relative">
                            <img
                              src={Flag}
                              className="w-full h-full object-cover"
                              alt="no-image"
                            />
                          </div>
                          +971
                        </div>
                        <input
                          type="text"
                          className="grow"
                          placeholder="Phone Number"
                        />
                      </label>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutDIFC />

      <ExploreDIFC />

      <DIFCRequirements />

      <DIFCBusinessActivities />

      <FAQ bg="bg-c_blue/50" />
    </>
  );
};

export default DIFC;
