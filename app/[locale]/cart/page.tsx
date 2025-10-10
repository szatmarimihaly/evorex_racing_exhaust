import React from 'react'
import CartClient from '@/components/DataCard/CartClient'
import { getTranslations } from 'next-intl/server'
import CheckoutNav from '@/components/Navbar/CheckoutNav'

type Params = {
  params : {
    locale : string
  }
}

export default async function Page({ params } : Params){

  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main>
      <CheckoutNav />
      <CartClient emptyText={t('emptyText')} totalText={t('totalText')} goToCheckOut='Proceed Checkout' locale={locale}/>
    </main>
  )
}