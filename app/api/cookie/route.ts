import { NextResponse } from "next/server"
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  if (session === "123456") {
    return NextResponse.json({ message: "You are logged in" })
  } else {
    return NextResponse.json({message: "You are not logged in"})
  }
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.set("session", "123456")
  return NextResponse.redirect(new URL('/', request.nextUrl))

}