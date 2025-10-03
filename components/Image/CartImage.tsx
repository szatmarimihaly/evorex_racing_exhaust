'use client'
import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'
import { useState } from 'react'

type ImageProps = {
  imageType: string
  nameType: string
  children?: ReactNode
}


const CartImage = ({ imageType, nameType, children }: ImageProps) => {
  const formats = ['png', 'webp', 'jpg'];
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);

  const handleError = () => {
    if (currentFormatIndex < formats.length - 1) {
      setCurrentFormatIndex(currentFormatIndex + 1);
    }
  };

  const src = `/products/${imageType}.${formats[currentFormatIndex]}`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-30 h-30 flex items-center justify-center">
        <Image
          src={src}
          alt={nameType}
          fill
          className="object-contain"
          onError={handleError}
          loading="lazy"
        />
      </div>
      {children}
    </div>
  );
};

export default CartImage