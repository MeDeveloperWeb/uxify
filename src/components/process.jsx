"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    description:
      "We kick off with a free, in-depth consultation to understand your unique needs and goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    title: "Strategy",
    description:
      "Our expert team crafts a tailored digital strategy aligned with your business objectives.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    )
  },
  {
    title: "Development",
    description:
      "We design and build your digital presence using cutting-edge tools and technologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    title: "Launch & Support",
    description:
      "We ensure a smooth launch and provide ongoing support to help your business scale and succeed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        />
      </svg>
    )
  }
];

const ProcessStep = ({ title, description, icon, index }) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="bg-indigo-100 rounded-full p-4 mb-4">
      <div className="text-purple-600">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-purple-950">{title}</h3>
    <p className="text-gray-600 max-w-xs">{description}</p>
  </motion.div>
);

const ProcessSection = () => {
  return (
    <section
      className="py-20 min-h-dvh flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100"
      id="process"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-purple-950 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Process
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transforming your digital vision into reality in four seamless steps.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/contact"
            className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
