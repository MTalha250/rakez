//
import building1 from "@/assets/building1.jpg";
import building2 from "@/assets/building2.jpg";
import building3 from "@/assets/building3.jpg";
import building4 from "@/assets/building4.jpg";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const Services = () => {
  return (
    <div className="py-14 md:py-20 bg-c_blue/50">
      <ContainerWrapper>
        <div className=" w-full">
          <div>
            <p className="text-xl text-c_orangish font-medium">
              Business Activites
            </p>
            <p className="text-4xl font-medium">
              Unlock unlimited business potential
            </p>
            <p className="text-lg w-2/3 pt-4">
              We offer 2,500+ business activities, enabling you to Grow from
              Dubai. A single license permits multiple activities, simplifying
              expansion across various fields, industries, and niche markets.
              Discover unparalleled flexibility with Meydan Free Zone.{" "}
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mt-8"
          >
            <CarouselContent className="flex w-full">
              <CarouselItem className="sm:basis-[50%] md:basis-1/3 w-full ">
                <div className="group  rounded-lg overflow-hidden relative">
                  <img
                    src={building1}
                    alt="An image"
                    className="group-hover:scale-125 transition-all duration-300 ease-in-out w-full"
                  />
                  <div className="w-full absolute left-0 bottom-0 pb-9  pl-6 text-white font-semibold text-xl drop-shadow-lg bg-gradient-to-b from-transparent to-black">
                    Diverse Opportunities Await
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-[50%] md:basis-1/3 w-full ">
                <div className="group  relative overflow-hidden rounded-lg">
                  <img
                    src={building2}
                    alt="An image"
                    className="group-hover:scale-125 transition-all duration-300 ease-in-out w-full"
                  />
                  <div className="w-full absolute left-0 bottom-0 pb-9  pl-6 text-white font-semibold text-xl drop-shadow-lg bg-gradient-to-b from-transparent to-black">
                    Expand Your Horizons
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-[50%] md:basis-1/3 w-full ">
                <div className="group  relative overflow-hidden rounded-lg ">
                  <img
                    src={building3}
                    alt="An image"
                    className="group-hover:scale-125 transition-all duration-300 ease-in-out w-full"
                  />
                  <div className="w-full absolute left-0 px-7 bottom-0 pb-9  pl-6 text-white font-semibold text-xl drop-shadow-lg bg-gradient-to-b from-transparent to-black">
                    Endless Possibilities Await
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="sm:basis-[50%] md:basis-1/3 w-full ">
                <div className="group relative rounded-lg">
                  <img
                    src={building4}
                    alt="An image"
                    className="group-hover:scale-125 transition-all duration-300 ease-in-out w-full"
                  />
                  <div className="w-full absolute left-0 bottom-0 px-5 pb-9  pl-6 text-white font-semibold text-xl drop-shadow-lg bg-gradient-to-b from-transparent to-black">
                    Empower Your Growth
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Services;
