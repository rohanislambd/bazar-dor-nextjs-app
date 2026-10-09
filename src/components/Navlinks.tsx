import { ICategroy } from "@/types/type";
import Link from "next/link";
import React from "react";
import CategoryLinks from "./CategoryLinks";

const Navlinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const data: ICategroy[] = await res.json();
  // console.log(data);

  return (
    <div className="container mx-auto flex mt-4 space-x-9 px-3">
      <div className="flex flex-wrap">
        {data.map((category) => (
          <CategoryLinks key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
