import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"


export async function POST(req: Request) {
    const { email } = await req.json()

    if(!email) {
        return NextResponse.json({ error:"Missing email" }, { status : 400 })
    }

    const { error } = await supabase
        .from('email_list')
        .insert([{ email }])

    if(error) {
        if(error.code === '2305') {
            return NextResponse.json({ message: "You are already subscribed!" }, { status : 200 })
        }
        console.log('Supabase insert error:', error)
        return NextResponse.json({ error: "Database unavailable" }, { status: 500 })
    }

    return NextResponse.json({ message : 'Subscribed successfully!' }, { status: 200 })
}