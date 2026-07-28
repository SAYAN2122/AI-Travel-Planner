import { motion } from "framer-motion";
import {
  AlertTriangle,
  Trash2,
  ShieldAlert,
} from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import { deleteAccount } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function DeleteAccountCard() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "This will permanently delete your account. Continue?"
    );

    if (!confirmDelete) return;

    try {
      await deleteAccount();

      logout();

      toast.success(
        "Account deleted successfully."
      );

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to delete account."
      );
    }
  };

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
        duration: 0.45,
      }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-red-200
        bg-white/80
        p-8
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2">

          <AlertTriangle
            size={16}
            className="text-red-600"
          />

          <span className="text-sm font-semibold text-red-700">
            Danger Zone
          </span>

        </div>

        {/* Heading */}

        <div className="mt-6 flex items-start gap-5">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-red-500
              to-rose-600
              shadow-lg
              shadow-red-500/25
            "
          >
            <ShieldAlert
              size={28}
              className="text-white"
            />
          </div>

          <div>

            <h2 className="text-3xl font-black text-slate-900">
              Delete Account
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Permanently delete your account and all
              associated data including your saved trips,
              travel history, and profile information.
            </p>

          </div>

        </div>

        {/* Warning Box */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-5
          "
        >
          <div className="flex gap-3">

            <AlertTriangle
              size={22}
              className="mt-0.5 text-red-600"
            />

            <div>

              <h3 className="font-semibold text-red-700">
                This action cannot be undone
              </h3>

              <p className="mt-1 text-sm leading-6 text-red-600">
                Once your account has been deleted,
                all your personal information,
                travel history and saved itineraries
                will be permanently removed.
              </p>

            </div>

          </div>
        </div>

        {/* Button */}

        <Button
          variant="danger"
          onClick={handleDelete}
          className="mt-8 w-full"
        >
          <div className="flex items-center justify-center gap-3">

            <Trash2 size={18} />

            Delete My Account

          </div>
        </Button>

      </div>
    </motion.div>
  );
}

export default DeleteAccountCard;