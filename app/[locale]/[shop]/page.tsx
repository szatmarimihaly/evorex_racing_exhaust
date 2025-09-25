import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer/Footer';
import { supabase } from '@/lib/supabaseClient';
import Brands from '@/components/DataCard/Brands';

type Params = {
  params : {
    locale : string,
  }
}

export async function generateMetadata({ params } : Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale })
  const translatedShop = t('shopSlug')
  const tranlastedDescription = t('browseBrand')

  return {
    title: translatedShop.toUpperCase(),
    description: `${tranlastedDescription}`,
  }
}

export default async function Page({ params } : Params){
  const { locale } = await params
  const t = await getTranslations({ locale }) 

  const { data: brandTypes, error } = await supabase
    .from("brands")
    .select("id, name, slug, image, image_group")

  if (error) return <p>Err code: {error.message}</p>
  
  return (
    
    <main>
      <Brands types={brandTypes ?? []}  locale={locale} navigateName={t('chooseButton')} />
      <Footer footerCopy={t('footerCopyright')}/>
    </main>

  )
}

