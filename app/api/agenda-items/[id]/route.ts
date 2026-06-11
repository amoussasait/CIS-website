import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// PUT update agenda item
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
    const { title, description, status, priority } = data;

    db.prepare(`
      UPDATE agenda_items
      SET title = ?, description = ?, status = ?, priority = ?
      WHERE id = ?
    `).run(title, description || null, status, priority || 0, id);

    logActivity(
      (session.user as any).id,
      "Updated agenda item",
      "agenda_items",
      parseInt(id),
      title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating agenda item:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE agenda item
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

    const item = db.prepare("SELECT title FROM agenda_items WHERE id = ?").get(id) as any;

    db.prepare("DELETE FROM agenda_items WHERE id = ?").run(id);

    logActivity(
      (session.user as any).id,
      "Deleted agenda item",
      "agenda_items",
      parseInt(id),
      item?.title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting agenda item:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
