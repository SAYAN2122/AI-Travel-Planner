import {
  Minus,
  Plus,
  Users,
} from "lucide-react";

function TravelerCounter({
  travelers,
  setTravelers,
}) {
  const increase = () => {
    if (travelers < 20) {
      setTravelers(travelers + 1);
    }
  };

  const decrease = () => {
    if (travelers > 1) {
      setTravelers(travelers - 1);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-slate-900">
            Number of Travelers
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Select how many people are travelling.
          </p>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

          <Users
            size={26}
            className="text-blue-600"
          />

        </div>

      </div>

      {/* Counter */}

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">

        <button
          type="button"
          onClick={decrease}
          disabled={travelers === 1}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-slate-300
            bg-white
            text-slate-700
            transition-all
            hover:border-blue-300
            hover:bg-blue-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Minus size={20} />
        </button>

        <div className="text-center">

          <h3 className="text-4xl font-bold text-slate-900">
            {travelers}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {travelers === 1
              ? "Traveler"
              : "Travelers"}
          </p>

        </div>

        <button
          type="button"
          onClick={increase}
          disabled={travelers === 20}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-600
            text-white
            transition-all
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Plus size={20} />
        </button>

      </div>

      {/* Helper Text */}

      <p className="mt-5 text-center text-sm text-slate-500">
        You can plan trips for up to
        <span className="font-semibold text-slate-700">
          {" "}20 travelers
        </span>
        .
      </p>

    </div>
  );
}

export default TravelerCounter;