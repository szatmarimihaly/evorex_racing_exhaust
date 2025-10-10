import LoginForm from '@/components/Login/LoginForm'
import React from 'react'
import Image from 'next/image'

const Page = () => {



  return (
    <main className='flex flex-col items-center'>
        <Image 
            src='/evorex-logo-white.png'
            width={100}
            height={100}
            alt='EVOREX LOGO'
            className='mt-10'
        />
        <LoginForm />
        
    </main>
  )
}

export default Page