import React from 'react'
import Link from 'next/link'
import RedoIcon from '@mui/icons-material/Redo'

type LinkButtonProps = {
    href: string;
    text: string;
}

const LinkButton = ({ href, text } : LinkButtonProps) => {
  return (
    <Link
        href={href}
        className=' bg-black text-white px-8 py-2 mt-10 rounded-lg font-medium shadow-xl transition-all duration-300 hover:scale-105'
    >
        {text}
    </Link>
  )
}

export default LinkButton