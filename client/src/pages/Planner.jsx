import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import Navbar from "../components/layout/Navbar";

import PlannerCard from "../components/planner/PlannerCard";
import BudgetSlider from "../components/planner/BudgetSlider";
import TravelerCounter from "../components/planner/TravelerCounter";
import TravelStyle from "../components/planner/TravelStyle";
import FoodPreference from "../components/planner/FoodPreference";
import DestinationSearch from "../components/planner/DestinationSearch";
import DaysSelector from "../components/planner/DaysSelector";

import Button from "../components/common/Button";

import { generateTrip } from "../services/travelService";

function Planner() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(50000);
  const [travelers, setTravelers] = useState(2);

  // Match backend enum values
  const [style, setStyle] = useState("Comfort");
  const [food, setFood] = useState("Vegetarian");

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!destination.trim()) {
      toast.error("Please enter a destination.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateTrip({
        destination,
        days,
        budget,
        travelers,
        travelStyle: style,
        foodPreference: food,
      });

      navigate("/result", {
        state: response.data,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to generate your trip."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">

          {/* Hero */}

          <div className="mb-16 text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              ✨ AI Powered Travel Planner
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
              Plan Your Next
              <span className="text-blue-600">
                {" "}Adventure
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us where you're going and your travel
              preferences. Our AI will build a personalized
              itinerary, recommend hotels, estimate your
              budget and suggest the best local food.
            </p>

          </div>

          {/* Planner */}

          <div className="space-y-8">

            {/* Destination */}

            <PlannerCard
              title="Destination"
              subtitle="Where would you like to travel?"
            >
              <DestinationSearch
                destination={destination}
                setDestination={setDestination}
              />
            </PlannerCard>

            {/* Days */}

            <PlannerCard
              title="Trip Duration"
              subtitle="How many days are you planning to travel?"
            >
              <DaysSelector
                days={days}
                setDays={setDays}
              />
            </PlannerCard>

            {/* Budget */}

            <PlannerCard
              title="Budget"
              subtitle="Choose your estimated travel budget"
            >
              <BudgetSlider
                value={budget}
                setValue={setBudget}
              />
            </PlannerCard>

            {/* Travelers */}

            <PlannerCard
              title="Travelers"
              subtitle="How many people are travelling?"
            >
              <TravelerCounter
                travelers={travelers}
                setTravelers={setTravelers}
              />
            </PlannerCard>

            {/* Travel Style */}

            <PlannerCard
              title="Travel Style"
              subtitle="Select your preferred experience"
            >
              <TravelStyle
                selected={style}
                setSelected={setStyle}
              />
            </PlannerCard>

            {/* Food Preference */}

            <PlannerCard
              title="Food Preference"
              subtitle="Help us personalize your recommendations"
            >
              <FoodPreference
                selected={food}
                setSelected={setFood}
              />
            </PlannerCard>

            {/* Generate Button */}

            <div className="pt-8 text-center">

              <Button
                size="lg"
                className="min-w-[320px] shadow-lg hover:shadow-xl"
                onClick={handleGenerate}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Planning Your Trip...
                  </>
                ) : (
                  <>
                    ✨ Generate AI Trip
                  </>
                )}
              </Button>

              <p className="mt-5 text-sm text-slate-500">
                Your personalized itinerary will be generated in a few seconds.
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Planner;