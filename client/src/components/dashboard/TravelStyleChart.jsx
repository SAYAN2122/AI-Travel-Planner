import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

export default function TravelStyleChart({ data = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Travel Style Distribution
      </h2>

      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-900/40">
          <p className="text-slate-400">
            No travel style data available
          </p>
        </div>
      ) : (
        <>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
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
                    background: "#0f172a",
                    border: "1px solid #334155",
                    borderRadius: "12px",
                  }}
                />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
            <p className="text-sm text-slate-300">
              Your travel styles are calculated from your
              previous AI-generated trips.
            </p>
          </div>
        </>
      )}
    </div>
  );
}