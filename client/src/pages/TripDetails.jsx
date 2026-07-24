import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteButton from "../components/favorites/FavoriteButton";
import Navbar from "../components/layout/Navbar";

import TripHeader from "../components/trip/TripHeader";
import ItinerarySection from "../components/trip/ItinerarySection";
import HotelsSection from "../components/trip/HotelsSection";
import FoodSection from "../components/trip/FoodSection";
import PackingSection from "../components/trip/PackingSection";
import BudgetSection from "../components/trip/BudgetSection";
import DeleteTripButton from "../components/trip/DeleteTripButton";

import { getTripById } from "../services/travelService";

function TripDetails() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await getTripById(id);
        setTrip(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-2xl font-bold text-orange-500">
            Loading Trip...
          </h1>
        </div>
      </>
    );
  }

  if (!trip) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-2xl font-bold">
            Trip not found.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white py-12">
        <div className="mx-auto max-w-7xl space-y-8 px-6">

          <TripHeader trip={trip} />

          <ItinerarySection
            itinerary={trip.itinerary}
          />

          <HotelsSection
            hotels={trip.hotels}
          />

          <FoodSection
            foods={trip.foods}
          />

          <PackingSection
            packingChecklist={
              trip.packingChecklist
            }
          />

          <BudgetSection
            budget={trip.budgetBreakdown}
          />

          <DeleteTripButton
            tripId={trip._id}
          />

        </div>
      </div>
    </>
  );
}

export default TripDetails;