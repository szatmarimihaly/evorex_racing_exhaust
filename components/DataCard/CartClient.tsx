'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import CartImage from '../Image/CartImage'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Link from 'next/link'

type CartClientProps = {
    emptyText : string,
    totalText : string,
    deleteText : string,
    goToCheckOut : string
    locale: string
}

export default function CartClient({emptyText, totalText, deleteText, goToCheckOut, locale} : CartClientProps) {
  const { items, removeItem, increaseQuantity, decreaseQuantity, totalItems, clearCart } = useCartStore()

  if (items.length === 0) {
    return <p>{emptyText}</p>
  }

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto p-4">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center justify-between border-b pb-2">
          <div className='w-full flex items-center gap-2 justify-evenly'>
            <CartImage imageType={item.image} nameType={item.name}/>
            <h2 className="font-semibold">{item.name}</h2>
            
            {/* <p>{item.price} €</p> */}
            {/* <p>{quantityText}: {item.quantity}</p> */}
          </div>
        
          <div className="w-full flex mt-10 items-center justify-between">

            <button onClick={() => removeItem(item.id)}>
                <DeleteOutlinedIcon color='error' fontSize='medium'/>
            </button>

            <p className='text-xl bg-black px-4 py-2 rounded-lg text-white'>{item.price.toLocaleString()} €</p>

            <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                <button onClick={() => decreaseQuantity(item.id)}>
                    <RemoveOutlinedIcon fontSize='small'/>
                </button>
                <p className='text-xl'>{item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>
                    <AddOutlinedIcon fontSize='small'/>
                </button>
            </div>
            
          </div>
        </div>
      ))}

      <div className="flex justify-between font-bold mt-4 mb-4">
        <span className='text-xl'>{totalText}{/*({totalItems})*/}</span>
        <span className='text-xl'>
          {items.reduce((acc, i) => acc + i.price * i.quantity, 0).toLocaleString()} €
        </span>
      </div>

      {/*
      <button onClick={clearCart} className='border-1 px-2 py-1 rounded-lg text-xl'>
        {deleteText}
      </button>
      */}

      <Link className='bg-black text-white px-4 py-2 rounded-lg text-xl text-center' href={`/${locale}/checkout`}>{goToCheckOut}</Link>
    </div>
  )
}
