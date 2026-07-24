import { MapPin, Star } from "lucide-react";
import Card from "../common/Card";

function DestinationCard({
  image,
  city,
  country,
  rating,
}) {
  return (
    <Card className="overflow-hidden p-0">
      <img
        src={image}
        alt={city}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">
              {city}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-slate-500">
              <MapPin size={16} />

              {country}
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1">
            <Star
              size={16}
              className="fill-amber-500 text-amber-500"
            />

            {rating}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default DestinationCard;