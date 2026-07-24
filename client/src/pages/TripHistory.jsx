import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Clock3,
  Plane,
  Loader2,
  MapPin,
  CalendarDays,
  IndianRupee,
  Sparkles,
  Search,
} from "lucide-react";

import api from "../services/api";

export default function TripHistory() {

  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {

    try {

      setLoading(true);

      const { data } = await api.get("/travel/history");

      setTrips(data.data);

    } catch (err) {

      console.error(err);

      setError(
        err.response?.data?.message ||
        "Unable to load travel history."
      );

    } finally {

      setLoading(false);

    }

  };

  const filteredTrips = trips.filter((trip) =>
    trip.destination
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-950">

        <Loader2 className="h-12 w-12 animate-spin text-cyan-400" />

      </div>

    );

  }

  if (error) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-950">

        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">

          <h2 className="mb-2 text-2xl font-bold">
            Error
          </h2>

          <p className="text-red-300">
            {error}
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-indigo-600/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[170px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10"
        >

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">

            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-semibold text-cyan-300">
              AI Travel History
            </span>

          </div>

          <h1 className="text-5xl font-black">

            Your Trips

          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">

            View every AI-generated itinerary you've created,
            revisit previous adventures, and continue planning
            future journeys.

          </p>

        </motion.div>

        {/* Search */}

        <div className="mb-10">

          <div className="relative max-w-lg">

            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 backdrop-blur-xl outline-none focus:border-cyan-400"
            />

          </div>

        </div>

        {/* Trips Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">          {filteredTrips.length === 0 ? (

            <div className="col-span-full">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

                <Plane
                  className="mx-auto mb-6 text-cyan-400"
                  size={60}
                />

                <h2 className="text-3xl font-bold">
                  No Trips Found
                </h2>

                <p className="mt-3 text-slate-400">
                  Generate your first AI trip and it will
                  appear here.
                </p>

              </div>

            </div>

          ) : (

            filteredTrips.map((trip, index) => (

              <motion.div
                key={trip._id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
              >

                {/* Header */}

                <div className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <h2 className="text-3xl font-black">
                        {trip.destination}
                      </h2>

                      <p className="mt-2 text-sm text-white/80">
                        ✨ Personalized by AI
                      </p>

                    </div>

                    <Plane
                      className="text-white"
                      size={34}
                    />

                  </div>

                </div>

                {/* Body */}

                <div className="space-y-5 p-6">

                  <div className="flex items-center gap-3">

                    <CalendarDays
                      className="text-cyan-400"
                      size={20}
                    />

                    <span className="text-slate-300">
                      {trip.days} Days
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <IndianRupee
                      className="text-emerald-400"
                      size={20}
                    />

                    <span className="text-slate-300">
                      ₹{trip.budget.toLocaleString()}
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <MapPin
                      className="text-orange-400"
                      size={20}
                    />

                    <span className="text-slate-300">
                      {trip.travelStyle}
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Clock3
                      className="text-violet-400"
                      size={20}
                    />

                    <span className="text-slate-300">
                      {new Date(
                        trip.createdAt
                      ).toLocaleDateString()}
                    </span>

                  </div>

                  <button
                    onClick={() =>
                      navigate(`/trip/${trip._id}`)
                    }
                    className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                  >
                    View Complete Trip
                  </button>

                </div>

              </motion.div>

            ))

          )}        </div>

        {/* ================= Statistics ================= */}

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
            delay: 0.4,
          }}
          className="mt-14"
        >

          <h2 className="mb-8 text-3xl font-bold">
            Travel Statistics
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Total Trips */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 backdrop-blur-xl"
            >

              <Plane
                className="mb-4 text-cyan-400"
                size={32}
              />

              <p className="text-slate-300">
                Total Trips
              </p>

              <h3 className="mt-2 text-4xl font-black">
                {trips.length}
              </h3>

            </motion.div>

            {/* Total Budget */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur-xl"
            >

              <IndianRupee
                className="mb-4 text-emerald-400"
                size={32}
              />

              <p className="text-slate-300">
                Total Budget
              </p>

              <h3 className="mt-2 text-4xl font-black">
                ₹
                {trips
                  .reduce(
                    (total, trip) =>
                      total + trip.budget,
                    0
                  )
                  .toLocaleString()}
              </h3>

            </motion.div>

            {/* Average Budget */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6 backdrop-blur-xl"
            >

              <Sparkles
                className="mb-4 text-violet-400"
                size={32}
              />

              <p className="text-slate-300">
                Average Budget
              </p>

              <h3 className="mt-2 text-3xl font-black">
                ₹
                {trips.length
                  ? Math.round(
                      trips.reduce(
                        (sum, trip) =>
                          sum + trip.budget,
                        0
                      ) / trips.length
                    ).toLocaleString()
                  : 0}
              </h3>

            </motion.div>

            {/* Latest Trip */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6 backdrop-blur-xl"
            >

              <MapPin
                className="mb-4 text-orange-400"
                size={32}
              />

              <p className="text-slate-300">
                Latest Destination
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {trips.length
                  ? trips[0].destination
                  : "No Trips"}
              </h3>

            </motion.div>

          </div>

        </motion.div>        {/* ================= Floating Decorations ================= */}

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
          <Plane
            className="mb-3 text-cyan-400"
            size={32}
          />

          <h3 className="text-lg font-bold">
            {trips.length}
          </h3>

          <p className="text-sm text-slate-300">
            AI Trips Created
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
          className="pointer-events-none absolute right-10 top-36 hidden rounded-3xl border border-violet-500/20 bg-violet-500/10 p-5 backdrop-blur-xl xl:block"
        >
          <Sparkles
            className="mb-3 text-violet-400"
            size={32}
          />

          <h3 className="text-lg font-bold">
            AI Powered
          </h3>

          <p className="text-sm text-slate-300">
            Smart Planning
          </p>

        </motion.div>

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="pointer-events-none absolute bottom-24 left-10 hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 backdrop-blur-xl 2xl:block"
        >
          <IndianRupee
            className="mb-3 text-emerald-400"
            size={32}
          />

          <h3 className="text-lg font-bold">
            ₹
            {trips
              .reduce(
                (sum, trip) => sum + trip.budget,
                0
              )
              .toLocaleString()}
          </h3>

          <p className="text-sm text-slate-300">
            Total Planned Budget
          </p>

        </motion.div>

      </div>

    </div>
  );
}