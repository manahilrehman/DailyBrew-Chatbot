import { NextResponse } from "next/server";
import { getBaristaResponse } from "@/lib/baristaBot";

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Process through Daily Brew Barista Brain (handles persona, guardrails, recommendations)
    const result = await getBaristaResponse(message, history || []);

    return NextResponse.json({
      reply: result.text,
      type: result.type || "barista_response",
      featuredItem: result.featuredItem || null,
      menuItems: result.menuItems || null,
      suggestedActions: result.suggestedActions || [],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "Oops! Our espresso machine sputtered for a second ☕ Please try asking your friendly barista again!",
        type: "error",
      },
      { status: 500 }
    );
  }
}
