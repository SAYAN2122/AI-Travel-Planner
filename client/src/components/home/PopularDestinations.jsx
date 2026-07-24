import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { destinations } from "../../data/destinations";

function PopularDestinations() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Explore India
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Discover Incredible Destinations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore breathtaking beaches, mountains, heritage cities,
            and spiritual places across India with AI-powered travel planning.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;