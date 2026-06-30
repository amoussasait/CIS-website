"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, CheckSquare, Calendar, User, Trash2, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  due_date: string;
  assigned_to_name: string;
  assigned_to_name_db: string;
  created_by_name: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "in_progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  blocked: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const priorityColors: Record<string, string> = {
  low: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  medium: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, [statusFilter]);

  const fetchTasks = async () => {
    try {
      let url = "/api/tasks";
      if (statusFilter !== "all") {
        url += `?status=${statusFilter}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    }

    try {
      const response = await fetch(`/api/tasks/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Failed to delete task: ${errorData.error || 'Unknown error'}`);
        return;
      }

      // Successfully deleted - refresh the list
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Tasks & Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage committee tasks and assignments
          </p>
        </div>
        <Link href="/dashboard/tasks/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Input
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <CheckSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No tasks found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== "all" ? "Try adjusting your filters" : "Get started by creating your first task"}
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Link href="/dashboard/tasks/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredTasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <CardTitle className="text-xl">{task.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={statusColors[task.status]}>
                        {task.status.replace('_', ' ')}
                      </Badge>
                      <Badge className={priorityColors[task.priority]}>
                        {task.priority} priority
                      </Badge>
                    </div>
                    <CardDescription className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {(task.assigned_to_name || task.assigned_to_name_db) && (
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {task.assigned_to_name || task.assigned_to_name_db}
                        </span>
                      )}
                      {task.due_date && (
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due: {new Date(task.due_date).toLocaleDateString()}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/dashboard/tasks/${task.id}`}>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(task.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {task.description && (
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {task.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
