import { GiDividedSquare } from "react-icons/gi";
import ContainerWrapper from "../common/ContainerWrapper";

const DIFCRequirements = () => {
  return (
    <div className="bg-c_blue/50">
      <ContainerWrapper classes="py-14 md:py-24">
        <div>
          <h2 className="font-bold text-[30px] capitalize">
            <span className="text-orange-500">DIFC Innovation License</span>{" "}
            Requirements:
          </h2>

          <ul className="mt-4">
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                The entity should be non-regulated and cannot conduct any
                financial services including financial advisory, arranging money
                services etc.
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                The entity must provide a type of technology like a Software
                Solution, AI, Web3, Technology R&D, or Blockchain.
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                The entity or business activities must be tech-related or
                innovation-related as this license is sector agnostic.
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                The entity must have a physical presence within DIFC with a
                minimum requirement of obtaining a flexible desk at the
                co-working spaces.
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                The entity cannot generate any trading/selling of physical
                products (e.g., import/export of physical products) through
                direct or e-commerce channels.
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                Source of income should be produced for compliance purposes.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="font-bold text-[30px] capitalize">
            Benefits of the DIFC{" "}
            <span className="text-orange-500">Tech Start-up </span>
            Package
          </h2>

          <ul className="mt-4">
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">Subsidised License by 90%</p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">4 Visa Allocation</p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">100% Foreign Ownership</p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                Governed by the UK Common Law and not the UAE Sharia Civil Law
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                Access to a Thriving Start-up Ecosystem
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">ZERO Currency Restrictions</p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                No Restriction on Capital Repatriation
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">
                Access to DIFC Co-working Facilities and Modern Amenities
              </p>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <span>
                <GiDividedSquare className="text-c_orangish text-[18px]" />
              </span>
              <p className="text-[14px]">Access to a Global Fintech Hub</p>
            </li>
          </ul>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default DIFCRequirements;
