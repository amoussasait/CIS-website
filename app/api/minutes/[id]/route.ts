import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET single meeting minute
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

    const minute = await db`
      SELECT
        m.*,
        u.name as created_by_name
      FROM meeting_minutes m
      LEFT JOIN users u ON m.created_by = u.id
      WHERE m.id = ${parseInt(id)}
    `;

    if (!minute || minute.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(minute[0]);
  } catch (error) {
    console.error("Error fetching minute:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT update meeting minute
export async function PUT(
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
    const { title, meeting_date, content, file_path } = data;

    await db`
      UPDATE meeting_minutes
      SET title = ${title},
          meeting_date = ${meeting_date},
          content = ${content},
          file_path = ${file_path || null},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${parseInt(id)}
    `;

    await logActivity(
      (session.user as any).id,
      "Updated meeting minutes",
      "meeting_minutes",
      parseInt(id),
      title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating minute:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE meeting minute
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const minute = await db`SELECT title FROM meeting_minutes WHERE id = ${parseInt(id)}`;

    await db`DELETE FROM meeting_minutes WHERE id = ${parseInt(id)}`;

    await logActivity(
      (session.user as any).id,
      "Deleted meeting minutes",
      "meeting_minutes",
      parseInt(id),
      minute[0]?.title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting minute:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
