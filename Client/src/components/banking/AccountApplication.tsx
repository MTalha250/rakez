import ContainerWrapper from "../common/ContainerWrapper";
import { Heading1 } from "../common/Headings/Headings";
import NormalParagraph from "../common/Paragraphs/Paragraphs";

import partners from "@/assets/partners.png";
import { Link } from "react-router-dom";

const AccountApplication = () => {
  return (
    <div className="py-20">
      <ContainerWrapper>
        <Heading1
          title="Submit Your Application to Activate Your Corporate Account"
          classes="text-center"
        />
        <NormalParagraph text="Take the first step towards securing your corporate account in Dubai by submitting your application today. Our streamlined process ensures swift activation, backed by personalized service tailored to your business needs. Experience seamless banking with us." />
      </ContainerWrapper>

      <div className="bg-primary/5 py-12">
        <ContainerWrapper>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-white p-10 sm:p-16 rounded-tl-[80px]">
              <h1 className="text-[22px] font-bold">Application Process</h1>

              <ul className="list-disc">
                <li className="mt-5">
                  Log in to the customer portal https://portal.meydanfz.ae
                  located on our website or call us on 800 FZ1 (800 391) to help
                  you log into your account.
                </li>
                <li className="mt-3">
                  Submit the required documents and complete the payment.
                </li>
                <li className="mt-3">Receive a timeline.</li>
                <li className="mt-3">
                  Receive a copy of confirmation via email.
                </li>
              </ul>
            </div>
            <div className="bg-white p-10 sm:p-16 rounded-tl-[80px]">
              <h1 className="text-[22px] font-bold">Requirements</h1>

              <ul className="list-disc">
                <li className="mt-5">Company Profile</li>
                <li className="mt-3">Personal Profile</li>
                <li className="mt-3">Shareholder’s Emirates ID</li>
                <li className="mt-3">Shareholder’s Proof of Residency</li>
                <li className="mt-3">
                  Shareholder’s Bank Statement (Note: If UAE statement – 3
                  months, if non-UAE statement or corporate accounts – 6
                  months)​​
                </li>
                <li className="mt-3">VAT Registration (if applicable)</li>
                <li className="mt-3">Payment</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/meeting">
              <button className="btn py-2 px-5 bg-tertiary border-none mt-10 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                Apply Now
              </button>
            </Link>
          </div>
        </ContainerWrapper>
      </div>

      <div className="mt-20">
        <ContainerWrapper>
          <Heading1 title="Financial Solution" classes="text-center text-lg" />
          <NormalParagraph
            clasess="text-3xl leading-8 text-center mt-10 mb-20 text-neutral-500"
            text="Dubai's Finest Financial Solution for Your Startup is Here! Get your Guaranteed Bank Account with Payment and POS Integration Only with Meydan Free Zone."
          />

          <div className="h-[80vh] w-full]">
            <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
              <img
                src={partners}
                alt="no-image"
                className="rounded-tl-[100px] rounded-br-[100px] object-cover object-center h-full w-full"
              />
            </div>
          </div>
        </ContainerWrapper>
      </div>

      <ContainerWrapper classes="pt-14 md:pt-24">
        <Heading1
          title="Note By @Serv Corps Companies House"
          classes="text-center"
        />

        <NormalParagraph text="All business licenses are inclusive of a shared desk facility, located inside The Meydan Hotel." />
        <NormalParagraph text="All Prices are inclusive of 5% VAT and government charges." />
      </ContainerWrapper>
    </div>
  );
};

export default AccountApplication;
