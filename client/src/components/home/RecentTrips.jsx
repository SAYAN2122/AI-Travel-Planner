import { motion } from "framer-motion";
import {
  Sparkles,
  Clock3,
  MapPinned,
  ArrowRight,
  Plane,
  Compass,
} from "lucide-react";

function RecentTrips() {
  // Replace these with your API data later
  const trips = [];
  const loading = false;

  // Loading State
  if (loading) {
    return (
      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Loading Your Trips...
            </h2>

            <p className="mt-4 text-slate-500">
              Fetching your travel history...
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg"
              >
                <div className="h-56 bg-slate-200" />

                <div className="space-y-4 p-6">

                  <div className="h-6 w-2/3 rounded bg-slate-200" />

                  <div className="h-4 w-1/2 rounded bg-slate-200" />

                  <div className="h-4 w-3/4 rounded bg-slate-200" />

                  <div className="mt-6 h-12 rounded-2xl bg-slate-200" />

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2">
            <Sparkles size={16} className="text-indigo-600" />

            <span className="text-sm font-semibold text-indigo-700">
              AI Generated Memories
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Your Recent Trips
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Every itinerary you generate is saved here, allowing you to revisit,
            edit and plan your adventures anytime.
          </p>

        </motion.div>

        {/* ================= Content ================= */}

        {trips.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white/80 p-12 shadow-2xl backdrop-blur-xl">

              {/* Decorative Blobs */}

              <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex flex-col items-center text-center">

                {/* Floating Plane */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-xl"
                >
                  <Plane className="h-12 w-12 text-white" />
                </motion.div>

                <h3 className="mt-10 text-3xl font-black text-slate-900">
                  Your Journey Starts Here
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  You haven't planned any trips yet. Let our AI create a
                  personalized itinerary, recommend hotels, discover local food,
                  estimate your travel budget and prepare a complete packing
                  checklist.
                </p>

                {/* Feature Pills */}

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                  <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-3 text-indigo-700">
                    <Compass size={18} />
                    AI Itinerary
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-cyan-50 px-5 py-3 text-cyan-700">
                    <MapPinned size={18} />
                    Hotel Suggestions
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-3 text-emerald-700">
                    <Clock3 size={18} />
                    Budget Planner
                  </div>

                </div>

                <a
                  href="#planner"
                  className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  Plan Your First Trip

                  <ArrowRight size={20} />
                </a>

              </div>

            </div>
          </motion.div>        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {trips.map((trip, index) => (
              <motion.div
                key={trip._id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Cover Image */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={
                      trip.image ||
                      `https://picsum.photos/600/400?random=${index + 1}`
                    }
                    alt={trip.destination}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5">

                    <h3 className="text-2xl font-black text-white">
                      {trip.destination}
                    </h3>

                    <p className="mt-1 text-sm text-slate-200">
                      {trip.days} Days Adventure
                    </p>

                  </div>

                </div>

                {/* Card Content */}

                <div className="space-y-6 p-6">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2 text-slate-600">

                      <Clock3 size={18} />

                      <span>{trip.days} Days</span>

                    </div>

                    <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                      ₹ {trip.budget}
                    </span>

                  </div>

                  <div className="flex items-center gap-2 text-slate-600">

                    <MapPinned
                      size={18}
                      className="text-cyan-500"
                    />

                    <span>
                      {trip.travelStyle || "Comfort"}
                    </span>

                  </div>

                  <div className="line-clamp-2 text-sm leading-6 text-slate-500">
                    {trip.description ||
                      "Discover amazing attractions, local food, premium hotels and unforgettable experiences with this AI-generated itinerary."}
                  </div>

                  <button
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    View Trip

                    <ArrowRight size={18} />
                  </button>

                </div>

              </motion.div>
            ))}
          </motion.div>
        )}      </div>
    </section>
  );
}

export default RecentTrips;