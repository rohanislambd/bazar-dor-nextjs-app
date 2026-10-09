import CategoryHeader from "@/components/CategoryHeader";
import ProductCard from "@/components/ProductCard";
import { toBanglaNumber } from "@/components/shared/common";
import { IProduct } from "@/types/type";
import Link from "next/link";
import React from "react";

const CategoryDetailPage = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data: IProduct[] = await res.json();

  // console.log(data);
  return (
    <div className="container mx-auto">
      <div className="mt-6">
        
        <div className="bg-[#FFFF] rounded">
            {data.length > 0 && <CategoryHeader total={data.length} product={data[0]} />}
        </div>
      </div>
        <h3 className="mt-4">মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে</h3>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
        {data.map((d) => (
          <Link href={`/products/${d.id}`} key={d.id}>
            {" "}
            <ProductCard product={d}></ProductCard>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
