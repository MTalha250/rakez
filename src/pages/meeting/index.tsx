"use client";
import Meeting from "@/assets/meeting.jpg";
import { Heading1 } from "@/components/common/Headings/Headings";
import dynamic from "next/dynamic";
import React from "react";

const HeroBanner = dynamic(
  () => import("@/components/common/Banner/HeroBanner")
);
const ContainerWrapper = dynamic(
  () => import("@/components/common/ContainerWrapper")
);
const NormalParagraph = dynamic(
  () => import("@/components/common/Paragraphs/Paragraphs")
);
const Calendly = dynamic(() => import("@/components/meeting/Calendly"));
const UpperNavbar = dynamic(() => import("@/components/common/UpperNavbar"));
const HomeUpperNavContent = dynamic(
  () => import("@/components/common/UpperNavbar/HomeUpperNavContent")
);

const page = () => {
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <HeroBanner
        image={Meeting}
        title="Schedule a meeting Know"
        subTitle="Effortlessly Coordinate, Seamlessly Arrange Meetings with Ease and Efficiency."
      />

      <div className="bg-c_blue/50">
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
