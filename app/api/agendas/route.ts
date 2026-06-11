import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET all agendas
export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const agendas = db.prepare(`
      SELECT
        a.*,
        u.name as created_by_name
      FROM agendas a
      LEFT JOIN users u ON a.created_by = u.id
      ORDER BY a.meeting_date DESC
    `).all();

    return NextResponse.json(agendas);
  } catch (error) {
    console.error("Error fetching agendas:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST new agenda
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { title, meeting_date, content, agenda_item_ids } = data;

    const result = db.prepare(`
      INSERT INTO agendas (title, meeting_date, content, created_by)
      VALUES (?, ?, ?, ?)
    `).run(title, meeting_date, content, (session.user as any).id);

    const agendaId = result.lastInsertRowid as number;

    // Link agenda items to this agenda
    if (agenda_item_ids && agenda_item_ids.length > 0) {
      const insertMapping = db.prepare(`
        INSERT INTO agenda_item_mappings (agenda_id, agenda_item_id, order_index)
        VALUES (?, ?, ?)
      `);

      agenda_item_ids.forEach((itemId: number, index: number) => {
        insertMapping.run(agendaId, itemId, index);
      });

      // Mark items as included
      const updateStatus = db.prepare(`
        UPDATE agenda_items SET status = 'included' WHERE id = ?
      `);

      agenda_item_ids.forEach((itemId: number) => {
        updateStatus.run(itemId);
      });
    }

    logActivity(
      (session.user as any).id,
      "Created agenda",
      "agendas",
      agendaId,
      title
    );

    return NextResponse.json({ id: agendaId, success: true });
  } catch (error) {
    console.error("Error creating agenda:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
