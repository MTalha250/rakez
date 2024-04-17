import whoWeAreBanner from "@/assets/whoWeAreBanner.jpg";
import Accordian from "@/components/accordian/Accordian";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aboutUs } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 lg:flex-row px-7 md:px-24 py-14 md:py-20 border w-full">
        <div className="flex flex-col gap-4 ">
          <div>
            <p className="text-xl text-[#325AED] font-medium">Who We Are</p>
            <p className="text-4xl font-medium">Behind the scenes</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {aboutUs.map((text, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="my-5">
                <AccordionTrigger className="text-3xl text-start font-medium border-l-[3px] px-4 py-2 border-l-[#325AED] group">
                  {text.title}
                </AccordionTrigger>
                <AccordionContent className="text-xl px-4 py-2 border-l-[3px] border-l-[#325AED]">
                  {text.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={whoWeAreBanner}
            alt="A person explaining something with a laptop near him"
            width={650}
            className="rounded-lg w-full max-h-[300px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default About;
