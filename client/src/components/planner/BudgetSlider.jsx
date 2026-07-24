import { IndianRupee } from "lucide-react";

function BudgetSlider({
  value,
  setValue,
}) {
  return (
    <div className="space-y-8">

      {/* Budget Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Estimated Budget
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Adjust your total trip budget.
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-3">

          <IndianRupee
            size={18}
            className="text-blue-600"
          />

          <span className="text-lg font-bold text-blue-700">
            ₹ {value.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Slider */}

      <div>

        <input
          type="range"
          min="10000"
          max="300000"
          step="5000"
          value={value}
          onChange={(e) =>
            setValue(Number(e.target.value))
          }
          className="
            h-2
            w-full
            cursor-pointer
            appearance-none
            rounded-full
            bg-slate-200
            accent-blue-600
          "
        />

        {/* Labels */}

        <div className="mt-4 flex justify-between text-sm text-slate-500">

          <span>
            ₹10,000
          </span>

          <span>
            ₹1,00,000
          </span>

          <span>
            ₹2,00,000
          </span>

          <span>
            ₹3,00,000
          </span>

        </div>

      </div>

      {/* Budget Indicator */}

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <span className="text-sm font-medium text-slate-600">
            Selected Budget
          </span>

          <span className="text-lg font-bold text-slate-900">
            ₹ {value.toLocaleString()}
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{
              width: `${
                ((value - 10000) /
                  (300000 - 10000)) *
                100
              }%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default BudgetSlider;