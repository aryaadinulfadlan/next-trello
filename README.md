## Route Concept

/docs/page.tsx => localhost:3000/docs BASIC
/docs/main/page.tsx => localhost:3000/docs/main NESTED
/docs/[docId]/page.tsx => localhost:3000/docs/{docId} DYNAMIC
/docs/[...slug]/page.tsx => localhost:3000/docs/apa/aja/bisa (kecuali /docs itu sendiri) CATCH ALL SEGMENTS
/docs/[[...slug]]/page.tsx => localhost:3000/docs/apa/aja/bisa (termasuk /docs itu sendiri) OPTIONAL CATCH ALL SEGMENTS
