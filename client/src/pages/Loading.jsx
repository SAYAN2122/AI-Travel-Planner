import { motion } from "framer-motion";
import { Plane, Sparkles, MapPinned } from "lucide-react";

const messages = [
  "Finding the best destinations...",
  "Checking hotels...",
  "Planning your itinerary...",
  "Searching local food spots...",
  "Preparing your personalized trip...",
];

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-white px-6">
      <div className="max-w-xl text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-orange-100"
        >
          <Plane
            size={60}
            className="text-orange-600"
          />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-10 text-5xl font-bold text-slate-900"
        >
          AI is Planning Your Journey
        </motion.h1>

        <p className="mt-5 text-lg text-slate-600">
          Sit back and relax while our AI creates your
          personalized travel experience.
        </p>

        <div className="mt-14 space-y-5">
          {messages.map((message, index) => (
            <motion.div
              key={message}
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.5,
              }}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md"
            >
              {index % 3 === 0 && (
                <Sparkles className="text-orange-500" />
              )}

              {index % 3 === 1 && (
                <MapPinned className="text-teal-500" />
              )}

              {index % 3 === 2 && (
                <Plane className="text-amber-500" />
              )}

              <span className="text-lg">
                {message}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 h-3 overflow-hidden rounded-full bg-orange-100"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-full w-1/3 rounded-full bg-orange-500"
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Loading;