
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Wallet,
  Hotel,
  Utensils,
  Star,
  ArrowRight,
} from "lucide-react";

const trips = [
  {
    id: 1,
    destination: "Goa",
    country: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    budget: "₹18,000",
    hotel: "Radisson Blu Goa",
    food: "Seafood",
    rating: 4.8,
    dates: "12 Jun - 16 Jun",
    style: "Comfort",
  },
  {
    id: 2,
    destination: "Manali",
    country: "India",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    budget: "₹24,000",
    hotel: "The Himalayan",
    food: "North Indian",
    rating: 4.9,
    dates: "02 Apr - 08 Apr",
    style: "Luxury",
  },
];

function TripCard({ trip }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <img
        src={trip.image}
        alt={trip.destination}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {trip.destination}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-slate-400">
              <MapPin size={16} />
              {trip.country}
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="text-white">{trip.rating}</span>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-slate-300">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            {trip.dates}
          </div>

          <div className="flex items-center gap-3">
            <Wallet size={18} />
            {trip.budget}
          </div>

          <div className="flex items-center gap-3">
            <Hotel size={18} />
            {trip.hotel}
          </div>

          <div className="flex items-center gap-3">
            <Utensils size={18} />
            {trip.food}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300">
            {trip.style}
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 font-medium text-white transition hover:scale-105">
            View Trip
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function RecentTrips() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Recent Trips
        </h2>
        <p className="mt-2 text-slate-400">
          Explore your previously planned journeys.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
