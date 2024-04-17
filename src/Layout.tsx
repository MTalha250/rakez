import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar_new/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "./components/Navbar/Sidebar";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="border-2">
        <Sidebar />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="md:inline-block fixed bottom-5 right-5 z-40 bg-secondary text-2xl border border-white text-white p-3 rounded-xl shadow-md shadow-black/30"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FaArrowUp />
        </motion.button>
      )}
      <Toaster />
    </div>
  );
};

export default Layout;
