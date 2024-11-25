import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const protectedRoutes = ['/dashboard']

export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtected = protectedRoutes.includes(path)
    const session = (await cookies()).get('session')
    if (isProtected) {
        const result = await fetch("http://localhost:3000/api/cookie", {
            method: "GET",
            headers: {
                "Cookie": `${session?.name}=${session?.value}`
            }
        }).then(res => res.json())
        console.log(result)
        if (result.message === "You are not logged in") {
            return NextResponse.redirect(new URL('/set-cookie', req.nextUrl))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}