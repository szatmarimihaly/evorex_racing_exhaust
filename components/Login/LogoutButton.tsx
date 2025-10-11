'use client'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

type Props = {
    logoutText : string
}

const LogoutButton = ({ logoutText } : Props) => {

    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/hu/login")
    }



  return (
    <button
        className='px-4 py-2 bg-red-400 text-white rounded-xl'
        onClick={handleLogout}
    >
        {logoutText}
    </button>
  )
}

export default LogoutButton