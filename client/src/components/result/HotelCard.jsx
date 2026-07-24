import { motion } from "framer-motion";
import {
  Star,
  IndianRupee,
  Wifi,
  Car,
  Coffee,
  ExternalLink,
  Sparkles,
  MapPin,
  Heart,
  ShieldCheck,
} from "lucide-react";

function HotelCard({ hotel }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-[0_30px_70px_rgba(79,70,229,0.18)]"
    >      {/* ================= Image ================= */}

      <div className="relative overflow-hidden">

        <img
          src={`https://picsum.photos/800/500?random=${hotel.name}`}
          alt={hotel.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <Sparkles
              size={16}
              className="text-yellow-300"
            />

            <span className="text-sm font-semibold text-white">
              AI Recommended
            </span>
          </div>
        </div>

        <div className="absolute right-5 top-5 rounded-2xl bg-yellow-400 px-4 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <Star
              size={18}
              fill="white"
              className="text-white"
            />

            <span className="font-bold text-slate-900">
              4.8
            </span>
          </div>
        </div>

        <button className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-xl transition hover:scale-110">

          <Heart
            size={20}
            className="text-white"
          />

        </button>

        <div className="absolute bottom-6 left-6 right-6">

          <h2 className="text-3xl font-black text-white">
            {hotel.name}
          </h2>

          <div className="mt-2 flex items-center gap-2">

            <MapPin
              size={18}
              className="text-cyan-300"
            />

            <span className="text-slate-200">
              Prime Tourist Location
            </span>

          </div>

        </div>

      </div>

      {/* ================= Content ================= */}

      <div className="p-7">        {/* ================= Description ================= */}

        <p className="leading-8 text-slate-600">
          {hotel.description}
        </p>

        {/* ================= Trust Badge ================= */}

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-emerald-50 p-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-500">

            <ShieldCheck
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h4 className="font-bold text-slate-800">
              Verified Recommendation
            </h4>

            <p className="text-sm text-slate-500">
              Selected by our AI for your itinerary.
            </p>

          </div>

        </div>

        {/* ================= Amenities ================= */}

        <div className="mt-7 grid grid-cols-3 gap-4">

          <Amenity
            icon={<Wifi size={20} />}
            title="WiFi"
            subtitle="Free"
            color="from-indigo-500 to-blue-500"
          />

          <Amenity
            icon={<Coffee size={20} />}
            title="Breakfast"
            subtitle="Included"
            color="from-amber-500 to-orange-500"
          />

          <Amenity
            icon={<Car size={20} />}
            title="Parking"
            subtitle="Available"
            color="from-emerald-500 to-green-500"
          />

        </div>

        {/* ================= Why We Recommend ================= */}

        <div className="mt-7 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6">

          <h3 className="text-lg font-bold text-slate-800">
            Why We Recommend This Hotel
          </h3>

          <div className="mt-5 space-y-4">

            <div className="flex items-start gap-3">

              <Sparkles
                size={18}
                className="mt-1 text-indigo-600"
              />

              <p className="text-slate-600">
                Excellent location near major tourist attractions.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <Sparkles
                size={18}
                className="mt-1 text-indigo-600"
              />

              <p className="text-slate-600">
                Highly rated for cleanliness and customer service.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <Sparkles
                size={18}
                className="mt-1 text-indigo-600"
              />

              <p className="text-slate-600">
                Best value for your selected budget and travel style.
              </p>

            </div>

          </div>

        </div>        {/* ================= Price Section ================= */}

        <div className="mt-8 rounded-[28px] bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 p-7 text-white shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-blue-100">
                Starting From
              </p>

              <div className="mt-2 flex items-center">

                <IndianRupee size={28} />

                <h2 className="text-4xl font-black">
                  {hotel.estimatedPrice}
                </h2>

              </div>

              <p className="mt-2 text-blue-100">
                Per Night • Taxes Extra
              </p>

            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-xl">

              <div className="text-center">

                <h3 className="text-3xl font-black">
                  ★ 4.8
                </h3>

                <p className="mt-1 text-sm">
                  Excellent
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= Action Buttons ================= */}

        <div className="mt-8 flex gap-4">

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 rounded-2xl border border-slate-300 bg-white py-4 font-semibold transition hover:border-indigo-500 hover:text-indigo-600"
          >
            Save Hotel
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 font-bold text-white shadow-xl"
          >
            View Details
            <ExternalLink size={18} />
          </motion.button>

        </div>

      </div>

      {/* ================= Bottom AI Note ================= */}

      <div className="border-t border-slate-200 bg-gradient-to-r from-slate-50 to-white px-7 py-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              AI Confidence Score
            </p>

            <h3 className="mt-1 text-2xl font-black text-slate-800">
              96%
            </h3>

          </div>

          <div className="rounded-full bg-emerald-100 px-5 py-3">

            <span className="font-semibold text-emerald-700">
              Best Match ✓
            </span>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

/* ==========================================
   Premium Amenity Component
========================================== */

function Amenity({
  icon,
  title,
  subtitle,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-white shadow-lg`}
      >
        {icon}
      </div>

      <h4 className="mt-4 font-bold text-slate-800">
        {title}
      </h4>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default HotelCard;