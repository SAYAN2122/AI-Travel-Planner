import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700",

    secondary:
      "border border-slate-300 bg-white/80 text-slate-700 backdrop-blur-xl hover:border-blue-300 hover:bg-blue-50",

    outline:
      "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",

    danger:
      "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-500/20 hover:from-red-700 hover:to-rose-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-5 py-3 text-sm",

    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;