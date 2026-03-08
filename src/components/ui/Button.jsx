import { motion } from "framer-motion";

export default function Button({ children, className = "", ...props }) {
  const buttonClassName = ["btn", className].filter(Boolean).join(" ");

  return (
    <motion.button
      type="button"
      className={buttonClassName}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
