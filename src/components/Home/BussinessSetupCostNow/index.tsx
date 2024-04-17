import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Select from "react-select";

const list = [
  {
    title: "Business Activity",
  },
  {
    title: "Jurisdiction",
  },
  {
    title: "Owners",
  },
  {
    title: "Visa",
  },
  {
    title: "Office Space",
  },
  {
    title: "Business Name",
  },
  {
    title: "Contact Details",
  },
];

const options = [
  { value: "chocolate", label: "Visa Services" },
  { value: "strawberry", label: "Business Setup" },
  { value: "vanilla", label: "Banking" },
];

const BussinessSetupCostNow = () => {
  return (
    <div className="bg-c_blue/50 min-h-[90vh]">
      <ContainerWrapper classes="py-14 md:py-24">
        <div>
          <h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-2xl md:mb-5 text-center">
            Calculate Your
          </h1>
          <h1 className="text-3xl sm:text-5xl font-semibold drop-shadow-2xl md:mb-5 text-center">
            <span className="text-orange-500"> Business Setup Cost Now</span>
          </h1>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-20 md:gap-32">
          {/* Left */}
          <div className="bg-secondary p-5 rounded-md text-white font-semibold col-span-1">
            <div className="relative">
              {/* <div className="h-[300px] border-l border-2 border-dashed border-red-400 transform rotate-180 absolute top-0 left-5 -z-10"></div> */}

              {list &&
                list.length > 0 &&
                list.map((item, index) => (
                  <div className="flex items-center gap-10 mb-5">
                    <div className="bg-white p-3 text-orange-500 rounded-tl-[10px] rounded-br-[10px]">
                      0{index + 1}
                    </div>
                    <p className="text-[20px] ">{item.title}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* right */}
          <div className="col-span-1">
            <h1 className="font-bold text-[18px]">
              Which Business activity are you looking for?
            </h1>
            <div className="md:mt-5">
              <Select options={options} />
              <Button className="rounded-tl-[20px] rounded-br-[20px] mt-5">
                Next <MoveRight width="16" height="16" />
              </Button>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default BussinessSetupCostNow;
