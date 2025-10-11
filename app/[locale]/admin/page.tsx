import { getTranslations } from 'next-intl/server'
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'  
import { supabase } from '@/lib/supabaseClient'
import AdminOrder from '@/components/DataCard/AdminOrder'
import AdminNav from '@/components/Navbar/AdminNav'

type Params = {
    params : {
        locale : string
    }
}

export default async function Page({ params } : Params) {

    const { locale } = await params
    const t = await getTranslations({ locale })
    
    const supabase = createServerComponentClient({ cookies })
    const { data : { session } } = await supabase.auth.getSession()

    if(!session) {
        redirect(`/${locale}/login`)
    }


    const { data : orderData, error } = await supabase
        .from('orders')
        .select('id, status, total_amount, full_name, email, phone, created_at, country, city, zip, address, house_number')
        .order('id', { ascending: false })

    if(error) return <p>Error by data fetching: {error.message}</p>

  return (
    <main>
        <AdminNav logoutText={t('logoutText')}/>
        <AdminOrder locale={locale} types={orderData ?? []} text={t('detailText')}/>
    </main>
  )
}