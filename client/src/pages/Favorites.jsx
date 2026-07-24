import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import FavoritesGrid from "../components/favorites/FavoritesGrid";

import { getFavoriteTrips } from "../services/travelService";

function Favorites() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await getFavoriteTrips();
      setTrips(response.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to load favorites."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-3xl font-bold text-orange-500">
            Loading Favorites...
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-orange-50 py-10">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="mb-10 text-4xl font-bold">
            Favorite Trips
          </h1>

          {trips.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-700">
                No favorite trips yet.
              </h2>

              <p className="mt-3 text-slate-500">
                Mark your favorite trips from History to see them here.
              </p>
            </div>
          ) : (
            <FavoritesGrid
              trips={trips}
              setTrips={setTrips}
            />
          )}

        </div>
      </div>
    </>
  );
}

export default Favorites;