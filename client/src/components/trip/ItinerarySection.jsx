import { CalendarDays } from "lucide-react";

function ItinerarySection({ itinerary }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-orange-100">

      <div className="flex items-center gap-3 mb-8">

        <CalendarDays
          className="text-orange-500"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          Day Wise Itinerary
        </h2>

      </div>

      <div className="space-y-6">

        {itinerary.map((day) => (

          <div
            key={day.day}
            className="rounded-2xl border border-orange-100 p-6 hover:shadow-md transition"
          >

            <h3 className="text-2xl font-bold text-orange-600">

              Day {day.day}

            </h3>

            <h4 className="mt-2 text-xl font-semibold">

              {day.title}

            </h4>

            <ul className="mt-5 space-y-3">

              {day.activities.map((activity, index) => (

                <li
                  key={index}
                  className="flex items-center gap-3"
                >

                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>

                  {activity}

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ItinerarySection;