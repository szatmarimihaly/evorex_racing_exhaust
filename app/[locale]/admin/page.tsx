import { getTranslations } from 'next-intl/server'
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'  
import { supabase } from '@/lib/supabaseClient'
import AdminOrder from '@/components/DataCard/AdminOrder'
import AdminNav from '@/components/Navbar/AdminNav'
import NavigateList from '@/components/Admin/NavigateList'

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
        <div className='mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-3xl mx-auto px-4 py-8 bg-black gap-4 rounded-xl shadow-xl'>
            <NavigateList whereToText={t('whereToText')} whereTo={`/${locale}/admin/email`}/>
            <NavigateList whereToText={t('addItem')} whereTo={`/${locale}/admin/item`} />
        </div>
        <h2 className='text-center text-2xl font-bold mb-4'>{t('currentOrder')}</h2>
        <AdminOrder locale={locale} types={orderData ?? []} text={t('detailText')} deleteButtonText={t('deleteButtonText')} askText={t('askText')}/>
    </main>
  )
}