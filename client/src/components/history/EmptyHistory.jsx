import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function EmptyHistory() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
        rounded-[36px]
        border
        border-slate-200
        bg-white/80
        px-8
        py-20
        shadow-2xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative flex flex-col items-center text-center">

        {/* Animated Icon */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            flex
            h-28
            w-28
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
          <Plane
            size={46}
            className="text-white"
          />
        </motion.div>

        {/* Badge */}

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2">

          <Sparkles
            size={16}
            className="text-blue-600"
          />

          <span className="font-semibold text-blue-700">
            AI Travel Planner
          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-5xl">
          Your Journey
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}Starts Here
          </span>
        </h2>

        {/* Description */}

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          You haven't created any trips yet.
          Let Sunset Voyager generate a complete
          AI-powered itinerary based on your budget,
          travel style and preferences.
        </p>

        {/* Features */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <div className="rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-700">
            ✈️ Smart Itineraries
          </div>

          <div className="rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-700">
            🏨 Hotel Suggestions
          </div>

          <div className="rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-700">
            🍽️ Food Recommendations
          </div>

          <div className="rounded-full bg-slate-100 px-5 py-3 font-semibold text-slate-700">
            💰 Budget Planning
          </div>

        </div>

        {/* CTA */}

        <Link
          to="/planner"
          className="
            group
            mt-12
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            px-10
            py-5
            text-lg
            font-bold
            text-white
            shadow-xl
            shadow-blue-500/25
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Plan Your First Trip

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Bottom Text */}

        <p className="mt-8 text-sm text-slate-500">
          Your AI-generated trips will appear here once created.
        </p>

      </div>
    </motion.div>
  );
}

export default EmptyHistory;