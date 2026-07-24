import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TripsChart({ data = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Monthly Trips
      </h2>

      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-900/40">
          <p className="text-slate-400">
            No trip data available
          </p>
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                stroke="#334155"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
                stroke="#CBD5E1"
              />

              <YAxis
                stroke="#CBD5E1"
                allowDecimals={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="trips"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{
                  r: 5,
                  fill: "#06b6d4",
                }}
                activeDot={{
                  r: 7,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}