'use client'
import React from 'react'
import Card from './Card'

type CardItem = {
    id : number,
    title : string,
    icon : React.ReactNode
}

type Props = {
    cards : CardItem[]
}

const CardList = ({ cards } : Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 mx-10'>
        {cards.map((card) => (
            <Card key={card.id} title={card.title} icon={card.icon} />
        ))}
    </div>
  )
}

export default CardList