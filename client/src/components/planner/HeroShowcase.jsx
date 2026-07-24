import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Sparkles,
  CalendarDays,
  Wallet,
  Hotel,
} from "lucide-react";

import heroImage from "../../assets/images/hero.jpeg";

function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative flex justify-center items-center"
    >
      {/* Glow */}

      <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* Main Container */}

      <div className="relative w-full max-w-xl">

        {/* ===========================
              AI STATUS CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-8 left-8 z-40 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-3xl shadow-2xl p-5"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600">

              <Sparkles
                className="text-white"
                size={24}
              />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-slate-300">
                AI Engine
              </p>

              <h3 className="mt-1 text-lg font-bold text-white">
                Planning Journey...
              </h3>

            </div>

          </div>
        </motion.div>

        {/* ===========================
              MAIN DESTINATION CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
        >

          {/* Image */}

          <div className="relative">

            <img
              src={heroImage}
              alt="Destination"
              className="h-[580px] w-full object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Location */}

            <div className="absolute bottom-8 left-8 right-8">

              <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-3xl p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-4xl font-black text-white">
                      Bali
                    </h2>

                    <div className="mt-3 flex items-center gap-2">

                      <MapPin
                        size={18}
                        className="text-cyan-400"
                      />

                      <span className="text-slate-200">
                        Indonesia
                      </span>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-yellow-400 px-4 py-2">

                    <div className="flex items-center gap-2">

                      <Star
                        fill="white"
                        size={18}
                        className="text-white"
                      />

                      <span className="font-bold text-slate-900">
                        4.9
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>        {/* ===========================
              FLOATING HOTEL CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, 14, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-14 bottom-24 hidden w-72 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.35)] lg:block"
        >
          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400">

              <Hotel
                size={28}
                className="text-white"
              />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-slate-300">
                Recommended Hotel
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                Ocean Paradise
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                ₹4,200 / Night
              </p>

            </div>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "92%",
              }}
              transition={{
                duration: 2,
              }}
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
            />

          </div>

          <p className="mt-3 text-xs text-emerald-300">
            AI Confidence 92%
          </p>

        </motion.div>

        {/* ===========================
              BUDGET CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, -16, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-12 top-20 hidden w-64 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.35)] lg:block"
        >

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-3">

              <Wallet
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-slate-300">
                Estimated Budget
              </p>

              <h2 className="mt-1 text-3xl font-black text-white">
                ₹28,500
              </h2>

            </div>

          </div>

          <div className="mt-6">

            <div className="flex justify-between text-sm text-slate-300">

              <span>Budget Used</span>

              <span>82%</span>

            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "82%",
                }}
                transition={{
                  duration: 2,
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
              />

            </div>

          </div>

        </motion.div>

        {/* ===========================
              ITINERARY CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-8 -bottom-10 hidden w-80 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.35)] xl:block"
        >

          <div className="flex items-center gap-3">

            <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 p-3">

              <CalendarDays
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <h3 className="font-bold text-white">
                Today's Plan
              </h3>

              <p className="text-sm text-slate-300">
                Day 2 of 5
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-4">

            {[
              "Visit Ubud Palace",
              "Rice Terraces",
              "Coffee Plantation",
              "Sunset at Tanah Lot",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="flex items-center gap-3"
              >

                <div className="h-3 w-3 rounded-full bg-cyan-400" />

                <span className="text-sm text-slate-200">
                  {item}
                </span>

              </motion.div>
            ))}

          </div>

        </motion.div>        {/* ===========================
              AI TRIP INSIGHTS CARD
        ============================ */}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 top-52 hidden w-64 rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-5 backdrop-blur-3xl shadow-[0_30px_60px_rgba(6,182,212,0.2)] xl:block"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600">

              <Sparkles
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-slate-400">
                AI Suggestion
              </p>

              <h4 className="font-bold text-white">
                Save ₹4,800
              </h4>

            </div>

          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Book your hotel one day earlier to get the
            lowest available price and better rooms.
          </p>

        </motion.div>

        {/* ===========================
              QUICK STATS
        ============================ */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="absolute -bottom-16 left-0 hidden xl:flex gap-5"
        >

          <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-3xl">

            <h2 className="text-3xl font-black text-white">
              4.9
            </h2>

            <p className="mt-1 text-sm text-slate-300">
              Average Rating
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-3xl">

            <h2 className="text-3xl font-black text-white">
              18
            </h2>

            <p className="mt-1 text-sm text-slate-300">
              Attractions
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-3xl">

            <h2 className="text-3xl font-black text-white">
              5 Days
            </h2>

            <p className="mt-1 text-sm text-slate-300">
              Trip Duration
            </p>

          </div>

        </motion.div>

        {/* ===========================
              GLOW RINGS
        ============================ */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
        />

        <motion.div
          animate={{
            scale: [1.08, 1, 1.08],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10"
        />

      </div>

    </motion.div>
  );
}

export default HeroShowcase;