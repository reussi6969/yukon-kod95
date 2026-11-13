import { NextRequest, NextResponse } from "next/server"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

const NAME_RE = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,20}$/
const PHONE_RE = /^\+?[0-9]{7,15}$/

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 })
  }

  try {
    const body = await req.json()
    const name = String(body?.name ?? "").trim()
    const phone = String(body?.phone ?? "").trim()

    if (!NAME_RE.test(name) || !PHONE_RE.test(phone)) {
      return NextResponse.json({ error: "Invalid fields" }, { status: 400 })
    }

    const text =
      `🚨 *Новая заявка с сайта Yukon KOD 95!*\n\n` +
      `👤 *Имя:* ${name}\n` +
      `📞 *Телефон:* ${phone}`

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    })

    const data = await res.json()

    if (!data.ok) {
      return NextResponse.json({ error: "Telegram error" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
