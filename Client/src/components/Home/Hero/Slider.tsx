import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import img1 from "@/assets/sl1.jpg";
import img2 from "@/assets/sl2.jpg";
import img3 from "@/assets/sl3.jpg";
export default function Slider() {
  const images = [img1, img2, img3];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center w-2/3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 tracking-wider">
          Best Business Setup Company in Dubai
        </motion.p>
        <motion.div className="mb-5 md:mb-10 flex text-base md:text-xl font-bold text-primary mt-3">
          <span className="border-r px-1">Mainland</span>
          <span className="border-r px-1">Free Zone</span>
          <span className="px-1">Offshore</span>
          {/* <span className=" px-1">KSA</span> */}
        </motion.div>
        <button className="px-4 py-2 text-lg backdrop-blur-sm border bg-primary/30 border-primary/40 text-white mx-auto text-center rounded-full relative mt-4">
          <a href="#home-contact">Start Now →</a>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
