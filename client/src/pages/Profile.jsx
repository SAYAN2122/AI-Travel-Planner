import { useEffect, useState } from "react";
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
        totalTrips:
          historyResponse.data.length,
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to load profile."
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
            Loading Profile...
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white py-10">
        <div className="mx-auto max-w-7xl space-y-8 px-6">

          <ProfileHeader user={user} />

          <div className="grid gap-8 lg:grid-cols-2">

            <ProfileCard
              user={user}
              stats={stats}
            />

            <EditProfileForm
              user={user}
            />

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <ChangePasswordForm />

            <DeleteAccountCard />

          </div>

        </div>
      </div>
    </>
  );
}

export default Profile;