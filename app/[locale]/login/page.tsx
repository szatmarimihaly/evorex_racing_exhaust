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
    <main className='min-h-screen flex flex-col justify-center items-center'>
        <Image 
            src='/evorex-black-logo.jpeg'
            width={150}
            height={150}
            alt='EVOREX LOGO'
        />
        <LoginForm locale={locale} />
        
    </main>
  )
}