import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Star,
  ChefHat,
  Sparkles,
} from "lucide-react";

function Food({ foods }) {
  if (!foods || foods.length === 0) {
    return (
      <section className="py-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

          <h2 className="text-4xl font-black text-slate-900">
            Food Recommendations
          </h2>

          <p className="mt-4 text-slate-500">
            No food recommendations were generated.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
        className="text-center"
      >

        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-700">

          <ChefHat size={18} />

          Taste the Destination

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Food Recommendations
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Explore authentic local cuisines and must-try dishes
          recommended by AI for your destination.
        </p>

      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {foods.map((food, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * .1,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
            }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all"
          >

            <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" />

            <div className="p-8">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 text-white">

                <UtensilsCrossed size={30} />

              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                {food}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Experience one of the most popular local delicacies
                loved by travelers and residents alike.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Star
                    size={18}
                    fill="currentColor"
                    className="text-yellow-500"
                  />

                  <span className="font-semibold text-slate-700">
                    Recommended
                  </span>

                </div>

                <Sparkles
                  size={20}
                  className="text-orange-500"
                />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Food;