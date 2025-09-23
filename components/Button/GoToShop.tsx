'use client'
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

type Props = {
    goToText : string
}

const GoToShop = ({ goToText } : Props) => {

    const params = useParams()
    const locale = params?.locale as string

  return (
    <Link
        href={`/${locale}/shop`}
        className="px-6 py-3 bg-white text-black font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transition"
    >
        {goToText}
    </Link>
    
  )
}

export default GoToShop