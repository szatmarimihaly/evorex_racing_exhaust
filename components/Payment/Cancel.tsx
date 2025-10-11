'use client'
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import BackToHome from '@/components/Button/BackToHome'

type Props = {
    locale : string,
    cancelText : string,
    backHomeText : string
}

const Cancel = ({ locale, cancelText, backHomeText } : Props) => {
  return (
    <div className='flex flex-col items-center'>
        <CancelIcon sx={{ color : 'red', fontSize: 200 }} className='mt-40'/>
        <h1 className='mt-10 font-bold'>{cancelText}</h1>
        <BackToHome locale={locale} backHomeText={backHomeText}/>
    </div>
  )
}

export default Cancel