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
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400",

    outline:
      "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",

    md: "px-5 py-2.5 text-sm",

    lg: "px-7 py-3.5 text-base",
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
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