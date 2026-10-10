import { ICategroy } from "@/types/type";
import React from "react";
import CategoryLinks from "./CategoryLinks";

const Navlinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
 
  if(!res.ok){
    throw new Error("Failed to fetch")
  }

  const data: ICategroy[] = await res.json();
  // console.log(data);

  return (
    <div className="container mx-auto flex mt-4 space-x-9 px-3">
      <div className="flex overflow-x-auto whitespace-nowrap md:flex-nowrap md:overflow-visible">
        {data.map((category) => (
          <CategoryLinks key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Navlinks;
