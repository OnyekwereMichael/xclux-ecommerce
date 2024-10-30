import React from 'react'
import { client } from '../lib/client'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai'

const Product = () => {
      const fetchProducts = async () => {
        const query = `*[_type == "product"] {
      _id,
      name,
      price,
      "slug": slug.current,
      "details": details,
       "imageUrl": image[0].asset->url
    }`;
        const data = await client.fetch(query);
        return data;
      };
    
      // Fetching the data from Sanity using react-query
      const { data: products, isLoading: productLoading, error: productError } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
      });
    
      if (productLoading) {
        return <div>Loading...</div>;
      }
    
      if (productError) {
        return <div>Error: {productError.message}</div>;
      }
  return (
    <div >
     <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[40%] w-full max-sm:px-4'>
      {products.length > 0 ? (
        products.map((product) => (
          <a href={`/productdetail/${product.slug}`} key={product._id}>
          <div key={product._id} className='relative'>
            <div>
            <img src={product.imageUrl} alt={product.name}   className=''/>
             <div>
              <div className=' outline-none border-0 p-[10px] flex flex-col justify-center items-center absolute lg:bottom-[134px] lg:left-[20px] lg:w-[44px] lg:h-[44px] h-[34px] w-[34px] max-sm:w-[25px] max-sm:h-[25px] bottom-[90px] left-[5%] bg-white opacity-90 rounded-[8px]'>
            <AiOutlineShopping size={14} className='text-black opacity-80 text-3xl max-sm:text-2xl no-underline  font-medium capitalize overflow-hidden whitespace-nowrap text-ellipsis absolute w-full h-full z-2' />
            </div>
            </div>
          
            <h3 className='text-[14px] no-underline lg:text-[20px] font-medium capitalize text-center py-[4px] overflow-hidden whitespace-nowrap text-ellipsis'>{product.name}</h3>
            <p className='text-black text-opacity-60 text-[13px] lg:text-[16px] font-medium w-full max-w-[90%] text-right mb-4 capitalize overflow-hidden whitespace-nowrap text-ellipsis max-sm:'>{product.details}</p>
            <p className='text-[15px] lg:text-[22px]  font-medium capitalize w-full text-center overflow-hidden whitespace-nowrap text-ellipsis'>NGN {product.price}</p>
            </div>
          </div>
    </a>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
    </div>
  )
}

export default Product
