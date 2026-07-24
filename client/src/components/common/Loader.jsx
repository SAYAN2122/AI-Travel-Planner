import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="
          h-12
          w-12
          rounded-full
          border-4
          border-orange-200
          border-t-orange-500
        "
      />
    </div>
  );
}

export default Loader;
