import React from 'react'

type OrderDetailProps = {
    id: number
    order_id: number
    product_id: number
    product_name: string
    quantity: number
    unit_price: number
}

type Props = {
    types: OrderDetailProps[]
}

const OrderDetail = ({ types } : Props) => {
  return (
    <div className='w-full space-y-4 max-w-7xl mx-auto px-4 mb-10'>
        {types.map((type) => ( 
            <div 
                key={type.id}
                className='flex flex-col lg:flex-row items-center gap-4 justify-between border-2 p-4 shadow-xl rounded-xl'
            >
                <p className='font-bold'>Product ID:{type.product_id}</p>
                <p>{type.product_name}</p>
                <p className='bg-green-300 px-4 py-2 rounded-full font-bold'>x {type.quantity}</p>
                <p className='font-bold'>{(type.unit_price * type.quantity).toLocaleString()} €</p>
            </div>
        ))}
    </div>
  )
}

export default OrderDetail