import { FC, ReactNode } from "react";
import NormalParagraph from "../Paragraphs/Paragraphs";

interface StatisticsProps {
  icon: ReactNode;
  title: string;
  subTitle: string;
  boxBorderClasses: string;
  children?: ReactNode;
}

export const Statistics: FC<StatisticsProps> = ({
  icon,
  title,
  subTitle,
  boxBorderClasses,
  children,
}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-y-4  max-w-[350px]`}
    >
      <div
        className={`border flex justify-center items-center   p-10 rounded-full ${boxBorderClasses}`}
      >
        {icon}
      </div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-semibold text-center">{title}</div>
        <div className="uppercase italic text-center mt-[6px]">{subTitle}</div>
      </div>

      {children && children}
    </div>
  );
};

export const StatisticsHorizontal: FC<StatisticsProps> = ({
  icon,
  title,
  subTitle,
  boxBorderClasses,
  children,
}) => {
  return (
    <div
      className={`flex justify-center items-center md:flex-col gap-4  max-w-[350px]`}
    >
      <div
        className={`border flex justify-center p-5   sm:p-10 rounded-full ${boxBorderClasses}`}
      >
        {icon}
      </div>
      <div className="flex flex-grow flex-col items-center">
        <h1
          className={`text-3xl sm:text-5xl text-center text-green font-semibold drop-shadow-2xl mb-2`}
        >
          {title}
        </h1>
        <NormalParagraph
          text={subTitle}
          clasess="uppercase italic text-center"
        />

        {children && children}
      </div>
    </div>
  );
};

export const ExploreStatisticsHorizontal: FC<StatisticsProps> = ({
  icon,
  title,
  subTitle,
  boxBorderClasses,
  children,
}) => {
  return (
    <div
      className={`flex justify-center items-center md:flex-col gap-4  max-w-[350px] border-l-4 border-l-green lg:border-none pl-5 lg:pl-0`}
    >
      <div
        className={`border flex justify-center p-5   sm:p-10 rounded-full ${boxBorderClasses}`}
      >
        {icon}
      </div>
      <div className="flex flex-grow flex-col items-center">
        <h2
          className={`text-2xl sm:text-4xl text-center text-green font-semibold drop-shadow-2xl mb-2`}
        >
          {title}
        </h2>
        <NormalParagraph
          text={subTitle}
          clasess="uppercase italic text-center text-black"
        />

        {children && children}
      </div>
    </div>
  );
};
