import HistoryCard from "./HistoryCard";

function HistoryGrid({ trips }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {trips.map((trip) => (
        <HistoryCard
          key={trip._id}
          trip={trip}
        />
      ))}
    </div>
  );
}

export default HistoryGrid;