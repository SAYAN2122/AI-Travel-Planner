import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  User,
  LogOut,
} from "lucide-react";

import NavLinks from "./NavLinks";
import Button from "../common/Button";
import { useAuth } from "../../context/AuthContext";

function MobileMenu({ isOpen, closeMenu }) {
  const navigate = useNavigate();

  const { token, logout } = useAuth();

  const handleNavigation = (path) => {
    closeMenu();
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
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
            mt-4
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-xl
            lg:hidden
          "
        >
          {/* Navigation */}

          <div className="space-y-2">
            <NavLinks
              mobile
              onClick={closeMenu}
            />
          </div>

          {/* Divider */}

          <div className="my-5 border-t border-slate-200" />

          {/* Authentication */}

          {!token ? (
            <div className="space-y-3">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() =>
                  handleNavigation("/login")
                }
              >
                Login
              </Button>

              <Button
                className="w-full"
                onClick={() =>
                  handleNavigation("/signup")
                }
              >
                Create Account
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <Button
                variant="secondary"
                className="w-full justify-start"
                onClick={() =>
                  handleNavigation("/dashboard")
                }
              >
                <LayoutDashboard
                  size={18}
                  className="mr-2"
                />
                Dashboard
              </Button>

              <Button
                variant="secondary"
                className="w-full justify-start"
                onClick={() =>
                  handleNavigation("/history")
                }
              >
                <History
                  size={18}
                  className="mr-2"
                />
                My Trips
              </Button>

              <Button
                variant="secondary"
                className="w-full justify-start"
                onClick={() =>
                  handleNavigation("/profile")
                }
              >
                <User
                  size={18}
                  className="mr-2"
                />
                Profile
              </Button>

              <Button
                className="w-full justify-start bg-red-500 hover:bg-red-600"
                onClick={handleLogout}
              >
                <LogOut
                  size={18}
                  className="mr-2"
                />
                Logout
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;