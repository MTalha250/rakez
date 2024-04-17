import { FC, ReactNode } from "react";

interface ExploreCardsProps {
  icon: ReactNode;
  title: string;
  des: string;
}

const ExploreCards: FC<ExploreCardsProps> = ({ icon, title, des }) => {
  return (
    <div className="relative">
      <div className="card shadow-xl bg-c_blue rounded-md h-[420px] lg:h-[450px] w-full transform rotate-2 md:rotate-12 z-10"></div>
      <div className="card shadow-xl bg-green/90 rounded-md h-[420px] lg:h-[450px] w-full z-20 absolute top-0">
        <div className="card-body">
          <div className="h-[50px] flex justify-center">{icon}</div>
          <div>
            <p className="text-[16px] md:text-[18px] mt-5 font-bold uppercase">
              {title}
            </p>
            <p className="text-[14px] md:text-[16px] mt-5 font-light ">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCards;
