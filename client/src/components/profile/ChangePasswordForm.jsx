import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  KeyRound,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { changePassword } from "../../services/authService";

function ChangePasswordForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill all fields.");
    }

    if (formData.newPassword.length < 6) {
      return toast.error(
        "Password should be at least 6 characters."
      );
    }

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      return toast.error("Passwords do not match.");
    }

    try {
      setLoading(true);

      const response = await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      toast.success(
        response.message ||
          "Password updated successfully."
      );

      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white/80
        p-8
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative">

        {/* Header */}

        <div className="mb-10">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-semibold text-blue-700">
              Security
            </span>

          </div>

          <div className="mt-5 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25">

              <ShieldCheck
                size={28}
                className="text-white"
              />

            </div>

            <div>

              <h2 className="text-3xl font-black text-slate-900">
                Change Password
              </h2>

              <p className="mt-1 text-slate-500">
                Keep your account secure by updating your password regularly.
              </p>

            </div>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <Input
            label="Current Password"
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            icon={<Lock size={18} />}
            placeholder="Enter current password"
          />

          <Input
            label="New Password"
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            icon={<KeyRound size={18} />}
            placeholder="Enter new password"
          />

          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            icon={<ShieldCheck size={18} />}
            placeholder="Confirm new password"
          />

          <Button
            type="submit"
            disabled={loading}
            className="mt-3 w-full"
          >
            <div className="flex items-center justify-center gap-3">

              <Lock size={18} />

              {loading
                ? "Updating Password..."
                : "Update Password"}

            </div>
          </Button>

        </form>

      </div>
    </motion.div>
  );
}

export default ChangePasswordForm;