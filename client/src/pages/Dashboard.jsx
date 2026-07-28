import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  MapPinned,
  IndianRupee,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCard from "../components/dashboard/StatsCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTrips from "../components/dashboard/RecentTrips";

import { getDashboardData } from "../services/dashboardService";

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

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white px-12 py-10 shadow-2xl"
          >
            <div className="flex flex-col items-center">

              <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                Loading Dashboard
              </h2>

              <p className="mt-2 text-slate-500">
                Preparing your travel statistics...
              </p>

            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

        {/* Background Blur Effects */}

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          {/* Header */}

          <DashboardHeader />

          {/* Statistics */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <StatsCard
              title="Trips Planned"
              value={dashboard?.totalTrips ?? 0}
              icon={<Plane className="text-white" />}
              color="from-blue-600 to-indigo-600"
            />

            <StatsCard
              title="Destinations"
              value={dashboard?.totalDestinations ?? 0}
              icon={<MapPinned className="text-white" />}
              color="from-cyan-500 to-blue-500"
            />

            <StatsCard
              title="Total Budget"
              value={`₹${(
                dashboard?.totalBudget ?? 0
              ).toLocaleString()}`}
              icon={<IndianRupee className="text-white" />}
              color="from-violet-600 to-indigo-600"
            />
          </motion.div>

          {/* Recent Trips */}

          <div className="mt-20">
            <RecentTrips trips={dashboard?.trips || []} />
          </div>

          {/* Quick Actions */}

          <div className="mt-20">
            <QuickActions />
          </div>

        </div>
      </main>
    </>
  );
}

export default Dashboard;