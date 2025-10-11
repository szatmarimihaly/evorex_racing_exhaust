import { getTranslations } from 'next-intl/server'
import React from 'react'
import Success from '@/components/Payment/Success'

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
        <Success locale={locale} successText={t("successText")} backHomeText={t('backHomeText')}/>
    </main>
  )
}