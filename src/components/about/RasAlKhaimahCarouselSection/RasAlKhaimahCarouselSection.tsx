import ContainerWrapper from "@/components/common/ContainerWrapper";
import { Heading1 } from "@/components/common/Headings/Headings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import City1 from "../../../assets/city1.jpg";
import City2 from "../../../assets/city2.jpg";
import City3 from "../../../assets/city3.jpg";

const RasAlKhaimahCarouselSection = () => {
  return (
    <ContainerWrapper>
      <div className="py-14 md:py-28">
        <div className="flex items-center justify-center w-full flex-col">
          <Heading1
            title="THE EMIRATE OF RAS AL KHAIMAH"
            classes="text-center"
          />
        </div>

        <div>
          <Carousel className="">
            <CarouselContent className="flex">
              <CarouselItem className=" sm:basis-[80%] lg:basis-[40%] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <div className="h-[50vh] bg-secondary">
                  {/* <img
                    src={City1.src}
                    alt="image"
                    className="object-cover w-full h-full"
                  /> */}
                  <div className="w-full h-full relative">
                    <img
                      src={City1}
                      className="object-cover w-full h-full"
                      alt="no-image"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-[80%] lg:basis-[40%] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <div className="h-[50vh] bg-secondary">
                  {/* <img
                    src={City2.src}
                    alt="image"
                    className="object-cover w-full h-full"
                  /> */}
                  <div className="w-full h-full relative">
                    <img
                      src={City2}
                      className="object-cover w-full h-full"
                      alt="no-image"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" sm:basis-[80%] lg:basis-[40%] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                <div className="h-[50vh] bg-secondary">
                  {/* <img
                    src={City3.src}
                    alt="image"
                    className="object-cover w-full h-full"
                  /> */}
                  <div className="w-full h-full relative">
                    <img
                      src={City3}
                      className="object-cover w-full h-full"
                      alt="no-image"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="max-sm:left-11" />
            <CarouselNext className="max-sm:right-11" />
          </Carousel>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default RasAlKhaimahCarouselSection;
