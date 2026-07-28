import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function StatsCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200
        bg-white/80
        p-7
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div
        className={`
          absolute
          -right-10
          -top-10
          h-36
          w-36
          rounded-full
          bg-gradient-to-br
          ${color}
          opacity-10
          blur-3xl
        `}
      />

      {/* Top Row */}

      <div className="relative flex items-start justify-between">

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            ${color}
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
            rounded-full
            bg-slate-100
            p-2
            text-slate-500
          "
        >
          <ArrowUpRight size={18} />
        </motion.div>

      </div>

      {/* Content */}

      <div className="mt-8">

        <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <h2 className="mt-3 text-5xl font-black text-slate-900">
          {value}
        </h2>

      </div>

      {/* Bottom Line */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          Updated just now
        </span>

        <div
          className={`
            h-2
            w-20
            rounded-full
            bg-gradient-to-r
            ${color}
          `}
        />

      </div>

    </motion.div>
  );
}

export default StatsCard;