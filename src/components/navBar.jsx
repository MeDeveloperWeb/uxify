"use client";

import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
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
    <div className="flex justify-between items-center py-4 px-8 z-50 absolute w-full bg-transparent">
      <motion.h1
        className="text-3xl font-bold lg:px-10 text-brandSecondary flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/uxpo.png" alt="U" width={32} height={32} /> Xpo
      </motion.h1>
      <motion.button
        className="md:hidden fixed bg-gradient-to-br from-indigo-700 to-purple-800 px-4 py-4 rounded-full top-2 right-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </motion.button>
      <motion.nav
        className="fixed top-0 left-0 bottom-0 w-screen bg-gradient-to-br from-indigo-800 to-purple-900 md:from-transparent md:to-transparent p-6 md:static md:w-auto md:bg-transparent md:p-0"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="flex flex-col justify-center items-center h-full md:h-auto md:flex-row gap-6 lg:fixed top-4 right-4 md:bg-gradient-to-br from-indigo-700 to-purple-800 md:rounded-full px-4 py-4">
          {["Services", "Process", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-brandSecondaryBright md:text-white text-3xl md:text-base font-semibold md:font-medium hover:text-gray-300"
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
