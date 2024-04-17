import { motion } from "framer-motion";

const AnimatedCircle = () => {
  const circleVariants = {
    animate: {
      opacity: 1,
      rotate: [0, 3600], // Rotate from 0 to 3600 degrees
      transition: {
        duration: 50, // Adjust duration as needed
        loop: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center relative"
      style={{ width: "100px", height: "100px" }}
      variants={circleVariants}
      initial="initial"
      animate="animate"
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="white">
            <textPath xlinkHref="#textPath">
              This text will curve around the circle
            </textPath>
          </text>
          <path id="textPath" d="M 50,50 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" stroke="none"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="none"/>
        </svg>
      </div>
      <div className="w-16 h-16 bg-blue-500 rounded-full flex justify-center items-center text-white">
        Center
      </div>
    </motion.div>
  );
};

export default AnimatedCircle;
