import React from 'react'
import Image from 'next/image'
import LogoutButton from '../Login/LogoutButton'

type Props = {
    logoutText: string
}

const AdminNav = ({ logoutText } : Props) => {
  return (
    <header className='w-full flex justify-center mx-auto px-2'>
        <nav className='flex items-center justify-between w-full max-w-6xl mx-auto'>
            <Image 
                src="/evorex-black-logo.jpeg"
                alt='Evorex Racing Exhaust logo'
                width={200}
                height={200}
                priority
            />
            <LogoutButton logoutText={logoutText}/>
        </nav>
    </header>
  )
}

export default AdminNav