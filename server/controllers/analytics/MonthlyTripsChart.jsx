import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

import {
  CalendarDays,
  TrendingUp,
  Sparkles,
  Activity,
} from "lucide-react";

function MonthlyTripsChart({ trips }) {
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData = {};

  monthOrder.forEach((month) => {
    monthlyData[month] = 0;
  });

  trips.forEach((trip) => {
    if (!trip.createdAt) return;

    const month = new Date(trip.createdAt).toLocaleString(
      "default",
      {
        month: "short",
      }
    );

    monthlyData[month]++;
  });

  const data = monthOrder.map((month) => ({
    month,
    trips: monthlyData[month],
  }));

  const totalTrips = data.reduce(
    (sum, item) => sum + item.trips,
    0
  );

  const busiestMonth =
    [...data].sort((a, b) => b.trips - a.trips)[0];

  const averageTrips =
    totalTrips === 0
      ? 0
      : (totalTrips / 12).toFixed(1);

  return (
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
      className="relative overflow-hidden"
    >
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2">

            <Sparkles
              size={16}
              className="text-cyan-600"
            />

            <span className="font-semibold text-cyan-700">

              AI Activity Tracker

            </span>

          </div>

          <h2 className="mt-5 text-3xl font-black text-slate-900">

            Monthly Trip Activity

          </h2>

          <p className="mt-2 text-slate-500">

            Visualize how your AI-generated travel plans evolve throughout the year.

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 p-5 text-white shadow-xl">

          <div className="flex items-center gap-3">

            <CalendarDays size={28} />

            <div>

              <p className="text-sm text-cyan-100">

                Total Trips

              </p>

              <h3 className="text-3xl font-black">

                {totalTrips}

              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-3xl bg-slate-50 p-6">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-indigo-600"
            />

            <p className="text-sm text-slate-500">

              Busiest Month

            </p>

          </div>

          <h3 className="mt-3 text-3xl font-black text-indigo-600">

            {busiestMonth?.month || "-"}

          </h3>

          <p className="mt-2 text-slate-500">

            {busiestMonth?.trips || 0} trips created

          </p>

        </div>

        <div className="rounded-3xl bg-slate-50 p-6">

          <div className="flex items-center gap-2">

            <Activity
              size={18}
              className="text-emerald-600"
            />

            <p className="text-sm text-slate-500">

              Average / Month

            </p>

          </div>

          <h3 className="mt-3 text-3xl font-black text-emerald-600">

            {averageTrips}

          </h3>

          <p className="mt-2 text-slate-500">

            trips planned

          </p>

        </div>

      </div>

      {/* Area Chart */}

      <div className="mt-10 h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >

            <defs>

              <linearGradient
                id="tripGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#475569",
                fontSize: 13,
              }}
            />

            <YAxis
              allowDecimals={false}
              tick={{
                fill: "#475569",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,.12)",
              }}
            />

            <Area
              type="monotone"
              dataKey="trips"
              stroke="#2563EB"
              strokeWidth={4}
              fill="url(#tripGradient)"
            />

            <Line
              type="monotone"
              dataKey="trips"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{
                r: 6,
                fill: "#2563EB",
              }}
              activeDot={{
                r: 9,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* AI Insight */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 p-7 text-white">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-white/10 p-4">

            <Sparkles
              size={26}
              className="text-yellow-300"
            />

          </div>

          <div>

            <h3 className="text-2xl font-black">

              AI Activity Insight

            </h3>

            <p className="mt-3 leading-8 text-slate-300">

              Your planning activity peaks during{" "}
              <span className="font-semibold text-white">

                {busiestMonth?.month || "selected months"}

              </span>
              . Maintaining a more consistent planning schedule throughout the year can help you discover better flight prices, hotel availability, and travel experiences.

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default MonthlyTripsChart;