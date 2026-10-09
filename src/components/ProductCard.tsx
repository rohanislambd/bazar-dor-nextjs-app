import { IProduct } from "@/types/type";
import React from "react";
interface IProductCard {
  product: IProduct;
}
const ProductCard = ({ product }: IProductCard) => {
  const toBanglaNumber = (value: number) =>
    String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
  console.log(product);
  return (
    <div className="shadow  bg-[#FFFF] rounded-xl p-4" id="product">
      <div>
        <div className="flex gap-4 items-center space-y-3">
           <div>
              <p className=" text-4xl p-2 rounded-xl bg-[#F0F5F0]">{product.image}</p>
            </div> 
            <div>
                 <h2 className="font-semibold ">{product.nameBn}</h2>
                 <p className="text-[12px] ">প্রতি {product.unit === "kg" ? 'কেজি' : product.unit}</p>
            </div>

        </div>

        <div className="flex justify-between items-center">
          <div>
            <h4>আজকের দাম</h4>
            <p>
              {" "}
              <span className="font-bold">
                {toBanglaNumber(product.today)}
              </span>{" "}
              টাকা
            </p>
          </div>

          <div>
            <span
              className={
                product.change.dir === "up"
                  ? "bg-red-100 rounded-xl px-2 text-red-700"
                  : "bg-green-100 rounded-xl px-2 text-green-700"
              }
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {toBanglaNumber(product.change.pct)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
