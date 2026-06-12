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

    let items;
    if (status) {
      items = await db`
        SELECT
          ai.*,
          u.name as proposed_by_name_db
        FROM agenda_items ai
        LEFT JOIN users u ON ai.proposed_by = u.id
        WHERE ai.status = ${status}
        ORDER BY ai.priority DESC, ai.created_at DESC
      `;
    } else {
      items = await db`
        SELECT
          ai.*,
          u.name as proposed_by_name_db
        FROM agenda_items ai
        LEFT JOIN users u ON ai.proposed_by = u.id
        ORDER BY ai.priority DESC, ai.created_at DESC
      `;
    }

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

    const result = await db`
      INSERT INTO agenda_items (title, description, proposed_by, proposed_by_name, priority)
      VALUES (
        ${title},
        ${description || null},
        ${(session.user as any).id},
        ${session.user?.name},
        ${priority || 0}
      )
      RETURNING id
    `;

    await logActivity(
      (session.user as any).id,
      "Proposed agenda item",
      "agenda_items",
      result[0].id,
      title
    );

    return NextResponse.json({ id: result[0].id, success: true });
  } catch (error) {
    console.error("Error creating agenda item:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
