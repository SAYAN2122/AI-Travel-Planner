import { Navigate, useLocation } from "react-router-dom";

import DestinationBanner from "../components/result/DestinationBanner";
import Timeline from "../components/result/Timeline";
import Hotels from "../components/result/Hotels";
import Food from "../components/result/Food";
import Packing from "../components/result/Packing";
import BudgetBreakdown from "../components/result/BudgetBreakdown";

function Result() {
  const { state } = useLocation();

  if (!state) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      <DestinationBanner trip={state} />

      <main className="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-10">

        <Timeline
          itinerary={state.itinerary || []}
        />

        <Hotels
          hotels={state.hotels || []}
        />

        <Food
          foods={state.foods || []}
        />

        <Packing
          items={state.packingChecklist || []}
        />

        <BudgetBreakdown
          budget={state.budgetBreakdown}
        />

      </main>

    </div>
  );
}

export default Result;