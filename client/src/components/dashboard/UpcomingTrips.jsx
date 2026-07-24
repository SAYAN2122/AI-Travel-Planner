import {
  MapPin,
  CalendarDays,
  Users,
  IndianRupee,
  Plane,
} from "lucide-react";

export default function UpcomingTrips({ trip = null }) {
  if (!trip) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Upcoming Trip
        </h2>

        <div className="flex h-56 items-center justify-center rounded-2xl bg-slate-900/40">
          <p className="text-slate-400">
            No upcoming trip planned.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Upcoming Trip
      </h2>

      <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-slate-900/40 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Plane className="w-8 h-8 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">
            {trip.destination}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-slate-300">

          <div className="flex items-center gap-3">
            <CalendarDays size={20} />
            <span>{trip.days} Days</span>
          </div>

          <div className="flex items-center gap-3">
            <Users size={20} />
            <span>{trip.travelers} Travelers</span>
          </div>

          <div className="flex items-center gap-3">
            <IndianRupee size={20} />
            <span>₹{trip.budget.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>{trip.travelStyle}</span>
          </div>

        </div>

        <div className="mt-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">
          <p className="text-cyan-300 font-medium">
            Food Preference
          </p>

          <p className="text-white mt-1">
            {trip.foodPreference}
          </p>
        </div>
      </div>
    </div>
  );
}