
const CategorySkeleton = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#F0F5F0]">
    

      {/* Main Content */}
      <section className="mx-auto max-w-362 px-4 py-6 sm:px-6 lg:px-8">
        {/* Category Banner */}
        <div className="flex h-25] items-center gap-5 rounded-lg bg-white p-4 sm:p-6">
          <div className="h-14 w-14 shrink-0 rounded-2xl bg-gray-200" />
          <div className="space-y-3">
            <div className="h-7 w-28 rounded bg-gray-200" />
            <div className="h-4 w-52 max-w-full rounded bg-gray-100" />
          </div>
        </div>

        {/* Sort Bar */}
        <div className="mt-6 flex h-19 items-center justify-end gap-3 rounded-xl bg-white px-5">
          <div className="h-4 w-12 rounded bg-gray-200" />
          <div className="h-10 w-36 rounded-lg border border-gray-100 bg-gray-100" />
        </div>

        {/* Results Count */}
        <div className="mb-4 mt-5 h-5 w-44 rounded bg-gray-200" />

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              {/* Product Information */}
              <div className="flex items-center gap-4">
                <div className="h-15 w-15 shrink-0 rounded-xl bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-5 w-32 max-w-full rounded bg-gray-200" />
                  <div className="h-3 w-16 rounded bg-gray-100" />
                </div>
              </div>

              {/* Price Information */}
              <div className="mt-4 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-24 rounded bg-gray-100" />
                  <div className="h-5 w-20 rounded bg-gray-200" />
                </div>

                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="mt-5 border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-362 flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          <div className="h-4 w-72 max-w-full rounded bg-gray-100" />
        </div>
      </footer>
    </main>
  );
};

export default CategorySkeleton;
