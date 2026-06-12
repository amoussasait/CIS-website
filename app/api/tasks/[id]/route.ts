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

    const task = await db`
      SELECT
        t.*,
        creator.name as created_by_name
      FROM tasks t
      LEFT JOIN users creator ON t.created_by = creator.id
      WHERE t.id = ${parseInt(id)}
    `;

    if (!task || task.length === 0) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Get comments
    const comments = await db`
      SELECT
        c.*,
        u.name as user_name
      FROM task_comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.task_id = ${parseInt(id)}
      ORDER BY c.created_at ASC
    `;

    return NextResponse.json({ ...task[0], comments });
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

    await db`
      UPDATE tasks
      SET title = ${title},
          description = ${description || null},
          assigned_to = ${assigned_to || null},
          assigned_to_email = ${assigned_to_email || null},
          assigned_to_name = ${assigned_to_name || null},
          status = ${status},
          priority = ${priority},
          due_date = ${due_date || null},
          completed_at = ${completedAt},
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ${parseInt(id)}
    `;

    await logActivity(
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

    const task = await db`SELECT title FROM tasks WHERE id = ${parseInt(id)}`;

    await db`DELETE FROM tasks WHERE id = ${parseInt(id)}`;

    await logActivity(
      (session.user as any).id,
      "Deleted task",
      "tasks",
      parseInt(id),
      task[0]?.title
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
