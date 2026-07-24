import { motion } from "framer-motion";

function BackgroundShapes() {
  return (
    <>
      {/* Top Left Glow */}

      <motion.div
        animate={{
          x: [-15, 15, -15],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-52
          -left-52
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-blue-100/40
          blur-[120px]
        "
      />

      {/* Top Right Glow */}

      <motion.div
        animate={{
          x: [15, -15, 15],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-20
          right-[-180px]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-slate-200/40
          blur-[120px]
        "
      />

      {/* Bottom Glow */}

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          left-1/2
          h-[30rem]
          w-[30rem]
          -translate-x-1/2
          rounded-full
          bg-sky-100/30
          blur-[150px]
        "
      />
    </>
  );
}

export default BackgroundShapes;