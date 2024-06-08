



// export { auth as middleware } from "@/auth"
// export async function middleware(request: NextRequest) {
//   // console.log('middleware')
//   request.headers.set('x-url', request.url)
//   return await updateSession(request)
// }
import { auth } from "@/auth";

import { NextResponse } from 'next/server'

// export default function middleware(req, ev) {
//   const res = auth(req, ev)

//   req.headers.set('x-url', req.url)
//   return res
// }




import type { NextApiRequest, NextApiResponse } from 'next'


export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
  // Modify the request header
  console.log("running middleware");
  // req.headers['x-url'] = req?.url as any;
  
  const response = await auth(req, res);
  //@ts-ignore
  response.headers.set('x-url', req.url)
  if(response) {
    console.log("response is true");
  }
  return response || NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      *
//      */
    
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// }


