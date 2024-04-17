import { variants } from "@/constants";
import { motion } from "framer-motion";

export const Heading1 = ({
  classes,
  title,
}: {
  classes?: string;
  title: string;
}) => {
  return (
    <h1
      className={`text-3xl sm:text-5xl text-green font-semibold drop-shadow-2xl mb-5 ${classes ? classes: ""}`}
    >
      {title}
    </h1>
  );
};
export const Heading3 = ({
  classes,
  title,
}: {
  classes?: string;
  title: string;
}) => {
  return (
    <h3
      className={`mb-5 text-lg md:text-xl font-medium text-neutral-100 ${classes ? classes: ""}`}
    >
      {title}
    </h3>
  );
};
