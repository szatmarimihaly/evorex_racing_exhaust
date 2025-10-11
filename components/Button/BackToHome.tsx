import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'

type Props = {
    backHomeText : string,
    locale : string
}

const BackToHome = ({ backHomeText, locale } : Props) => {

  return (
    <Link
        href={`/${locale}`}
        className='mt-4 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2'
    >
        {backHomeText}<HomeIcon />    
    </Link>
  )
}

export default BackToHome