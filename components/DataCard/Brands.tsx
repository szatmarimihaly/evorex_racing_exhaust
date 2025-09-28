import React from 'react'
import BrandImage from '../Image/BrandImage'
import LinkButton from '../Button/LinkButton'

type BrandListProps = {
    id: number,
    slug: string,
    image: string,
    name : string
}

type Props = {
    types: BrandListProps[],
    locale: string,
    navigateName : string
    shopSlug: string
}

const Brands = ({ types, locale, navigateName, shopSlug } : Props) => {
  return (
    <div className='w-full space-y-4 mt-10 max-w-7xl mx-auto px-4 mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {types.map((type) => (
                <div
                    key={type.id}
                    className='flex flex-col items-center justify-evenly p-4 rounded-lg shadow-xl'
                >
                    
                    <BrandImage imageType={type.image} nameType={type.name} />
                    <LinkButton href={`/${locale}/${shopSlug}/${type.slug}`} text={navigateName} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Brands