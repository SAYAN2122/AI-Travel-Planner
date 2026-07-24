import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function BudgetChart({ data = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Monthly Travel Budget
      </h2>

      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-900/40">
          <p className="text-slate-400">
            No budget data available
          </p>
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
              />

              <XAxis
                dataKey="month"
                stroke="#CBD5E1"
              />

              <YAxis stroke="#CBD5E1" />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                }}
              />

              <Bar
                dataKey="budget"
                radius={[8, 8, 0, 0]}
                fill="#06b6d4"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}