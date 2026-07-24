import { useState } from "react";
import { Lock } from "lucide-react";
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
      return toast.error(
        "Passwords do not match."
      );
    }

    try {
      setLoading(true);

      const response =
        await changePassword({
          currentPassword:
            formData.currentPassword,
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
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold">
        Change Password
      </h2>

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
        />

        <Input
          label="New Password"
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <Lock size={18} />

            {loading
              ? "Updating..."
              : "Change Password"}
          </div>
        </Button>
      </form>
    </div>
  );
}

export default ChangePasswordForm;