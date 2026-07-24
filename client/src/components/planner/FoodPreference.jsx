import {
  Leaf,
  Drumstick,
  Sprout,
  CheckCircle2,
} from "lucide-react";

const foods = [
  {
    id: "Vegetarian",
    title: "Vegetarian",
    description:
      "Plant-based meals with dairy and fresh ingredients.",
    icon: Leaf,
  },
  {
    id: "Non-Vegetarian",
    title: "Non-Vegetarian",
    description:
      "Includes chicken, meat, fish and seafood options.",
    icon: Drumstick,
  },
  {
    id: "Vegan",
    title: "Vegan",
    description:
      "100% plant-based meals with no animal products.",
    icon: Sprout,
  },
];

function FoodPreference({
  selected,
  setSelected,
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {foods.map((food) => {
        const Icon = food.icon;

        const active = selected === food.id;

        return (
          <button
            key={food.id}
            type="button"
            onClick={() => setSelected(food.id)}
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
              {food.title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {food.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default FoodPreference;