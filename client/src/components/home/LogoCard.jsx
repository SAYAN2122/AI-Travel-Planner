import { motion } from "framer-motion";

function LogoCard({ name }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      className="
        flex
        h-20
        items-center
        justify-center
        rounded-2xl
        border
        border-orange-100
        bg-white
        shadow-sm
      "
    >
      <span className="text-lg font-semibold tracking-wide text-slate-500">
        {name}
      </span>
    </motion.div>
  );
}

export default LogoCard;