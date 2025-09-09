import React from 'react'
import Products from '../product.js'
import ProductCard from './ProductCard';
export default function Card() {
    return (
        <>  
           <h1 className='text-5xl text-center font-bold p-3 shadow-2xl w-2/4 ml-100 m-3 bg-blue-200'>Some of our top Products</h1>
            <div className='flex flex-wrap justify-evenly p-4'>
                
                {Products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </>

    )
}
