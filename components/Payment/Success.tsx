'use client'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import BackToHome from '@/components/Button/BackToHome'

type Props = {
    locale : string,
    successText : string,
    backHomeText : string
}

const Success = ({ locale, successText, backHomeText } : Props) => {
  return (
    <div className='flex flex-col items-center'>
        <VerifiedIcon sx={{ color : 'green', fontSize: 200 }} className='mt-40'/>
        <h1 className='mt-10 font-bold'>{successText}</h1>
        <BackToHome locale={locale} backHomeText={backHomeText}/>
    </div>
  )
}

export default Success