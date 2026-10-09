import { IProduct } from '@/types/type';
import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';

const Products =async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
     
    const products: IProduct[] = await res.json();
    // console.log(products);

    const risers = products.filter((product) => product.change.dir === 'up').sort((a, b)=> b.change.pct - a.change.pct).slice(0, 6);

    // console.log(risers);

   const fallers = products
  .filter((product) => product.change.dir === "down")
  .sort(
    (a, b) =>
      Math.abs(b.change.pct) - Math.abs(a.change.pct)
  )
  .slice(0, 6);

     const toBanglaNumber = (value: number) =>
    String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)]);
     
    return (
        <div className='mt-10 mx-3 md:mx-0'>
            {/* Today risers product */}
            <div>
               <h2 className='text-[20px] font-bold'><span className='text-red-500'>▲</span> আজ দাম বেড়েছে</h2>
               <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
                 {
                    risers.map((product) => <Link href={`/products/${product.id}`} key={product.id}> <ProductCard product={product} /> </Link> )
                 }
               </div>
            </div>


            {/* Today fallers product */}
            <div className='mt-10'>
               <h2 className='text-[20px] font-bold'><span className='text-green-500'>▼</span> আজ দাম কমেছে</h2>
               <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
                 {
                    fallers.map((product) =>  <Link href={`/products/${product.id}`} key={product.id}> <ProductCard product={product} /> </Link>)
                 }
               </div>
            </div>


            {/* All Product */}
            <div className='mt-10'>
               <h2 className='text-[20px] font-bold'>সব পণ্য</h2>
               <p>মোট <span>{toBanglaNumber(products.length)}</span> টি পণ্য দেখানো হচ্ছে</p>
               <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
                 {
                    products.map((product) => <Link href={`/products/${product.id}`} key={product.id}> <ProductCard product={product} /> </Link>)
                 }
               </div>
            </div>


        </div>
    );
};

export default Products;