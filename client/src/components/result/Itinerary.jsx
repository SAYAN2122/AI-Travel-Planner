import { CalendarDays, MapPin, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

function Itinerary({ itinerary }) {
  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">
          Day-wise Itinerary
        </h2>

        <p className="mt-4 text-slate-500">
          No itinerary was generated.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
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

            <h2 className="text-3xl font-bold text-slate-900">
              Day-wise Itinerary
            </h2>

            <p className="mt-1 text-slate-500">
              Your personalized travel schedule.
            </p>

          </div>

        </div>

      </div>

      {/* Timeline */}

      <div className="relative p-8">

        {/* Vertical Line */}

        <div className="absolute bottom-8 left-11 top-8 w-0.5 bg-slate-200" />

        <div className="space-y-10">

          {itinerary.map((day, index) => (

            <motion.div
              key={day.day}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative flex gap-6"
            >

              {/* Timeline Dot */}

              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

                {day.day}

              </div>

              {/* Card */}

              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {day.title}
                  </h3>

                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    Day {day.day}
                  </span>

                </div>

                <div className="mt-5 flex items-center gap-2 text-slate-500">

                  <Clock3 size={18} />

                  <span className="text-sm">
                    Full Day Activity
                  </span>

                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  {day.description}
                </p>

                {/* Optional Location */}

                {day.location && (

                  <div className="mt-6 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-slate-600">

                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />

                    {day.location}

                  </div>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}

export default Itinerary;