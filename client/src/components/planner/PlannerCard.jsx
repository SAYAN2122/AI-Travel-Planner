import { motion } from "framer-motion";

function PlannerCard({
  title,
  subtitle,
  children,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      {/* Header */}

      <div className="border-b border-slate-100 px-8 py-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {subtitle}
        </p>

      </div>

      {/* Content */}

      <div className="p-8">
        {children}
      </div>
    </motion.div>
  );
}

export default PlannerCard;