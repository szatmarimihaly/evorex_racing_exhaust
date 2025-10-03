'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useCartStore } from '@/store/cartStore'

const ShopNav = () =>{
  
    const totalItems = useCartStore((state) => state.totalItems)
  
    return (
        <nav className='px-4'>
            <div className='w-full flex items-center justify-between max-w-7xl mx-auto px-4 bg-black rounded-2xl mt-4 py-4'>
                <Image 
                    src="/evorex-no-bg.png" 
                    alt="Webshop Logo"
                    width={120} 
                    height={120} 
                    priority
                />

                <Link 
                    href="/en/cart"
                >
                    <IconButton aria-label="cart">
                        <Badge
                        badgeContent={totalItems}
                        color="secondary"
                        showZero
                        >
                            <ShoppingCartOutlinedIcon sx={{ color: '#fff' }} fontSize="large" />
                        </Badge>
                    </IconButton>
                </Link>
            </div>
        </nav>
  )
}

export default ShopNav
