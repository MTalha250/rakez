import Money from "@/assets/money.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiDividedSquare } from "react-icons/gi";
import ContainerWrapper from "../common/ContainerWrapper";
import { Heading1 } from "../common/Headings/Headings";
import NormalParagraph from "../common/Paragraphs/Paragraphs";

const BankingDes = () => {
  return (
    <div className="pt-10">
      <ContainerWrapper>
        {" "}
        <Heading1 title="Premium Banking Solutions" classes="text-center" />
      </ContainerWrapper>

      <div className="bg-c_blue/50 py-12">
        <ContainerWrapper>
          {/* BRANDING & LOGO DESIGN PACKAGE */}
          <div className="flex flex-col md:flex-row gap-20 min-h-[350px]">
            <div className="flex-1">
              <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
              <h3 className="text-orange-500 font-bold text-[16px] uppercase mb-5 ">
                Secure your bank account in Dubai with premium personal service
                for as low as AED 1,500
              </h3>
              <NormalParagraph
                text="Start your application today with the UAE’s only 100% digital Free Zone and benefit from our award-winning solutions."
                clasess="text-left"
              />
              <ul className="mt-5">
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Guaranteed IBAN* with one business bank account.
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    A single application to apply with multiple banks.
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Access to priority services and fast-track processes.
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Express pre-approval within three business days.
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Services for document submission and application.
                  </p>
                </li>

                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Assistance with preparations for your bank interview.
                  </p>
                </li>
              </ul>
              <NormalParagraph
                text="With our exclusive banking partners, you can now convert large purchases into affordable instalment plans and enjoy the convenience of paying over 3, 6, 9, or 12 months."
                clasess="text-left mt-5"
              />
              <div className="flex justify-end">
                <Link href="/meeting">
                <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                  Get Started
                </button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                  <Image
                    src={Money.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="no-image"
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </div>
  );
};

export default BankingDes;
