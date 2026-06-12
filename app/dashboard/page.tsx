import { auth } from "@/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckSquare, Calendar, Users } from "lucide-react";
import Link from "next/link";
import db from "@/lib/db";

export const runtime = "nodejs";

export default async function DashboardPage() {
  const session = await auth();

  // Get statistics
  const [totalMinutesResult, myTasksResult, pendingAgendaItemsResult, totalMembersResult] = await Promise.all([
    db`SELECT COUNT(*) as count FROM meeting_minutes`,
    db`SELECT COUNT(*) as count FROM tasks WHERE assigned_to = ${(session?.user as any)?.id} AND status != 'completed'`,
    db`SELECT COUNT(*) as count FROM agenda_items WHERE status = 'proposed'`,
    db`SELECT COUNT(*) as count FROM users`
  ]);

  const stats = {
    totalMinutes: totalMinutesResult[0],
    myTasks: myTasksResult[0],
    pendingAgendaItems: pendingAgendaItemsResult[0],
    totalMembers: totalMembersResult[0],
  };

  // Get recent tasks
  const recentTasks = await db`
    SELECT id, title, status, due_date, assigned_to_name
    FROM tasks
    WHERE assigned_to = ${(session?.user as any)?.id}
    ORDER BY created_at DESC
    LIMIT 5
  `;

  // Get recent meeting minutes
  const recentMinutes = await db`
    SELECT id, title, meeting_date
    FROM meeting_minutes
    ORDER BY meeting_date DESC
    LIMIT 5
  `;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {session?.user?.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Committee Management Dashboard
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meeting Minutes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMinutes.count}</div>
            <p className="text-xs text-muted-foreground">Total recorded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.myTasks.count}</div>
            <p className="text-xs text-muted-foreground">Active tasks assigned</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agenda Items</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingAgendaItems.count}</div>
            <p className="text-xs text-muted-foreground">Pending proposals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Committee Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMembers.count}</div>
            <p className="text-xs text-muted-foreground">Total members</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Content */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Recent Tasks</CardTitle>
            <CardDescription>Tasks assigned to you</CardDescription>
          </CardHeader>
          <CardContent>
            {recentTasks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No tasks assigned</p>
            ) : (
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <Link
                    key={task.id}
                    href={`/dashboard/tasks/${task.id}`}
                    className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{task.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Status: <span className="capitalize">{task.status}</span>
                          {task.due_date && ` • Due: ${new Date(task.due_date).toLocaleDateString()}`}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/dashboard/tasks"
                  className="block text-sm text-blue-600 hover:underline mt-2"
                >
                  View all tasks →
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Meeting Minutes</CardTitle>
            <CardDescription>Latest recorded meetings</CardDescription>
          </CardHeader>
          <CardContent>
            {recentMinutes.length === 0 ? (
              <p className="text-sm text-muted-foreground">No minutes recorded yet</p>
            ) : (
              <div className="space-y-3">
                {recentMinutes.map((minute) => (
                  <Link
                    key={minute.id}
                    href={`/dashboard/minutes/${minute.id}`}
                    className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <p className="font-medium text-sm">{minute.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(minute.meeting_date).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
                <Link
                  href="/dashboard/minutes"
                  className="block text-sm text-blue-600 hover:underline mt-2"
                >
                  View all minutes →
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
