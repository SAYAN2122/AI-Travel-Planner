import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Plane,
  MapPin,
  Calendar,
  IndianRupee,
  Users,
  Sparkles,
  Loader2,
} from "lucide-react";

import api from "../services/api";

export default function TripPlanner() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    destination: "",
    days: 3,
    budget: 10000,
    travelStyle: "Comfort",
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "days" ||
        name === "budget" ||
        name === "travelers"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const { data } = await api.post(
        "/travel/generate",
        formData
      );

      navigate("/result", {
  state: data.trip,
});

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Unable to generate trip."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-indigo-600/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12">        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-semibold text-cyan-300">
              AI Powered Travel Planner
            </span>
          </div>

          <h1 className="text-5xl font-black">
            Plan Your Dream Trip ✈️
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Enter your destination and preferences.
            Our AI will generate a complete itinerary,
            hotel recommendations, budget breakdown,
            packing checklist and more.
          </p>
        </motion.div>

        {/* ================= Form Card ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-4xl rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
        >

          {error && (
            <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2"
          >

            {/* Destination */}

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Destination
              </label>

              <div className="relative">

                <MapPin
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
                  size={20}
                />

                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Goa, Paris, Manali"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                />

              </div>

            </div>

            {/* Days */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Number of Days
              </label>

              <div className="relative">

                <Calendar
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-400"
                  size={20}
                />

                <input
                  type="number"
                  min="1"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                />

              </div>

            </div>

            {/* Budget */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Budget (₹)
              </label>

              <div className="relative">

                <IndianRupee
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-400"
                  size={20}
                />

                <input
                  type="number"
                  min="1000"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                />

              </div>

            </div>

            {/* Travel Style */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Travel Style
              </label>

              <select
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 py-4 px-5 text-white outline-none transition focus:border-cyan-400"
              >
                <option>Budget</option>
                <option>Comfort</option>
                <option>Luxury</option>
              </select>

            </div>

            {/* Travelers */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Travelers
              </label>

              <div className="relative">

                <Users
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-400"
                  size={20}
                />

                <input
                  type="number"
                  min="1"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none backdrop-blur transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                />

              </div>

            </div>            {/* ================= Generate Button ================= */}

            <div className="mt-4 md:col-span-2">

              <motion.button
                whileHover={{
                  scale: loading ? 1 : 1.02,
                }}
                whileTap={{
                  scale: loading ? 1 : 0.98,
                }}
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 py-4 text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    Generating Your AI Trip...
                  </>
                ) : (
                  <>
                    <Plane className="h-6 w-6" />
                    Generate AI Trip
                  </>
                )}
              </motion.button>

            </div>

          </form>

          {/* ================= AI Loading Steps ================= */}

          {loading && (

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8"
            >

              <div className="mb-6 flex items-center gap-3">

                <Loader2 className="h-7 w-7 animate-spin text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  AI is Planning Your Journey...
                </h3>

              </div>

              <div className="space-y-4">

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  📍 Finding the best destinations...
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  🏨 Searching recommended hotels...
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.6,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  🍜 Finding local food recommendations...
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.9,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  🧳 Preparing your packing checklist...
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 1.2,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                >
                  ✨ Finalizing your AI itinerary...
                </motion.div>

              </div>

            </motion.div>

          )}

        </motion.div>      {/* ================= Floating Decorations ================= */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-10 top-24 hidden rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 backdrop-blur-xl xl:block"
      >
        <Plane className="mb-3 h-8 w-8 text-cyan-400" />

        <h3 className="text-lg font-bold">
          AI Planner
        </h3>

        <p className="text-sm text-slate-300">
          Personalized Itineraries
        </p>

      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute bottom-16 right-10 hidden rounded-3xl border border-violet-500/20 bg-violet-500/10 p-5 backdrop-blur-xl xl:block"
      >
        <Sparkles className="mb-3 h-8 w-8 text-violet-400" />

        <h3 className="text-lg font-bold">
          Groq AI
        </h3>

        <p className="text-sm text-slate-300">
          Fast Trip Generation
        </p>

      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute bottom-36 left-12 hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-xl 2xl:block"
      >
        <IndianRupee className="mb-3 h-8 w-8 text-emerald-400" />

        <h3 className="text-lg font-bold">
          Smart Budget
        </h3>

        <p className="text-sm text-slate-300">
          Optimized Cost Planning
        </p>

      </motion.div>

    </div>
</div>
  );
}