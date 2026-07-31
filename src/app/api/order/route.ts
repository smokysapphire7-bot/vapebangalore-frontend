import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

interface OrderPayload {
  product: string;
  flavour?: string;
  area: string;
  phone?: string;
  channel: "whatsapp";
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
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
