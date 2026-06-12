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

    const agendaResult = await db`
      SELECT
        a.*,
        u.name as created_by_name
      FROM agendas a
      LEFT JOIN users u ON a.created_by = u.id
      WHERE a.id = ${parseInt(id)}
    `;

    if (!agendaResult || agendaResult.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const agenda = agendaResult[0];

    // Get linked agenda items
    const items = await db`
      SELECT
        ai.*,
        aim.order_index
      FROM agenda_item_mappings aim
      JOIN agenda_items ai ON aim.agenda_item_id = ai.id
      WHERE aim.agenda_id = ${parseInt(id)}
      ORDER BY aim.order_index ASC
    `;

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

    const agendaResult = await db`SELECT * FROM agendas WHERE id = ${parseInt(id)}`;

    if (!agendaResult || agendaResult.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const agenda = agendaResult[0];

    // Get all committee members
    const users = await db`SELECT email, name FROM users`;

    // Queue emails to all members
    for (const user of users) {
      await db`
        INSERT INTO email_queue (to_email, to_name, subject, body)
        VALUES (
          ${user.email},
          ${user.name},
          ${`Agenda: ${agenda.title}`},
          ${`Meeting Date: ${new Date(agenda.meeting_date).toLocaleDateString()}\n\n${agenda.content}\n\nPlease review and prepare for the meeting.`}
        )
      `;
    }

    // Mark agenda as sent
    await db`
      UPDATE agendas SET sent_at = CURRENT_TIMESTAMP, status = 'sent'
      WHERE id = ${parseInt(id)}
    `;

    await logActivity(
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
