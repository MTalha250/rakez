import { FC } from "react";

interface IStatsNumbers {
  number: string;
  text: string;
  color: string;
  boxColor: string;
}

const StatsNumbers: FC<IStatsNumbers> = ({ number, text, boxColor, color }) => {
  return (
    <div className="relative">
      <div
        className={` absolute top-0 h-[100px] w-[100px] transform rotate-12 rounded-md ${boxColor}`}
      ></div>

      <div
        className={` flex flex-col items-center absolute top-0 h-full ${color}`}
      >
        <h3 className="font-bold text-[22px]">{number}</h3>
        <p className=" text-[16px]">{text}</p>
      </div>
    </div>
  );
};

export default StatsNumbers;
