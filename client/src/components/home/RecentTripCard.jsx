import {
  CalendarDays,
  Wallet,
  Users,
  ArrowRight,
  MapPin,
  Sparkles,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { getDestinationImage } from "../../utils/destinationImages";

function RecentTripCard({ trip }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(79,70,229,0.18)]"
    >
      {/* Image Section */}

      <div className="relative overflow-hidden">

        <img
          src={getDestinationImage(trip.destination)}
          alt={trip.destination}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

        {/* AI Badge */}

        <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl border border-white/20">

          <div className="flex items-center gap-2">

            <Sparkles
              size={15}
              className="text-yellow-300"
            />

            <span className="text-sm font-semibold text-white">
              AI Generated
            </span>

          </div>

        </div>

        {/* Days Badge */}

        <div className="absolute right-5 top-5 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-lg">

          <div className="flex items-center gap-2">

            <Clock3 size={15} />

            <span className="text-sm font-semibold">

              {trip.days} Days

            </span>

          </div>

        </div>

        {/* Destination */}

        <div className="absolute bottom-6 left-6 right-6">

          <h2 className="text-3xl font-black text-white">

            {trip.destination}

          </h2>

          <div className="mt-2 flex items-center gap-2">

            <MapPin
              size={17}
              className="text-cyan-300"
            />

            <span className="text-slate-200">

              Personalized Travel Plan

            </span>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        {/* Information Grid */}

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-indigo-50 p-4">

            <CalendarDays
              className="text-indigo-600"
              size={22}
            />

            <p className="mt-3 text-xs text-slate-500">

              Duration

            </p>

            <h4 className="font-bold">

              {trip.days} Days

            </h4>

          </div>

          <div className="rounded-2xl bg-emerald-50 p-4">

            <Wallet
              className="text-emerald-600"
              size={22}
            />

            <p className="mt-3 text-xs text-slate-500">

              Budget

            </p>

            <h4 className="font-bold">

              ₹{trip.budget}

            </h4>

          </div>

          <div className="rounded-2xl bg-pink-50 p-4">

            <Users
              className="text-pink-600"
              size={22}
            />

            <p className="mt-3 text-xs text-slate-500">

              Travelers

            </p>

            <h4 className="font-bold">

              {trip.travelers}

            </h4>

          </div>

        </div>

        {/* AI Tags */}

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {trip.travelStyle}
          </span>

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            {trip.foodPreference}
          </span>

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-slate-200" />

        {/* CTA */}

        <Link
          to="/history"
          className="group/button flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 text-lg font-bold text-white transition-all duration-300 hover:shadow-xl"
        >

          View Complete Trip

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />

        </Link>

      </div>
    </motion.div>
  );
}

export default RecentTripCard;