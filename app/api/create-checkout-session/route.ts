import { NextResponse } from 'next/server'
import stripe from '@/lib/stripe'
import { CartItem } from '@/store/cartStore'

// app/api/create-checkout-session/route.ts
export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { customerData, cartItems, locale } = body

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      currency: 'eur',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/cancel`,
      metadata: {
        customerData: JSON.stringify(customerData),
        cartItems: JSON.stringify(cartItems),
      },
      line_items: cartItems.map((item: CartItem) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
    })

    return NextResponse.json({ url: stripeSession.url })
  } catch (err) {
    console.error('Stripe session error:', err)
    return new NextResponse('Hiba történt a fizetés indításakor', { status: 500 })
  }
}