import { motion } from "framer-motion";

function FeatureCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        h-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-200
        hover:shadow-lg
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-xl
          bg-slate-100
          transition-colors
          duration-300
          group-hover:bg-blue-50
        "
      >
        <Icon
          size={26}
          className="
            text-slate-700
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-7
          text-xl
          font-semibold
          tracking-tight
          text-slate-900
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4
          text-[15px]
          leading-7
          text-slate-600
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;