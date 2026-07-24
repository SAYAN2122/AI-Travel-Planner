import { motion } from "framer-motion";
import {
  Wallet,
  CalendarDays,
  MapPinned,
  Users,
  Sparkles,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";
import BudgetChart from "./BudgetChart";
import TravelStyleChart from "./TravelStyleChart";
import MonthlyTripsChart from "./MonthlyTripsChart";

function AnalyticsDashboard({ trips }) {
  const totalTrips = trips.length;

  const averageBudget =
    totalTrips === 0
      ? 0
      : Math.round(
          trips.reduce(
            (sum, trip) => sum + Number(trip.budget),
            0
          ) / totalTrips
        );

  const averageDays =
    totalTrips === 0
      ? 0
      : (
          trips.reduce(
            (sum, trip) => sum + Number(trip.days),
            0
          ) / totalTrips
        ).toFixed(1);

  const totalTravelers = trips.reduce(
    (sum, trip) => sum + Number(trip.travelers),
    0
  );

  const destinationCount = {};

  trips.forEach((trip) => {
    destinationCount[trip.destination] =
      (destinationCount[trip.destination] || 0) + 1;
  });

  const mostVisited =
    Object.entries(destinationCount).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] || "-";

  return (
    <section className="relative mt-20 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-[140px]" />

      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative"
      >

        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2">

          <Sparkles
            size={18}
            className="text-indigo-600"
          />

          <span className="font-semibold text-indigo-700">

            AI Travel Insights

          </span>

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">

          Travel Analytics Dashboard

        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">

          Explore detailed insights generated from all of your AI travel
          plans. Track spending, travel behaviour, destinations and
          planning trends in one beautiful dashboard.

        </p>

      </motion.div>

      {/* KPI Cards */}

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">

        <AnalyticsCard
          title="Average Budget"
          value={`₹${averageBudget}`}
          icon={<Wallet size={24} />}
          color="from-emerald-500 to-green-600"
        />

        <AnalyticsCard
          title="Average Days"
          value={averageDays}
          icon={<CalendarDays size={24} />}
          color="from-indigo-500 to-violet-600"
        />

        <AnalyticsCard
          title="Most Visited"
          value={mostVisited}
          icon={<MapPinned size={24} />}
          color="from-pink-500 to-rose-500"
        />

        <AnalyticsCard
          title="Total Travelers"
          value={totalTravelers}
          icon={<Users size={24} />}
          color="from-orange-500 to-red-500"
        />

      </div>

      {/* Charts */}

      <div className="mt-14 grid gap-8 lg:grid-cols-2">

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
          className="overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-7 shadow-[0_20px_60px_rgba(99,102,241,.08)] backdrop-blur-xl"
        >

          <BudgetChart trips={trips} />

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-7 shadow-[0_20px_60px_rgba(99,102,241,.08)] backdrop-blur-xl"
        >

          <TravelStyleChart trips={trips} />

        </motion.div>

      </div>

      {/* Monthly Chart */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className="mt-8 overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-7 shadow-[0_20px_60px_rgba(99,102,241,.08)] backdrop-blur-xl"
      >

        <MonthlyTripsChart trips={trips} />

      </motion.div>

    </section>
  );
}

export default AnalyticsDashboard;