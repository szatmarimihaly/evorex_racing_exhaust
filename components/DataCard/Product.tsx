import React from 'react'
import ProductImage from '../Image/ProductImage'
import Link from 'next/link'

type ProductListProps = {
    id : number,
    brand_id ?: number,
    name : string,
    description : string,
    price : number,
    image : string
    url : string
}

type Props = {
    types: ProductListProps[],
    locale: string
    shopSlug: string
    modalText : string
    brand : string
}

const Product = ({ types, locale, modalText, shopSlug, brand } : Props) => {
  return (
    <div className='w-full space-y-4 mt-10 max-w-7xl mx-auto px-4 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {types.map((type) => (
                <div
                    key={type.id}
                    className='flex flex-col items-center justify-evenly p-4 rounded-lg shadow-xl'
                >
                    <ProductImage imageType={type.image} nameType={type.name} />
                    <h3 className='text-xl font-semibold'>{type.name}</h3>

                    <Link 
                        href={`/${locale}/${shopSlug}/${brand}/${type.url}`} 
                        className='w-full mt-10 bg-black text-white px-4 py-2 rounded text-center font-semibold'
                    >
                        {modalText}
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product