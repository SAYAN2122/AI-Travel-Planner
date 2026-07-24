import { UtensilsCrossed } from "lucide-react";

function FoodSection({ foods }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <UtensilsCrossed
          className="text-orange-500"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          Food Recommendations
        </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {foods.map((food, index) => (
          <div
            key={index}
            className="rounded-full bg-orange-100 px-5 py-3 font-semibold text-orange-700 transition hover:scale-105"
          >
            🍽️ {food}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSection;