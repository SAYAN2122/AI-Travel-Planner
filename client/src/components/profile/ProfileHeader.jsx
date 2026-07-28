import { motion } from "framer-motion";
import {
  UserCircle2,
  Sparkles,
  Plane,
} from "lucide-react";

function ProfileHeader({ user }) {
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
        duration: 0.5,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white/80
        p-10
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}

        <div className="flex flex-col items-center gap-6 md:flex-row">

          {/* Avatar */}

          <motion.div
            whileHover={{
              rotate: 5,
              scale: 1.05,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-600
              to-indigo-600
              shadow-2xl
              shadow-blue-500/30
            "
          >
            <UserCircle2
              size={78}
              className="text-white"
            />
          </motion.div>

          {/* User Info */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-blue-700">
                Premium Traveler
              </span>

            </div>

            <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
              {user?.name || "Traveler"}
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              {user?.email}
            </p>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Manage your account, update your personal
              information, secure your profile and keep
              track of all your AI-generated travel
              adventures.
            </p>

          </div>

        </div>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-indigo-600
            shadow-xl
            shadow-blue-500/25
          "
        >
          <Plane
            size={40}
            className="text-white"
          />
        </motion.div>

      </div>

    </motion.div>
  );
}

export default ProfileHeader;