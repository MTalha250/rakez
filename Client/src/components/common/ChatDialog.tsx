import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { Tb360View } from "react-icons/tb";

const ChatDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-[9999] relative">
      <div className="fixed bottom-51 left-5 lg:left-5 flex flex-col-reverse md:flex-row gap-5 w-full md:items-center ">
        <motion.div
          className="rounded-full p-4 md:p-5 border border-white bg-secondary h-[60px] w-[60px] md:h-[70px] md:w-[70px] flex justify-center items-center cursor-pointer"
          whileHover={{ scale: 1.1 }} // Zoom in on hover
          animate={{ scale: [1, 1.1, 1] }} // Continuous zoom in and out animation
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} // Animation duration and repeat
          onClick={() => setOpen(!open)}
        >
          <FaRocketchat className="text-white text-[25px] md:text-[30px]" />
        </motion.div>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-5"
          >
            <div className="rounded-full p-3 md:p-4 h-[50px] w-[50px] md:h-[55px] md:w-[55px] border border-white bg-white flex justify-center items-center  ">
              <FaPhoneAlt className="text-green text-[20px] md:text-[23px]" />
            </div>
            <Link to="https://wa.me/971521508056" target="_blank">
              <div className="rounded-full p-3 md:p-4 h-[50px] w-[50px] md:h-[55px] md:w-[55px] border border-white bg-white flex justify-center items-center ">
                <IoLogoWhatsapp className="text-green text-[20px] md:text-[23px]" />
              </div>
            </Link>
            <div className="rounded-full p-3 md:p-4 h-[50px] w-[50px] md:h-[55px] md:w-[55px] border border-white bg-white flex justify-center items-center ">
              <MdEmojiEmotions className="text-green text-[20px] md:text-[23px]" />
            </div>
            <div className="rounded-full p-3 md:p-4 h-[50px] w-[50px] md:h-[55px] md:w-[55px] border border-white bg-white flex justify-center items-center ">
              <Tb360View className="text-green text-[20px] md:text-[23px]" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChatDialog;
