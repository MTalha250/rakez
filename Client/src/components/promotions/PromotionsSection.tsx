import Business from "@/assets/business.jpg";
import Money from "@/assets/money.jpg";
import { TiTick } from "react-icons/ti";
import ContainerWrapper from "../common/ContainerWrapper";
import { Heading1, Heading3 } from "../common/Headings/Headings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PromotionCard from "./PromotionCard";

const data = [
  {
    title: "MEydan freezone",
    des: "Launch your business with SCC House and secure FREE Corporate Tax Registration.  ",
    price: "AED 12,500",
    img: Business,

    list: [
      "Trade License",
      "Subsidized co-working spaces",
      "Tax Registeration",
      "Company Stamp",
      "Three business Activities From Different group",
    ],
    navLink: "/DIFC",
  },
  {
    title: "DUBAI MAIN LAND",
    des: "Here’s offering the best Business Trade License for Tech and Innovation Companies with the prestigious DIFC Innovation Hub!",
    price: "AED  7,850",
    img: "https://www.creativezone.ae/wp-content/uploads/DIFC-Ad-Sep-2023-Updated_1200X1200-768x768.jpg",
    list: [
      "LICENCE",
      "Memorandum",
      "Local Sponsor if needed",
      "Immigration Card ",
      "Banking Assistance",
      "Investor Visa Quota (2)",
      "Employement Quota (3-15)",
      "VAT Registeration",
      "Company Stamp + Letter Head",
    ],
    navLink: "/DIFC",
  },
  {
    title: "Free Dugital Account Opening",
    des: "Experience the ease of digital banking with our free account opening service. Seamlessly open your account online, without any fees or hassle.",
    price: "AED  0",
    img: Money,
    list: [
      "Instant online account opening process",
      "No fees or charges involved",
      "Seamless digital documentation submission",
      "Banking Assistance",
    ],
    navLink: "/banking",
  },
  // {
  //   title: "Start Your Business in Sharjah Free Zone",
  //   des: "Our tailored packages provide a seamless pathway to establishing your venture. Benefit from strategic locations, business-friendly environments, and expert support to propel your growth. Elevate your business journey and set the stage for prosperity.",
  //   price: "AED 6,000",
  //   img: "https://www.creativezone.ae/wp-content/uploads/Jurisdictions_SPC-1-768x768.jpg",
  //   navLink: "/DIFC",
  // },
];

const PromotionsSection = () => {
  return (
    <>
      <ContainerWrapper classes="py-14 mg:py-24">
        <Heading1 title="SCC House OFFERS" classes="text-center" />
        <Heading3
          title="Unlocking Opportunities for Business Growth"
          classes="!text-black text-center"
        />

        <div className="mt-10">
          <div className="grid justify-center grid-cols-1 gap-10">
            <div>
              <Carousel className="">
                <CarouselContent className="flex">
                  {data &&
                    data.length > 0 &&
                    data.map((item) => (
                      <CarouselItem className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                        <div className="h-[100%] w-full bg-secondary">
                          <PromotionCard
                            title={item.title}
                            des={item.des}
                            price={item.price}
                            img={item.img}
                            navLink={item.navLink}
                          >
                            <ul className="flex flex-wrap gap-3">
                              {item.list &&
                                item.list.length > 0 &&
                                item?.list?.map((item: any) => (
                                  <li className=" gap-2 flex items-center">
                                    <div className="rounded-sm p-1 bg-green h-[20px] w-[20px] flex justify-center items-center">
                                      <TiTick className="text-white" />
                                    </div>
                                    <span className="font-semibold">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </PromotionCard>
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="max-sm:left-11" />
                <CarouselNext className="max-sm:right-11" />
              </Carousel>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default PromotionsSection;
