import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import HistoryGrid from "../components/history/HistoryGrid";
import EmptyHistory from "../components/history/EmptyHistory";

import { getHistory } from "../services/travelService";

function History() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistory();
        setTrips(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="mb-10 text-5xl font-bold">
            Trip History
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : trips.length === 0 ? (
            <EmptyHistory />
          ) : (
            <HistoryGrid trips={trips} />
          )}
        </div>
      </div>
    </>
  );
}

export default History;