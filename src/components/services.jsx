"use client";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  Briefcase,
  Headphones
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "We craft stunning, responsive websites that captivate your audience and drive results."
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Solutions",
    description:
      "Transform your business with our secure, user-friendly online stores that boost sales."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Elevate your online presence with our data-driven SEO and social media strategies."
  },
  {
    icon: Briefcase,
    title: "Branding & Strategy",
    description:
      "We build compelling brand identities that resonate with your target audience."
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Ensure your digital assets perform flawlessly with our reliable support services."
  }
];

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-gradient-to-br from-indigo-100 to-purple-400 hover:to-brandSecondaryBright rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-indigo-100 rounded-full p-3 mr-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900  min-h-dvh">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Solutions for Your Business
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering your digital success with our comprehensive suite of
          services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
        {/* <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/services"
            className="bg-gradient-to-tr from-indigo-100 to-purple-200 text-gray-800 font-semibold py-3 px-8 rounded-full hover:to-brandSecondaryBright transition-colors duration-300 inline-block"
          >
            Explore Our Services
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
