'use client'
import React from 'react'
import OrderedItems from '../Button/OrderedItems'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

type AdminOrderProps = {
    id: number,
    status: string,
    total_amount: number,
    full_name: string,
    email: string,
    phone: string,
    created_at: string,
    country: string,
    city: string,
    zip: string,
    address: string,
    house_number: string
}

type Props = {
    types: AdminOrderProps[],
    locale: string,
    text: string
    deleteButtonText: string
    askText : string
}

const AdminOrder = ({ types, locale, text, deleteButtonText, askText }: Props) => {
  return (
    <div className='w-full space-y-4 max-w-8xl mx-auto px-4 mb-10'>
      {types.map((type) => {

        const date = new Date(type.created_at)
        const datePart = date.toLocaleDateString(locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })

        const timePart = date.toLocaleTimeString(locale, {
          hour: '2-digit',
          minute: '2-digit'
        })

        return (
          <div
            key={type.id}
            className='flex flex-col lg:flex-row items-center gap-4 justify-evenly border-2 p-4 shadow-xl rounded-xl'
          >
            <div className="flex flex-col items-center">
              <p className="font-bold bg-black text-white px-4 py-2 rounded-full">{datePart}</p>
              <p className="text-sm text-gray-500">{timePart}</p>
            </div>
            <p className='bg-green-300 px-4 py-2 rounded-full font-bold'>{type.status.toLocaleUpperCase()}</p>
            <p>{type.full_name}</p>
            <p>{type.email}</p>
            <p>{type.phone}</p>
            <p>{type.country}, {type.city}, {type.zip}</p>
            <p>{type.address} {type.house_number}</p>
            <OrderedItems text={text} locale={locale} id={type.id}/>
            
            <button 
              className='bg-red-200 p-2 rounded-full flex items-center font-bold gap-2'
              onClick={async () => {
                  if(!confirm(askText)) return;

                  const res = await fetch('/api/delete-order', {
                      method: 'DELETE',
                      headers: { 'Content-Type' : 'application/json' },
                      body: JSON.stringify({ id: type.id }) 
                  })

                  if(res.ok) {
                    alert('Rendelés törölve!')
                    window.location.reload()
                  }else {
                    alert('Hiba történt a törlés során!')
                  }
              }}
            >
                {deleteButtonText.toLocaleUpperCase()}<RemoveCircleIcon sx={{ color : 'red', fontSize : 40 }}/>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default AdminOrder
