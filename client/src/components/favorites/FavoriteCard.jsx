import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  CalendarDays,
  Users,
  MapPin,
  IndianRupee,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import FavoriteButton from "./FavoriteButton";
import { getDestinationImage } from "../../utils/destinationImages";

function FavoriteCard({ trip, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-[0_30px_70px_rgba(79,70,229,.15)]"
    >
      {/* Hero Image */}

      <div className="relative h-56 overflow-hidden">
        <img
          src={getDestinationImage(trip.destination)}
          alt={trip.destination}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        {/* Favorite */}

        <div className="absolute right-5 top-5">
          <FavoriteButton
            tripId={trip._id}
            isFavorite={trip.isFavorite}
            onToggle={onToggle}
          />
        </div>

        {/* AI Badge */}

        <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl border border-white/20">
          <div className="flex items-center gap-2">
            <Sparkles
              size={15}
              className="text-cyan-300"
            />

            <span className="text-sm font-semibold text-white">
              AI Planned
            </span>
          </div>
        </div>

        {/* Bottom */}

        <div className="absolute bottom-6 left-6">
          <h2 className="text-4xl font-black text-white">
            {trip.destination}
          </h2>

          <p className="mt-2 inline-flex rounded-full bg-indigo-500/80 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
            {trip.travelStyle}
          </p>
        </div>
      </div>

      {/* Body */}

      <div className="p-7">
        {/* Info */}

        <div className="grid grid-cols-2 gap-4">

          <InfoCard
            icon={<CalendarDays size={18} />}
            title="Duration"
            value={`${trip.days} Days`}
          />

          <InfoCard
            icon={<Users size={18} />}
            title="Travelers"
            value={trip.travelers}
          />

          <InfoCard
            icon={<MapPin size={18} />}
            title="Food"
            value={trip.foodPreference}
          />

          <InfoCard
            icon={<IndianRupee size={18} />}
            title="Budget"
            value={`₹${trip.budget.toLocaleString()}`}
          />

        </div>

        {/* Tags */}

        <div className="mt-7 flex flex-wrap gap-3">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {trip.travelStyle}
          </span>

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Smart Planning
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            {trip.foodPreference}
          </span>

        </div>

        {/* AI Score */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-6 text-white">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-indigo-100">
                AI Recommendation Score
              </p>

              <h3 className="mt-2 text-3xl font-black">
                98%
              </h3>

            </div>

            <Sparkles
              size={34}
              className="text-cyan-200"
            />

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">

            <div className="h-full w-[98%] rounded-full bg-white" />

          </div>

        </div>

        {/* Button */}

        <Link
          to={`/trip/${trip._id}`}
          className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          View Complete Itinerary

          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}

/* ========================================= */

function InfoCard({
  icon,
  title,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-md"
    >
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">

          {icon}

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h3 className="mt-1 font-bold text-slate-900">
            {value}
          </h3>

        </div>

      </div>
    </motion.div>
  );
}

export default FavoriteCard;