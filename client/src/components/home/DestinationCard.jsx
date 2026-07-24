import { motion } from "framer-motion";
import { Calendar, IndianRupee, MapPin, Star } from "lucide-react";

function DestinationCard({
  destination,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-[32px] bg-white shadow-xl shadow-orange-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div
          className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${destination.gradient} px-4 py-2 text-sm font-semibold text-white`}
        >
          {destination.category}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {destination.name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-slate-500">
              <MapPin size={16} />

              {destination.state}
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-2">
            <Star
              size={16}
              className="fill-amber-500 text-amber-500"
            />

            <span className="font-semibold">
              {destination.rating}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-orange-50 p-4">
            <IndianRupee className="text-orange-500" />

            <p className="mt-2 text-sm text-slate-500">
              Starting From
            </p>

            <h4 className="font-bold text-orange-600">
              {destination.budget}
            </h4>
          </div>

          <div className="rounded-2xl bg-teal-50 p-4">
            <Calendar className="text-teal-500" />

            <p className="mt-2 text-sm text-slate-500">
              Duration
            </p>

            <h4 className="font-bold text-teal-600">
              {destination.duration}
            </h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DestinationCard;