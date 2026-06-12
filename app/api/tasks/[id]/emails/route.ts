import { auth } from "@/lib/auth";
import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET email history for a task
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Fetch all emails related to this task
    const emails = await db`
      SELECT
        id,
        to_email,
        to_name,
        subject,
        email_type,
        status,
        sent_at,
        created_at,
        retry_count,
        error_message
      FROM email_queue
      WHERE related_task_id = ${parseInt(id)}
      ORDER BY created_at DESC
    `;

    return NextResponse.json(emails);
  } catch (error) {
    console.error("Error fetching email history:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
