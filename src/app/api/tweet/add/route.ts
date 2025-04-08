import { getRequestContext } from '@cloudflare/next-on-pages'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const data = await req.json() as { id: string, content: string };
  console.log(data);

  const id = data.id
  const content = data.content

  console.log("Adding to kv")
  const myKv = getRequestContext().env.tweets
  await myKv.put(id, content)

  return NextResponse.json({ success: true })
}