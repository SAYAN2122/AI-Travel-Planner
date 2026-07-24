import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
            }
          : {}
      }
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        ${hover ? "hover:shadow-lg" : ""}
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;