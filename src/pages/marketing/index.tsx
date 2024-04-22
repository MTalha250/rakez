import Flag from "@/assets/flag.jpg";
import marketing from "@/assets/marketing.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import Packages from "@/components/marketing/Packages";
import OurTeam from "@/components/marketing/OurTeam";
import BrandInfo from "@/components/marketing/BrandInfo";
import ContactBox from "@/components/marketing/ContactBox";
import { Link } from "react-router-dom";

const Marketing = () => {
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      {/* hero section  */}
      {/* <div className="mb-10">
        <div className="flex flex-col md:flex-row">
          <MarketingHeroLeft />
          <MarketingFormRight />
        </div>
      </div> */}

      {/* hero section  */}
      <div className="">
        <div className="">
          <div className="w-full h-[110vh] lg:h-[120vh] absolute">
            <img
              src={marketing}
              className="w-full h-full object-cover"
              alt="no-image"
            />
          </div>

          {/* Overlay of hero section */}
          <div className="absolute w-full h-[110vh] lg:h-[120vh] bg-gradient-to-b from-black/50 to-secondary"></div>

          <div className="">
            <div className="flex flex-col lg:flex-row px-8 md:px-16 lg:px-24">
              {/* Left */}
              <div className={`flex flex-col basis-[60%]`}>
                {/* Content of hero */}
                <div className="flex justify-start ld:px-10 px-5 mt-10">
                  <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-col h-[100vh] items-center justify-center"
                  >
                    <h1
                      className={`text-3xl sm:text-5xl text-white  font-semibold drop-shadow-2xl mb-5  tracking-tight`}
                    >
                      We Offer 360-Degree{" "}
                      <span className="text-tertiary">Marketing Support </span>
                      for your Business
                    </h1>

                    <div className="text-white z-10">
                      <div className=" ">
                        Competitive Pricing | Quick Turnaround | Professional
                        Output
                      </div>

                      <p className="text-[14px] mt-[40px]">
                        {" "}
                        Our team of experts helps define a brand identity for
                        start-ups and builds a storyline aligned with its
                        business function. From creating logo designs to
                        designing full-fledged websites, we provide all the
                        services necessary to help start-ups launch their brand
                        from Day 1.
                      </p>

                      <Link
                        to="/support"
                        className="btn px-5 py-3 inline-block bg-tertiary border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]"
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right */}
              <div className="basis-[40%] mt-10 lg:mt-[150px] lg:z-10">
                <div className="bg-c_blue px-10 pb-10 pt-10 rounded-md w-[90%] mx-auto">
                  <h2 className="font-bold text-[30px] text-center capitalize">
                    ENQUIRE NOW
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

                    <div className="mt-5">
                      <h3 className="text-[14px] font-bold mb-5">
                        What Services Can We Assist You With?
                      </h3>

                      <div className="flex flex-col">
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Company Logo and Branding
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Website for my Business
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Rank Top on Google Search
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Generate More Quality Leads
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Manage Social Media Accounts by Regular and
                              Consistent Posting
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Content Management
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">
                              Get Featured on the Media
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">Event Management</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label justify-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                            />
                            <span className="label-text">Other</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <textarea
                        className="textarea textarea-bordered w-full p-3 border"
                        placeholder="Please share any special instructions for us to analyze your project requirement."
                        rows={3}
                      ></textarea>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button className="btn px-5 py-3 rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
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

      <Packages />

      <OurTeam />

      <BrandInfo />

      <ContactBox />
    </>
  );
};

export default Marketing;
