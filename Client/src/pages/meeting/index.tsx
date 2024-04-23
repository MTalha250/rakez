import Meeting from "@/assets/meeting.jpg";
import { Heading1 } from "@/components/common/Headings/Headings";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import NormalParagraph from "@/components/common/Paragraphs/Paragraphs";
import Calendly from "@/components/meeting/Calendly";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>
      <div className={`flex flex-col relative min-h-[70vh]`}>
        <img
          src={Meeting}
          alt="no-image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

        {/* Content of hero */}
        <div className="flex px-8 md:px-16 max-sm:max-w-[300px]">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col h-[85vh] w-full justify-center"
          >
            <h1
              className={`text-3xl sm:text-5xl text-green text-primary font-semibold drop-shadow-2xl mb-5 md:w-2/3 lg:w-1/2`}
            >
              Business Setup in Dubai Made Simple with Expert Advice
            </h1>
            <h3
              className={`mb-5 text-lg md:text-xl z-[10] font-medium text-neutral-100 md:w-2/3 lg:w-1/2`}
            >
              Our business setup specialists will guide you through the process,
              explore the array of business activities available, and provide
              insights into how you can make the most of your Dubai business
              venture.
              <div className="mt-10 w-[300px]">
                <button className="w-full btn py-3 text-sm rounded-xl bg-c_orangish text-white uppercase">
                  Book a free consultation
                </button>
              </div>
            </h3>
          </motion.div>
        </div>
      </div>

      <div className="bg-primary/5">
        <ContainerWrapper classes="pt-14 md:pt-24">
          <div className="flex flex-col items-center">
            <Heading1 title="Schedule Your Consultation with Serv Corps Companies House" />
            <NormalParagraph text="Welcome to Serv Corps Companies House's meeting scheduling section! We understand the importance of your time and the need for efficient and hassle-free consultations. Whether you're interested in visa assistance, setting up your business in Dubai, or opening a bank account, our expert team is here to guide you through every step of the process. Use the scheduler below to book a meeting at your convenience, and let us help you navigate the intricacies of establishing your presence in the dynamic business landscape of Dubai." />
          </div>

          <div className="">
            <Calendly />
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
};

export default page;
