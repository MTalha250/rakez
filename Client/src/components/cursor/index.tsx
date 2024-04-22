import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="invisible md:visible w-[50px] h-[50px] bg-[#66DC8D]/50 rounded-full fixed z-50 pointer-events-none"
      animate={{ x: position.x - 12, y: position.y - 12 }}
    ></motion.div>
  );
};

export default Cursor;
