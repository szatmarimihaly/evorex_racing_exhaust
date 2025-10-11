'use client'
import React from 'react'

type Props = {
    title: string
    icon: React.ReactNode
}

const Card = ({ title, icon } : Props) => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center'>
        <div className='w-40 h-40 bg-black rounded-lg flex items-center justify-center mb-4 text-white'>
            {icon}
        </div>
        <h5 className='text-xl font-semibold text-black mb-2'>{title}</h5>
    </div>
  )
}

export default Card