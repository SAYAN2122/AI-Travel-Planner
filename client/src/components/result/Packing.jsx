import { motion } from "framer-motion";
import {
  Backpack,
  CheckCircle2,
  Luggage,
  ShieldCheck,
} from "lucide-react";

function Packing({ items }) {
  if (!items || items.length === 0) {
    return (
      <section className="py-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

          <h2 className="text-4xl font-black text-slate-900">
            Packing Checklist
          </h2>

          <p className="mt-4 text-slate-500">
            No packing checklist was generated.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center"
      >

        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 font-semibold text-emerald-700">

          <Backpack size={18} />

          Travel Essentials

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Packing Checklist
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Don't forget these important items before starting your
          journey.
        </p>

      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl"
      >

        <div className="h-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500" />

        <div className="grid lg:grid-cols-2">

          {/* Left Side */}

          <div className="border-b border-slate-200 p-10 lg:border-b-0 lg:border-r">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">

              <Luggage size={36} />

            </div>

            <h3 className="mt-8 text-3xl font-black text-slate-900">
              Ready for Your Trip
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Your personalized checklist has been prepared according
              to your destination and travel style. Double-check these
              essentials before leaving.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">
                  Keep important documents handy.
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">
                  Carry required medicines.
                </span>

              </div>

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-green-600"
                />

                <span className="text-slate-700">
                  Keep chargers and power bank packed.
                </span>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="p-10">

            <h3 className="text-2xl font-black text-slate-900">
              Checklist
            </h3>

            <div className="mt-8 space-y-5">

              {items.map((item, index) => (

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
                    delay: index * .05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-emerald-300 hover:bg-white"
                >

                  <CheckCircle2
                    size={22}
                    className="text-green-500"
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Packing;