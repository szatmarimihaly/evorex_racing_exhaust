import React from 'react'
import Image from 'next/image'
import GoToShop from '../Button/GoToShop'
import EmailCollector from './EmailCollector'

type Props = {
    shopText : string
}

const MainHero = ({ shopText } : Props) => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold w-full text-center'>EVOREX</h1>
        <h2 className='text-6xl font-bold w-full text-center'>RACING</h2>
        <h2 className='text-6xl font-bold mb-4 w-full text-center'>EXHAUST</h2>
        <EmailCollector />
         <div className="relative w-full max-w-6xl mt-20">
            <Image
            src="/heroImage2.jpg"
            alt="Ducati Panigale V4R"
            width={1920}
            height={1080}
            className="w-full h-auto mb-20"
            priority
            />

            {/* Gomb a kép közepén */}
            <div className="absolute inset-0 flex items-center justify-center">
                <GoToShop goToText={shopText}/>
            </div>
        </div>
    </div>
  )
}

export default MainHero