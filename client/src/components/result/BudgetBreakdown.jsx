import { motion } from "framer-motion";
import {
  Wallet,
  Hotel,
  UtensilsCrossed,
  Car,
  ShoppingBag,
  IndianRupee,
  PieChart,
  CheckCircle2,
} from "lucide-react";

function BudgetBreakdown({ budget }) {
  if (!budget) {
    return (
      <section className="py-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

          <h2 className="text-4xl font-black text-slate-900">
            Budget Breakdown
          </h2>

          <p className="mt-4 text-slate-500">
            No budget information available.
          </p>

        </div>
      </section>
    );
  }

  const categories = [
    {
      title: "Accommodation",
      value: budget.accommodation,
      icon: <Hotel size={22} />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Food",
      value: budget.food,
      icon: <UtensilsCrossed size={22} />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Transportation",
      value: budget.transportation,
      icon: <Car size={22} />,
      color: "from-cyan-500 to-sky-500",
    },
    {
      title: "Activities",
      value: budget.activities,
      icon: <ShoppingBag size={22} />,
      color: "from-emerald-500 to-green-500",
    },
  ];

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

        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

          <Wallet size={18} />

          Smart Spending

        </div>

        <h2 className="mt-6 text-5xl font-black text-slate-900">
          Budget Breakdown
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          AI estimated how your travel budget may be distributed across
          different categories.
        </p>

      </motion.div>

      {/* Total Budget Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl"
      >

        <div className="h-2 bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500" />

        <div className="p-10">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">

              <IndianRupee size={38} />

            </div>

            <p className="mt-6 text-lg text-slate-500">
              Estimated Total Budget
            </p>

            <h1 className="mt-3 text-6xl font-black text-indigo-700">
              ₹ {budget.total}
            </h1>

          </div>

        </div>

      </motion.div>

      {/* Budget Categories */}

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {categories.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
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
              y: -6,
            }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
          >

            <div className={`h-2 bg-gradient-to-r ${item.color}`} />

            <div className="p-8">

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} text-white`}
                >

                  {item.icon}

                </div>

                <PieChart
                  size={32}
                  className="text-slate-300"
                />

              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-500">
                Estimated Expense
              </p>

              <h2 className="mt-4 text-4xl font-black text-indigo-700">
                ₹ {item.value}
              </h2>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Budget Tips */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mt-16 rounded-[34px] border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 p-10"
      >

        <h3 className="text-3xl font-black text-slate-900">
          Money Saving Tips
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="flex gap-4">

            <CheckCircle2
              size={22}
              className="mt-1 text-green-600"
            />

            <p className="leading-7 text-slate-700">
              Book hotels in advance to get better discounts.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2
              size={22}
              className="mt-1 text-green-600"
            />

            <p className="leading-7 text-slate-700">
              Prefer local transport whenever possible.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2
              size={22}
              className="mt-1 text-green-600"
            />

            <p className="leading-7 text-slate-700">
              Try authentic local restaurants instead of tourist spots.
            </p>

          </div>

          <div className="flex gap-4">

            <CheckCircle2
              size={22}
              className="mt-1 text-green-600"
            />

            <p className="leading-7 text-slate-700">
              Keep an emergency fund of 10–15% of your budget.
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default BudgetBreakdown;