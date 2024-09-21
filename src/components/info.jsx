"use client";

import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Zap } from "lucide-react";

const infoData = [
  {
    icon: Lightbulb,
    title: "Innovative Designs",
    description:
      "We create unique, trendsetting interfaces that push the boundaries of digital experiences."
  },
  {
    icon: Smartphone,
    title: "User-Centric Approach",
    description:
      "Every pixel is crafted with the end-user in mind, ensuring intuitive and enjoyable interactions."
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "We deliver high-quality results quickly, without compromising on attention to detail."
  }
];

const Info = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24 min-h-dvh flex justify-center items-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-indigo-900"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {infoData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.2 }
              }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-indigo-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-12 h-12 text-indigo-600" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
