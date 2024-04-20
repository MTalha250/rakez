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
        <div className="w-full h-full relative">
          <img
            src={image}
            className="object-cover w-full h-full"
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
