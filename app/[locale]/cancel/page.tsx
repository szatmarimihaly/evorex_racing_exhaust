import { getTranslations } from 'next-intl/server'
import React from 'react'
import Cancel from '@/components/Payment/Cancel'

type Params = {
  params : {
    locale: string
  }
}

export default async function Page({ params } : Params) {

  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <main>
        <Cancel locale={locale} cancelText={t("cancelText")} backHomeText={t('backHomeText')}/>
    </main>
  )
}