import { Backpack } from "lucide-react";

function PackingSection({ packingChecklist }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center gap-3">
        <Backpack
          className="text-orange-500"
          size={30}
        />

        <h2 className="text-3xl font-bold">
          Packing Checklist
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {packingChecklist.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-orange-100 p-4 transition hover:bg-orange-50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
              ✓
            </div>

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackingSection;