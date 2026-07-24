import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Sparkles,
  MapPin,
  CalendarDays,
  Wallet,
  Plane,
  Users,
  UtensilsCrossed,
  Wand2,
} from "lucide-react";

function EditTripModal({
  isOpen,
  onClose,
  trip,
  onSave,
}) {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelStyle: "Budget",
    travelers: 1,
    foodPreference: "Vegetarian",
  });

  useEffect(() => {
    if (trip) {
      setFormData({
        destination: trip.destination,
        days: trip.days,
        budget: trip.budget,
        travelStyle: trip.travelStyle,
        travelers: trip.travelers,
        foodPreference: trip.foodPreference,
      });
    }
  }, [trip]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(trip._id, formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 backdrop-blur-md px-4 py-8"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[34px] border border-white/30 bg-white/85 shadow-[0_30px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl"
          >
            {/* Decorative Background */}

            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-[120px]" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-300 hover:rotate-90 hover:bg-red-50"
            >
              <X
                size={20}
                className="text-slate-700"
              />
            </button>

            {/* Header */}

            <div className="relative border-b border-slate-200/70 px-8 py-8">

              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2">

                <Sparkles
                  size={16}
                  className="text-indigo-600"
                />

                <span className="font-semibold text-indigo-700">

                  AI Trip Editor

                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black text-slate-900">

                Edit Your Trip

              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">

                Modify your travel preferences and let the AI planner keep
                everything organized for your upcoming journey.

              </p>

              {/* Quick Stats */}

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 p-4 text-white">

                  <div className="flex items-center gap-3">

                    <MapPin size={20} />

                    <div>

                      <p className="text-xs uppercase tracking-wide text-indigo-100">

                        Destination

                      </p>

                      <h4 className="font-bold">

                        {formData.destination || "Not Selected"}

                      </h4>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-600 p-4 text-white">

                  <div className="flex items-center gap-3">

                    <CalendarDays size={20} />

                    <div>

                      <p className="text-xs uppercase tracking-wide text-cyan-100">

                        Duration

                      </p>

                      <h4 className="font-bold">

                        {formData.days || 0} Days

                      </h4>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 p-4 text-white">

                  <div className="flex items-center gap-3">

                    <Wallet size={20} />

                    <div>

                      <p className="text-xs uppercase tracking-wide text-emerald-100">

                        Budget

                      </p>

                      <h4 className="font-bold">

                        ₹{formData.budget || 0}

                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="relative space-y-8 p-8"
            >              {/* Trip Details */}

              <div className="grid gap-6">

                <InputField
                  label="Destination"
                  name="destination"
                  icon={MapPin}
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Manali, Goa, Bali..."
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <InputField
                  label="Duration (Days)"
                  name="days"
                  type="number"
                  icon={CalendarDays}
                  value={formData.days}
                  onChange={handleChange}
                  placeholder="Number of days"
                />

                <InputField
                  label="Budget"
                  name="budget"
                  type="number"
                  icon={Wallet}
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget in ₹"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <SelectField
                  label="Travel Style"
                  name="travelStyle"
                  icon={Plane}
                  value={formData.travelStyle}
                  onChange={handleChange}
                  options={[
                    "Budget",
                    "Comfort",
                    "Luxury",
                  ]}
                />

                <InputField
                  label="Travelers"
                  name="travelers"
                  type="number"
                  icon={Users}
                  value={formData.travelers}
                  onChange={handleChange}
                  placeholder="Number of travelers"
                />

              </div>

              <SelectField
                label="Food Preference"
                name="foodPreference"
                icon={UtensilsCrossed}
                value={formData.foodPreference}
                onChange={handleChange}
                options={[
                  "Vegetarian",
                  "Non-Vegetarian",
                  "Vegan",
                ]}
              />

              {/* AI Suggestion */}

              <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 p-6 text-white">

                <div className="flex items-start gap-4">

                  <div className="rounded-2xl bg-white/10 p-4">

                    <Wand2
                      size={24}
                      className="text-yellow-300"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-black">

                      AI Recommendation

                    </h3>

                    <p className="mt-2 leading-7 text-slate-300">

                      After saving these changes, your itinerary,
                      recommendations and budget calculations will
                      automatically reflect the updated travel
                      preferences.

                    </p>

                  </div>

                </div>

              </div>              {/* Footer */}

              <div className="flex flex-col-reverse gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-end">

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
                >
                  Cancel
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-indigo-300"
                >
                  Save Changes
                </motion.button>

              </div>

            </form>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

/* ======================================================
   Reusable Input Component
====================================================== */

function InputField({
  label,
  icon: Icon,
  ...props
}) {
  return (
    <div>

      <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

        <Icon
          size={18}
          className="text-indigo-600"
        />

        {label}

      </label>

      <input
        {...props}
        required
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      />

    </div>
  );
}

/* ======================================================
   Reusable Select Component
====================================================== */

function SelectField({
  label,
  icon: Icon,
  options,
  ...props
}) {
  return (
    <div>

      <label className="mb-2 flex items-center gap-2 font-semibold text-slate-700">

        <Icon
          size={18}
          className="text-indigo-600"
        />

        {label}

      </label>

      <select
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
      >

        {options.map((option) => (

          <option
            key={option}
            value={option}
          >
            {option}
          </option>

        ))}

      </select>

    </div>
  );
}

export default EditTripModal;