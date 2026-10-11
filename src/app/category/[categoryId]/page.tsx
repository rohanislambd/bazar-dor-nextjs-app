import CategoryHeader from "@/components/CategoryHeader";
import CategoryProductSorting from "@/components/CategoryProductSorting";
import { IProduct } from "@/types/type";
import { notFound } from "next/navigation";
import React from "react";

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );

  if (!res.ok) {
    notFound();
  }
  const data: IProduct[] = await res.json();

  if (data.length === 0) {
    notFound();
  }

  // console.log(data);
  return (
    <div className="container mx-auto ">
      <div className="my-6">
        <div className="bg-[#FFFF] rounded">
          {data.length > 0 && (
            <CategoryHeader total={data.length} product={data[0]} />
          )}
        </div>
      </div>
      {/* sorting */}
      <div>
        <CategoryProductSorting data={data} />
      </div>
    </div>
  );
};

export default CategoryDetailPage;
