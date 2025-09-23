import React from 'react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

const Navbar = () => {

  return (
    <nav className='px-4'>
        <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 bg-black rounded-2xl mt-4 py-4'>
            <Image 
                src="/evorex-no-bg.png" 
                alt="Webshop Logo"
                width={120} 
                height={120} 
                priority
            />

            <LanguageSwitcher />
        </div>
    </nav>
  )
}

export default Navbar