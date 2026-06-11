import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET all agenda items
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    let query = `
      SELECT
        ai.*,
        u.name as proposed_by_name_db
      FROM agenda_items ai
      LEFT JOIN users u ON ai.proposed_by = u.id
      WHERE 1=1
    `;

    const params: any[] = [];

    if (status) {
      query += " AND ai.status = ?";
      params.push(status);
    }

    query += " ORDER BY ai.priority DESC, ai.created_at DESC";

    const items = db.prepare(query).all(...params);

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching agenda items:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST new agenda item
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { title, description, priority } = data;

    const result = db.prepare(`
      INSERT INTO agenda_items (title, description, proposed_by, proposed_by_name, priority)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      title,
      description || null,
      (session.user as any).id,
      session.user?.name,
      priority || 0
    );

    logActivity(
      (session.user as any).id,
      "Proposed agenda item",
      "agenda_items",
      result.lastInsertRowid as number,
      title
    );

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating agenda item:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
