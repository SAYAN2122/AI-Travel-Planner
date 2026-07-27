import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

function EmptyHistory() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-center rounded-3xl bg-white px-10 py-24 shadow-lg">
      <div className="text-center">
        <Plane
          className="mx-auto text-orange-500"
          size={60}
        />

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          No Trips Yet
        </h2>

        <p className="mt-3 text-lg text-slate-500">
          Generate your first AI-powered trip.
        </p>

        <Link
          to="/planner"
          className="mt-8 inline-flex rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
        >
          Plan Your First Trip
        </Link>
      </div>
    </div>
  );
}

export default EmptyHistory;