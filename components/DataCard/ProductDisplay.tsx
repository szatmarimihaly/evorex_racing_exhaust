import React from 'react'
import ProductImage from '../Image/ProductDetailImage'

type ProductDisplayProps = {
  name: string
  price: number
  description: string
  image: string
}

const ProductDisplay = ({ name, price, description, image }: ProductDisplayProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <ProductImage imageType={image} nameType={name} />
        <div className="flex flex-col justify-between">
          <p className="text-lg">{description}</p>
          <h2 className="font-bold text-2xl mt-4">
            {price.toLocaleString()}€
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
