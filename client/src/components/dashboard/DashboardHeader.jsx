import { motion } from "framer-motion";
import { Sparkles, MapPinned } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function DashboardHeader() {
  const { user } = useAuth();

  const firstName = user?.name?.split(" ")[0] || "Traveler";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur-xl"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-blue-700">
              AI Travel Dashboard
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Welcome back,

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              {firstName}
            </span>

            👋

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">

            Track your trips, monitor your travel budget,
            revisit your itineraries and let AI help you
            plan your next unforgettable adventure.

          </p>

        </div>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/25"
        >
          <MapPinned
            size={40}
            className="text-white"
          />
        </motion.div>

      </div>
    </motion.div>
  );
}

export default DashboardHeader;