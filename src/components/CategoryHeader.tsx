import { IProduct } from '@/types/type';
import { toBanglaNumber } from './shared/common';

interface CategoryHeaderProps {
  product: IProduct;
  total:number;
}

const CategoryHeader = ({ product,total }: CategoryHeaderProps) => {
       
  return (
    <div className="flex items-center gap-4 py-6">
      <span className="text-5xl md:text-6xl">{product.categoryIcon}</span>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{product.categoryNameBn}</h1>
        <p className="text-gray-500 text-sm mt-1">{toBanglaNumber(total)} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
      </div>
    </div>
  );
};

export default CategoryHeader;