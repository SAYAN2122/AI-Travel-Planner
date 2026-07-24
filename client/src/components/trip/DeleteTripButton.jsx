import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { deleteTrip } from "../../services/travelService";

function DeleteTripButton({ tripId }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTrip(tripId);

      toast.success("Trip deleted successfully.");

      navigate("/history");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete trip.");
    }
  };

  return (
    <div className="mt-10 flex justify-end">
      <button
        onClick={handleDelete}
        className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
      >
        <Trash2 size={20} />
        Delete Trip
      </button>
    </div>
  );
}

export default DeleteTripButton;