import { useState } from "react";
import { Save } from "lucide-react";
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
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Save size={18} />

            {loading
              ? "Updating..."
              : "Save Changes"}
          </div>
        </Button>
      </form>
    </div>
  );
}

export default EditProfileForm;