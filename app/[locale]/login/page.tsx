import LoginForm from '@/components/Login/LoginForm'
import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

type Params = {
  params : {
    locale : string
  }
}

export default async function Page({ params } : Params) {

  const { locale } = await params

  return (
    <main className='flex flex-col items-center'>
        <Image 
            src='/evorex-logo-white.png'
            width={100}
            height={100}
            alt='EVOREX LOGO'
            className='mt-10'
        />
        <LoginForm locale={locale} />
        
    </main>
  )
}