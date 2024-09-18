## Route Concept

/docs/page.tsx => localhost:3000/docs BASIC
/docs/main/page.tsx => localhost:3000/docs/main NESTED
/docs/[docId]/page.tsx => localhost:3000/docs/{docId} DYNAMIC
/docs/[...slug]/page.tsx => localhost:3000/docs/apa/aja/bisa (kecuali /docs itu sendiri) CATCH ALL SEGMENTS
/docs/[[...slug]]/page.tsx => localhost:3000/docs/apa/aja/bisa (termasuk /docs itu sendiri) OPTIONAL CATCH ALL SEGMENTS

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