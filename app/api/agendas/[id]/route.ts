import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET single agenda
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

    const agenda = db.prepare(`
      SELECT
        a.*,
        u.name as created_by_name
      FROM agendas a
      LEFT JOIN users u ON a.created_by = u.id
      WHERE a.id = ?
    `).get(id);

    if (!agenda) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Get linked agenda items
    const items = db.prepare(`
      SELECT
        ai.*,
        aim.order_index
      FROM agenda_item_mappings aim
      JOIN agenda_items ai ON aim.agenda_item_id = ai.id
      WHERE aim.agenda_id = ?
      ORDER BY aim.order_index ASC
    `).all(id);

    return NextResponse.json({ ...agenda, items });
  } catch (error) {
    console.error("Error fetching agenda:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST send agenda
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

    const agenda = db.prepare("SELECT * FROM agendas WHERE id = ?").get(id) as any;

    if (!agenda) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Get all committee members
    const users = db.prepare("SELECT email, name FROM users").all() as any[];

    // Queue emails to all members
    const insertEmail = db.prepare(`
      INSERT INTO email_queue (to_email, to_name, subject, body)
      VALUES (?, ?, ?, ?)
    `);

    users.forEach((user) => {
      insertEmail.run(
        user.email,
        user.name,
        `Agenda: ${agenda.title}`,
        `Meeting Date: ${new Date(agenda.meeting_date).toLocaleDateString()}\n\n${agenda.content}\n\nPlease review and prepare for the meeting.`
      );
    });

    // Mark agenda as sent
    db.prepare(`
      UPDATE agendas SET sent_at = CURRENT_TIMESTAMP, status = 'sent'
      WHERE id = ?
    `).run(id);

    logActivity(
      (session.user as any).id,
      "Sent agenda to all members",
      "agendas",
      parseInt(id),
      agenda.title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending agenda:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
