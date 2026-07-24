import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";

function HeroContent({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative z-20"
    >
      {/* AI Badge */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl"
      >
        <Sparkles
          size={18}
          className="text-cyan-300"
        />

        <span className="text-sm font-semibold tracking-wide text-cyan-100">
          Powered by Groq AI
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        className="mt-8 max-w-3xl text-6xl font-black leading-[1.05] text-white lg:text-8xl"
      >
        Plan
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Smarter
        </span>

        <br />

        Travel Better
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        className="mt-8 max-w-2xl text-xl leading-9 text-slate-300"
      >
        AI creates personalized itineraries,
        hotel recommendations,
        food suggestions,
        budget estimation,
        and packing checklists in seconds.
      </motion.p>

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={onStart}
          className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-5 text-lg font-bold text-white shadow-[0_20px_50px_rgba(6,182,212,0.35)] transition-all"
        >
          Generate Trip

          <ArrowRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -4,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur-xl"
        >
          <PlayCircle size={22} />

          Watch Demo
        </motion.button>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="mt-20 grid grid-cols-3 gap-10 max-w-xl"
      >
        <div>
          <h2 className="text-5xl font-black text-white">
            25K+
          </h2>

          <p className="mt-2 text-slate-400">
            Trips Planned
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-white">
            98%
          </h2>

          <p className="mt-2 text-slate-400">
            Happy Travelers
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black text-white">
            150+
          </h2>

          <p className="mt-2 text-slate-400">
            Destinations
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;