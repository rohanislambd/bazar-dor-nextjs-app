"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { toBanglaNumber } from "@/components/shared/common";
import { IProduct } from "@/types/type";

interface ICategoryProductSortingProps {
  data: IProduct[];
}

type SortOption = "default" | "low-to-high" | "high-to-low";

const CategoryProductSorting = ({
  data,
}: ICategoryProductSortingProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("default");

  const sortedData = [...data].sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.today - b.today;
    }

    if (sortOption === "high-to-low") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <div>
      {/* Sorting */}
      <div className="flex min-h-20 items-center justify-end gap-3 rounded-xl bg-white p-4">
        <label htmlFor="product-sort" className="text-gray-700">
          সাজান
        </label>

        <div className="relative">
          <select
            id="product-sort"
            value={sortOption}
            onChange={(e) =>
              setSortOption(e.target.value as SortOption)
            }
            className="appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-10 text-sm outline-none focus:border-green-600"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">
              দাম: কম থেকে বেশি
            </option>
            <option value="high-to-low">
              দাম: বেশি থেকে কম
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      
      <h3 className="mt-4">
        মোট {toBanglaNumber(sortedData.length)}টি পণ্য দেখানো হচ্ছে
      </h3>

     
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {sortedData.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductSorting;