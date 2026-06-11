import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET all meeting minutes
export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const minutes = db.prepare(`
      SELECT
        m.*,
        u.name as created_by_name
      FROM meeting_minutes m
      LEFT JOIN users u ON m.created_by = u.id
      ORDER BY m.meeting_date DESC
    `).all();

    return NextResponse.json(minutes);
  } catch (error) {
    console.error("Error fetching minutes:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST new meeting minute
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { title, meeting_date, content, file_path } = data;

    const result = db.prepare(`
      INSERT INTO meeting_minutes (title, meeting_date, content, file_path, created_by)
      VALUES (?, ?, ?, ?, ?)
    `).run(title, meeting_date, content, file_path || null, (session.user as any).id);

    logActivity(
      (session.user as any).id,
      "Created meeting minutes",
      "meeting_minutes",
      result.lastInsertRowid as number,
      title
    );

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating minute:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
