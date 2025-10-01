import Link from 'next/link'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type CartButtonProps = {
    cartButtonText ?: string
}

const CartButton = ({ cartButtonText } : CartButtonProps) => {
  return (
    <Link
        href=''
        className='bg-black text-white px-2 py-4 text-center text-xl rounded-xl flex items-center justify-center gap-2'
    >
        {cartButtonText}
        <ShoppingCartIcon />
    </Link>
  )
}

export default CartButton