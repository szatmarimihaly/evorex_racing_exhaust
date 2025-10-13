'use client'
import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

type ImageProps = {
  imageType: string
  nameType: string
  children?: ReactNode
}


const CartImage = ({ imageType, nameType, children }: ImageProps) => {
  const formats = ['png', 'webp', 'jpg'];
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    const loadImage = async() => {
      const { data } = supabase.storage
        .from('products')
        .getPublicUrl(`${imageType}.${formats[currentFormatIndex]}`)

      setImageUrl(data.publicUrl)
    }

    loadImage()
  }, [currentFormatIndex, imageType])

  const handleError = () => {
    if (currentFormatIndex < formats.length - 1) {
      setCurrentFormatIndex(currentFormatIndex + 1);
    }
  };

  if(!imageUrl) return <div>Loading...</div>

  const src = `/products/${imageType}.${formats[currentFormatIndex]}`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-30 h-30 flex items-center justify-center">
        <Image
          src={imageUrl}
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