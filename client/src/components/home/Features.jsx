import FeatureCard from "../cards/FeatureCard";
import { featureData } from "./featureData";

function Features() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium tracking-wide text-blue-700">
            WHY SUNSET VOYAGER
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Everything You Need
            <br />
            <span className="text-blue-600">
              For Smarter Travel Planning
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From personalized itineraries to hotel recommendations,
            budget estimation, packing assistance, and AI-powered
            insights — everything is designed to simplify the way
            you travel.
          </p>
        </div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featureData.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;