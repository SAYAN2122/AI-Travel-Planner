import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import Button from "../common/Button";

function MobileMenu({ isOpen, closeMenu }) {
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
            border-orange-100
            bg-white
            p-6
            shadow-xl
            lg:hidden
          "
        >
          <div className="space-y-2">
            <NavLinks
              mobile
              onClick={closeMenu}
            />

            <div className="pt-4 space-y-3">
              <Button
                variant="secondary"
                className="w-full"
              >
                Login
              </Button>

              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;