'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';

type ImageProps = {
  imageType: string;
  nameType: string;
  children?: React.ReactNode;
};

const ProductImage = ({ imageType, nameType, children }: ImageProps) => {
  const formats = ['png', 'webp', 'jpg'];
  const [currentFormatIndex, setCurrentFormatIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const { data } = supabase.storage
        .from('products')
        .getPublicUrl(`${imageType}.${formats[currentFormatIndex]}`);
      
      setImageUrl(data.publicUrl);
    };

    loadImage();
  }, [currentFormatIndex, imageType]);

  const handleError = () => {
    if (currentFormatIndex < formats.length - 1) {
      setCurrentFormatIndex(currentFormatIndex + 1);
    }
  };

  if (!imageUrl) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-100 h-100 flex items-center justify-center">
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

export default ProductImage;
