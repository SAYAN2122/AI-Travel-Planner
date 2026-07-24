import {
  Sparkles,
  TrendingUp,
  DollarSign,
  Plane,
} from "lucide-react";

const iconMap = {
  "Total Trips": <Plane className="w-6 h-6 text-cyan-400" />,
  "Total Budget": <DollarSign className="w-6 h-6 text-green-400" />,
  "Favorite Style": <Sparkles className="w-6 h-6 text-yellow-400" />,
  "Travel Trend": <TrendingUp className="w-6 h-6 text-purple-400" />,
};

export default function AIInsights({ insights = [] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        AI Insights
      </h2>

      {insights.length === 0 ? (
        <div className="flex justify-center items-center h-48 rounded-2xl bg-slate-900/40">
          <p className="text-slate-400">
            No AI insights available.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {insights.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/40 border border-white/10 p-5 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                {iconMap[item.title] || (
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                )}

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}