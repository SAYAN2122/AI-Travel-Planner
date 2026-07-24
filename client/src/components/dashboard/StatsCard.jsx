import { motion } from "framer-motion";

function StatsCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl bg-white p-6 shadow-lg border border-orange-100"
    >
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
      >
        {icon}
      </div>

      <p className="text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        {value}
      </h2>
    </motion.div>
  );
}

export default StatsCard;