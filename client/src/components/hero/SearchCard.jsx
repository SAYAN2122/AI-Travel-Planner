import {
  CalendarDays,
  MapPin,
  Wallet,
  Sparkles,
} from "lucide-react";

import Input from "../common/Input";
import Button from "../common/Button";
import Card from "../common/Card";

function SearchCard() {
  return (
    <Card className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Sparkles
            size={22}
            className="text-blue-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Plan Your Next Journey
          </h2>

          <p className="text-sm text-slate-500">
            Tell us where you're going and let AI create your perfect itinerary.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        <Input
          label="Destination"
          placeholder="e.g. Bali, Dubai, Paris"
          icon={<MapPin size={18} />}
        />

        <Input
          label="Duration"
          placeholder="e.g. 5 Days"
          icon={<CalendarDays size={18} />}
        />

        <Input
          label="Budget"
          placeholder="e.g. ₹50,000"
          icon={<Wallet size={18} />}
        />

        <div className="flex items-end">
          <Button
            className="h-[50px] w-full"
          >
            Generate Trip
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchCard;