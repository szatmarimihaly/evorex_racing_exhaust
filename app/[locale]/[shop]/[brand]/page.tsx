import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import BrandHero from '@/components/Hero/BrandHero'
import { supabase } from '@/lib/supabaseClient'
import { notFound } from 'next/navigation'
import Product from '@/components/DataCard/Product'

type Params = {
    params : {
        locale : string,
        brand : string,
        shop: string
    }

}

export async function generateMetadata({ params } : Params) : Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale })
    const translatedBrand = t('brandSlug')
    const brandDescription = t('browseModel')
    
    return {
        title: `${translatedBrand}`,
        description: `${brandDescription}`
    }
}


    export default async function Page({ params } : Params) {
    
        const { locale, brand } = await params
        const t = await getTranslations({ locale })

        const { data: brandData, error: brandError } = await supabase
            .from('brands')
            .select('id')
            .eq('slug', brand.toLowerCase())
            .single(); // egy brand-nek kell lennie

        if (brandError || !brandData) {
            console.error('Brand not found:', brandError);
            notFound();
        }

        const brandId = brandData.id;

        // 2️⃣ Lekérdezzük a termékeket a "products" táblából a brand ID alapján
        const { data: products, error: productsError } = await supabase
            .from('products')
            .select('id, name, description, price, image, url')
            .eq('brand_id', brandId);

        if (productsError) {
            console.error('Products fetch error:', productsError);
            notFound();
        }       

        return (
            <>
                <BrandHero brandText={brand.toLocaleUpperCase()}/>
                <Product types={products ?? []} locale={locale} brand={brand} shopSlug='shop' modalText={t('toModal')}/>
            </>
        )
    }