"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" }
  };
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex justify-between items-center py-4 px-8 fixed w-screen bg-gradient-to-tr from-indigo-700 to-purple-800 z-50">
      <motion.h1
        className="text-3xl font-bold lg:px-10 text-[#DCE546]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        UXify
      </motion.h1>
      <motion.button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </motion.button>
      <motion.nav
        className="fixed top-0 left-0 bottom-0 w-64 bg-gray-900 p-6 md:static md:w-auto md:bg-transparent md:p-0"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="space-y-4 md:space-y-0 md:space-x-6 md:flex">
          {["About", "Services", "Work", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-gray-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
