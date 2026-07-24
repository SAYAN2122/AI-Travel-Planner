import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Sparkles,
  Download,
  Share2,
  Star,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { getDestinationImage } from "../../utils/destinationImages";
import { generateTripPDF } from "../../utils/generatePDF";

function DestinationBanner({ trip }) {
  const handleShare = async () => {
    const shareData = {
      title: `${trip.destination} Trip`,
      text: `Check out my AI generated itinerary for ${trip.destination}!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Trip shared successfully!");
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Trip link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        toast.error("Unable to share trip.");
      }
    }
  };

  const cards = [
    {
      icon: <CalendarDays size={22} />,
      title: "Duration",
      value: `${trip.days} Days`,
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Wallet size={22} />,
      title: "Budget",
      value: `₹ ${Number(trip.budget).toLocaleString()}`,
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Users size={22} />,
      title: "Travelers",
      value: trip.travelers,
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Style",
      value: trip.travelStyle,
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <section className="relative min-h-[650px] overflow-hidden rounded-b-[50px] shadow-2xl">

      <motion.img
        src={getDestinationImage(trip.destination)}
        alt={trip.destination}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-slate-900/30" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-8 py-16 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur">

            <Sparkles
              size={18}
              className="text-yellow-300"
            />

            Personalized by AI

          </div>

          <h1 className="mt-8 text-6xl font-black capitalize text-white lg:text-7xl">
            {trip.destination}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Your AI travel itinerary is ready with attractions,
            hotels, food recommendations, packing checklist,
            and a detailed budget estimate.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur">

              <Star
                size={18}
                fill="#FFD54A"
                className="text-yellow-400"
              />

              AI Score 4.9

            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur">

              <MapPin size={18} />

              Personalized Trip

            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={() => generateTripPDF(trip)}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-bold text-white shadow-xl"
            >
              <Download size={18} />
              Download PDF
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-white backdrop-blur transition hover:bg-white/20"
            >
              <Share2 size={18} />
              Share Trip
            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-[32px] border border-white/20 bg-white/10 backdrop-blur-xl"
        >

          <div className="border-b border-white/10 p-8">

            <h2 className="text-3xl font-black text-white">
              Trip Overview
            </h2>

            <p className="mt-2 text-cyan-200">
              Everything is planned for you.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 p-8">

            {cards.map((card) => (

              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-5"
              >

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} text-white`}
                >
                  {card.icon}
                </div>

                <p className="mt-4 text-sm text-slate-300">
                  {card.title}
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  {card.value}
                </h3>

              </div>

            ))}

          </div>

          <div className="grid grid-cols-2 gap-5 border-t border-white/10 p-8">

            <Stat
              label="Food Preference"
              value={trip.foodPreference}
            />

            <Stat
              label="Hotels"
              value={trip.hotels?.length || 0}
            />

            <Stat
              label="Trip Days"
              value={trip.itinerary?.length || 0}
            />

            <Stat
              label="Packing Items"
              value={trip.packingChecklist?.length || 0}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

      <p className="text-sm text-slate-300">
        {label}
      </p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}

export default DestinationBanner;