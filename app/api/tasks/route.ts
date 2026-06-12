import { auth } from "@/lib/auth";
import db, { logActivity } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// GET all tasks
export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const assignedTo = searchParams.get("assigned_to");

    let query = `
      SELECT
        t.*,
        creator.name as created_by_name,
        assignee.name as assigned_to_name_db
      FROM tasks t
      LEFT JOIN users creator ON t.created_by = creator.id
      LEFT JOIN users assignee ON t.assigned_to = assignee.id
      WHERE 1=1
    `;

    const params: any[] = [];

    if (status) {
      query += " AND t.status = ?";
      params.push(status);
    }

    if (assignedTo) {
      query += " AND t.assigned_to = ?";
      params.push(assignedTo);
    }

    query += " ORDER BY t.created_at DESC";

    const tasks = db.prepare(query).all(...params);

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST new task
export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user ID exists in session
    const userId = (session.user as any)?.id;
    if (!userId) {
      console.error("Session missing user ID:", session);
      return NextResponse.json({ error: "User ID not found in session" }, { status: 401 });
    }

    const data = await request.json();
    const { title, description, assigned_to, assigned_to_email, assigned_to_name, status, priority, due_date } = data;

    // Validate required fields
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const result = db.prepare(`
      INSERT INTO tasks (title, description, assigned_to, assigned_to_email, assigned_to_name, created_by, status, priority, due_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      title,
      description || null,
      assigned_to || null,
      assigned_to_email || null,
      assigned_to_name || null,
      userId,
      status || 'pending',
      priority || 'medium',
      due_date || null
    );

    logActivity(
      userId,
      "Created task",
      "tasks",
      result.lastInsertRowid as number,
      title
    );

    // Queue email notification
    if (assigned_to_email) {
      db.prepare(`
        INSERT INTO email_queue (to_email, to_name, subject, body)
        VALUES (?, ?, ?, ?)
      `).run(
        assigned_to_email,
        assigned_to_name,
        `New Task Assigned: ${title}`,
        `You have been assigned a new task:\n\nTitle: ${title}\nDescription: ${description || 'N/A'}\nDue Date: ${due_date ? new Date(due_date).toLocaleDateString() : 'Not set'}\nPriority: ${priority}\n\nPlease log in to the committee portal to view details.`
      );
    }

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error("Error creating task:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
