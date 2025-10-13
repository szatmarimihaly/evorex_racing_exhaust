import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"


export async function DELETE(req: Request) {

    const { id } = await req.json()

    if(!id) {
        return NextResponse.json({ error : 'Missing order ID' }, { status : 400 })
    }
    
    try{

        const { error: orderError } = await supabase
            .from('orders')
            .delete()
            .eq('id', id)

        if(orderError) throw orderError

        return NextResponse.json({ success : true })

    }catch (error){
        return NextResponse.json({ error: 'Delete Failed' }, { status: 500 })
    }
}


