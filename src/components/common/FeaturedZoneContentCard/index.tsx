import { FC } from "react";

interface FeaturedContentCardProps {
  image: any;
  title: string;
  subTitle: string;
}

const FeaturedContentCard: FC<FeaturedContentCardProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <div className="max-w-[400px] max-h-[500px] pb-10 bg-secondary text-white rounded-md drop-shadow-md">
      <div className="h-[160px] md:h-[230px] w-full bg-white">
        {/* <img
          src={image.src}
          alt="image"
          className="w-full h-full object-cover"
        /> */}

        <div className="w-full h-full relative">
          <img
            src={image.src}
            className="object-cover w-full h-full"
            alt="no-image"
          />
        </div>
      </div>

      <div className="mx-5 sm:mx-5 xl:mx-8">
        <h6 className="my-5 text-center font-semibold text-[17px] sm:text-[22px]">
          {title}
        </h6>
        <p className="text-center text-[14px] sm:text-[18px]">{subTitle}</p>

        <div className="flex justify-center">
          <button className="p-2 bg-white hover:bg-green rounded text-green hover:text-white mt-6 text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentCard;
