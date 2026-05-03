export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10 animate-pulse">

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left */}
        <div>
          <div className="w-full h-[260px] bg-gray-300 rounded-xl"></div>

          <div className="h-6 bg-gray-300 mt-4 w-3/4 rounded"></div>

          <div className="h-4 bg-gray-300 mt-3 w-full rounded"></div>
          <div className="h-4 bg-gray-300 mt-2 w-5/6 rounded"></div>

          <div className="flex gap-2 mt-4">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <div className="h-4 w-24 bg-gray-300 rounded mb-1"></div>
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="h-[300px] bg-gray-200 rounded-xl"></div>

      </div>
    </div>
  );
}