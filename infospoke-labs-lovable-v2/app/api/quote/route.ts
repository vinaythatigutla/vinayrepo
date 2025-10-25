import { NextResponse } from 'next/server';
export async function POST(req) {
  const data = await req.formData();
  const payload = {};
  data.forEach((v, k) => payload[k] = v.name || v);
  return NextResponse.json({ ok: true, received: payload });
}
