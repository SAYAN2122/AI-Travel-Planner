import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Plane,
  Sparkles,
} from "lucide-react";

function PlannerForm() {
  const [formData, setFormData] = useState({
    destination: "",
    days: 5,
    budget: 25000,
    travelers: 2,
    travelStyle: "Comfort",
    foodPreference: "Vegetarian",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Integration Here
  };

  return (
    <section
      id="planner"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            AI Trip Planner
          </span>

          <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Plan Your Dream Trip
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">
            Tell us where you want to go and let AI create a complete travel
            experience within seconds.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-20 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:p-12"
        >

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Destination */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-white">

                <MapPin size={18} />

                Destination

              </label>

              <input
                type="text"
                value={formData.destination}
                onChange={(e) =>
                  handleChange("destination", e.target.value)
                }
                placeholder="e.g. Bali, Paris, Dubai..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
              />

            </div>

            {/* Days */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-white">

                <CalendarDays size={18} />

                Trip Duration

              </label>

              <input
                type="number"
                min="1"
                max="30"
                value={formData.days}
                onChange={(e) =>
                  handleChange("days", e.target.value)
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
              />

            </div>            {/* Budget */}

            <div>

              <label className="mb-3 flex items-center justify-between text-white">

                <span className="flex items-center gap-2">
                  <Wallet size={18} />
                  Budget
                </span>

                <span className="font-bold text-cyan-400">
                  ₹{Number(formData.budget).toLocaleString()}
                </span>

              </label>

              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={formData.budget}
                onChange={(e) =>
                  handleChange("budget", Number(e.target.value))
                }
                className="w-full cursor-pointer accent-cyan-500"
              />

              <div className="mt-2 flex justify-between text-sm text-slate-400">
                <span>₹5K</span>
                <span>₹200K</span>
              </div>

            </div>

            {/* Travelers */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-white">

                <Users size={18} />

                Travelers

              </label>

              <input
                type="number"
                min="1"
                max="20"
                value={formData.travelers}
                onChange={(e) =>
                  handleChange("travelers", Number(e.target.value))
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 text-white outline-none transition focus:border-cyan-400"
              />

            </div>

          </div>

          {/* ==========================
                TRAVEL STYLE
          =========================== */}

          <div className="mt-12">

            <label className="mb-5 flex items-center gap-2 text-white">

              <Plane size={18} />

              Travel Style

            </label>

            <div className="grid gap-5 md:grid-cols-3">

              {["Budget", "Comfort", "Luxury"].map((style) => (

                <motion.button
                  key={style}
                  type="button"
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    handleChange("travelStyle", style)
                  }
                  className={`rounded-3xl border p-6 transition-all ${
                    formData.travelStyle === style
                      ? "border-cyan-400 bg-cyan-500/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >

                  <h3 className="text-xl font-bold text-white">
                    {style}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {style === "Budget" &&
                      "Save more while exploring amazing destinations."}

                    {style === "Comfort" &&
                      "Balanced travel experience with comfort and value."}

                    {style === "Luxury" &&
                      "Premium hotels, fine dining and exclusive experiences."}
                  </p>

                </motion.button>

              ))}

            </div>

          </div>

          {/* ==========================
                FOOD PREFERENCE
          =========================== */}

          <div className="mt-12">

            <label className="mb-5 flex items-center gap-2 text-white">

              <Sparkles size={18} />

              Food Preference

            </label>

            <div className="flex flex-wrap gap-4">

              {[
                "Vegetarian",
                "Non-Vegetarian",
                "Vegan",
              ].map((food) => (

                <motion.button
                  key={food}
                  type="button"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() =>
                    handleChange("foodPreference", food)
                  }
                  className={`rounded-full px-7 py-3 font-semibold transition ${
                    formData.foodPreference === food
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
                      : "border border-white/10 bg-white/[0.03] text-slate-300"
                  }`}
                >
                  {food}
                </motion.button>

              ))}

            </div>

          </div>          {/* ==========================
                GENERATE BUTTON
          =========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
            className="mt-16"
          >

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative w-full overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-8 py-6 text-lg font-bold text-white shadow-[0_25px_60px_rgba(6,182,212,0.35)]"
            >

              {/* Animated Background */}

              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <span className="relative flex items-center justify-center gap-3">

                <Sparkles
                  size={22}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                Generate My AI Trip

              </span>

            </motion.button>

          </motion.div>

          {/* ==========================
                FEATURES
          =========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">

                <Sparkles
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                AI Powered
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Personalized travel plans generated by Groq AI in seconds.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500">

                <Wallet
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Smart Budget
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Get detailed expense estimations before starting your journey.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600">

                <Plane
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                Complete Planning
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Hotels, itinerary, food, attractions and packing list included.
              </p>

            </div>

          </motion.div>

          {/* ==========================
                TRUST SECTION
          =========================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-8 text-center"
          >

            <h3 className="text-2xl font-bold text-white">
              Trusted by Travelers Worldwide 🌍
            </h3>

            <p className="mt-4 max-w-3xl mx-auto text-slate-300 leading-8">
              Our AI analyzes your preferences, travel duration, budget,
              accommodation choices and food habits to generate a personalized
              travel experience within seconds.
            </p>

          </motion.div>        </motion.form>
      </div>
    </section>
  );
}

export default PlannerForm;