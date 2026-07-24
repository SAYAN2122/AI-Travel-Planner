import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  const quickLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Planner",
      path: "/planner",
    },
    {
      title: "Trips",
      path: "/history",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">

                <Plane size={22} />

              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Sunset Voyager
                </h2>

                <p className="text-sm text-slate-500">
                  Personalized Travel Planner
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-600">
              Plan smarter journeys with AI-powered travel
              recommendations, personalized itineraries,
              hotel suggestions, food guides, packing
              checklists, and budget planning—all in one
              place.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-semibold text-slate-900">
              Quick Links
            </h3>

            <div className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <Link
                  key={link.title}
                  to={link.path}
                  className="block text-slate-600 transition hover:text-blue-600"
                >
                  {link.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg font-semibold text-slate-900">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}

              <motion.a
                whileHover={{
                  x: 4,
                }}
                href="mailto:sayangoel14@gmail.com"
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >

                <div className="flex items-center gap-3">

                  <Mail
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700">
                    Email
                  </span>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-400"
                />

              </motion.a>

              {/* LinkedIn */}

              <motion.a
                whileHover={{
                  x: 4,
                }}
                href="https://linkedin.com/in/sayangoel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >

                <div className="flex items-center gap-3">

                  <Linkedin
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700">
                    LinkedIn
                  </span>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-400"
                />

              </motion.a>

              {/* GitHub */}

              <motion.a
                whileHover={{
                  x: 4,
                }}
                href="https://github.com/SAYAN2122?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >

                <div className="flex items-center gap-3">

                  <Github
                    size={20}
                    className="text-blue-600"
                  />

                  <span className="text-slate-700">
                    GitHub
                  </span>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-400"
                />

              </motion.a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Sunset Voyager. All rights reserved.
          </p>

          <p>
            Built with React • Node.js • Express • MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;