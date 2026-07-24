import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTrips from "../components/dashboard/RecentTrips";

import { getDashboardData } from "../services/dashboardService";

import {
  Plane,
  MapPinned,
  Heart,
  IndianRupee,
} from "lucide-react";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setDashboard(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-white">
          <h1 className="text-2xl font-semibold text-orange-500">
            Loading Dashboard...
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <DashboardHeader />

          {/* Statistics */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatsCard
              title="Trips Planned"
              value={dashboard.totalTrips}
              icon={<Plane className="text-white" />}
              color="bg-orange-500"
            />

            <StatsCard
              title="Destinations"
              value={dashboard.totalDestinations}
              icon={<MapPinned className="text-white" />}
              color="bg-teal-500"
            />

            <StatsCard
              title="Favorite Style"
              value={dashboard.favoriteStyle}
              icon={<Heart className="text-white" />}
              color="bg-pink-500"
            />

            <StatsCard
              title="Total Budget"
              value={`₹${dashboard.totalBudget.toLocaleString()}`}
              icon={<IndianRupee className="text-white" />}
              color="bg-amber-500"
            />

          </div>

          {/* Recent Trips */}
          <div className="mt-12">
            <RecentTrips trips={dashboard.trips} />
          </div>

          {/* Quick Actions */}
          <div className="mt-12">
            <QuickActions />
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;