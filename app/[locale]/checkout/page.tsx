import { getTranslations } from 'next-intl/server'
import React from 'react'
import CheckOutForm from '@/components/CheckoutForm/CheckOutForm'

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
        <CheckOutForm checkoutFormTitle={t('checkoutFormTitle')} submitButton={t('submitButton')} fullname={t('fullName')} emailText={t('emailText')} phoneText='+36305771066' landText={t('landText')} cityText={t('cityText')} zipText={t('zipText')} locationText={t('locationText')} houseNumber={t('houseNumber')}/>
    </main>
  )
}

