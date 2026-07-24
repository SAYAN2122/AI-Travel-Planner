import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Menu,
  X,
  LayoutDashboard,
  Heart,
  History,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

import MobileMenu from "./MobileMenu";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, token, logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] =
    useState(false);

  const dropdownRef = useRef(null);

  /* ======================================
      Scroll Effect
  ====================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ======================================
      Close Dropdown
  ====================================== */

  useEffect(() => {
    const close = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );
  }, []);

  /* ======================================
      Logout
  ====================================== */

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  /* ======================================
      User Initials
  ====================================== */

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "U";

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Planner",
      path: "/planner",
    },
    {
      name: "Trips",
      path: "/history",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 shadow-lg backdrop-blur-2xl"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* =========================
            LOGO
        ========================= */}

        <Link
          to="/"
          className="group flex items-center gap-4"
        >
          <motion.div
            whileHover={{
              rotate: -10,
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg
              shadow-blue-500/25
            "
          >
            <Plane size={24} />
          </motion.div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Sunset Voyager
            </h1>

            <p className="text-sm text-slate-500">
              AI Travel Planner
            </p>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-200/70
            bg-white/90
            px-3
            py-2
            shadow-lg
            backdrop-blur-xl
          "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="hidden items-center gap-4 lg:flex">
          {!token ? (
            <>
              <Link
                to="/login"
                className="
                  rounded-full
                  border
                  border-slate-200
                  px-6
                  py-3
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                "
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-6
                  py-3
                  font-medium
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                Create Account
              </Link>
            </>
          ) : (
            <div
              className="relative"
              ref={dropdownRef}
            >
              {/* Avatar Button */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  setShowDropdown(!showDropdown)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2
                  shadow-md
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-600
                    font-bold
                    text-white
                    shadow-md
                  "
                >
                  {initials}
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    {user?.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    Travel Explorer
                  </p>
                </div>

                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    showDropdown
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </motion.button>

              {/* ======================
                    DROPDOWN
              ====================== */}

              <AnimatePresence>

                {showDropdown && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      absolute
                      right-0
                      mt-4
                      w-72
                      overflow-hidden
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      shadow-2xl
                    "
                  >
                    {/* User Card */}

                    <div
                      className="
                        border-b
                        border-slate-100
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        p-6
                        text-white
                      "
                    >
                      <div className="flex items-center gap-4">

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-white/20
                            text-lg
                            font-bold
                          "
                        >
                          {initials}
                        </div>

                        <div>

                          <h3 className="font-semibold text-lg">
                            {user?.name}
                          </h3>

                          <p className="text-sm text-blue-100">
                            {user?.email}
                          </p>

                        </div>

                      </div>
                    </div>

                    {/* Menu */}

                    <div className="p-3">

                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
                      >
                        <LayoutDashboard size={19} />
                        Dashboard
                      </Link>

                      <Link
                        to="/history"
                        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
                      >
                        <History size={19} />
                        My Trips
                      </Link>

                      <Link
                        to="/favorites"
                        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
                      >
                        <Heart size={19} />
                        Favorites
                      </Link>

                      <Link
                        to="/profile"
                        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-100"
                      >
                        <User size={19} />
                        Profile
                      </Link>

                      <div className="my-3 border-t border-slate-200" />

                      <button
                        onClick={handleLogout}
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          text-red-600
                          transition
                          hover:bg-red-50
                        "
                      >
                        <LogOut size={19} />
                        Logout
                      </button>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>
          )}
        </div>        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-3
            shadow-md
            transition
            hover:border-blue-200
            hover:bg-blue-50
            lg:hidden
          "
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </motion.button>

      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              border-t
              border-slate-200
              bg-white/95
              px-6
              py-6
              backdrop-blur-xl
              lg:hidden
            "
          >
            <MobileMenu
              isOpen={isOpen}
              closeMenu={() =>
                setIsOpen(false)
              }
            />
          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;