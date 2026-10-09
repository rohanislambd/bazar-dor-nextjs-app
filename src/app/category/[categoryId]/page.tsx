import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/types/type';
import Link from 'next/link';
import React from 'react';

const CategoryDetailPage =async ({params}:{params:{categoryId:string}}) => {
    const {categoryId} = await params;

    const  res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`);
    const data:IProduct[] = await res.json();

    // console.log(data);
    return (
        <div className='container mx-auto'>

            <div>
                {data.length}
            </div>
            
            <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-3 mt-4'>
                {
                    data.map(d => <Link href={`/products/${d.id}`} key={d.id}> <ProductCard  product={d} ></ProductCard> </Link> )
                }
            </div>
        </div>
    );
};

export default CategoryDetailPage;