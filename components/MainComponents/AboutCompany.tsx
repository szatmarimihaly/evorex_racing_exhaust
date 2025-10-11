import React from 'react'
import Image from 'next/image'
import Descriptions from './Descriptions'

type Props = {
    aboutCompanyText : string
    descriptionText : string
    descriptionText2 : string
}

const AboutCompany = ({ aboutCompanyText, descriptionText, descriptionText2 } : Props) => {



  return (
    <div className='w-full bg-black text-white mb-20 py-20 px-8 flex flex-col md:flex-row items-center justify-between gap-16'>

        <section className='flex flex-col items-center justify-between'>
            <h3 className='main-h3'>{aboutCompanyText}</h3>
            <Descriptions descriptionText={descriptionText}/>
            <Descriptions descriptionText={descriptionText2}/>
        </section>

        <Image
            src={"/content/aprilia.webp"}
            width={800}
            height={700}
            alt='Aprilia RSV4 exhaust'
            className='rounded-lg'
        />
    </div>
  )
}

export default AboutCompany