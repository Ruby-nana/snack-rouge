import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const _ = await request.json()
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}

