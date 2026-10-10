
const HomeSkeleton = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#F0F5F0]">
    

      {/* Main Content */}
      <div className="mx-auto max-w-[1450px] px-4 py-7 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <section className="flex min-h-[270px] flex-col justify-between gap-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex-1 space-y-5">
            <div className="h-12 w-40 rounded-xl bg-gray-200" />
            <div className="h-8 w-full max-w-[440px] rounded bg-gray-200" />

            <div className="space-y-2">
              <div className="h-4 w-full max-w-[650px] rounded bg-gray-100" />
              <div className="h-4 w-4/5 max-w-[500px] rounded bg-gray-100" />
            </div>

            <div className="h-9 w-28 rounded bg-gray-200" />
          </div>

          <div className="flex justify-center sm:w-[240px]">
            <div className="h-36 w-40 rounded-2xl bg-gray-200 sm:h-40 sm:w-44" />
          </div>
        </section>

        {/* Trending Heading */}
        <div className="mb-4 mt-9 flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gray-200" />
          <div className="h-5 w-36 rounded bg-gray-200" />
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <div className="h-[60px] w-[60px] shrink-0 rounded-xl bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-5 w-28 rounded bg-gray-200" />
                  <div className="h-3 w-16 rounded bg-gray-100" />
                </div>
              </div>

              {/* Price and Trend */}
              <div className="mt-4 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-24 rounded bg-gray-100" />
                  <div className="h-5 w-20 rounded bg-gray-200" />
                </div>

                <div className="h-6 w-16 rounded-full bg-gray-200" />
              </div>
            </article>
          ))}
        </section>
      </div>

      {/* Footer Skeleton */}
      <footer className="mt-6 border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-3 px-4 py-6 sm:flex-row sm:justify-between">
          <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          <div className="h-4 w-72 max-w-full rounded bg-gray-100" />
        </div>
      </footer>
    </main>
  );
};

export default HomeSkeleton;
