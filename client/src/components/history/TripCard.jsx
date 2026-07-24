import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  CalendarDays,
  Wallet,
  Users,
  MapPin,
  ArrowRight,
  Pencil,
  Trash2,
  Sparkles,
  Star,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import { getDestinationImage } from "../../utils/destinationImages";

function TripCard({
  trip,
  onEdit,
  onDelete,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_35px_80px_rgba(99,102,241,.18)]"
    >

      {/* Hero Image */}

      <div className="relative overflow-hidden">

        <img
          src={getDestinationImage(trip.destination)}
          alt={trip.destination}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        {/* AI Badge */}

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl">

          <div className="flex items-center gap-2">

            <Sparkles
              size={16}
              className="text-yellow-300"
            />

            <span className="text-sm font-semibold text-white">

              AI Generated

            </span>

          </div>

        </div>

        {/* Rating */}

        <div className="absolute right-5 top-5 rounded-2xl bg-yellow-400 px-4 py-2 shadow-lg">

          <div className="flex items-center gap-2">

            <Star
              size={18}
              fill="white"
              className="text-white"
            />

            <span className="font-bold text-slate-900">

              4.9

            </span>

          </div>

        </div>

        {/* Bottom */}

        <div className="absolute bottom-6 left-6 right-6">

          <div className="flex items-center gap-2 text-orange-300">

            <MapPin size={18} />

            <span className="font-semibold">

              {trip.destination}

            </span>

          </div>

          <h2 className="mt-2 text-4xl font-black text-white">

            {trip.travelStyle} Trip

          </h2>

          <p className="mt-2 text-slate-200">

            Crafted by AI according to your travel preferences.

          </p>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">        {/* AI Recommendation */}

        <div className="flex items-center gap-4 rounded-2xl bg-indigo-50 p-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500">

            <ShieldCheck
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h4 className="font-bold text-slate-900">

              AI Recommended Itinerary

            </h4>

            <p className="text-sm text-slate-500">

              Optimized based on your travel preferences.

            </p>

          </div>

        </div>

        {/* Information Grid */}

        <div className="mt-8 grid grid-cols-2 gap-5">

          <InfoCard
            icon={<CalendarDays size={18} />}
            title="Duration"
            value={`${trip.days} Days`}
          />

          <InfoCard
            icon={<Wallet size={18} />}
            title="Budget"
            value={`₹${trip.budget}`}
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

        </div>

        {/* Trip Tags */}

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">

            {trip.travelStyle}

          </span>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

            AI Optimized

          </span>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

            {trip.foodPreference}

          </span>

        </div>

        {/* AI Score */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 p-6 text-white">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-300">

                AI Trip Quality

              </p>

              <h3 className="mt-2 text-3xl font-black">

                98%

              </h3>

            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">

              <Sparkles
                size={28}
                className="text-yellow-300"
              />

            </div>

          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />

          </div>

        </div>

        {/* Action Buttons */}

        <div className="mt-8 flex gap-3">

          <Link
            to="/result"
            state={trip}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >

            View Itinerary

            <ArrowRight size={18} />

          </Link>

          <button
            onClick={() => onEdit(trip)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 text-blue-600 transition hover:bg-blue-50"
          >

            <Pencil size={20} />

          </button>

          <button
            onClick={() => onDelete(trip._id)}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-200 text-red-600 transition hover:bg-red-50"
          >

            <Trash2 size={20} />

          </button>

        </div>        {/* Bottom Status */}

        <div className="mt-8 border-t border-slate-200 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 px-6 py-5 -mx-7 -mb-7">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>

              <p className="text-sm text-slate-500">

                Trip Status

              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">

                Ready to Explore ✈️

              </h3>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-3">

              <Clock3
                size={18}
                className="text-emerald-600"
              />

              <span className="font-semibold text-emerald-700">

                AI Verified

              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

/* ======================================================
                    PREMIUM INFO CARD
====================================================== */

function InfoCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
    >

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md">

          {icon}

        </div>

        <div>

          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">

            {title}

          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-900">

            {value}

          </h3>

        </div>

      </div>

    </motion.div>
  );
}

export default TripCard;