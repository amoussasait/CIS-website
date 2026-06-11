import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET single task
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

    const task = db.prepare(`
      SELECT
        t.*,
        creator.name as created_by_name
      FROM tasks t
      LEFT JOIN users creator ON t.created_by = creator.id
      WHERE t.id = ?
    `).get(id);

    if (!task) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Get comments
    const comments = db.prepare(`
      SELECT
        c.*,
        u.name as user_name
      FROM task_comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.task_id = ?
      ORDER BY c.created_at ASC
    `).all(id);

    return NextResponse.json({ ...task, comments });
  } catch (error) {
    console.error("Error fetching task:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT update task
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
    const { title, description, assigned_to, assigned_to_email, assigned_to_name, status, priority, due_date } = data;

    const completedAt = status === 'completed' ? new Date().toISOString() : null;

    db.prepare(`
      UPDATE tasks
      SET title = ?, description = ?, assigned_to = ?, assigned_to_email = ?, assigned_to_name = ?,
          status = ?, priority = ?, due_date = ?, completed_at = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      title,
      description || null,
      assigned_to || null,
      assigned_to_email || null,
      assigned_to_name || null,
      status,
      priority,
      due_date || null,
      completedAt,
      id
    );

    logActivity(
      (session.user as any).id,
      "Updated task",
      "tasks",
      parseInt(id),
      title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE task
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

    const task = db.prepare("SELECT title FROM tasks WHERE id = ?").get(id) as any;

    db.prepare("DELETE FROM tasks WHERE id = ?").run(id);

    logActivity(
      (session.user as any).id,
      "Deleted task",
      "tasks",
      parseInt(id),
      task?.title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
