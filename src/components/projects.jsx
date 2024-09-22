"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Redesign",
    description: "A modern, user-friendly interface for an online store",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Finance Dashboard",
    description: "An intuitive dashboard for a fintech startup",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Social Media App",
    description: "A sleek mobile app for a new social platform",
    image: "/api/placeholder/400/300"
  },
  {
    title: "Travel Booking Platform",
    description: "A comprehensive solution for planning and booking trips",
    image: "/api/placeholder/400/300"
  }
];

const ProjectCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 1 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="py-16 min-h-dvh bg-gradient-to-b from-purple-50 to-purple-100 flex justify-center items-center"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
          }}
        >
          Our Latest Projects
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={100}
                      height={100}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
              prevBtnEnabled
                ? "opacity-100 hover:bg-gray-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${
              nextBtnEnabled
                ? "opacity-100 hover:bg-gray-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
