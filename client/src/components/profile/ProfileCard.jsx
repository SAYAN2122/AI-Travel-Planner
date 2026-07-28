import { motion } from "framer-motion";
import {
  Calendar,
  Mail,
  User,
  MapPinned,
} from "lucide-react";

function ProfileCard({ user, stats }) {
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not Available";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        rounded-[32px]
        border
        border-slate-200
        bg-white/80
        p-8
        shadow-xl
        backdrop-blur-xl
      "
    >
      <h2 className="mb-8 text-3xl font-black text-slate-900">
        Personal Information
      </h2>

      <div className="space-y-6">

        <InfoRow
          icon={<User size={20} />}
          title="Full Name"
          value={user?.name || "Not Available"}
        />

        <InfoRow
          icon={<Mail size={20} />}
          title="Email Address"
          value={user?.email || "Not Available"}
        />

        <InfoRow
          icon={<Calendar size={20} />}
          title="Member Since"
          value={memberSince}
        />

        <InfoRow
          icon={<MapPinned size={20} />}
          title="Trips Planned"
          value={stats?.totalTrips ?? 0}
        />

      </div>
    </motion.div>
  );
}

function InfoRow({
  icon,
  title,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
        transition-all
        duration-300
        hover:border-blue-200
        hover:bg-white
        hover:shadow-md
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          to-indigo-600
          text-white
          shadow-lg
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          {value}
        </h3>

      </div>

    </motion.div>
  );
}

export default ProfileCard;