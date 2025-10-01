import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { supabase } from '@/lib/supabaseClient'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/DataCard/ProductDetail'

type Params = {
    params : {
        locale : string
        brand : string
        product : string
    }
}

export async function generateMetadata({ params } : Params) : Promise<Metadata>{
    const { locale, brand, product } = await params;
    const t = await getTranslations({ locale })

    return {
        title : `${product} - ${brand.toUpperCase()}`,
        description : t('productSite')
    }
}

export default async function Page({ params } : Params) {
  
    const { locale, brand, product } = await params;
    const t = await getTranslations({ locale })

    const { data:productData, error: productError } = await supabase
        .from('products')
        .select('id, name, phonetic_name, description_hu, description_en, price, image, url')
        .eq('url', product)
        .single()

    if (productError || !productData) {
        console.error('Product not found:', productError)
        notFound()
    }

    return (
        <main>
            <ProductDetail productData={productData} locale={locale} cartButtonText={t('addToCart')}/>
        </main>
  )
}

