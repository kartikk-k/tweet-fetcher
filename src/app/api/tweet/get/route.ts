import { getRequestContext } from '@cloudflare/next-on-pages'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'


export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.searchParams?.get('id')
  console.log(id)

  if (!id) return new Response('No id provided', { status: 400 })

  try {
    const res = await fetch(`http://localhost:3000/tweet/${id}`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("Triggered fetch")
  } catch(e) {
    console.log("Error triggering fetch", e)
  }
  // waiting data to be added to kv
  await new Promise(resolve => setTimeout(resolve, 2000))

  const myKv = getRequestContext().env.tweets
  const data = await myKv.get(id)

  console.log(data)

  return NextResponse.json({ data })
}