import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import Input from "../common/Input";
import { login } from "../../services/authService";

function LoginForm() {
  const navigate = useNavigate();
const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await login({
        email: formData.email,
        password: formData.password,
      });

      // Save JWT Token
      login(
  response.user,
  response.token
);

      // Save User (optional)
      if (response.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.user)
        );
      }

      toast.success("Login Successful!");

      navigate("/planner");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <Input
        icon={<Mail size={18} />}
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        icon={<Lock size={18} />}
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

      <p className="text-center text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-orange-500 hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;