import { MapPin, Search } from "lucide-react";

const popularDestinations = [
  "Paris",
  "Dubai",
  "Bali",
  "Tokyo",
  "Goa",
  "Manali",
];

function DestinationSearch({
  destination,
  setDestination,
}) {
  return (
    <div className="space-y-6">

      {/* Search Input */}

      <div className="relative">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search destination (e.g. Paris, Bali, Goa...)"
          value={destination}
          onChange={(e) =>
            setDestination(e.target.value)
          }
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            py-4
            pl-14
            pr-5
            text-lg
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-200
            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100
          "
        />

      </div>

      {/* Popular Destinations */}

      <div>

        <div className="mb-3 flex items-center gap-2">

          <MapPin
            size={16}
            className="text-blue-600"
          />

          <span className="text-sm font-medium text-slate-600">
            Popular Destinations
          </span>

        </div>

        <div className="flex flex-wrap gap-3">

          {popularDestinations.map((place) => (

            <button
              key={place}
              type="button"
              onClick={() =>
                setDestination(place)
              }
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-200

                ${
                  destination === place
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                }
              `}
            >
              {place}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default DestinationSearch;