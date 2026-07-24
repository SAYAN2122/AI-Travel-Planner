function Badge({
  children,
  color = "orange",
}) {
  const colors = {
    orange: "bg-orange-100 text-orange-700",

    teal: "bg-teal-100 text-teal-700",

    amber: "bg-amber-100 text-amber-700",

    green: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-4
        py-1.5
        text-sm
        font-semibold
        ${colors[color]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;