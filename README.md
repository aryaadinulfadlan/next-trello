This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

"postinstall": "prisma generate"
// package.json scripts section
"vercel-build": "prisma generate && prisma migrate deploy && next build",
"vercel-build": "prisma generate && prisma migrate deploy && next build",
"prisma:generate": "prisma generate"

npx prisma migrate reset
npx prisma generate
npx prisma db push
npx prisma studio

[STRIPE_ERROR] Error: You can’t create a portal session in test mode until you save your customer portal settings in test mode at https://dashboard.stripe.com/test/settings/billing/portal.
