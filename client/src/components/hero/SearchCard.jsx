import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Wallet,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

import Input from "../common/Input";
import Button from "../common/Button";
import Card from "../common/Card";
import { useAuth } from "../../context/AuthContext";

function SearchCard() {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");

  const handleGenerateTrip = () => {
    if (!destination.trim()) {
      toast.error("Please enter a destination.");
      return;
    }

    if (!days.trim()) {
      toast.error("Please enter trip duration.");
      return;
    }

    if (!budget.trim()) {
      toast.error("Please enter your budget.");
      return;
    }

    const plannerData = {
      destination,
      days,
      budget,
    };

    if (!token) {
      navigate("/login", {
        state: {
          redirectTo: "/planner",
          plannerData,
        },
      });
      return;
    }

    navigate("/planner", {
      state: plannerData,
    });
  };

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
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <Input
          label="Duration"
          placeholder="e.g. 5 Days"
          icon={<CalendarDays size={18} />}
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <Input
          label="Budget"
          placeholder="e.g. ₹50,000"
          icon={<Wallet size={18} />}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <div className="flex items-end">
          <Button
            className="h-[50px] w-full"
            onClick={handleGenerateTrip}
          >
            Generate Trip
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default SearchCard;