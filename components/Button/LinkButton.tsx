import React from 'react'
import Link from 'next/link'

type LinkButtonProps = {
    href: string;
    text: string;
}

const LinkButton = ({ href, text } : LinkButtonProps) => {
  return (
    <Link
        href={href}
        className=' bg-black text-white px-4 py-2 mt-10 rounded-lg font-medium shadow-xl'
    >
        {text}
    </Link>
  )
}

export default LinkButton