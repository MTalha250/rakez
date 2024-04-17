"use client";

import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const variants = {
  initial: {
    scaleX: 0,
  },
  open: {
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  closed: {
    scaleX: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <motion.div
      className="xl:hidden z-[99999] text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="text-2xl font-bold bg-blue-300/90 z-[9999] fixed  overflow-y-scroll py-20 top-0 flex items-center px-10 right-0 bottom-0 bg-white w-[300px]  origin-right h-screen"
        variants={variants}
      >
        <ul className="space-y-5">
          {navLinks.map((link, index) => (
            <>
              <li key={index}>
                <Link
                  onClick={() => {
                    if (!link?.children) {
                      setOpen(false);
                    }
                  }}
                  to={link.href}
                  className="text-black underline flex items-center gap-10"
                >
                  {link.label}
                  {link?.children && link?.children?.length > 0 && (
                    <FaAngleDown onClick={() => setOpenSubMenu(!openSubMenu)} />
                  )}
                </Link>
              </li>
              {openSubMenu &&
                link?.children &&
                link?.children?.length > 0 &&
                link?.children?.map((item) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    key={item.label}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      to={item.href}
                      className="text-black/65 ml-10 font-light underline flex items-center gap-10"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
            </>
          ))}
        </ul>
      </motion.div>
      <button
        className="fixed z-[9999] top-12 right-10 "
        onClick={() => setOpen((prev: any) => !prev)}
      >
        <svg width="25" height="25" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="green"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="green"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="green"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;
