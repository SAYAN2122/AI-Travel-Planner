import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Waves,
  Dumbbell,
  ShieldCheck,
  Phone,
  ExternalLink,
  Heart,
} from "lucide-react";
import { useState } from "react";

function HotelCard({ hotel }) {
  const [liked, setLiked] = useState(false);

  if (!hotel) return null;

  const amenities = [
    {
      icon: <Wifi size={18} />,
      name: "Free WiFi",
    },
    {
      icon: <Coffee size={18} />,
      name: "Breakfast",
    },
    {
      icon: <Car size={18} />,
      name: "Parking",
    },
    {
      icon: <Utensils size={18} />,
      name: "Restaurant",
    },
    {
      icon: <Waves size={18} />,
      name: "Pool",
    },
    {
      icon: <Dumbbell size={18} />,
      name: "Gym",
    },
  ];

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl"
    >
      {/* Image */}

      <div className="relative h-80 overflow-hidden">

        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: .4,
          }}
          src={
            hotel.image ||
            `https://picsum.photos/900/600?random=${hotel.name}`
          }
          alt={hotel.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur"
        >
          <Heart
            size={22}
            fill={liked ? "red" : "none"}
            className={liked ? "text-red-500" : "text-slate-700"}
          />
        </button>

        <div className="absolute bottom-5 left-5">

          <div className="rounded-full bg-white/90 px-4 py-2 font-semibold text-slate-800 backdrop-blur">

            {hotel.travelStyle || "Recommended"}

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="flex items-start justify-between gap-5">

          <div>

            <h2 className="text-3xl font-black text-slate-900">

              {hotel.name || "Recommended Hotel"}

            </h2>

            <div className="mt-3 flex items-center gap-2 text-slate-500">

              <MapPin size={18} />

              <span>

                {hotel.location || "Prime Location"}

              </span>

            </div>

          </div>

          <div className="rounded-2xl bg-amber-50 px-4 py-3">

            <div className="flex items-center gap-2">

              <Star
                size={18}
                fill="currentColor"
                className="text-yellow-500"
              />

              <span className="font-bold">

                {hotel.rating || "4.8"}

              </span>

            </div>

          </div>

        </div>

        <p className="mt-6 leading-8 text-slate-600">

          {hotel.description ||
            "A premium hotel offering comfort, convenience and exceptional hospitality during your stay."}

        </p>

        <div className="mt-8 flex items-center justify-between rounded-3xl bg-slate-50 p-6">

          <div>

            <p className="text-sm text-slate-500">

              Starting From

            </p>

            <h3 className="mt-2 text-4xl font-black text-indigo-700">

              {hotel.price || hotel.estimatedPrice || "N/A"}

            </h3>

            <p className="text-slate-500">

              per night

            </p>

          </div>

          <ShieldCheck
            size={42}
            className="text-green-500"
          />

        </div>        {/* Amenities */}

        <div className="mt-10">

          <h3 className="text-xl font-bold text-slate-900">
            Hotel Amenities
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">

            {amenities.map((item) => (

              <motion.div
                key={item.name}
                whileHover={{
                  scale: 1.05,
                }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-indigo-300 hover:bg-white"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">

                  {item.icon}

                </div>

                <span className="font-medium text-slate-700">

                  {item.name}

                </span>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Why this hotel */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-50 via-cyan-50 to-emerald-50 p-7">

          <h3 className="text-xl font-bold text-slate-900">
            Why We Recommend This Hotel
          </h3>

          <div className="mt-6 space-y-4">

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-green-500"
              />

              <p className="leading-7 text-slate-700">
                Excellent location with quick access to major tourist
                attractions and transportation.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-green-500"
              />

              <p className="leading-7 text-slate-700">
                Selected according to your budget and preferred
                travel style using AI recommendations.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-green-500"
              />

              <p className="leading-7 text-slate-700">
                Highly rated for cleanliness, comfort and guest
                satisfaction.
              </p>

            </div>

          </div>

        </div>

        {/* Contact Section */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 p-6">

            <div className="flex items-center gap-3">

              <Phone
                size={20}
                className="text-indigo-600"
              />

              <h3 className="text-lg font-bold text-slate-900">
                Contact
              </h3>

            </div>

            <p className="mt-5 text-slate-600">
              {hotel.phone || "+91 XXXXX XXXXX"}
            </p>

            <p className="mt-2 text-slate-500">
              Availability may vary depending on your travel dates.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 p-6">

            <div className="flex items-center gap-3">

              <MapPin
                size={20}
                className="text-indigo-600"
              />

              <h3 className="text-lg font-bold text-slate-900">
                Address
              </h3>

            </div>

            <p className="mt-5 leading-7 text-slate-600">

              {hotel.location || "Prime tourist location"}

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-bold text-white shadow-lg transition hover:scale-[1.02]"
          >

            Book Now

          </button>

          <button
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600"
          >

            <ExternalLink size={18} />

            Visit Website

          </button>

        </div>        {/* Hotel Tips */}

        <div className="mt-10 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-cyan-50 p-7">

          <h3 className="text-xl font-bold text-slate-900">
            Stay Tips
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-emerald-600"
              />

              <p className="leading-7 text-slate-700">
                Check-in and check-out timings may differ depending
                on hotel policies.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-emerald-600"
              />

              <p className="leading-7 text-slate-700">
                Carry a valid government-issued ID during check-in.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-emerald-600"
              />

              <p className="leading-7 text-slate-700">
                Book early during weekends and holiday seasons for
                better prices.
              </p>

            </div>

            <div className="flex items-start gap-3">

              <ShieldCheck
                size={20}
                className="mt-1 text-emerald-600"
              />

              <p className="leading-7 text-slate-700">
                Contact the hotel directly for special requests like
                early check-in or airport pickup.
              </p>

            </div>

          </div>

        </div>

        {/* AI Recommendation */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 p-[1px]">

          <div className="rounded-3xl bg-white p-7">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">

                <Star
                  size={28}
                  fill="currentColor"
                />

              </div>

              <div>

                <h3 className="text-2xl font-black text-slate-900">
                  AI Recommendation
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  This hotel matches your destination, budget and
                  travel preferences. It has been selected to give
                  you the best balance of comfort, convenience and
                  value for money.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default HotelCard;