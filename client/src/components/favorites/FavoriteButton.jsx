import { useState } from "react";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

import { toggleFavorite } from "../../services/travelService";

function FavoriteButton({
  tripId,
  isFavorite,
  onToggle,
}) {
  const [loading, setLoading] = useState(false);

  const handleFavorite = async () => {
    if (loading) return;

    try {
      setLoading(true);

      const response = await toggleFavorite(tripId);

      toast.success(response.message);

      if (onToggle) {
        onToggle(response.data);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleFavorite}
      disabled={loading}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
        isFavorite
          ? "bg-red-100 text-red-600 hover:bg-red-200"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      <Heart
        size={18}
        fill={isFavorite ? "currentColor" : "none"}
      />

      {isFavorite
        ? "Favorited"
        : "Favorite"}
    </button>
  );
}

export default FavoriteButton;