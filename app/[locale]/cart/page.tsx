import React from 'react'
import CartClient from '@/components/DataCard/CartClient'
import { getTranslations } from 'next-intl/server'

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
      <CartClient emptyText={t('emptyText')} totalText={t('totalText')} deleteText={t('deleteText')} goToCheckOut='Proceed Checkout'/>
    </main>
  )
}