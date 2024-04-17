import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  id: number;
  title: string;
  description: string;
  twClass?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}

const variants = {
  initial: { opacity: 0, height: 0, padding: 0 },
  visible: { opacity: 1, height: "auto" },
};

const Accordian = ({
  id,
  title,
  description,
  titleStyle,
  descriptionStyle,
}: Props) => {
  const [visible, setVisible] = useState<number>(1);

  return (
    <>
      <div
        className="border-l-[3px] px-4 py-1 border-l-[#325AED] group"
        key={id}
      >
        <p className={"" + " " + titleStyle}>{title}</p>
        <motion.p
          className={"pt-3" + " " + descriptionStyle}
          variants={variants}
          transition={{ duration: 0.3 }}
          animate={visible ? "visible" : "initial"}
        >
          {description}
        </motion.p>
      </div>
    </>
  );
};

export default Accordian;
