import { motion } from "framer-motion";

function Input({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
  icon,
  disabled = false,
  className = "",
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">

        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <motion.input
          whileFocus={{
            scale: 1.01,
          }}
          transition={{
            duration: 0.15,
          }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white/80
            backdrop-blur-xl
            py-3.5
            pr-4
            ${icon ? "pl-11" : "pl-4"}
            text-slate-900
            placeholder:text-slate-400
            shadow-sm
            outline-none
            transition-all
            duration-300
            hover:border-blue-300
            hover:shadow-md
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            focus:shadow-lg
            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-400
            ${className}
          `}
        />

      </div>

    </div>
  );
}

export default Input;