import { IProduct } from "@/types/type";
import React from "react";
import { toBanglaNumber } from "./shared/common";
interface IProductCard {
  product: IProduct;
}
const ProductCard = ({ product }: IProductCard) => {
  
//   console.log(product);
  return (
    <div className="shadow  bg-[#FFFF] rounded-xl p-4" id="product">
      <div>
        <div className="flex gap-4 items-center space-y-3">
          <div>
            <p className=" text-4xl p-2 rounded-xl bg-[#F0F5F0]">
              {product.image}
            </p>
          </div>
          <div>
            <h2 className="font-semibold ">{product.nameBn}</h2>
            <p className="text-[12px] ">
              প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
            </p>
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
                product.change.dir === "flat"
                  ? "rounded-xl bg-gray-100 px-2 text-black"
                  : product.change.dir === "up"
                    ? "rounded-xl bg-red-100 px-2 text-red-700"
                    : "rounded-xl bg-green-100 px-2 text-green-700"
              }
            >
              {product.change.dir === "flat"
                ? "—"
                : product.change.dir === "up"
                  ? "▲"
                  : "▼"}{" "}
              {toBanglaNumber(Math.abs(product.change.pct))}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
