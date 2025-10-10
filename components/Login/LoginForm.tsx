'use client'
import React from 'react'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginForm() {

    const supabase = createClientComponentClient()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if(error) {
            setError('Invalid credentials!')
            setLoading(false)
            return
        }

        router.push('/hu/admin')
    }

    
  return (
    <div className='flex items-center justify-center w-full mt-10 p-4'>
        <form 
            onSubmit={handleLogin}
            className='w-full max-w-xl flex flex-col gap-2'
        >
            <input 
                type="email" 
                placeholder='EMAIL' 
                className='input-field'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
                type="password"
                placeholder='PASSWORD'
                className='input-field'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='input-error'>{error}</p>}

            <button
                type='submit'
                disabled={loading}
                className='w-full bg-black text-white py-4 px-2 rounded-xl mt-4'
            >
                {loading ? 'Belépés...' : 'Belépés'}
            </button>
        </form>
    </div>
  )
}

