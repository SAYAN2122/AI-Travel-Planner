import { motion } from "framer-motion";
import { Home, Compass, MapPinned } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  return (

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-[170px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px]" />

      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 mx-6 max-w-2xl rounded-[35px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl"
      >

        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="mb-8 flex justify-center"
        >

          <Compass
            size={90}
            className="text-cyan-400"
          />

        </motion.div>

        <h1 className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-8xl font-black text-transparent">

          404

        </h1>

        <h2 className="mt-6 text-4xl font-bold">

          Destination Not Found

        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">

          Looks like your journey has taken a wrong turn.
          The destination you're looking for doesn't exist
          or may have been moved.

        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-cyan-500/30"
          >

            <Home size={22} />

            Return Home

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/trip-planner")}
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition-all hover:bg-white/10"
          >

            <MapPinned size={22} />

            Plan New Trip

          </motion.button>

        </div>

      </motion.div>

      {/* Floating Decorations */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-12 top-20 hidden rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 backdrop-blur-xl xl:block"
      >

        <Compass
          className="mb-3 text-cyan-400"
          size={34}
        />

        <h3 className="text-xl font-bold">

          Lost?

        </h3>

        <p className="text-sm text-slate-300">

          Let's guide you back.

        </p>

      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute right-12 bottom-24 hidden rounded-3xl border border-violet-500/20 bg-violet-500/10 p-5 backdrop-blur-xl xl:block"
      >

        <MapPinned
          className="mb-3 text-violet-400"
          size={34}
        />

        <h3 className="text-xl font-bold">

          Explore

        </h3>

        <p className="text-sm text-slate-300">

          Discover new destinations.

        </p>

      </motion.div>

    </div>

  );

}