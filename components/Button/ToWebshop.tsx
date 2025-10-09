import Link from 'next/link'
import React from 'react'

type Props = {
    text : string
}

const ToWebshop = ({ text } : Props) => {
  return (
    <Link
        href="/shop"
        className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transition"
    >
        {text}
    </Link>
  )
}

export default ToWebshop