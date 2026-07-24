import {
  Briefcase,
  Crown,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const styles = [
  {
    id: "Budget",
    title: "Budget",
    description:
      "Affordable hotels and cost-effective experiences.",
    icon: Wallet,
  },
  {
    id: "Comfort",
    title: "Comfort",
    description:
      "Balanced stays with quality attractions and dining.",
    icon: Briefcase,
  },
  {
    id: "Luxury",
    title: "Luxury",
    description:
      "Premium hotels and unforgettable experiences.",
    icon: Crown,
  },
];

function TravelStyle({
  selected,
  setSelected,
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {styles.map((style) => {
        const Icon = style.icon;

        const active = selected === style.id;

        return (
          <button
            key={style.id}
            type="button"
            onClick={() => setSelected(style.id)}
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              p-6
              text-left
              transition-all
              duration-300

              ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              }
            `}
          >
            {/* Selected Badge */}

            {active && (
              <div className="absolute right-5 top-5">
                <CheckCircle2
                  size={22}
                  className="text-blue-600"
                />
              </div>
            )}

            {/* Icon */}

            <div
              className={`
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl

                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600"
                }
              `}
            >
              <Icon size={28} />
            </div>

            {/* Title */}

            <h3 className="text-xl font-bold text-slate-900">
              {style.title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {style.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default TravelStyle;