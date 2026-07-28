import { useState } from "react";
import { motion } from "framer-motion";
import {
  Save,
  User,
  Mail,
  Sparkles,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { updateProfile } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

function EditProfileForm({ user }) {
  const { updateUser } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return toast.error("Name is required");
    }

    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }

    try {
      setLoading(true);

      const response = await updateProfile(formData);

      updateUser(response.user);

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Unable to update profile"
      );
    } finally {
      setLoading(false);
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
        border-slate-200
        bg-white/80
        p-8
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative">

        {/* Heading */}

        <div className="flex items-center justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">

              <Sparkles
                size={16}
                className="text-blue-600"
              />

              <span className="text-sm font-semibold text-blue-700">
                Profile Settings
              </span>

            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-900">
              Edit Profile
            </h2>

            <p className="mt-2 text-slate-500">
              Keep your personal information up to date.
            </p>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-7"
        >

          {/* Name */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">

              <User
                size={16}
                className="text-blue-600"
              />

              Full Name

            </label>

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">

              <Mail
                size={16}
                className="text-blue-600"
              />

              Email Address

            </label>

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

          </div>

          {/* Button */}

          <Button
            type="submit"
            disabled={loading}
            className="mt-4 w-full"
          >
            <div className="flex items-center justify-center gap-3">

              <Save size={18} />

              {loading
                ? "Saving Changes..."
                : "Save Changes"}

            </div>
          </Button>

        </form>

      </div>
    </motion.div>
  );
}

export default EditProfileForm;