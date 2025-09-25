import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';


type Params = {
  params : {
    locale : string,
    shop : string
  }
}

export async function generateMetadata({ params } : Params): Promise<Metadata> {
  const { locale, shop } = await params;
  const t = await getTranslations({ locale })
  const translatedShop = t('shopSlug')
  const tranlastedDescription = t('browseBrand')

  return {
    title: translatedShop.toUpperCase(),
    description: `${tranlastedDescription}`,
  }
}

export default async function Page({ params } : Params){
  const { locale, shop } = await params
  const t = await getTranslations({ locale }) 

  
  return (
    
    <main>
      <h1>Brands</h1>
      <Footer footerCopy={t('footerCopyright')}/>
    </main>

  )
}

