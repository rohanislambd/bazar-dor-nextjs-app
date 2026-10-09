"use client";

import { ICategroy } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategroyLinks {
category: ICategroy;
}

const CategoryLinks = ({ category }: ICategroyLinks) => {
const pathname = usePathname();
const isActive = pathname === `/category/${category.slug}`;

return (
<Link
href={`/category/${category.slug}`}
className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
        isActive
          ? "bg-[#047F39] font-semibold text-white"
          : "hover:bg-[#047F39] hover:text-white"
      }`}
> <span>{category.icon}</span> <span>{category.nameBn}</span> </Link>
);
};

export default CategoryLinks;
