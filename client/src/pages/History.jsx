import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { History as HistoryIcon } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import HistoryGrid from "../components/history/HistoryGrid";
import EmptyHistory from "../components/history/EmptyHistory";

import { getHistory } from "../services/travelService";

function History() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistory();
        setTrips(response.data);
      } catch (error) {
        console.error("History Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-slate-200 bg-white px-12 py-10 shadow-2xl"
          >
            <div className="flex flex-col items-center">

              <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                Loading Your Trips
              </h2>

              <p className="mt-2 text-slate-500">
                Fetching your travel history...
              </p>

            </div>
          </motion.div>

        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

        {/* Background Glow */}

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur-xl"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-5 py-2">

                  <HistoryIcon
                    size={16}
                    className="text-blue-600"
                  />

                  <span className="text-sm font-semibold text-blue-700">
                    Travel History
                  </span>

                </div>

                <h1 className="mt-6 text-5xl font-black text-slate-900">
                  Your
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}Trips
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-8">
                  Browse every AI-generated itinerary you've created.
                  Revisit destinations, edit plans and continue exploring
                  the world with Sunset Voyager.
                </p>

              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/30">

                <HistoryIcon
                  size={40}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>

          {/* Trips */}

          <div className="mt-14">

            {trips.length === 0 ? (
              <EmptyHistory />
            ) : (
              <HistoryGrid trips={trips} />
            )}

          </div>

        </div>

      </main>
    </>
  );
}

export default History;