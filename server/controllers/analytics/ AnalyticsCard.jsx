import { motion } from "framer-motion";

function AnalyticsCard({
  title,
  value,
  icon,
  color = "from-indigo-500 to-cyan-500",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/40 bg-white/80 p-7 shadow-[0_20px_60px_rgba(99,102,241,.08)] backdrop-blur-xl"
    >
      {/* Background Glow */}

      <div
        className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-r ${color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-125`}
      />

      <div className="relative">

        {/* Top */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">

              {title}

            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900">

              {value}

            </h2>

          </div>

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-white shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
          >
            {icon}
          </div>

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Footer */}

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-500">

            Live Analytics

          </span>

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

            <span className="text-sm font-semibold text-emerald-600">

              Updated

            </span>

          </div>

        </div>

        {/* Bottom Progress */}

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />

        </div>

      </div>

    </motion.div>
  );
}

export default AnalyticsCard;