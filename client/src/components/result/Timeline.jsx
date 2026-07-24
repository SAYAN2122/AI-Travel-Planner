import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";

function Timeline({ itinerary }) {

  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Travel Timeline
        </h2>

        <p className="mt-3 text-slate-500">
          No itinerary was generated.
        </p>

      </div>
    );
  }

  return (
    <section className="relative py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
            AI Generated Plan
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Your Journey Timeline
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Follow your personalized itinerary day by day,
            carefully planned by AI for the best travel experience.
          </p>

        </motion.div>

        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-emerald-500 lg:block" />

          <div className="space-y-12">

            {itinerary.map((day, index) => (

              <motion.div
                key={day.day || index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
              >

                <TimelineCard day={day} />

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;