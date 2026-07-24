import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { signup } from "../../services/authService";

function SignupForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(
        response.message ||
          "Account created successfully!"
      );

      login(
        response.user,
        response.token
      );

      toast.success("Welcome!");

      navigate("/planner");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Signup failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* Name */}

      <div className="relative">

        <User
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Email */}

      <div className="relative">

        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

      </div>

      {/* Password */}

      <div className="relative">

        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-11 text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          {showPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

      {/* Confirm Password */}

      <div className="relative">

        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type={
            showConfirmPassword
              ? "text"
              : "password"
          }
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-11 text-slate-900 placeholder:text-slate-400 outline-none transition duration-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() =>
            setShowConfirmPassword(
              !showConfirmPassword
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          {showConfirmPassword ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>

      </div>

      {/* Button */}

      <button
        disabled={loading}
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          "Creating Account..."
        ) : (
          <>
            Create Account
            <ArrowRight size={18} />
          </>
        )}
      </button>

      {/* Footer */}

      <p className="pt-2 text-center text-slate-600">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          Login
        </Link>

      </p>

    </form>
  );
}

export default SignupForm;