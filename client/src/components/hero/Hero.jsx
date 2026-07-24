import BackgroundShapes from "./BackgroundShapes";
import SearchCard from "./SearchCard";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <BackgroundShapes />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 pt-24 pb-20 lg:min-h-[85vh]">

        {/* Badge */}

        <div className="mb-6">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            ✈️ AI Powered Travel Planning
          </span>
        </div>

        {/* Heading */}

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Travel Smarter.
            <br />
            Explore Better.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Build personalized itineraries, discover the best hotels,
            estimate your travel budget, and organize every trip in one
            intelligent platform.
          </p>
        </div>

        {/* Search */}

        <div className="mt-14">
          <SearchCard />
        </div>

        {/* Stats */}

        <div className="mt-16">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}

export default Hero;