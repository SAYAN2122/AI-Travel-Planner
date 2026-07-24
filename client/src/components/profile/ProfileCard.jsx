import {
  Calendar,
  Mail,
  User,
  MapPinned,
} from "lucide-react";

function ProfileCard({ user, stats }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold">
        Personal Information
      </h2>

      <div className="space-y-6">

        <div className="flex items-center gap-5">
          <div className="rounded-xl bg-orange-100 p-3">
            <User className="text-orange-500" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Full Name
            </p>

            <h3 className="text-lg font-semibold">
              {user?.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-xl bg-orange-100 p-3">
            <Mail className="text-orange-500" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email Address
            </p>

            <h3 className="text-lg font-semibold">
              {user?.email}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-xl bg-orange-100 p-3">
            <Calendar className="text-orange-500" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Member Since
            </p>

            <h3 className="text-lg font-semibold">
              {new Date(
                user?.createdAt
              ).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-xl bg-orange-100 p-3">
            <MapPinned className="text-orange-500" />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Trips Planned
            </p>

            <h3 className="text-lg font-semibold">
              {stats?.totalTrips}
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;