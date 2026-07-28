import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import DeleteAccountCard from "../components/profile/DeleteAccountCard";

import { getProfile } from "../services/authService";
import { getHistory } from "../services/travelService";

function Profile() {
  const [user, setUser] = useState(null);

  const [stats, setStats] = useState({
    totalTrips: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const profileResponse = await getProfile();

      setUser(profileResponse.user);

      const historyResponse = await getHistory();

      setStats({
        totalTrips: historyResponse.data.length,
      });
    } catch (error) {
      console.error(error);

      toast.error("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="rounded-[32px] border border-slate-200 bg-white px-12 py-10 shadow-2xl"
          >
            <div className="flex flex-col items-center">

              <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

              <h2 className="text-2xl font-bold text-slate-900">
                Loading Profile
              </h2>

              <p className="mt-2 text-slate-500">
                Preparing your profile information...
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

        {/* Background Glow */}

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          {/* Header */}

          <ProfileHeader user={user} />

          {/* Profile + Edit */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="mt-10 grid gap-8 lg:grid-cols-2"
          >
            <ProfileCard
              user={user}
              stats={stats}
            />

            <EditProfileForm
              user={user}
            />
          </motion.div>

          {/* Password + Delete */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-8 grid gap-8 lg:grid-cols-2"
          >
            <ChangePasswordForm />

            <DeleteAccountCard />
          </motion.div>

        </div>

      </main>
    </>
  );
}

export default Profile;