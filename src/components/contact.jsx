"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import ConfirmationPopup from "./confirmation";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder
}) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <label htmlFor={name} className="block text-white text-sm font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={true}
      className="w-full bg-white bg-opacity-20 border border-white border-opacity-25 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
    />
  </motion.div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessDetails: "",
    message: ""
  });

  const [showPop, setShowPop] = useState(false);

  const toggle = () => setShowPop((s) => !s);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    sendEmail(formData);
    toggle();
    // Reset form after submission
    //setFormData({ name: "", email: "", businessDetails: "", message: "" });
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s Build Something Great Together
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ready to take your business online? Get in touch with us today.
        </motion.p>
        <motion.div
          className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
            <InputField
              label="Business Details"
              name="businessDetails"
              value={formData.businessDetails}
              onChange={handleChange}
              placeholder="Tell us about your business"
            />
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label
                htmlFor="message"
                className="block text-white text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="4"
                className="w-full bg-white bg-opacity-20 border border-white border-opacity-25 rounded-lg py-3 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-white text-indigo-700 font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Free Consultation
            </motion.button>
          </form>
        </motion.div>
      </div>
      <ConfirmationPopup isOpen={showPop} onClose={toggle} />
    </section>
  );
};

export default ContactForm;
