import { motion } from "framer-motion";

export default function HighlightedText({
  children,
  className,
  bgSizeClass = "bg-[length:100%_110%]",
  svg = "ellipse",
  ...props
}) {
  return (
    <span className="relative inline-block cursor-pointer group">
      <span className={`relative z-0 ${className}`} {...props}>
        {children}
      </span>
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="absolute inset-0 opacity-50"></span>
        <motion.span
          initial={{ backgroundPositionX: "0%" }}
          animate={{ backgroundPositionX: "100%" }}
          transition={{ duration: 0.7, ease: "linear" }}
          className={`absolute inset-0 ${
            svg === "ellipse" ? "bg-[url('/hhc.svg')]" : "bg-[url('/hhcG.svg')]"
          } bg-no-repeat animate-draw-highlight ${bgSizeClass} origin-left`}
        ></motion.span>
      </motion.span>
    </span>
  );
}
