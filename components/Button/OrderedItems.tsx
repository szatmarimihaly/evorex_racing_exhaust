import Link from 'next/link'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

type Props = {
    locale: string
    text : string
    id: number
}

const OrderedItems = ({ text, locale, id } : Props) => {
  return (
    <Link 
        href={`/${locale}/admin/${id}`}
        className='bg-black text-white font-bold px-4 py-2 rounded-full mt-10 lg:mt-0 flex gap-2'
    >
        {text}<AccountCircleIcon />
    </Link>
  )
}

export default OrderedItems