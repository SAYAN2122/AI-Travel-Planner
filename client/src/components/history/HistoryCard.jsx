import { useState } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

import FavoriteButton from "../favorites/FavoriteButton";

function HistoryCard({ trip }) {
  const [tripData, setTripData] = useState(trip);

  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          {tripData.destination}
        </h2>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
          {tripData.travelStyle}
        </span>
      </div>

      {/* Trip Details */}
      <div className="mt-6 space-y-3 text-slate-600">
        <div className="flex items-center gap-3">
          <CalendarDays size={18} />
          <span>{tripData.days} Days</span>
        </div>

        <div className="flex items-center gap-3">
          <Users size={18} />
          <span>{tripData.travelers} Travelers</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} />
          <span>{tripData.foodPreference}</span>
        </div>
      </div>

      {/* Budget */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-orange-600">
          ₹ {tripData.budget.toLocaleString()}
        </h3>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <FavoriteButton
          tripId={tripData._id}
          isFavorite={tripData.isFavorite}
          onToggle={setTripData}
        />

        <Link
          to={`/trip/${tripData._id}`}
          className="rounded-xl bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
        >
          View Trip
        </Link>
      </div>
    </div>
  );
}

export default HistoryCard;