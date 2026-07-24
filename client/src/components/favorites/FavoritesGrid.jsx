import FavoriteCard from "./FavoriteCard";

function FavoritesGrid({ trips, setTrips }) {
  const handleToggle = (updatedTrip) => {
    if (!updatedTrip.isFavorite) {
      setTrips((prev) =>
        prev.filter(
          (trip) => trip._id !== updatedTrip._id
        )
      );
      return;
    }

    setTrips((prev) =>
      prev.map((trip) =>
        trip._id === updatedTrip._id
          ? updatedTrip
          : trip
      )
    );
  };

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {trips.map((trip) => (
        <FavoriteCard
          key={trip._id}
          trip={trip}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default FavoritesGrid;