import React from 'react'
import Image from 'next/image'
import GoToShop from '../Button/GoToShop'

type Props = {
    text : string
    shopText : string
}

const MainHero = ({ text, shopText } : Props) => {
  return (
    <div className='mt-50 flex flex-col items-center justify-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>{text}</h1>
         <div className="relative w-full max-w-6xl mt-50">
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