import React from 'react'

type Props = {
    brandText : string
}

const BrandButton = ({ brandText } : Props) => {
  return (
    <div className='py-10 font-bold text-2xl'>{brandText}</div>
  )
}

export default BrandButton