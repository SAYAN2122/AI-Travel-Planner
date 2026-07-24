import { Plane, Sparkles, Globe2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden flex-col justify-center px-12 lg:flex"
        >

          {/* Logo */}

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

          {/* Badge */}

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles size={16} />
            Smart AI Travel Experience
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Discover the World.
            <br />
            Plan Every Journey.
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Create personalized itineraries, discover
            hotels, estimate your budget and organize
            every trip in one intelligent platform.
          </p>

          {/* Feature Cards */}

          <div className="mt-14 space-y-5">

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Globe2
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  AI Trip Planning
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Generate complete travel plans in
                  seconds with intelligent recommendations.
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                <ShieldCheck
                  size={22}
                  className="text-emerald-600"
                />
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  Secure Account
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Your account and travel information
                  are protected using secure authentication.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center px-6 py-12"
        >

          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <h2 className="text-3xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="mt-2 text-slate-500">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default AuthLayout;