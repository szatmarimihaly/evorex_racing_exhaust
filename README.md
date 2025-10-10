# EVOREX - RACING EXHAUST WEBSHOP PROJECT

Click [HERE]https://evorex-racing-exhaust-5wye.vercel.app/hu to check out my app.

`.env.local`

```javascript
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_BASE_URL=
STRIPE_WEBHOOK_SECRET=
```

> [!IMPORTANT]
> DB TIMEZONE: ALTER DATABASE postgres SET timezone TO 'Europe/Budapest'

# APP USAGE in local:

Use Stripe CLI if you want to make Stripe, to push your customer and order data to your `Supabase` Database. You can build the Database from my codebase.

USE YOUR CMD:

- `stripe login` - you should get a code with 6 numbers, to verify yourself
- `stripe listen --forward-to localhost:3000/api/webhook`
- you can copy this whsec key from your terminal after running this prompt
- STRIPE_WEBHOOK_SECRET= #YOUR WHSEC KEY HERE
