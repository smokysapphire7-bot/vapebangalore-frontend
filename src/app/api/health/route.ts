import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    site: "vapebangalore.com",
    timestamp: new Date().toISOString(),
  });
}
