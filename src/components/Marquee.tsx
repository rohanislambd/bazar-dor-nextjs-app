import { IProduct } from "@/types/type";
import React from "react";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products: IProduct[] = await res.json();

  const toBanglaNumber = (value: number) =>
    value.toString().replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);

  return (
    <div className="border-y border-base-300 py-3 bg-[#f8f8f8]">
    <MarqueeText direction="right" duration={10}>
      <div>
        {products.map((product) => (
          <span key={product.id}>
            <span>{product.categoryIcon}</span>
            <span>{product.nameBn} </span>
            <span className="font-semibold">
              {toBanglaNumber(product.today)} টাকা/
              {product.unit === "kg" ? "কেজি" : product.unit} {' '}
            </span>
            <span className={
                product.change.dir ==='up' 
                ? " text-red-400"
                : " text-green-400"
                
            }>
                {product.change.dir === 'up' ? "▲" : "▼"}
                {toBanglaNumber(product.change.pct)}% 
            </span>
            <span className="mr-5"></span>
          </span>
        ))}
      </div>
      </MarqueeText>
    </div>
  );
};

export default Marquee;
