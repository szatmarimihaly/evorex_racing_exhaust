import { NextResponse } from "next/server"
import Stripe from "stripe"
import stripe from "@/lib/stripe"
import { supabase } from "@/lib/supabaseClient"
import { CartItem } from "@/store/cartStore"

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!
  const payload = await req.text()

  try {
    const event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session

      const customerData = JSON.parse(session.metadata?.customerData ?? "{}")
      const cartItems = JSON.parse(session.metadata?.cartItems ?? "[]")

      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert([
          {
            stripe_session_id: session.id,
            stripe_payment_intent: session.payment_intent,
            status: session.payment_status,
            total_amount: (session.amount_total ?? 0) / 100,
            full_name: customerData.fullName,
            email: customerData.email,
            phone: customerData.phone,
            country: customerData.land,
            city: customerData.city,
            zip: customerData.zip,
            address: customerData.address,
            house_number: customerData.addressNum,
          },
        ])
        .select()
        .single()

      if (orderError) {
        console.error("❌ Order insert error:", orderError)
        return new NextResponse("Order insert failed", { status: 500 })
      }

      const itemsToInsert = (cartItems as CartItem[]).map((item) => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image,
        quantity: item.quantity,
        unit_price: item.price,
      }))

      const { error: itemError } = await supabase
        .from("order_items")
        .insert(itemsToInsert)

      if (itemError) {
        console.error("❌ Order items insert error:", itemError)
      } else {
        console.log("✅ Order stored successfully")
      }
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error("❌ Webhook error:", err)
    return new NextResponse("Webhook error", { status: 400 })
  }
}
