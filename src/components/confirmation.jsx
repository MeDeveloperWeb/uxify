import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const ConfirmationPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-gradient-to-br from-indigo-700 to-purple-800 rounded-lg p-8 max-w-md w-full mx-4 relative overflow-hidden text-white"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-brandSecondary to-transparent opacity-20"
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-100 hover:text-gray-300"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <CheckCircle size={64} className="text-brandSecondary mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">
                Query Received!
              </h2>
              <p className="text-center mb-6">
                Thank you for reaching out. We&apos;ve received your query and
                will get back to you shortly.
              </p>
              <motion.a
                href="#"
                className="bg-brandSecondary text-black px-8 py-3 rounded-full flex items-center transition-colors cursor-pointer z-20"
                whileHover={{
                  backgroundPosition: ["0%", "100%"],
                  transition: { duration: 0.2, delay: 0 }
                }}
                style={{
                  background: "linear-gradient(90deg, #f4ff28 50%, white 50%)",
                  backgroundSize: "200%",
                  backgroundPosition: "0%"
                }}
                onClick={onClose}
              >
                Back to Home
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationPopup;
