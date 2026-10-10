
const ProductDetailSkeleton = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#F0F5F0]">
      <div className="mx-auto max-w-6xl space-y-7 px-4 py-8 sm:px-6">
        {/* Product Header */}
        <section className="flex flex-col justify-between gap-5 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-4">
            <div className="h-[68px] w-[68px] shrink-0 rounded-xl bg-gray-200" />

            <div className="space-y-2">
              <div className="h-7 w-28 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-100" />
              <div className="h-4 w-52 max-w-full rounded bg-gray-100" />
            </div>
          </div>

          {/* Current Price */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-[#F0F5F0] px-5 py-4 sm:min-w-[90px]">
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="h-7 w-16 rounded bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-100" />
            <div className="h-5 w-14 rounded-full bg-gray-200" />
          </div>
        </section>

        {/* Price Summary */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5 h-5 w-36 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-xl bg-[#F0F5F0] p-4"
              >
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-6 w-24 rounded bg-gray-200" />
                <div className="h-3 w-32 max-w-full rounded bg-gray-100" />
              </div>
            ))}
          </div>

          {/* Market Table Heading */}
          <div className="mb-4 mt-6 h-5 w-48 rounded bg-gray-200" />

          {/* Desktop Table */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-5 gap-4 border-y border-gray-200 px-3 py-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 rounded bg-gray-200"
                />
              ))}
            </div>

            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-5 gap-4 border-b border-gray-200 px-3 py-4"
              >
                {Array.from({ length: 5 }).map((_, j) => (
                  <div
                    key={j}
                    className={`h-4 rounded ${
                      j === 0 ? "w-28" : "w-16"
                    } bg-gray-100`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile Table Rows */}
          <div className="space-y-3 sm:hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="space-y-3 rounded-lg border border-gray-100 p-3"
              >
                <div className="h-4 w-32 rounded bg-gray-200" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-4 rounded bg-gray-100" />
                  <div className="h-4 rounded bg-gray-100" />
                  <div className="h-4 rounded bg-gray-100" />
                  <div className="h-4 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailSkeleton;
