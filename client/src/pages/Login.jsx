import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe,
  MapPinned,
} from "lucide-react";

import api from "../utils/axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
const { login } = useAuth();
  /* ===========================
      State
  =========================== */

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] = useState("");

  /* ===========================
      Handle Input
  =========================== */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ===========================
      Login
  =========================== */

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data } = await api.post(
        "/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

    login(data.user, data.token);

navigate("/planner", {
  replace: true,
});

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Login failed. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  /* ===========================
      UI
  =========================== */

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="hidden flex-col justify-center px-12 lg:flex"
        >

          <Link
            to="/"
            className="mb-16 flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Plane size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Sunset Voyager
              </h2>

              <p className="text-sm text-slate-500">
                AI Travel Planner
              </p>
            </div>
          </Link>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles size={16} />
            Smarter Travel Starts Here
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Welcome Back.
            <br />
            Continue Your Journey.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Access your travel plans, manage itineraries,
            explore destinations and let AI help you build
            better journeys in just a few clicks.
          </p>

          {/* Feature List */}

          <div className="mt-14 space-y-5">

            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Secure Authentication"
              text="Your account is protected using encrypted passwords and secure JWT authentication."
            />

            <FeatureCard
              icon={<Globe size={22} />}
              title="AI Powered Planning"
              text="Generate intelligent itineraries, hotel suggestions and travel budgets."
            />

            <FeatureCard
              icon={<MapPinned size={22} />}
              title="Your Travel Dashboard"
              text="Manage previous trips, favourites and upcoming adventures from one place."
            />

          </div>

        </motion.div>

        {/* ================= RIGHT SIDE STARTS ================= */}        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center justify-center px-6 py-12"
        >
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            {/* Logo */}

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Plane size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Welcome Back
                </h2>

                <p className="text-sm text-slate-500">
                  Sign in to continue your journey
                </p>
              </div>
            </div>

            {/* Error */}

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      py-3
                      pl-11
                      pr-4
                      text-slate-900
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      duration-200
                      focus:border-blue-600
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                    placeholder="Enter your password"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      py-3
                      pl-11
                      pr-12
                      text-slate-900
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      duration-200
                      focus:border-blue-600
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember */}

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-600">

                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded accent-blue-600"
                  />

                  Remember Me

                </label>

                <button
                  type="button"
                  className="font-medium text-blue-600 transition hover:text-blue-700"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Login Button */}

              <motion.button
                whileHover={{
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={loading}
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-blue-600
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Login

                    <ArrowRight
                      size={18}
                    />
                  </>
                )}
              </motion.button>              {/* Divider */}

              <div className="relative py-2">

                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm text-slate-500">
                    Secure Authentication
                  </span>
                </div>

              </div>

              {/* Security Card */}

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">

                    <ShieldCheck
                      size={22}
                      className="text-emerald-600"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Your account is secure
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      We protect your information using JWT authentication,
                      encrypted passwords and secure backend validation.
                      Your travel history and personal data remain private.
                    </p>

                  </div>

                </div>

              </div>

              {/* Signup */}

              <div className="pt-2 text-center">

                <span className="text-slate-600">
                  Don't have an account?
                </span>

                <Link
                  to="/signup"
                  className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Create Account
                </Link>

              </div>

            </form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}
  /* ==========================================================
   Feature Card
========================================================== */

function FeatureCard({
  icon,
  title,
  text,
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
        items-start
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-md
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          text-blue-600
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div>

        <h3
          className="
            text-base
            font-semibold
            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-600
          "
        >
          {text}
        </p>

      </div>

    </motion.div>
  );
}
export default Login;