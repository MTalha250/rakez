import { variants } from "@/constants";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface HeroBannerProps {
  image?: any;
  bannerClasses?: string;
  title?: string;
  subTitle?: string;
  children?: ReactNode;
}

const HeroBanner: FC<HeroBannerProps> = ({
  image,
  bannerClasses,
  title,
  subTitle,
  children,
}) => {
  return (
    <div className={`flex flex-col relative min-h-[70vh] ${bannerClasses}`}>
      {image && (
        <img
          src={image}
          alt="no-image"
          className="absolute w-full h-full object-cover"
        />
      )}

      {/* </div> */}

      {/* Overlay of hero section */}
      <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

      {/* Content of hero */}
      <div className="flex justify-center container max-sm:max-w-[300px]">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col h-[85vh] w-full items-center justify-center"
        >
          {title && (
            <h1
              className={`text-3xl sm:text-5xl text-green text-primary font-semibold drop-shadow-2xl mb-5 text-center`}
            >
              {title}
            </h1>
          )}

          {subTitle && (
            <h3
              className={`mb-5 text-lg md:text-xl z-[10] font-medium text-neutral-100 text-center`}
            >
              {subTitle}
            </h3>
          )}

          {children && children}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
