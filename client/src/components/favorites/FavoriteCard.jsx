import { CalendarDays, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

function FavoriteCard({ trip, onToggle }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {trip.destination}
          </h2>

          <p className="mt-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
            {trip.travelStyle}
          </p>
        </div>

        <FavoriteButton
          tripId={trip._id}
          isFavorite={trip.isFavorite}
          onToggle={onToggle}
        />
      </div>

      <div className="mt-6 space-y-3 text-slate-600">
        <div className="flex items-center gap-3">
          <CalendarDays size={18} />
          {trip.days} Days
        </div>

        <div className="flex items-center gap-3">
          <Users size={18} />
          {trip.travelers} Travelers
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={18} />
          {trip.foodPreference}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-xl font-bold text-orange-600">
          ₹ {trip.budget.toLocaleString()}
        </h3>

        <Link
          to={`/trip/${trip._id}`}
          className="rounded-xl bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
        >
          View Trip
        </Link>
      </div>
    </div>
  );
}

export default FavoriteCard;