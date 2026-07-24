function TripCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="h-56 bg-slate-200"></div>

      <div className="p-6">

        {/* Destination */}
        <div className="h-8 bg-slate-200 rounded-lg w-2/3"></div>

        {/* Subtitle */}
        <div className="mt-4 h-4 bg-slate-200 rounded w-full"></div>
        <div className="mt-2 h-4 bg-slate-200 rounded w-5/6"></div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-slate-200 rounded-xl h-16"></div>

          <div className="bg-slate-200 rounded-xl h-16"></div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          <div className="flex-1 bg-slate-200 rounded-xl h-12"></div>

          <div className="flex-1 bg-slate-200 rounded-xl h-12"></div>

        </div>

      </div>

    </div>
  );
}

export default TripCardSkeleton;