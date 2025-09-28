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
        className=''
    >
        {text}
    </Link>
  )
}

export default LinkButton