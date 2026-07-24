import { UserCircle2 } from "lucide-react";

function ProfileHeader({ user }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
          <UserCircle2 size={70} />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900">
            {user?.name}
          </h1>

          <p className="mt-2 text-lg text-slate-500">
            {user?.email}
          </p>

          <div className="mt-5 inline-block rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-600">
            AI Travel Explorer
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;