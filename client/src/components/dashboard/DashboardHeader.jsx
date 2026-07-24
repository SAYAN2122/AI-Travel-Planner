import { useAuth } from "../../context/AuthContext";

function DashboardHeader() {
const { user } = useAuth();

  return (
    <div className="mb-12">

      <h1 className="text-5xl font-bold">

        Hi, {user?.name || "Traveler"} 👋

      </h1>

      <p className="mt-4 text-lg text-slate-600">

        Welcome back!

        Let's plan another unforgettable journey.

      </p>

    </div>
  );
}

export default DashboardHeader;