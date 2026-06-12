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

    let tasks;

    if (status && assignedTo) {
      tasks = await db`
        SELECT DISTINCT
          t.*,
          creator.name as created_by_name
        FROM tasks t
        LEFT JOIN users creator ON t.created_by = creator.id
        LEFT JOIN task_assignments ta ON t.id = ta.task_id
        WHERE t.status = ${status} AND ta.user_id = ${parseInt(assignedTo)}
        ORDER BY t.created_at DESC
      `;
    } else if (status) {
      tasks = await db`
        SELECT
          t.*,
          creator.name as created_by_name
        FROM tasks t
        LEFT JOIN users creator ON t.created_by = creator.id
        WHERE t.status = ${status}
        ORDER BY t.created_at DESC
      `;
    } else if (assignedTo) {
      tasks = await db`
        SELECT DISTINCT
          t.*,
          creator.name as created_by_name
        FROM tasks t
        LEFT JOIN users creator ON t.created_by = creator.id
        LEFT JOIN task_assignments ta ON t.id = ta.task_id
        WHERE ta.user_id = ${parseInt(assignedTo)}
        ORDER BY t.created_at DESC
      `;
    } else {
      tasks = await db`
        SELECT
          t.*,
          creator.name as created_by_name
        FROM tasks t
        LEFT JOIN users creator ON t.created_by = creator.id
        ORDER BY t.created_at DESC
      `;
    }

    // Fetch all assignees for each task
    for (const task of tasks) {
      const assignees = await db`
        SELECT user_id, user_name, user_email
        FROM task_assignments
        WHERE task_id = ${task.id}
        ORDER BY user_name
      `;
      task.assignees = assignees;
      task.assigned_to_name = assignees.map((a: any) => a.user_name).join(', ') || 'Unassigned';
    }

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
    const { title, description, assigned_to, status, priority, due_date } = data;

    // Validate required fields
    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // assigned_to can now be an array of user IDs or a single ID
    const assignedUserIds = Array.isArray(assigned_to) ? assigned_to : (assigned_to ? [assigned_to] : []);

    // Get user details for all assignees
    let assignees: any[] = [];
    if (assignedUserIds.length > 0) {
      assignees = await db`
        SELECT id, email, name
        FROM users
        WHERE id = ANY(${assignedUserIds})
      `;
    }

    // Create the task (keeping old columns for backward compatibility, but set to first assignee if exists)
    const firstAssignee = assignees[0];
    const result = await db`
      INSERT INTO tasks (title, description, assigned_to, assigned_to_email, assigned_to_name, created_by, status, priority, due_date)
      VALUES (
        ${title},
        ${description || null},
        ${firstAssignee?.id || null},
        ${firstAssignee?.email || null},
        ${firstAssignee?.name || null},
        ${userId},
        ${status || 'pending'},
        ${priority || 'medium'},
        ${due_date || null}
      )
      RETURNING id
    `;

    const taskId = result[0].id;

    // Insert all assignees into task_assignments table
    for (const assignee of assignees) {
      await db`
        INSERT INTO task_assignments (task_id, user_id, user_email, user_name)
        VALUES (${taskId}, ${assignee.id}, ${assignee.email}, ${assignee.name})
      `;

      // Queue email notification for each assignee with tracking
      await db`
        INSERT INTO email_queue (to_email, to_name, subject, body, email_type, related_task_id, related_user_id)
        VALUES (
          ${assignee.email},
          ${assignee.name},
          ${`New Task Assigned: ${title}`},
          ${`You have been assigned a new task:\n\nTitle: ${title}\nDescription: ${description || 'N/A'}\nDue Date: ${due_date ? new Date(due_date).toLocaleDateString() : 'Not set'}\nPriority: ${priority}\n\nPlease log in to the committee portal to view details.`},
          ${'task_assigned'},
          ${taskId},
          ${assignee.id}
        )
      `;
    }

    await logActivity(
      userId,
      "Created task",
      "tasks",
      taskId,
      title
    );

    return NextResponse.json({ id: taskId, success: true });
  } catch (error) {
    console.error("Error creating task:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
