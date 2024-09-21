"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { useFollowPointer } from "@/hooks/useFollowPointer";

export default function Cover() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const obstructRef = useRef(null);
  const { x, y } = useFollowPointer(ref, sectionRef, obstructRef);

  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white min-h-screen pl-6 pt-6 flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center text-center w-full">
        <motion.h2
          className="text-[13.5vw] leading-[13vw] lg:leading-[26dvh] font-bold mb-6 text-start w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={sectionRef}
        >
          Crafting
          <br />
          <span className="text-[#DCE546]">Digital</span>
          <br />
          <span className="">Experiences</span>
        </motion.h2>
        <motion.p
          className="text-xl mb-14 max-w-2xl text-justify mt-5 lg:-ml-[49vw] lg:w-[40vw] pl-2 self-start pr-4 lg:pr-0 lg:self-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={obstructRef}
        >
          We&apos;re a full-service studio{" "}
          <span className="text-[#f4ff28] font-medium">helping</span> startups
          and established businesses{" "}
          <span className="text-[#f4ff28] font-medium">create</span> impactful{" "}
          <span className="text-[#f4ff28] font-medium">digital solutions</span>.
          We specialize in creating seamless{" "}
          <span className="text-[#f4ff28] font-medium">user experiences</span>{" "}
          that not only captivate but convert, giving{" "}
          <span className="text-[#f4ff28] font-medium">your business</span> the{" "}
          <span className="text-[#f4ff28] font-medium">competitive edge</span>{" "}
          it needs to thrive in today’s digital landscape.
        </motion.p>
      </div>
      <motion.div />
      <motion.a
        ref={ref}
        href="#contact"
        className="bg-[#f4ff28] text-black px-8 py-3 ml-2 rounded-full flex items-cente transition-colors w-fit"
        whileHover={{
          backgroundPosition: ["0%", "100%"], // Left to right
          transition: { duration: 0.2, delay: 0 }
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          delay: 0.4
        }}
        style={{
          background: "linear-gradient(90deg, #f4ff28 50%, white 50%)",
          backgroundSize: "200%",
          backgroundPosition: "0%",
          transition: "background-position 0.5s ease-in-out",
          x,
          y
        }}
      >
        Get Started <ChevronRight className="ml-2" />
      </motion.a>
    </section>
  );
}
