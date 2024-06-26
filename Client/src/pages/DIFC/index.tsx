import Flag from "@/assets/flag.jpg";
import Working from "@/assets/working.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import AboutDIFC from "@/components/DIFC/AboutDIFC";
import ExploreDIFC from "@/components/DIFC/ExploreDIFC";
import DIFCRequirements from "@/components/DIFC/DIFCRequirements";
import FAQ from "@/components/Home/faq_new/FAQ";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const DIFC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (fullName === "" || email === "" || phoneNumber === "") {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URI}/contact/createContact`,
        {
          name: fullName,
          email: email,
          phone: phoneNumber,
        }
      );
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setFullName("");
      setEmail("");
      setPhoneNumber("");
    }
    setLoading(false);
  };

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
            <div className="flex flex-col lg:flex-row lg:items-center lg:px-10">
              {/* Left */}
              <div className={`flex h-full flex-col basis-[60%]`}>
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
                      className={`text-3xl sm:text-5xl text-primary font-semibold drop-shadow-2xl mb-5`}
                    >
                      Transforming Ideas into Reality
                    </h1>

                    <h3
                      className={`mb-5 text-lg font-medium text-neutral-100 z-10`}
                    >
                      Utilize DIFC's Tech Start-up Package to accelerate your
                      venture's growth, leveraging specialized resources and
                      support. Seamlessly integrate into a dynamic ecosystem,
                      positioning your startup for success in the competitive
                      tech industry. Propel your expansion efforts forward with
                      strategic assistance and innovative opportunities provided
                      by DIFC.
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
                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="flex flex-col gap-10">
                      <input
                        type="text"
                        placeholder="Type Full Name"
                        className="input input-bordered input-md w-full "
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Type Email"
                        className="input input-bordered input-md w-full "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button
                        type="submit"
                        className="btn px-5 py-3 rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white"
                      >
                        {loading ? "Loading..." : "Get a Call Back"}
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

      {/* <DIFCBusinessActivities /> */}

      <FAQ bg="bg-c_blue/50" />
    </>
  );
};

export default DIFC;
