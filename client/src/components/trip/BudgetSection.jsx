import {
  IndianRupee,
  Hotel,
  UtensilsCrossed,
  Bus,
  Camera,
  Wallet,
} from "lucide-react";

function BudgetSection({ budget }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <IndianRupee
          className="text-orange-500"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          Budget Breakdown
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <Hotel className="text-orange-500" />
            <span>Accommodation</span>
          </div>

          <strong>
            ₹ {budget.accommodation.toLocaleString()}
          </strong>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="text-orange-500" />
            <span>Food</span>
          </div>

          <strong>
            ₹ {budget.food.toLocaleString()}
          </strong>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <Bus className="text-orange-500" />
            <span>Transport</span>
          </div>

          <strong>
            ₹ {budget.transport.toLocaleString()}
          </strong>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <Camera className="text-orange-500" />
            <span>Sightseeing</span>
          </div>

          <strong>
            ₹ {budget.sightseeing.toLocaleString()}
          </strong>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-orange-50 p-5 md:col-span-2">
          <div className="flex items-center gap-3">
            <Wallet className="text-orange-500" />
            <span>Miscellaneous</span>
          </div>

          <strong>
            ₹ {budget.miscellaneous.toLocaleString()}
          </strong>
        </div>

      </div>
    </div>
  );
}

export default BudgetSection;