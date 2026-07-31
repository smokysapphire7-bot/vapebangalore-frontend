import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface OrderPayload {
  product: string;
  flavour?: string;
  area: string;
  phone?: string;
  channel: "telegram" | "whatsapp";
}

async function notifyTelegram(order: OrderPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_OWNER_CHAT_ID;
  if (!token || !chatId) return;

  const msg = [
    "🛒 *New Order — VapeBangalore*",
    "",
    `📦 *Product:* ${order.product}`,
    order.flavour ? `🍓 *Flavour:* ${order.flavour}` : "",
    `📍 *Area:* ${order.area}`,
    order.phone ? `📞 *Phone:* ${order.phone}` : "",
    `💬 *Channel:* ${order.channel}`,
    `🕐 *Time:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
  ].filter(Boolean).join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: msg,
      parse_mode: "Markdown",
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body: OrderPayload = await req.json();

    if (!body.product || !body.area) {
      return NextResponse.json(
        { error: "Missing required fields: product, area" },
        { status: 400 }
      );
    }

    // Notify owner via Telegram
    await notifyTelegram(body);

    // Log to FastAPI backend if configured
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl) {
      await fetch(`${apiUrl}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toISOString(),
          source: "vapebangalore.com",
        }),
      }).catch(() => {}); // fail silently — order still goes through
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
