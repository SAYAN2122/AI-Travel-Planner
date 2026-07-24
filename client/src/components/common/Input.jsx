function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  icon,
  disabled = false,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-xl
            border
            border-slate-300
            bg-white
            py-3
            pr-4
            ${icon ? "pl-11" : "pl-4"}
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-200
            hover:border-slate-400
            focus:border-blue-600
            focus:ring-4
            focus:ring-blue-100
            disabled:cursor-not-allowed
            disabled:bg-slate-100
            disabled:text-slate-400
          `}
        />
      </div>
    </div>
  );
}

export default Input;