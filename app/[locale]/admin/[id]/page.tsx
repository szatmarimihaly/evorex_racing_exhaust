import AdminNav from '@/components/Navbar/AdminNav'
import { getTranslations } from 'next-intl/server'
import { supabase } from '@/lib/supabaseClient'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import React from 'react'
import OrderDetail from '@/components/DataCard/OrderDetail'

type Params = {
    params : {
        locale : string
        id: string
    }
}


export default async function Page({ params } : Params) {

    const { locale, id } = await params
    const t = await getTranslations({ locale })

    const supabase = createServerComponentClient({ cookies })
    const { data : { session } } = await supabase.auth.getSession()

    if(!session) {
        redirect(`/${locale}/login`)
    }

    const { data : orderedProducts, error : orderedError } = await supabase
        .from('order_items')
        .select('id, order_id, product_id, product_name, quantity, unit_price')
        .eq('order_id', id)

    if (orderedError) return <p>FAILURE: {orderedError.message}</p>


  return (
    <main>
        <AdminNav logoutText={t('logoutText')}/>
        <OrderDetail types={orderedProducts ?? []}/>
    </main>
  )
}