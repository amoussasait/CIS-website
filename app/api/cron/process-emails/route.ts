import { NextRequest, NextResponse } from "next/server";
import { processEmailQueue } from "@/lib/email";

export const runtime = "nodejs";
export const maxDuration = 60; // Allow up to 60 seconds for email processing

// This endpoint processes the email queue
// It should be called by Vercel Cron or manually triggered
export async function GET(request: NextRequest) {
  try {
    // Verify the request is authorized (from Vercel Cron or with secret token)
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    // Allow requests from Vercel Cron (they include a special header)
    const isVercelCron = request.headers.get("user-agent")?.includes("vercel-cron");

    // Allow requests with valid secret token
    const hasValidToken = cronSecret && authHeader === `Bearer ${cronSecret}`;

    if (!isVercelCron && !hasValidToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("🚀 Processing email queue...");

    const result = await processEmailQueue();

    console.log(`✅ Processed ${result.total} emails (${result.sent} sent, ${result.failed} failed)`);

    return NextResponse.json({
      success: true,
      total: result.total,
      sent: result.sent,
      failed: result.failed,
      message: `Processed ${result.total} emails`
    });

  } catch (error) {
    console.error("❌ Error processing email queue:", error);
    return NextResponse.json(
      {
        error: "Failed to process email queue",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
