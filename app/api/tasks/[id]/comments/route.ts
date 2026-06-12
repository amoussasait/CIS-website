import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// POST new comment
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const data = await request.json();
    const { comment } = data;

    if (!comment || comment.trim().length === 0) {
      return NextResponse.json({ error: "Comment cannot be empty" }, { status: 400 });
    }

    const result = await db`
      INSERT INTO task_comments (task_id, user_id, comment)
      VALUES (${parseInt(id)}, ${(session.user as any).id}, ${comment})
      RETURNING id
    `;

    await logActivity(
      (session.user as any).id,
      "Added comment to task",
      "tasks",
      parseInt(id),
      comment.substring(0, 50)
    );

    return NextResponse.json({ id: result[0].id, success: true });
  } catch (error) {
    console.error("Error creating comment:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
