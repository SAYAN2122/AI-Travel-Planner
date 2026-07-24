import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Sparkles,
  Trash2,
  X,
  ShieldAlert,
} from "lucide-react";

function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-lg overflow-hidden rounded-[34px] border border-white/20 bg-white/90 shadow-[0_35px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl"
          >
            {/* Background Glow */}

            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-500/20 blur-[120px]" />

            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-orange-400/20 blur-[120px]" />

            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-red-50"
            >
              <X
                size={20}
                className="text-slate-700"
              />
            </button>

            {/* Header */}

            <div className="border-b border-slate-200/70 px-8 py-8">

              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2">

                <Sparkles
                  size={16}
                  className="text-red-600"
                />

                <span className="font-semibold text-red-700">

                  AI Safety Check

                </span>

              </div>

              <div className="mt-7 flex justify-center">

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-xl"
                >
                  <AlertTriangle
                    size={42}
                    className="text-white"
                  />
                </motion.div>

              </div>

              <h2 className="mt-7 text-center text-4xl font-black text-slate-900">

                Delete Trip?

              </h2>

              <p className="mx-auto mt-4 max-w-md text-center leading-7 text-slate-600">

                This will permanently remove your saved itinerary,
                hotel recommendations, food suggestions and budget
                analysis from your travel history.

              </p>

            </div>

            {/* Warning */}

            <div className="px-8 pt-8">

              <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 p-6 text-white">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-white/10 p-4">

                    <ShieldAlert
                      size={24}
                      className="text-yellow-300"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-black">

                      AI Warning

                    </h3>

                    <p className="mt-2 leading-7 text-slate-300">

                      Once deleted, this trip cannot be recovered.
                      Make sure you no longer need this itinerary
                      before continuing.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="flex flex-col-reverse gap-4 px-8 py-8 sm:flex-row sm:justify-end">

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={onClose}
                className="rounded-2xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
              >
                Cancel
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={onConfirm}
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-red-300"
              >
                <Trash2 size={18} />

                Delete Forever

              </motion.button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DeleteConfirmationModal;