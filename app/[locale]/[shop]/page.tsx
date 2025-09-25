import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server';


type Params = {
  params : {
    locale : string,
    shop : string
  }
}

export async function generateMetadata({ params } : Params): Promise<Metadata> {
  const { locale, shop } = params;
  const t = await getTranslations({ locale })
  const translatedShop = t('shopSlug')
  const tranlastedDescription = t('browseBrand')

  return {
    title: translatedShop.toUpperCase(),
    description: `${tranlastedDescription}`,
  }
}

export default async function Page({ params } : Params){
  const { locale, shop } = await Promise.resolve(params)
  const t = await getTranslations({ locale }) 

  
  return (
    
    <main>
      <h1>Brands</h1>
    </main>

  )
}

