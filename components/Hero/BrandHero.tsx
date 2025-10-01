import React from 'react'

type Props = {
    brandText : string
}

const BrandHero = ({ brandText } : Props) => {



  return (
    <h2 className='text-center mt-10 text-4xl font-bold italic'>{brandText}</h2>
  )
}

export default BrandHero