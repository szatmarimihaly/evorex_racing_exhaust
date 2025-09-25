import React from 'react'

type FooterProps = {
  footerCopy : string
}

export default async function Footer({ footerCopy }: FooterProps) {

  return (
    <div className='w-full bg-black text-white p-4'>
        <h6>{footerCopy}</h6>
    </div>
  )
}