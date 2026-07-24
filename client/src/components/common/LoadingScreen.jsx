import { motion } from "framer-motion";
import {
  LoaderCircle,
  MapPinned,
  Hotel,
  UtensilsCrossed,
} from "lucide-react";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xl">

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
        }}
        transition={{
          duration: 0.4,
        }}
        className="w-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-white p-10 text-center shadow-2xl"
      >

        <LoaderCircle className="mx-auto h-16 w-16 animate-spin text-blue-600" />

        <h2 className="mt-6 text-3xl font-bold">
          Generating Your Trip...
        </h2>

        <p className="mt-2 text-gray-600">
          Our AI is creating your personalized itinerary.
        </p>

        <div className="mt-8 space-y-4 text-left">

          <div className="flex items-center gap-3">
            <MapPinned className="text-blue-600" />
            Finding the best attractions...
          </div>

          <div className="flex items-center gap-3">
            <Hotel className="text-green-600" />
            Searching hotels...
          </div>

          <div className="flex items-center gap-3">
            <UtensilsCrossed className="text-orange-600" />
            Selecting food recommendations...
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default LoadingScreen;