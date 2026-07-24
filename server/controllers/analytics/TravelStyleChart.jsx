import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import {
  Sparkles,
  Compass,
  Award,
} from "lucide-react";

const COLORS = [
  "#6366F1",
  "#8B5CF6",
  "#06B6D4",
  "#10B981",
  "#F97316",
  "#EC4899",
];

function TravelStyleChart({ trips }) {
  const travelStyleCount = {};

  trips.forEach((trip) => {
    const style = trip.travelStyle || "Unknown";

    travelStyleCount[style] =
      (travelStyleCount[style] || 0) + 1;
  });

  const data = Object.entries(travelStyleCount).map(
    ([style, count]) => ({
      name: style,
      value: count,
    })
  );

  const favoriteStyle =
    data.length > 0
      ? [...data].sort((a, b) => b.value - a.value)[0]
      : null;

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

          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2">

            <Sparkles
              size={16}
              className="text-violet-600"
            />

            <span className="font-semibold text-violet-700">

              AI Travel Behaviour

            </span>

          </div>

          <h2 className="mt-5 text-3xl font-black text-slate-900">

            Travel Style Distribution

          </h2>

          <p className="mt-2 text-slate-500">

            Discover which travel style you choose the most.

          </p>

        </div>

        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white shadow-xl">

          <div className="flex items-center gap-3">

            <Compass size={28} />

            <div>

              <p className="text-sm text-violet-100">

                Favourite Style

              </p>

              <h3 className="text-2xl font-black">

                {favoriteStyle?.name || "-"}

              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-10 h-[380px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={130}
              paddingAngle={4}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "none",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,.12)",
              }}
            />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-3xl bg-slate-50 p-6">

          <p className="text-sm text-slate-500">

            Total Styles

          </p>

          <h3 className="mt-2 text-3xl font-black text-violet-600">

            {data.length}

          </h3>

        </div>

        <div className="rounded-3xl bg-slate-50 p-6">

          <div className="flex items-center gap-2">

            <Award
              size={18}
              className="text-emerald-600"
            />

            <p className="text-sm text-slate-500">

              Most Preferred

            </p>

          </div>

          <h3 className="mt-2 text-3xl font-black text-emerald-600">

            {favoriteStyle?.value || 0}

          </h3>

        </div>

      </div>

      {/* AI Insight */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 p-7 text-white">

        <div className="flex items-start gap-4">

          <div className="rounded-2xl bg-white/10 p-4">

            <Sparkles
              size={26}
              className="text-yellow-300"
            />

          </div>

          <div>

            <h3 className="text-2xl font-black">

              AI Travel Insight

            </h3>

            <p className="mt-3 leading-8 text-slate-300">

              Your travel history shows a strong preference for{" "}
              <span className="font-semibold text-white">
                {favoriteStyle?.name || "one travel style"}
              </span>
              . Exploring a different style occasionally can give you a more balanced and diverse travel experience.

            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default TravelStyleChart;