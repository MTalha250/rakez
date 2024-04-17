import Image from "next/image";
import { FC } from "react";

interface FeaturedContentCardProps {
  image: any;
  title: string;
  subTitle: string;
}

const PersonPortfolioCard: FC<FeaturedContentCardProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <div className="max-w-[400px] max-h-[500px] pb-10 bg-white/45 text-black rounded-md drop-shadow-md">
      <div className="h-[230px] w-full">
        {/* <img
          src={image.src}
          alt="image"
          className="w-full h-full object-cover"
        /> */}
        <div className="w-full h-full relative">
          <Image
            src={image.src}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="no-image"
          />
        </div>
      </div>
      <div className="mx-10">
        <h6 className="my-5 text-center font-semibold text-[22px]">{title}</h6>
        <p className="text-center text-green underline">{subTitle}</p>
      </div>
    </div>
  );
};

export default PersonPortfolioCard;
