import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Camera,
  UtensilsCrossed,
  Trees,
  Sunrise,
  Sunset,
  Star,
  CheckCircle2,
} from "lucide-react";

function TimelineCard({ day }) {
  const activities = day.activities || [];

  const getActivityIcon = (activity) => {
    const text = activity.toLowerCase();

    if (
      text.includes("breakfast") ||
      text.includes("lunch") ||
      text.includes("dinner") ||
      text.includes("food") ||
      text.includes("restaurant")
    ) {
      return <UtensilsCrossed size={18} />;
    }

    if (
      text.includes("park") ||
      text.includes("garden") ||
      text.includes("nature") ||
      text.includes("forest") ||
      text.includes("trek")
    ) {
      return <Trees size={18} />;
    }

    if (
      text.includes("sunrise") ||
      text.includes("morning")
    ) {
      return <Sunrise size={18} />;
    }

    if (
      text.includes("sunset") ||
      text.includes("evening") ||
      text.includes("night")
    ) {
      return <Sunset size={18} />;
    }

    if (
      text.includes("photo") ||
      text.includes("museum") ||
      text.includes("fort") ||
      text.includes("palace") ||
      text.includes("temple")
    ) {
      return <Camera size={18} />;
    }

    return <MapPin size={18} />;
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl"
    >
      {/* Top Gradient */}

      <div className="h-2 bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500" />

      <div className="p-8 lg:p-10">

        {/* Header */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg">

              <CalendarDays size={30} />

            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Day {day.day}
              </p>

              <h2 className="mt-1 text-3xl font-black text-slate-900">
                {day.title}
              </h2>

            </div>

          </div>

          <div className="flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-2 text-indigo-700">

              <Clock size={16} />

              Full Day

            </div>

            <div className="flex items-center gap-2 rounded-full bg-amber-50 px-5 py-2 text-amber-700">

              <Star
                size={16}
                fill="currentColor"
              />

              AI Planned

            </div>

          </div>

        </div>

        {/* Description */}

        {day.description && (
          <div className="mt-8 rounded-2xl bg-slate-50 p-6">

            <p className="leading-8 text-slate-600">
              {day.description}
            </p>

          </div>
        )}

        {/* Activities */}

        <div className="mt-10">

          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Activities
          </h3>

          <div className="space-y-5">

            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-indigo-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">

                    {getActivityIcon(activity)}

                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">
                      <p className="font-medium leading-7 text-slate-700">
                        {activity}
                      </p>

                      <CheckCircle2
                        size={20}
                        className="text-emerald-500"
                      />
                    </div>                    <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">

                      <Clock size={14} />

                      <span>
                        Flexible Timing
                      </span>

                    </div>

                  </div>

                </motion.div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

                <MapPin
                  size={40}
                  className="mx-auto text-slate-400"
                />

                <p className="mt-4 text-slate-500">
                  No activities available for this day.
                </p>

              </div>
            )}

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Highlights */}

          <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-cyan-50 p-6">

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Day Highlights
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-slate-700">
                  Carefully optimized by AI
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-slate-700">
                  Balanced sightseeing schedule
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                <span className="text-slate-700">
                  Enough time for relaxation
                </span>

              </div>

            </div>

          </div>

          {/* Travel Tips */}

          <div className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50 p-6">

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Travel Tips
            </h3>

            <ul className="space-y-4 text-slate-700">

              <li className="flex gap-3">

                <Star
                  size={18}
                  className="mt-1 text-amber-500"
                  fill="currentColor"
                />

                Carry a water bottle and stay hydrated throughout the day.

              </li>

              <li className="flex gap-3">

                <Star
                  size={18}
                  className="mt-1 text-amber-500"
                  fill="currentColor"
                />

                Keep your phone fully charged before leaving the hotel.

              </li>

              <li className="flex gap-3">

                <Star
                  size={18}
                  className="mt-1 text-amber-500"
                  fill="currentColor"
                />

                Wear comfortable shoes for long walks and sightseeing.

              </li>

            </ul>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default TimelineCard;