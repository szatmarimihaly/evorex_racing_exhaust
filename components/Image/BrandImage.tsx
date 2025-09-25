'use client'
import React, { ReactNode } from 'react'
import Image from 'next/image'

type ImageProps = {
  imageType: string
  nameType: string
  children?: ReactNode
}

const BrandImage = ({ imageType, nameType, children }: ImageProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <Image
          src={`/${imageType}.svg`}
          alt={nameType}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      {children}
    </div>
  )
}

export default BrandImage
