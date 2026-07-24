import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const quickDays = [3, 5, 7, 10];

function DaysSelector({ days, setDays }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header */}

      <div className="border-b border-slate-200 bg-slate-50 px-8 py-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
            <CalendarDays
              size={24}
              className="text-blue-600"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Trip Duration
            </h2>

            <p className="mt-1 text-slate-500">
              How many days are you planning to travel?
            </p>
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">

        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-6">

          <button
            type="button"
            onClick={() =>
              setDays(Math.max(1, days - 1))
            }
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-xl transition hover:bg-slate-100"
          >
            −
          </button>

          <div className="text-center">

            <h3 className="text-4xl font-bold text-slate-900">
              {days}
            </h3>

            <p className="mt-1 text-slate-500">
              {days === 1 ? "Day" : "Days"}
            </p>

          </div>

          <button
            type="button"
            onClick={() => setDays(days + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white transition hover:bg-blue-700"
          >
            +
          </button>

        </div>

        <div className="mt-8">

          <p className="mb-4 text-sm font-medium text-slate-500">
            Popular Durations
          </p>

          <div className="flex flex-wrap gap-3">

            {quickDays.map((value) => (

              <button
                key={value}
                type="button"
                onClick={() => setDays(value)}
                className={`rounded-full border px-5 py-2 transition ${
                  days === value
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {value} Days
              </button>

            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default DaysSelector;