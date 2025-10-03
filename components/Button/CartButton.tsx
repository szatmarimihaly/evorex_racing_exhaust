'use client'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from '@/store/cartStore'

type CartButtonProps = {
    cartButtonText ?: string
    product : {
      id : number
      name : string
      price : number
      image : string
    }
}

const CartButton = ({ cartButtonText, product } : CartButtonProps) => {

  const addItem = useCartStore((state) => state.addItem)

  const handleAdd = () => {
    addItem(product)
  }


  return (
    <button
        onClick={handleAdd}
        className='bg-black text-white px-2 py-4 text-center text-xl rounded-xl flex items-center justify-center gap-2 cursor-pointer'
    >
        {cartButtonText}
        <ShoppingCartIcon />
    </button>
  )
}

export default CartButton