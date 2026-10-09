import { IProduct } from '@/types/type';
import React from 'react';
import ProductCard from './ProductCard';

const Products =async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
     
    const products: IProduct[] = await res.json();
    // console.log(products);

    const risers = products.filter((product) => product.change.dir === 'up').sort((a, b)=> b.change.pct - a.change.pct).slice(0, 6);

    // console.log(risers);

    const fallers = products.filter((product) => product.change.dir === "down").sort((a,b) => b.change.pct - a.change.pct).slice(0,6);

  
     
    return (
        <div className='mt-10 mx-3 md:mx-0'>
            <div>
               
               <h2 className='text-[20px] font-bold'><span className='text-red-500'>▲</span> আজ দাম বেড়েছে</h2>
               <div className='grid  md: grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
                 {
                    risers.map((product) => <ProductCard key={product.id} product={product} />)
                 }
               </div>
            </div>
        </div>
    );
};

export default Products;