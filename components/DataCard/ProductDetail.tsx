import React from 'react'
import ProductDetailImage from '../Image/ProductDetailImage'
import CartButton from '../Button/CartButton'

type ProductData = {
    id : number,
    name : string,
    description_hu : string,
    description_en : string,
    price : number,
    image : string,
    url : string
    phonetic_name : string
}

type ProductDetailProps = {
    productData : ProductData
    locale : string
    cartButtonText ?: string
}

const ProductDetail = ({ productData, locale, cartButtonText } : ProductDetailProps) => {

    const description = locale === 'hu' ? productData.description_hu : productData.description_en

  return (
    <section className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6 mt-10">
      {/* Termék kép */}
      <ProductDetailImage imageType={productData.image} nameType={productData.name} />

      {/* Termék információk */}
      <div className="flex flex-col justify-between md:w-1/2">
        <div className=''>
          <h1 className="text-2xl font-bold mb-10">{productData.phonetic_name}</h1>
          <p className="text-gray-700 mb-10">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-2xl font-semibold">{productData.price.toLocaleString()} € + VAT</span>
            <CartButton cartButtonText={cartButtonText}/>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail