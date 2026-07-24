import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyHistory() {
  return (
    <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
      <Plane
        className="mx-auto text-orange-500"
        size={70}
      />

      <h2 className="mt-8 text-3xl font-bold">
        No Trips Yet
      </h2>

      <p className="mt-3 text-slate-500">
        Generate your first AI-powered trip.
      </p>

      <Link
        to="/planner"
        className="mt-8 inline-block rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white"
      >
        Plan Your First Trip
      </Link>
    </div>
  );
}

export default EmptyHistory;