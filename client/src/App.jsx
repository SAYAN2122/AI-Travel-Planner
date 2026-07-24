import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import TrustedBy from "./components/home/TrustedBy";
import Features from "./components/home/Features";
import PopularDestinations from "./components/home/PopularDestinations";
import RecentTrips from "./components/home/RecentTrips";
import Footer from "./components/layout/Footer";

import Planner from "./pages/Planner";
import Result from "./pages/Result";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import TripDetails from "./pages/TripDetails";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <PopularDestinations />
      <RecentTrips />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Planner */}
      <Route
        path="/planner"
        element={
          <ProtectedRoute>
            <Planner />
          </ProtectedRoute>
        }
      />

      {/* Result */}
      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        }
      />

      {/* Loading */}
      <Route path="/loading" element={<Loading />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* History */}
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      {/* Favorites */}
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Trip Details */}
      <Route
        path="/trip/:id"
        element={
          <ProtectedRoute>
            <TripDetails />
          </ProtectedRoute>
        }
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-slate-900">404</h1>
              <p className="mt-4 text-slate-600">
                Page Not Found
              </p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;