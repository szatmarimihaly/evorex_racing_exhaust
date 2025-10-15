import React from 'react'
import Link from 'next/link'

type Props = {
    whereToText : string
    whereTo : string
}

const NavigateList = ({ whereToText, whereTo } : Props) => {
  return (
    <Link
        href={whereTo}
        className='bg-gray-700/30 border-1 border-gray-400/80 px-4 py-2 text-white rounded-lg text-center'
    >
        {whereToText}
    </Link>
  )
}

export default NavigateList