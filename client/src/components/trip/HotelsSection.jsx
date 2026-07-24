import { Hotel, IndianRupee } from "lucide-react";

function HotelsSection({ hotels }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <Hotel
          className="text-orange-500"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          Recommended Hotels
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="rounded-2xl border border-orange-100 p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-800">
              {hotel.name}
            </h3>

            <p className="mt-3 text-slate-600">
              {hotel.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-orange-600">
              <IndianRupee size={18} />

              <span className="font-semibold">
                ₹ {hotel.estimatedPrice.toLocaleString()} / Night
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelsSection;