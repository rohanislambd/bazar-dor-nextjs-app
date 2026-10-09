import React from "react";
import { toBanglaNumber } from "./shared/common";

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProductDetailCardProps {
  product: IMarket;
}

const ProductDetailCard = ({ product }: IProductDetailCardProps) => {
 

  const average = (product.min + product.max) / 2;

  return (
    <div className="grid grid-cols-5 items-center gap-3 border-b border-gray-200 px-4 py-3 text-sm transition-colors hover:bg-green-50">
      <div className="font-medium text-gray-800">{product.market}</div>

      <div className="text-gray-600">{product.division}</div>

      <div className="text-right text-red-700 ">
        {toBanglaNumber(product.min)} টাকা
      </div>

      <div className="text-right text-green-600">
        {toBanglaNumber(product.max)} টাকা
      </div>

      <div className="text-right font-semibold text-blue-700">
        {toBanglaNumber(average)} টাকা
      </div>
    </div>
  );
};

export default ProductDetailCard;
